# !/usr/bin/python
# -*- coding: utf-8 -*-
# @time    : 2020/5/13 21:11
# @author  : Mo
# @function: test preprocess of xy of macadam


# 适配linux
import sys
import os
path_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
sys.path.append(path_root)
# 地址, tf.keras
from macadam.conf.path_config import path_root, path_ner_people_1998, path_ner_clue_2020
from macadam.conf.constant_params import SL, TC, RE, CLS, SEP, MASK, PAD, UNK
from macadam.base.preprocess import ListPrerocessXY, FilePrerocessXY, ListPrerocessXY, FileGenerator
from macadam.base.utils import txt_write, txt_read
from macadam.base.embedding import embedding_map
from macadam.conf.logger_config import logger
from macadam.sl.s00_map import graph_map
from macadam import keras, K, O, C, L, M
# 计算时间
import time
import json


def preprocess(path_model_dir, path_embed, path_train, path_dev,
            path_checkpoint, path_config, path_vocab,
            network_type="CRF", embed_type="BERT",
            token_type="CHAR", task="SL",
            is_length_max=False, use_onehot=False, use_file=False,
            layer_idx=[-1], length_max=128, embed_size=768,
            learning_rate=5e-5, batch_size=32, epochs=20, early_stop=3,
            decay_rate=0.999, decay_step=1000, rate=1.0,
            ):
    """
    train model of sequence labeling
    Args:
        path_model_dir: str, directory of model save, eg. "/home/model/text_cnn"
        path_embed: str, directory of pre-train embedding, eg. "/home/embedding/bert"
        path_train: str, path of file(json) of train data, eg. "/home/data/name_entity_recognition/people_1998/train.json"
        path_dev: str, path of file(json) of dev data, eg. "/home/data/name_entity_recognition/people_1998/dev.json"
        path_checkpoint: str, path of checkpoint file of pre-train embedding
        path_config: str, path of config file of pre-train embedding
        path_vocab: str, path of vocab file of pre-train embedding
        network_type: str, network of text-classification, eg."FastText","TextCNN", "BiRNN", "RCNN", "CRNN", "SelfAttention" 
        embed_type: str, type of pre-train enbedding, eg. "Bert", "Albert", "Roberta", "Electra"
        task: str, task of model, eg. "sl"(sequence-labeling), "tc"(text-classification), "re"(relation-extraction)
        is_length_max: bool, whether update length_max with analysis corpus, eg.False 
        use_onehot: bool, whether use onehot of y(label), eg.False 
        use_file:   bool, use ListPrerocessXY or FilePrerocessXY
        layer_idx: List[int], layers which you select of bert-like model, eg.[-2]
        length_max: int, max length of sequence, eg.128 
        embed_size: int, dim of bert-like model, eg.768
        learning_rate: float, lr of training, eg.1e-3, 5e-5
        batch_size: int, samples each step when training, eg.32 
        epochs: int, max epoch of training, eg.20
        early_stop: int, stop training when metrice not insreasing, eg.3
        decay_rate: float, decay rate of lr, eg.0.999 
        decay_step: decay step of training, eg.1000
    Returns:
        None
    """
    # 获取embed和graph的类
    Embedding = embedding_map[embed_type.upper()]
    Graph = graph_map[network_type.upper()]

    # 删除先前存在的模型/embedding微调模型等
    time_start = time.time()
    # bert-embedding/graph等重要参数配置
    params = {"embed": {"path_embed": path_embed,
                        "layer_idx": layer_idx,
                        },
              "sharing": {"length_max": length_max,
                          "embed_size": embed_size,
                          "token_type": token_type.upper(),
                          },
              "graph":{"loss": "categorical_crossentropy" if use_onehot
                                                          else "sparse_categorical_crossentropy", # 损失函数
                       "use_onehot": use_onehot, # label标签是否使用独热编码
                       "use_crf": False if network_type in ["BI-LSTM-LAN"]
                                        else True,  # 是否使用CRF, 是否存储trans(状态转移矩阵时用)
                       },
              "train": {"learning_rate": learning_rate,  # 学习率, 必调参数, 对训练影响较大, word2vec一般设置1e-3, bert设置5e-5或2e-5
                        "decay_rate": decay_rate,  # 学习率衰减系数, 即乘法, lr = lr * rate
                        "decay_step": decay_step,  # 学习率每step步衰减, 每N个step衰减一次
                        "batch_size": batch_size,  # 批处理尺寸, 设置过小会造成收敛困难、陷入局部最小值或震荡, 设置过大会造成泛化能力降低
                        "early_stop": early_stop,  # 早停, N个轮次(epcoh)评估指标(metrics)不增长就停止训练
                        "epochs": epochs,  # 训练最大轮次, 即最多训练N轮
                        },
              "save": {
                  "path_model_dir": path_model_dir,  # 模型目录, loss降低则保存的依据, save_best_only=True, save_weights_only=True
                  "path_model_info": os.path.join(path_model_dir, "model_info.json"),  # 超参数文件地址
              },
              "data": {"train_data": path_train,  # 训练数据
                       "val_data": path_dev  # 验证数据
                       },
              }
    embed = Embedding(params)
    embed.build_embedding(path_checkpoint=path_checkpoint,
                          path_config=path_config,
                          path_vocab=path_vocab)
    # 模型graph初始化
    graph = Graph(params)
    # 数据预处理类初始化, 1. is_length_max: 是否指定最大序列长度, 如果不指定则根据语料智能选择length_max.
    #                  2. use_file: 输入List迭代或是输入path_file迭代.
    if use_file:
        train_data = path_train
        dev_data = path_dev
        pxy = FilePrerocessXY(embedding=embed, path=path_train, path_dir=path_model_dir,
                              length_max=length_max if is_length_max else None,
                              use_onehot=use_onehot, embed_type=embed_type, task=task)
        from macadam.base.preprocess import FileGenerator as generator_xy
        logger.info("强制使用序列最大长度为{0}, 即文本最大截断或padding长度".format(length_max))
    else:
        # 训练/验证数据读取, 每行一个json格式, example: {"x":{"text":"你是谁", "texts2":["你是谁呀", "是不是"]}, "y":"YES"}
        train_data = txt_read(path_train)
        dev_data = txt_read(path_dev)
        # 只有ListPrerocessXY才支持rate(data), 训练比率
        len_train_rate = int(len(train_data) * rate)
        len_dev_rate = int(len(dev_data) * rate)
        train_data = train_data[:len_train_rate]
        dev_data = dev_data[:len_dev_rate]
        pxy = ListPrerocessXY(embedding=embed, data=train_data, path_dir=path_model_dir,
                              length_max=length_max if is_length_max else None,
                              use_onehot=use_onehot, embed_type=embed_type, task=task)
        from macadam.base.preprocess import ListGenerator as generator_xy
        logger.info("强制使用序列最大长度为{0}, 即文本最大截断或padding长度".format(length_max))
    logger.info("预处理类初始化完成")
    # pxy.init_params(train_data)
    graph.length_max = pxy.length_max
    graph.label = len(pxy.l2i)

    # length_max更新, ListPrerocessXY的embedding更新
    if length_max != graph.length_max and not is_length_max:
        logger.info("根据语料自动确认序列最大长度为{0}, 且bert-embedding等的最大长度不大于512".format(graph.length_max))
        params["sharing"]["length_max"] = graph.length_max
        embed = Embedding(params)
        embed.build_embedding(path_checkpoint=path_checkpoint,
                              path_config=path_config,
                              path_vocab=path_vocab)
        pxy.embedding = embed

    logger.info("预训练模型加载完成")
    if use_file:
        len_train = pxy.analysis_len_data(train_data)
        gxy = generator_xy(dev_data, pxy,
                           batch_size=batch_size, len_data=len_train)
        gxy.forfit()
    else:
        # batch_x, batch_y, preprocess
        batch_x_idx, batch_y_idx = [], []
        len_x_y_id = set()
        for td in train_data:
            line_json = json.loads(td)
            # line_json = {"x": {"text": "“旧货”不仅仅是指新货被使用才成为旧货；还包括商品的调剂，即卖出旧货的人是为了买入新货，买入旧货的人是因为符合自己的需要，不管新旧；有的商店还包括一些高档的工艺品、古董、字画、家具等商品；有的还包括新货卖不出去，企业或店主为了盘活资金，削价销售积压产品。", "texts2": []}, "y": ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"]}
            x_id = pxy.preprocess_x(line_json.get("x"))
            y_id = pxy.preprocess_y(line_json.get("y"))
            len_x_id_0 = len(x_id[0])
            len_x_id_1 = len(x_id[1])
            len_y_id = len(y_id)
            if len_x_id_0 not in len_x_y_id:
                print(line_json)
                print(len_x_id_0)
                mm = 0
                len_x_y_id.add(len_x_id_0)
            if len_x_id_1 not in len_x_y_id:
                print(line_json)
                print(len_x_id_1)
                mm = 0
            if len_y_id not in len_x_y_id:
                print(line_json)
                print(len_y_id)
                mm = 0
            batch_x_idx.append(x_id)
            batch_y_idx.append(y_id)
    logger.info("训练完成, 耗时:" + str(time.time()-time_start))


