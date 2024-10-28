# 动手学深度学习

### 概念

- 超参数：可以调整，但不在训练过程中更新的参数

## 张量处理

### 初始化

```python
torch.ones((2, 3, 4))
torch.zeros((2, 3, 4))
torch.rand(3, 4) # 形状为(3, 4)， 元素从均值为0，标准差为1
torch.arange(12) # [0, 12)
的正态分布中随机采样
```

### 运算

合并
```python
x = torch.arange(12, dtype=torch.float32).reshape((3,4))
y = torch.tensor([[2.0, 1, 4, 3], [1, 2, 3, 4], [4, 3, 2, 1]])
x = torch.cat((x, y), dim=0) # 变成(6, 4)
x = torch.cat((x, y), dim=1) # 变成(3, 8)
```

布尔判断
```python
x == y
```

广播机制
```python
# 满足相等，或其中一个为1，或其中一个不存在
x = torch.arange(3).reshape((1, 3))
y = torch.arange(2).reshape((2, 1))
output: tensor([[0, 1, 2], [1, 2, 3]]) torch.Size([2, 3])
```
切片
```python
x = torch.arange(12, dtype=torch.float32).reshape((3,4))
print(x[1:3, 2:4]) # dim0:[1, 3), dim1:[2, 4) size: (2, 2)
```

转置
```python
y = torch.arange(12).reshape((2, 3, 2))
print(y)
print(y.mT) # 倒数一二维交换
print(y.transport(dim0, dim1)) # 第dim0+1和dim1+1维交换
```

Hadamard积“⊙”（按元素乘法）
```python
A * B
```

降维
```python
sum = A.sum(axis=i)
```

点积
$x^Ty或<x,y>$
```python
z = torch.dot(x, y)
z = torch.sum(x * y)
```

矩阵乘法
```python
A = torch.arange(15).reshape(5, 4)
B = torch.ones(4, 3)
C = torch.mm(A, B)
```

### 范数

#### $L_p范数$
$∥x∥_p=(\displaystyle\sum_{i=1}^{n}|x_i|^p)^\frac{1}{p}$

#### Frobenius范数
矩阵元素平方和的平方根
$∥x∥_F=\sqrt{\displaystyle\sum_{i=1}^m\displaystyle\sum_{j=1}^nx_{ij}^2}$
```python
torch.norm(torch.ones((4, 9)))
```

### 自动微分

#### 非标量变量的反向传播
```python
x = torch.arange(15.0, requires_grad=True)
y = 2 * torch.sin(x)
direction = torch.ones_like(x) # 求导方向
y.backward(direction) # 等价与：y.sum().backward()
print(x.grad == 2 * torch.cos(y))
```

#### 分离计算
将参数作为常数
```python
x.grad.zero_()
y = x * x
u = y.detach()
z = u * x
z.sum().backward()
print(x.grad == u)
```

### 概率
#### 抽样
```python
fair_probs = torch.ones(6) / 6
print(multinomial.Multinomial(100, fair_probs).sample((10, 20)))
# 从概率分布"fair_probs"中抽100次，分10大组，每大组20小组
```

---

## 线性神经网络

### 随机梯度下降

每次迭代是随机取一部分作为参考样本，用参考样本修正模型参数
$(\bold{w}, b) \larr (\bold{w},b)-\frac{\eta}{|\Beta|}\displaystyle\sum_{i\in\Beta}\partial_{(\bold{w},b)}l^{(i)}(\bold{w},b)$

### 极大似然估计

$P(\bold{y}|\bold{X})=\displaystyle\prod_{i=1}^np(y^{(i)}|\bold{x}^{(i)})$


### 基础构架

```python

def synthetic_data(w, b, num_samples):
    # 合成数据用于试验
def data_iter(batch_size, x, y):
    # 将数据分成几批次
def model(x, w, b):
    # 假设模型
def loss(hat_y, y):
    # 量化模型结果和实际的差别
def sgd(params, lr, batch_size):
    # 参数的调整方法
```

### Torch架构

```python
layer = nn.Linear(2, 1) # 全连接层
net = nn.Sequential(layer) # Sequential是torch的架构，作用是将层给串联起来。
```

## Softmax

```python
def init_weights(m):
    if type(m) == nn.Linear:
        nn.init.normal_(m.weight, 0, 0.01)

net = nn.Sequential(nn.Flatten(), nn.Linear(28 * 28, 10)) # nn.Flatten()：将(28,28)展平为一维
net.apply(init_weights)
```

## Dropout And Relu

```python
net = nn.Sequential(
    nn.Flatten(),
    nn.Linear(28 * 28, 256),
    nn.ReLU(),
    nn.Dropout(0.5),
    nn.Linear(256, 256),
    nn.ReLU(),
    nn.Dropout(0.2),
    nn.Linear(256, 10),
)
```

### 模型问题

### 过拟合
### 欠拟合
### 参数对称性
### 梯度消失
### 梯度爆炸
### 协变量偏移


## 循环神经网络

循环神经网络通过引入状态变量存储过去的信息和当前的输入，从而可以以确定当前的输出

### 马尔可夫模型

使用$x_{t-1},\cdots,x_{t-\tau}$估计$x_t$ \
当$\tau=1$时 \
$P(x_1,\cdots,x_T)=\displaystyle\prod_{t=1}^TP(x_t|x_{t-1})当P(x_1|x_0)=P(x_1)$

### 齐普夫定律
第i个最常用的单词频率$n_i$为：\
$n_i\propto \frac{1}{i^\alpha}$

### 架构
input: (batch_size, num_inputs)
w_xh: (num_input, num_hidden)
w_hh: (num_hidden, num_hidden)
w_hq: (num_hidden, num_outputs)

### 数学原理

梯度计算公式：\
设有我们有三个序列：$\{a_t\},\{b_t\},\{c_t\}$
序列满足：$a_0=0, a_t=b_t+c_ta_{t-1}$
对于$t>=1$，有$a_t=b_t+\displaystyle\sum_{i=1}^{t-1}(\displaystyle\prod_{j=i+1}^tc_j)b_i$

$$
h_t = f(x_t, h_{t-1}, w_h) \\ 
o_t = g(h_t, w_o) \\
L(x_1,\dots,x_T,y_1,\dots,y_T,w_h,w_o) = \frac{1}{T}\displaystyle\sum_{t=1}^tl(y_t,o_t) \\
\frac{\partial{h_t}}{\partial{w_h}}=\frac{\partial{f(x_t,h_{t-1},w_h)}}{\partial{w_h}} + \frac{\partial{f(x_t,h_{t-1},w_h)}}{\partial{h_{t-1}}}\frac{\partial{h_{t-1}}}{\partial{w_h}} \\
完全计算：\frac{\partial{h_{t-1}}}{\partial{w_h}}=\displaystyle\sum_{i=1}^{t-1}(\displaystyle\prod_{j=i+1}^t\frac{\partial{f(x_j, h_{j-1},w_h)}}{\partial{w_h}}) \\
截断时间步：\frac{\partial{h_{t-1}}}{\partial{w_h}}=
\\
$$
