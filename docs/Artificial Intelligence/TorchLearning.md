# 动手学深度学习

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
print(y.mT)
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
```python

```
