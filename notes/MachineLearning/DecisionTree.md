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

$p(x)$表示某一事件$X$其子情况$x$发生的概率。$p(x)$越大，信息量越小。

#### 信息熵

$$\mathrm{Entropy}(X) = -\sum_{x∈X} p(x) ⋅ \log p(x)$$

$X$指某一事件，$x$遍历了其所有子情况，$p(x)$指某一子情况发生的概率。该值表达了事件$X$的不确定性，<span class='highlight'>熵越大，不确定性越大</span>。

<span class='highlight'>信息熵亦是度量样本纯度地指标，该值越小，样本纯度越高，即样本中尽可能属于同一类别。</span>

<div class='hint'>

交叉熵：$\mathrm{CrossEntropy}(p, q) = \sum\limits_{x} p(x) ⋅ \log \dfrac{1}{q(x)}$

- $p$：真实分布
- $q$：非真实分

该式用于度量两个概率分布间的差异性信息。
</div>

#### 条件熵

$$
    \mathrm{Entropy}(Y ⇐ X) = 
    \mathrm{Entropy}(Y {\ \bold\vert\ } X)
    \begin{array}{l}
    \\
    \\  = \sum\limits_{x∈X} p(x) ⋅ \mathrm{Entropy}(Y {\ \bold\vert\ } X=x) 
    \\  = -\sum\limits_{x∈X} p(x) \sum\limits_{y∈Y}
                p(y {\ \bold\vert\ } x)
                ⋅ 
                \log p(y {\ \bold\vert\ } x)
    \end{array}
$$

已知事件$X$的情况下求事件$Y$的不确定性。

### 信息增益

#### 增益值

$$\mathrm{Gain}(D, a) 
\begin{array}{l}
\\
\\  = \mathrm{Entropy}(D) - \mathrm{Entropy}(D {\ \bold\vert\ } a)
\\  = \mathrm{Entropy}(D) - \sum\limits_{v=1}^{a.V} \dfrac{|D^v|}{|D|} \mathrm{Entropy}(D^v)
\end{array}
$$

- $D$：数据集
- $a$：某一离散属性
- $a.V$：属性可取的值数量
- $D^v$包含了$D$中所有属性$a$上取值为$a^v$的样本。

<span class='highlight'>信息增益越大，即使用该属性进行划分时，对纯度的提升越大。信息增益准则对可取值数目较多的属性有所偏好。</span>

#### 增益率

$$\mathrm{GainRatio}(D, a) = \dfrac{\mathrm{Gain}(D, a)}{\mathrm{IV}(a)}$$

- $IV$：属性的固有值（Intrinsic Value）

$$
    IV(a) = 
        -\sum\limits_{v=1}^{a.V}
            \dfrac{|D^v|}{|D|}
            \log
            \dfrac{|D^v|}{|D|}
$$

<span class='highlight'>增益率准则对可取值数目较少的属性有所偏好。</span>

### 基尼

#### 基尼值

$$\mathrm{Gini}(D) = \sum_{k=1}^{n} \sum_{k'≠k} p_kp_{k'} = 1 - \sum_{k=1}^{n} {p_k}^2$$

- $n$：样本种类数

<span class='highlight'>基尼值反映了从数据集中随机抽取两个样本，其类别标记不一致的概率（不纯性的度量）。基尼值越小，数据集纯度越高。</span>

#### 基尼指数

$$\mathrm{GiniIndex}(D, a) = \sum_{v=1}^{a.V} \dfrac{|D^{v}|}{|D|} \mathrm{Gini}(D^v)$$

#### Eaxmple

@import "./data/gini_eg1.csv"

**计算$\mathrm{GiniIndex}(Outlook)$**

@import "./data/gini_eg1_Outlook.csv"

- $\mathrm{Gini}(Outlook=Sunny) = 1 - (\dfrac{2}{5})^2 - (\dfrac{3}{5})^2 = 0.48$
- $\mathrm{Gini}(Outlook=OverCast) = 1 - (\dfrac{4}{4})^2 - (\dfrac{0}{4})^2 = 0$
- $\mathrm{Gini}(Outlook=Rain) = 1 - (\dfrac{3}{5})^2 - (\dfrac{2}{5})^2 = 0.48$

$\mathrm{GiniIndex}(Outlook) = 
    \dfrac{5}{14}\mathrm{Gini}(Outlook=Sunny) + 
    \dfrac{4}{14}\mathrm{Gini}(Outlook=OverCast) + 
    \dfrac{5}{14}\mathrm{Gini}(Outlook=Rain) 
    = \dfrac{12}{35} ≈ 0.343
$

## 算法

### ID3

每次划分选取**信息增益**最高的属性为划分标准。

### C4.5

先从候选属性中找出**信息增益**高于平均水平的属性，再从中选择**增益率**最高的。

### CART

优先选择**基尼指数**小的属性。

## 剪枝

避免过拟合的主要手段

- 预剪枝：减少训练测试时间，但有欠拟合风险。
- 后剪枝：泛化性能一般优于预剪枝，但训练开销大。