if __name__=="__main__":
    # cpu-gpu与tf.keras
    os.environ["CUDA_VISIBLE_DEVICES"] = "0"
    os.environ["TF_KERAS"] = "1"

    # bert-embedding地址, 必传
    path_embed = "D:/soft_install/dataset/bert-model/chinese_L-12_H-768_A-12"
    path_checkpoint = path_embed + "/bert_model.ckpt"
    path_config = path_embed + "/bert_config.json"
    path_vocab = path_embed + "/vocab.txt"

    # 训练/验证数据地址
    path_train = os.path.join(path_ner_people_1998, "train.json")
    path_dev = os.path.join(path_ner_people_1998, "dev.json")
    # 网络结构
    # "CRF", "Bi-LSTM-CRF", "Bi-LSTM-LAN", "LSTM-CNNs", "LATTICE-LSTM-BATCH"
    network_type = "BI-LSTM-LAN"
    embed_type = "Bert"
    token_type = "char"
    task = "SL"
    # 模型保存目录, 如果不存在则创建
    path_model_dir = os.path.join(path_root, "data", "model", f"{network_type}_2020")
    if not os.path.exists(path_model_dir):
        os.mkdir(path_model_dir)
    # 模型保存目录, 如果不存在则创建
    path_model_dir = os.path.join(path_root, "data", "model", f"{network_type}_2020")
    if not os.path.exists(path_model_dir):
        os.mkdir(path_model_dir)
    # 开始训练
    preprocess(path_model_dir, path_embed, path_train, path_dev,
               path_checkpoint, path_config, path_vocab,
               network_type=network_type, embed_type=embed_type,
               task=task, token_type=token_type,
               is_length_max=True, use_onehot=False, use_file=False,  # use_file=False or True
               layer_idx=[-1], learning_rate=5e-5,
               batch_size=64, epochs=6, early_stop=6, rate=0.0001)
    mm = 0
