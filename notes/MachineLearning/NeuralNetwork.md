<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [机器学习：神经网络](./index.html)

[TOC]

## 相关概念

### 常见名词

- 人工神经网络（Artificial Neural Networks，ANN）
- 深度神经网络（Deep Neural Networks，DNN）
- 前馈神经网络（Feedforward Neural Networks，FNN）
- 误差逆传播（Error Back Propagation）

### MP神经元

![MP](./images/nn_mp.png)

现在人工神经元与MP神经元基本相同，主要区别在于MP神经元的$f$是一个仅能取$0$或$1$的越阶函数。

### 人工神经元（Artificial Neuron）

$$y = f(wx + b)$$

- $f$：激活函数
- $w$：权重
- $b$：偏置

### 常见激活函数

- $\mathrm{Sigmoid}(x) = \dfrac{1}{1 + e^{-x}}$
- $\mathrm{Tanh}(x) = \dfrac{e^{x} - e^{-x}}{e^{x} + e^{-x}}$
- $\mathrm{ReLU}(x) = \max(x, 0)$
- $\mathrm{Leaky ReLU}(x) = \begin{cases}
        x   & x≥0
    \\  αx  & x<0
    \end{cases}$
- $\mathrm{ELU}(x) = \begin{cases}
        x           & x≥0
    \\  α(e^x-1)    & x<0
    \end{cases}$
- $
    \mathrm{Softmax}\left(
        \left[\begin{array}{c}
            x_1 \\ x_2 \\ \vdots \\ x_n
        \end{array}\right]
    \right)
    = \dfrac{1}{\sum_{i=1}^{n}e^{x_i}} \left[\begin{array}{c}
        e^{x_1} \\ e^{x_2} \\ \vdots \\ e^{x_n}
    \end{array}\right]
$

```py
from matplotlib import pyplot as plt
import numpy as np

x = np.linspace(-10, 10)
y_sigmoid = 1 / (1 + np.exp(-x))
y_tanh = (np.exp(x) - np.exp(-x)) / (np.exp(x) + np.exp(-x))
y_relu = np.array([0 if item < 0 else item for item in x])
alpha_relu = 0.2
y_leaky_relu = np.array([alpha_relu * item if item < 0 else item for item in x])
alpha_elu = 0.9
y_elu = np.array([alpha_elu*(np.exp(item)-1) if item < 0 else item for item in x])

plt.figure(dpi=600)

plt.plot(x, 8+y_sigmoid, label='Sigmoid (+8)')
plt.plot(x, 6+y_tanh, label='Tanh (+6)')
plt.plot(x, 4+y_relu, label='Relu (+4)')
plt.plot(x, 2+y_leaky_relu, label=f'Leaky Relu (+2), α={alpha_relu}')
plt.plot(x, 0+y_elu, label=f'Elu (+0), α={alpha_elu}')

plt.grid()
plt.legend()
plt.show()
```

![activation](images/nn_activation.png)


## 基本神经网络

### 感知机（Perceptron）

由两层神经元组成，输出层是M-P神经元，仅有输出层神经元进行激活函数处理。

![](./images/nn_perceptron.png)

感知机模型仅能解决一个线性可划分问题，所以感知机模型不能解决异或问题。

![](./images/nn_LinearlySeparable.png)

### 隐藏层

输入层与输出层之间的一层神经元称为**隐藏层（隐含层，Hidden Layer）**。隐藏层和输出层都有激活函数处理。

![](./images/nn_HiddenLayer.png)

以上多层神经网络可以解决异或问题。

### 多层感知器（MLP，Multilayer Perceptron）

>多层前馈神经网络（Multi-layer Feedforward Neural）

![](./images/nn_network.png)

## 误差逆传播（errorBackPropagation）

BP算法基于梯度下降（Gradient Descent）策略，以目标的负梯度方向对参数进行调整。

$$Δw_{hj} = -η\dfrac{∂E_k}{∂w_{hj}}$$

- $η$：学习率，$η∈(0,1)$，过大时容易发生震荡
- $E_k$：第$k$轮训练后的均方误差
- $w_{hj}$：上一层第$h$个神经元与下一层第$j$个神经元的连接权

### 工作流程

<!-- 
    tf.truncated_normal_initializer(stddev=1)
    tf.constant_initializer(0)
-->

```flow
st=>start: 开始
init=>operation: 初始化权重和偏置
input=>inputoutput: 输入：训练集、学习率
sub1=>operation: 前向传播：计算输出值、误差
sub2=>operation: 反向传播：计算梯度顶，更新权重和偏置
isend=>condition: 满足训练次数 Or 满足正确率
output=>inputoutput:  输出：权重和偏置
ed=>end: 结束

st->init->input
input->sub1->isend
isend(no)->sub2->sub1
isend(yes)->output->ed
```

## 最小值

在使用梯度下降法进行搜索时，很可能我们得到的是一个局部极小值。

![](./images/nn_minimum.png)

一些常见的跳出局部极小值的方法

- 使用不同参数值初始化多个神经网络，取其中误差最小的解作为最终参数。
- **模拟退火技术**：每一步都有一定的概率接受次优解，随着步数增加该概率逐渐下降。
- **随机梯度下降**：计算梯度时加入随机因素，即便陷入局部极小点，其计算梯度的梯度值也不为0，使其有可能跳出继续搜索。

