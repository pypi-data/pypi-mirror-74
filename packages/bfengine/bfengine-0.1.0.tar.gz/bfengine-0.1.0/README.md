# 机器人工厂引擎
>>>

## 目录
* [安装方式](#安装方式)
* [使用方式](#使用方式)
---
提供的功能有:
* 创建BOT
* 问答管理
* 知识图谱
* 任务引擎
---

## 安装方式
pip安装
```shell
pip install -U bfengine
```
如果比较慢，可以使用清华的pip源：-i https://pypi.tuna.tsinghua.edu.cn/simple

## 使用方式
1.加载BF引擎
```
import bf_engine

result = bf_engine.init() #加载BF引擎
```

2.使用BF引擎
```python3
import bf_engine

bot    = bf_engine.create_bot() # 机器人创建

bot.qa.train(question_path='data/问答上传模板.xlsx',
             corpus_path='data/语料上传模板.xlsx')   #  训练QA
print('qa出话: ' + bot.qa.query('你好').text)       #  QA 测试

bot.kg.train(data_path='data/kg语料.json'))        # 训练KG
print('kg出话: ' + bot.kg.query('竹间的地址').text) #  KG 测试

result = bot.stop()

```
