# coding=utf-8
# Some of structures or codes in this script are referenced from HuggingFace Inc. team. 

# Copyright 2018 The Google AI Language Team Authors and The HuggingFace Inc. team.
# Copyright (c) 2018, NVIDIA CORPORATION.  All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
'''屬性情感分類的預測相關程式'''

import logging
import os,sys
import numpy as np
import torch
from torch.utils.data import DataLoader, SequentialSampler, TensorDataset , DistributedSampler
import json
from tqdm import tqdm

from transformers import (
    BertTokenizer,  
)

from .model_structure import MyNewBertForTokenClassification  
from .utils import AspectProcessor, aspect_convert_examples_to_features as convert_examples_to_features, tag2ot, tag2ts, evaluate_ote, evaluate_ts, ASPECT_LABEL_MAP, SENTIMENT_LABEL_MAP,split_text_from_input_data,get_toolkit_models


logger = logging.getLogger(__name__) 

ASPECT_CLASSIFICATION_MODEL = {
    'default' : '/pretrained_model/chinese_aspect_model',  #以本研究繼續預訓練模型進行微調後的最佳模型
    'open' : '/pretrained_model/chinese_aspect_model'      #以開源預訓練模型進行微調後的最佳模型  
}  

DEFAULT_ASPECT_CLASSIFICATION_TOKENZIER = 'bert-base-chinese' 


