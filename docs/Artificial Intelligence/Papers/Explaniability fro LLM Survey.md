## 术语

- Explainability(Interpretability): the ability to explain or present the behavior of models in human-understandable terms
[Towards A Rigorous Science of Interpretable Machine Learning](https://arxiv.org/abs/1702.08608)

- post-hoc: 因果的
- paradigm: 特定的方法论或实践框架

## 解释方向

- Traditional Fine-Tuning Paradigm: 1. 理解自监督下的预训练如何使模型得到基础（语言）理解, 2.分析微调如何让原来的预训练模型获得新任务的解决方法。

- Prompting Paradigm:
  - Base Model: 解释模型使如何利用训练数据去理解prompts的
  - Assistant Model：解释模型如何从对话中，理解人类交互的原理