<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>
<!-- http://colah.github.io/posts/2015-08-Understanding-LSTMs/ -->

# [机器学习：RNN](./index.html)

[TOC]

## 初识循环神经网络

人类不会每秒都从头开始思考！

循环神经网络会记忆之前的信息，并利用之前的信息影响后面结点的输出。也就是说，循环神经网络的隐藏层之间的结点是有连接的。

<div style='text-align: center'>

![递归神经网络具有循环](./images/rnn_rolled.png)
<span class='highlight'>*隐藏层的输入，不仅包括输入层的输出，
还包括上一时刻隐藏层的输出*</span>
</div>

需要特别注意的是，RNN的隐藏层并不和传统的前馈神经网络具有相同的含义，在上图中，A即为RNN的隐藏层。

### 隐藏层展开

![展开的递归神经网络](./images/rnn_unrolled.png)

循环神经网络的隐藏层可以看作是同一网络的多个副本，每个副本都将消息传递给后继者。在神经网络逻辑中，上图其实只有左侧部分，其展开可理解为在不同时间（**time step**）下同一隐层（**cell**）的状态，明显它们是参数共享的。

### 循环体

循环神经网络可以看作是同一神经网络结构在时间序列上被复制多次的结果，这个被复制多次的结构被称之为**循环体**。

如何设计循环体的网络结构是循环神经网络解决实际问题的关键。

<div style='text-align: center'>

![标准RNN重复模块结构](./images/rnn_simple.png)
*在标准RNN中，此重复模块将具有非常简单的结构（tanh层）*
</div>

### 缺陷

有时，我们只需要查看最新信息即可执行当前任务。

![短期依赖](./images/rnn_shorttermdepdencies.png)

但是在某些情况下，我们需要更多的上下文。不幸的是，随着差距的扩大，RNN变得无法学习连接信息。

![长期依赖](./images/rnn_longtermdependencies.png)

## LSTM

>[Understanding-LSTMs](https://colah.github.io/posts/2015-08-Understanding-LSTMs/)

>- $σ$：激活函数 $\mathrm{Sigmoid}(x) = \frac{1}{1 + e^{-x}}$
>- $tanh$：激活函数 $\mathrm{Tanh}(x) = \frac{e^{x} - e^{-x}}{e^{x} + e^{-x}}$
>- $⊗$：输入部分相乘
>- $⊕$：输入部分相加

长短期记忆网络（LSTM）是一种特殊的RNN，能够学习长期依赖关系。

![LSTM](./images/rnn_lstm_chain.png)

```mermaid
graph LR
h1_t-1["h_(t-1)"]
x1_t["X_(t)"]
c1_t-1["C_(t-1)"]
stake11(("·"))
input11[input1]
input12[input2]

h1_t-1-->stake11
x1_t-->stake11
c1_t-1-->input12
stake11-->input11

subgraph Cell
    f1_t["f_(t)"]
    i1_t["i_(t)"]
    cc1_t["C~_(t)"]
    o1_t["o_(t)"]
    c1_t["C_(t)"]
    h1_t["h_(t)"]

    input11--Sigmod-->f1_t
    input11--Sigmod-->i1_t
    input11--Tanh-->cc1_t
    input11--Sigmod-->o1_t

    mul11(("×"))
    mul12(("×"))
    mul13(("×"))
    add11(("+"))

    input12-->mul11
    f1_t-->mul11
    i1_t-->mul12
    cc1_t-->mul12
    mul11-->add11
    mul12-->add11
    add11-->c1_t

    c1_t--Tanh-->mul13
    o1_t-->mul13
    mul13-->h1_t
end

h1_t-->output11["output1"]
c1_t-->output12["output2"]

```

&nbsp;

```mermaid
graph TB
g1(("·"))---note1["属性合并"]
g2(("+"))---note2["矩阵加法"]
g3(("×"))---note3["矩阵乘法"]
```

### 单元数量（num units）

即指$h(t)$的维数。

### 单元状态

单元状态有点像传送带。它沿整个链条一直沿直线移动，只有一些较小的线性相互作用。信息非常容易就可以不加改变地流动。

![单元状态](./images/rnn_lstm_C-line.png)

### 闸门

LSTM有删除信息或将信息添加到单元状态的能力，这些信息由称为门的结构精心调节。

<div style='text-align: center'>

![闸门](./images/rnn_lstm_gate.png)
*门状结构*
</div>

闸门是一种选择性地让信息通过的方式。其有以下三种门。

#### 忘记门

LSTM的第一步是决定要从单元状态中丢弃哪些信息。

![](./images/rnn_lstm_focus-f.png)

#### 输入门

下一步是确定要在单元状态下存储哪些新信息。包含两部分，第一路（σ）决定更新哪些值，第二路（tanh）新建候选值向量并添加到状态中。

![输入门](./images/rnn_lstm_focus-i.png)

##### 更新旧单元状态

将单元旧状态与$f_t$相乘，然后加上$i_t × \tilde{C}_t$生成新的候选值。

![更新旧单元状态](./images/rnn_lstm_focus-C.png)

#### 输出门

最后，我们需要决定要输出的内容。

![输出门](./images/rnn_lstm_focus-o.png)

### LSTM变体

由[Gers & Schmidhuber (2000)](ftp://ftp.idsia.ch/pub/juergen/TimeCount-IJCNN2000.pdf)提出，可以让**Gate Layers**查看单元状态。

![](./images/rnn_lstm_var_peepholes.png)

使用耦合的**忘记门**和**输入门**。

![](./images/rnn_lstm_var_tied.png)

由[Cho, et al. (2014).](http://arxiv.org/pdf/1406.1078v3.pdf)提出的门控循环单元，将**忘记门**和**输入门**合并为**更新门**，此外还合并了单元状态和隐藏状态。

![](./images/rnn_lstm_var_GRU.png)
