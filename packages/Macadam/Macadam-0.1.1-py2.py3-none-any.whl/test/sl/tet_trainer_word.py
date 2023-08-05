# !/usr/bin/python
# -*- coding: utf-8 -*-
# @time    : 2020/5/8 21:33
# @author  : Mo
# @function: test trainer


# 适配linux
import sys
import os
path_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
sys.path.append(path_root)
# cpu-gpu与tf.keras
os.environ["CUDA_VISIBLE_DEVICES"] = "1"
os.environ["TF_KERAS"] = "1"
# macadam
from macadam.conf.path_config import path_root, path_ner_people_1998, path_ner_clue_2020, path_embed_word2vec_char
from macadam.sl import trainer
import os


if __name__=="__main__":

    # bert-embedding地址, 必传
    # path_embed = "D:/soft_install/dataset/word_embedding/sgns.wiki.word"
    path_embed = "D:/soft_install/dataset/bert-model/chinese_L-12_H-768_A-12"
    path_checkpoint = path_embed + "/bert_model.ckpt"
    path_config = path_embed + "/bert_config.json"
    path_vocab = path_embed + "/vocab.txt"

    # 训练/验证数据地址
    # path_train = os.path.join(path_ner_people_1998, "train.json")
    # path_dev = os.path.join(path_ner_people_1998, "dev.json")
    path_train = os.path.join(path_ner_clue_2020, "ner_clue_2020.train")
    path_dev = os.path.join(path_ner_clue_2020, "ner_clue_2020.dev")

    # 网络结构, 嵌入模型, 大小写都可以
    # 网络模型架构(Graph), # "CRF", "Bi-LSTM-CRF", "Bi-LSTM-LAN", "CNN-LSTM", "DGCNN", "LATTICE-LSTM-BATCH"
    network_type = "Bi-LSTM-CRF"
    # 嵌入(embedding)类型, "ROOBERTA", "ELECTRA", "RANDOM", "ALBERT", "XLNET", "NEZHA", "GPT2", "WORD", "BERT"
    embed_type = "BERT"
    # token级别, 一般为"CHAR", 只有random和word的embedding时存在"word"
    token_type = "CHAR"
    # 任务, "TC", "SL", "RE"
    task = "SL"
    # 模型保存目录
    path_model_dir = os.path.join(path_root, "data", "model", network_type)
    # 开始训练, 可能前几轮loss较大acc较低, 后边会好起来
    trainer(path_model_dir, path_embed, path_train, path_dev, path_checkpoint, path_config, path_vocab,
            network_type=network_type, embed_type=embed_type, token_type=token_type, task=task,
            is_length_max=False, use_onehot=False, use_file=False, use_crf=True,
            embed_size=300, layer_idx=[-2], learning_rate=5e-5, batch_size=16,
            epochs=32, early_stop=6, rate=1)
    mm = 0