class AspectSentimentAnalysis:
    '''屬性情感分析的主要類別：使用提供的微調模型來預測給定句子的情感'''  
    
    def __init__(self,
                 model_name_or_path='default',
                 tokenizer=DEFAULT_ASPECT_CLASSIFICATION_TOKENZIER,
                 model_cache_folder_name='original',
                 no_cuda=False,
                 local_rank=-1,
                 logging_display=True
                ):  
        '''
        設定屬性情感分析相關參數：
        model_name_or_path : 用來預測屬性情感的模型，可以為放置模型的路徑、或是此工具所提供的模型名稱；默認為本工具提供的由繼續預訓練模型微調完畢的模型(參數值為"default")，如果想使用由開源預訓練模型所微調出的模型，參數值設為"open"
        tokenizer : 模型使用的tokenizer名稱，默認為"bert-base-chinese" 
        model_cache_folder_name : 存放本研究所開源模型的資料夾名稱，默認名稱為"original"，表示模型下載後存放於/pretrained_model/chinese_aspect_model/original資料夾中
        no_cuda : 是否避免使用gpu，默認"False"
        local_rank : 是否使用平行化運算，默認"-1"
        logging_display : 設置是否顯示logging，默認為"True"
        '''
        
        ### 匯入 tokenizer,model ###
        self.tokenizer = BertTokenizer.from_pretrained(tokenizer)
        
        if model_name_or_path in ASPECT_CLASSIFICATION_MODEL:
           ## 下載與解壓縮預設模型並存放於與預設模型同一資料夾 ##
            model_paths = os.path.split(os.path.realpath(__file__))[0] + ASPECT_CLASSIFICATION_MODEL[model_name_or_path] + "/" + model_cache_folder_name #取得模型資料夾位置絕對路徑
            
            if not os.path.exists(model_paths):
                os.makedirs(model_paths)
                
            get_toolkit_models(model_paths,"aspect",model_name_or_path)
            self.model = MyNewBertForTokenClassification.from_pretrained(model_paths)
        else:
            self.model = MyNewBertForTokenClassification.from_pretrained(model_name_or_path)

        
        ### 設定 cpu,gpu ###
        self.local_rank = local_rank
        if self.local_rank == -1 or no_cuda:
            self.device = torch.device("cuda" if torch.cuda.is_available() and not no_cuda else "cpu")
            self.n_gpu = 0 if no_cuda else torch.cuda.device_count()
        else:
            torch.cuda.set_device(self.local_rank)
            self.device = torch.device("cuda", self.local_rank)
            torch.distributed.init_process_group(backend="nccl")
            self.n_gpu = 1
            
        self.model.to(self.device)

        ### 設定 logging ###
        self.logging_display = logging_display
        logging.basicConfig(
            format="%(asctime)s - %(levelname)s - %(name)s -   %(message)s",
            datefmt="%m/%d/%Y %H:%M:%S",
            level=logging.INFO if self.local_rank in [-1, 0] else logging.WARN,
        )   


    def _check_input_list(self,input_data_or_path):                                    
        '''檢查輸入資料(list)的格式'''
        
        data = []
        if type(input_data_or_path) != list:
            raise Exception("輸入資料型別錯誤！請重新確認！")
        elif len(input_data_or_path) == 0 :
            raise Exception("輸入資料大小為0！請重新確認！")
        else:
            data = input_data_or_path 
        return data

    
    def _check_input_tsv(self,input_data_or_path):                                    
        '''檢查輸入資料(tsv)的格式；並將tsv資料轉成list'''
        
        data = []
        
        try:
            if not os.path.isfile(input_data_or_path):
                raise Exception        
        except:
            raise Exception("輸入資料不存在或並非檔案格式！請重新確認！")
            
        processor = AspectProcessor()
        data = processor.get_test_examples_from_tsv(input_data_or_path)
        return data 
    

    def _read_input_list(self,input_data,output_dir=None,finish_word_seg=False,overwrite_cache=True):                             
        '''產生符合模型需求的資料格式'''
        
        ## 獲取examples和每句話要預測的字 ##
        processor = AspectProcessor()
        examples,all_data_words = processor.get_test_examples_from_list(input_data,finish_word_seg)
        
        if output_dir is not None: #表示有指定輸出路徑
            cached_features_file = os.path.join(
                output_dir,
                "cached_test",
            )
        else: #將路徑改成當前目錄
            cached_features_file = os.path.join(
                ".",
                "cached_test",
            )
        
        if os.path.exists(cached_features_file) and not overwrite_cache:
            if self.logging_display:
                logger.info("載入先前的 cache 檔案 %s", cached_features_file)
            features = torch.load(cached_features_file)
        else:    
            if self.logging_display:
                logger.info("創建 cache 檔案 %s", cached_features_file)
                
            ## 將資料轉成特徵 ##
            labels=processor.get_labels()
            features = convert_examples_to_features(
                examples,
                self.tokenizer,
                label_list=labels,
                max_length=128,
                pad_token=self.tokenizer.convert_tokens_to_ids([self.tokenizer.pad_token])[0],
                logging_display=self.logging_display,
            )  
            
            
            if self.local_rank in [-1, 0]:
                if self.logging_display:
                    logger.info("儲存 cache 檔案 %s", cached_features_file)
                torch.save(features, cached_features_file)
        
        ## 將特徵轉成tensors並建成Dataset ##
        all_input_ids = torch.tensor([f.input_ids for f in features], dtype=torch.long)
        all_attention_mask = torch.tensor([f.attention_mask for f in features], dtype=torch.long)
        all_token_type_ids = torch.tensor([f.token_type_ids for f in features], dtype=torch.long)
        
        all_evaluate_label_ids = [f.evaluate_label_ids for f in features]  #驗證或預測時會用到
        
        dataset = TensorDataset(all_input_ids, all_attention_mask, all_token_type_ids)
        
        return dataset , all_evaluate_label_ids , all_data_words
            
    
    def predict(self,
                input_data_or_path,
                input_mode="list",
                finish_word_seg=False,
                run_split=False,
                batch_size=8,
                output_mode="return_result",
                output_dir=None,          
                output_result="only_extraction",
                overwrite_cache=True,
               ):
        '''
        預測屬性與屬性情感的專用函數。(注意初始化class後，可傳入不同參數來重複呼叫此函數進行預測)
        參數包含：
        input_data_or_path : 輸入數據，和input_mode相關聯與對應，默認為輸入list型別  
        input_mode : 輸入模式選擇，分為"list"或"tsv"，默認"list"
        finish_word_seg : 每筆輸入數據中的每個字是否已經用空白隔開，默認"False"。如果為"True"，則程式處理輸入數據時會直接以split將每個字切開、並對切開後各字做屬性與情感預測；如果為"False"，則程式處理輸入數據時會直接以list方式來將句子內容切成字、並對這種方式所切出的各字做預測；通常如果輸入數據夾雜中英文，則建議輸入數據前先以空白隔開每個要標記的字、避免程式後續處理時標記範圍錯誤，至於如果輸入內容為全中文則直接以原始文本輸入即可
        run_split : 是否對每筆輸入資料執行斷句，默認"False"
        batch_size : 一次丟入多筆待預測資料到模型，默認"8"
        output_mode : 輸出模式選擇，分為"寫入檔案(json檔)+回傳預測變數(write_file)"或"單純回傳預測變數(return_result)"，默認"單純回傳預測變數(return_result)"
        output_dir : 輸出檔案路徑，可選參數
        output_result : 輸出內容選擇，分為"從標記結果提取屬性與情感(only_extraction)"或"原始序列標記結果(only_tags)"或"原始序列標記與提取後的結果皆回傳(all)"，默認為"從標記結果提取出屬性與情感(only_extraction)"
        overwrite_cache : 是否覆寫預測資料的cache檔案，默認為True，若要重複預測同樣的內容，可將此參數改為False，程式會讀取先前儲存的cache檔案
        '''

        if self.logging_display:
            all_vals = locals()
            del all_vals["self"]  #不須顯示此項
            logger.info("predict函數的所有參數： %s",all_vals)
            logger.info("開始讀取與檢查輸入數據！")
        
        if not input_data_or_path: #如果沒有任何值
            raise Exception("缺少輸入資料！請重新確認！")
        
        if input_mode == 'list':
            ### 檢查輸入資料格式 ###
            input_data = self._check_input_list(input_data_or_path)
        else:
            ### 檢查輸入資料格式，並獲得list格式的資料 ###
            input_data = self._check_input_tsv(input_data_or_path)    

            
        ## 依序處理每筆資料 ##
        all_data = [] #儲存所有要丟入模型的資料
        input_data_chg = []  #儲存每個句子對應的原始文本內容，這是給後面輸出時所用
        split_index = [] #儲存原本輸入文本所對應的累積句子數 (因為當輸入文本經過斷句後，可能一個輸入文本包含多個句子，為了方便後續作匯總情感，所以儲存這項) => e.g. 輸入文本有三個，斷句後分別有1,3,2個句子，則對應的 split_index 為[1,4,6]，到時要辨別的話，便是用0:1,1:4,4:6來取得
        current_counts = 0 #目前累積句子數
        
        for data in input_data: 
            ## 執行斷句 ##
            if run_split:
                sentences = split_text_from_input_data(data)  
            else:
                sentences = [data]
            
            sentences = [line for line in sentences if (len(line) > 0 and not line.isspace())] #去除整個句子中為空白的句子 
              
            all_data.extend(sentences)
            current_counts += len(sentences)
            split_index.append(current_counts)

            input_data_chg.extend([data] * len(sentences))
        
        try:
            assert len(all_data) == current_counts == len(input_data_chg)
        except:
            raise Exception("處理過程中發生錯誤！請聯繫開發者！")
        
        
        if self.logging_display:
            logger.info("原本的總輸入文本數目：%s",len(input_data))
            logger.info("處理後的總文本/句子數目：%s",current_counts)
        
        
        ## 將資料轉成模型需要的dataset & 獲取相關必要變數 ##  
        if self.logging_display:
            logger.info("開始處理輸入資料為模型需求格式！")
        test_dataset, all_evaluate_label_ids, all_data_words = self._read_input_list(all_data,output_dir,finish_word_seg, overwrite_cache)
        
        try:
            assert len(all_data) == len(all_evaluate_label_ids) == len(all_data_words)
        except:
            raise Exception("處理過程中發生錯誤！請聯繫開發者！")
        
            
        ## 實際跑模型獲得預測結果 ##
        test_batch_size = batch_size * max(1, self.n_gpu)
        test_sampler = SequentialSampler(test_dataset) if self.local_rank == -1 else DistributedSampler(test_dataset)
        test_dataloader = DataLoader(test_dataset, sampler=test_sampler, batch_size=test_batch_size)
        
        if self.n_gpu > 1:
            self.model = torch.nn.DataParallel(self.model)
        
        if self.logging_display:
            logger.info("***** 開始進行預測  *****")
            logger.info("  資料數量 = %d", len(test_dataset))
            logger.info("  Batch大小 = %d", test_batch_size)
        
        
        aspect_preds = None
        sentiment_preds = None
        
        for batch in tqdm(test_dataloader, desc="Predicting"):
            self.model.eval()
            batch = tuple(t.to(self.device) for t in batch)

            with torch.no_grad():
                inputs = {"input_ids": batch[0], "attention_mask": batch[1],"token_type_ids": batch[2]} #因為要預測，所以沒有labels
 
                outputs = self.model(**inputs)
                aspect_logits, sentiment_logits = outputs[:2]  #取得預測屬性和預測情感標記 (注意沒有labels所以不會回傳loss)   
            
            if aspect_preds is None: 
                aspect_preds = aspect_logits.detach().cpu().numpy()
                sentiment_preds = sentiment_logits.detach().cpu().numpy()
            else:
                aspect_preds = np.append(aspect_preds, aspect_logits.detach().cpu().numpy(), axis=0)
                sentiment_preds = np.append(sentiment_preds, sentiment_logits.detach().cpu().numpy(), axis=0)
        
        
        if self.logging_display:
            logger.info("已完成預測！開始整理預測結果！")
        
        ## 整理預測值(標記) ##
        aspect_preds = np.argmax(aspect_preds, axis=2)
        sentiment_preds = np.argmax(sentiment_preds, axis=2)
        
        aspect_preds_list = [[] for _ in range(aspect_preds.shape[0])]
        sentiment_preds_list = [[] for _ in range(sentiment_preds.shape[0])]
        absa_preds_list = [[] for _ in range(sentiment_preds.shape[0])]
        

        for i in range(aspect_preds.shape[0]): #句子總數
            evaluate_label_ids = all_evaluate_label_ids[i] #取得該句子中有效的位置索引
            for j in range(aspect_preds.shape[1]): #句子長度
                if j in evaluate_label_ids: 
                    asp_pred = ASPECT_LABEL_MAP[aspect_preds[i][j]]
                    sent_pred = SENTIMENT_LABEL_MAP[sentiment_preds[i][j]]

                    aspect_preds_list[i].append(asp_pred)
                    sentiment_preds_list[i].append(sent_pred)

                    # 將屬性標記和情感標記標籤結合
                    absa_preds_list[i].append(asp_pred+"-"+sent_pred)
        
    
        ## 從標記結果提取屬性/情感 (不會單獨取出情感) ##
        pred_aspect_extraction = [] #每個元素為一個list，會放置該句子提取出的屬性術語，如果該句子沒有預測任何屬性，則為空的list
        pred_absa_extraction = [] #每個元素為一個list，會放置該句子提取出的屬性術語+對應情感(tuple形式，如：("服務","POS"))
        for aspect_list,absa_list,text_list in zip(aspect_preds_list,absa_preds_list,all_data_words):  #對每個句子
            
            ot_sequence = tag2ot(aspect_list)
            ts_sequence = tag2ts(absa_list)
            
            cur_aspect = []
            for beg,end in ot_sequence:
                cur_aspect.append("".join(text_list[beg:end+1]))
            pred_aspect_extraction.append(cur_aspect)    
            
            cur_absa = []
            for beg,end,sentiment in ts_sequence:
                cur_absa.append(("".join(text_list[beg:end+1]),sentiment))
                
            pred_absa_extraction.append(cur_absa)    
            
        
        ## 整理要輸出或返回的預測結果 ##
        if output_result == 'only_extraction':
            # 每個元素都是一個list中包含多個list，每個子層list對應一個句子的字/提取出的結果
            pred_result = {"InputWords":all_data_words,"AspectTermExtraction":pred_aspect_extraction, "AspectTermAndSentimentExtraction":pred_absa_extraction}
            
        elif output_result == 'only_tags':
            # 每個元素都是一個list中包含多個list，每個子層list對應一個句子的字/預測的標記
            pred_result = {"InputWords":all_data_words ,"AspectTermTags":aspect_preds_list, "SentimentTags":sentiment_preds_list, "AspectTermAndSentimentTags":absa_preds_list}
            
        else:
            # 每個元素都是一個list中包含多個list，每個子層list對應一個句子的字/提取出的結果/預測標記
            pred_result = {"InputWords":all_data_words,"AspectTermExtraction":pred_aspect_extraction, "AspectTermAndSentimentExtraction":pred_absa_extraction, "AspectTermTags":aspect_preds_list, "SentimentTags":sentiment_preds_list, "AspectTermAndSentimentTags":absa_preds_list}

        # 額外新增各句子對應的原始文本，方便斷句版本的做比較與對應，其為一個list，list中包含每個輸入文本(string) 
        pred_result["OriInputs"] = input_data_chg
        
        
        ## 返回/寫入預測結果 ##    
        if output_mode == 'write_file':
            if output_dir is not None:
                output_test_predictions_file = os.path.join(output_dir,"predictions.json")
            else:
                output_test_predictions_file = "predictions.json"  #表示會放在與目前位置同一路徑
                
            if self.logging_display:
                logger.info("將預測結果寫入檔案 %s",output_test_predictions_file)
            
            # 以json方式寫入檔案 #
            with open(output_test_predictions_file, 'w') as f:
                json.dump(pred_result, f , ensure_ascii=False) #加入 ensure_ascii=False 避免亂碼 

        return pred_result  #不管哪種模式都會回傳預測結果的變數，使用者可以依據需求選擇是否使用 
        
        
        
            
            
        
          