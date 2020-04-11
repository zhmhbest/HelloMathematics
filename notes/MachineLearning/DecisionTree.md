<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [机器学习：决策树](./index.html)

[TOC]

## 相关定义

### 信息

- 非负性：不存在负信息量的事件。
- 单调性：单个事件概率越大，信息量越小。
- 累加性：各独立事件的信息量等于各事件信息量之和。

#### 信息量

$$\mathrm{Information}(x) = \log \dfrac{1}{p(x)} = -\log p(x)$$

$p(x)$表示某一事件其子情况发生的概率。$p(x)$越大，信息量越小。

#### 信息熵

$$\mathrm{Entropy}(X) = -\sum_{x∈X} p(x) ⋅ \log p(x)$$

$X$指某一事件，$x$遍历了其所有子情况，$p(x)$指某一子情况发生的概率。该值表达了事件$X$的不确定性，熵越大，不确定性越大。

信息熵亦是度量样本纯度地指标，该值越小，样本纯度越高，即样本中尽可能属于同一类别。

#### 条件熵

$$\mathrm{Entropy}(Y|X)
\begin{array}{l}
\\
\\  = \sum\limits_{x∈X} p(x) ⋅ \mathrm{Entropy}(Y|X=x) 
\\  = -\sum\limits_{x∈X} p(x) \sum\limits_{y∈Y} p(y|x) ⋅ \log p(y|x)
\end{array}$$

已知事件$X$的情况下求事件$Y$的不确定性。

### 信息增益

#### 增益值

$$\mathrm{Gain}(D, a) 
\begin{array}{l}
\\
\\  = \mathrm{Entropy}(D) - \mathrm{Entropy}(D|a)
\\  = \mathrm{Entropy}(D) - \sum\limits_{v=1}^{V} \dfrac{|D^v|}{|D|} \mathrm{Entropy}(D^v)
\end{array}
$$

- 属性$a$有$V$个可能的取值
- $D^v$包含了$D$中所有属性$a$上取值为$a^v$的样本。

信息增益越大，即使用该属性进行划分时，对纯度的提升越大。信息增益准则对可取值数目较多的属性有所偏好。

#### 增益率

$$\mathrm{GainRatio}(D, a) = \dfrac{\mathrm{Gain}(D, a)}{\mathrm{IV}(a)}$$

- 属性$a$有$V$个可能的取值
- $IV$：属性的固有值（Intrinsic Value），$IV(a) = -\sum\limits_{v=1}^{V} \dfrac{|D^v|}{|D|} \log_2 \dfrac{|D^v|}{|D|}$

增益率准则对可取值数目较少的属性有所偏好。

### 基尼

#### 基尼值

$$\mathrm{Gini}(D) = \sum_{k=1}^{n} \sum_{k'≠k} p_kp_{k'} = 1 - \sum_{k=1}^{n} {p_k}^2$$

- $n$：样本种类数

基尼值反映了从数据集中随机抽取两个样本，其类别标记不一致的概率。基尼值越小，数据集纯度越高。

#### 基尼指数

$$\mathrm{GiniIndex}(D, a) = \sum_{v=1}^{V} \dfrac{|D^{v}|}{|D|} \mathrm{Gini}(D^v)$$

## 算法

### ID3

每次划分选取信息增益最高的属性为划分标准。

### C4.5

先从候选属性中找出信息增益高于平均水平的属性，再从中选择增益率最高的。

### CART

优先选择基尼指数小的属性。

## 剪枝

避免过拟合的主要手段

- 预剪枝：减少训练测试时间，但有欠拟合风险。
- 后剪枝：泛化性能一般优于预剪枝，但训练开销大。