<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [机器学习：贝叶斯分类器](./index.html)

[TOC]

## 贝叶斯决策

假设有$n$种可能的类别标记$\mathcal{Y}=\{c_1,c_2,\cdots,c_n\}$，$λ_{ij}$是将一个真实标记$c_j$的样本分为$c_i$所产生的损失。

### 条件风险（Conditional Risk）

$$R(c_i \bold{\ |\ } x) = \sum_{j=1}^{n} λ_{ij} P(c_i \bold{\ |\ } x)$$

该式反映了将样本$x$分类到$c_i$产生的风险。

### 贝叶斯判定准则

$$h^*(x) = \argmin_{c∈\mathcal{Y}} R(c \bold{\ |\ } x)$$

- $\mathcal{X} \xrightarrow[]{h} \mathcal{Y}$

即映射$h$可以使每个样本的的条件风险都最小，此时的$h^*$称为**贝叶斯最优分类器**，$R(h^*)$称为**贝叶斯风险**。

**该式还反映了通过机器学习产生的模型精度的理论上限。**

### 最小化分类错误率

当目标是最小化分类错误率时

$λ_{ij} = \begin{cases}
    0 & i=j
\\  1 & i≠j
\end{cases}$

$R(c \bold{\ |\ } x) = 1 - P(c \bold{\ |\ } x)$

$$h^*(x) = \argmax\limits_{c∈\mathcal{Y}} P(c \bold{\ |\ } x)$$

### 贝叶斯分类器

与决策树、SVM、BP神经网络等**判别式模型**不同贝叶斯分类器属于**生成式模型**。

$$P(c \bold{\ |\ } x) 
    = \dfrac{P(x,c)} {P(x)}
    = \dfrac{P(c) ⋅ P(x \bold{\ |\ } c)} {P(x)}
$$

| 先验概率 | 后验概率 | 证据 | 似然（类条件概率） |
| :-: | :-: | :-: | :-: |
| $P(c)$ | $P(c \bold{\ \vert\ } x) $ | $P(x)$ | $P(x \bold{\ \vert\ } c)$

## 极大似然估计（MLE）

令$D_c$表示训练集中第$c$类样本的集合，则$θ_c$对于$D_c$似然为

$$P(D_c \bold{\ |\ } θ_c) = \prod_{x∈D_c} P(x \bold{\ |\ } θ_c)$$

上式连乘易造成下溢，故改写成对数似然

$$LL(θ_c) 
    = \log P(D_c \bold{\ |\ } θ_c) 
    = \sum_{x∈D_c} \log P(x \bold{\ |\ } θ_c)
$$

则极大似然$\hat{θ}$为

$$\hat{θ} = \argmax_{θ_c} LL(θ_c)$$

在连续属性情形下，假设$p(x \bold{\ |\ } c)∼N(μ_c, σ_c^2)$，即正态分布

$$\begin{cases}
    \hat{μ}_c = \dfrac{1}{|D_c|} \sum\limits_{x∈D_c} x
\\  \hat{σ}_c^2 = \dfrac{1}{|D_c|} \sum\limits_{x∈D_c} (x-\hat{μ}_c)(x-\hat{μ}_c)^T
\end{cases}$$

该方法估计结果的准确性严重依赖所假设的概率分布是否符合潜在的真实数据的分布。

## 朴素贝叶斯

$$P(c \bold{\ |\ } x) = \dfrac{P(c) ⋅ P(x \bold{\ |\ } c)} {P(x)} = 
    \dfrac{P(c)}{P(x)}
    \prod_{i=1}^{d} P(x_i \bold{\ \vert\ } c)
$$

- $d$：属性数目
- $x_i$：第$i$个属性的取值

### 基本思想

属性条件独立性假设。

#### Example

@import "data\naivebayes_eg1.csv"

$P(Ca^{+}=低,Mg^+=高,Na^+=高,Cl^=低 {\ \big|\ } Type=冰川水) × P(冰川水)$
$   
    \begin{array}{l}
    \\  =
    \\  & P(Ca^+=低 {\ \big|\ } Type=冰川水) & × 
    \\  & P(Mg^+=高 {\ \big|\ } Type=冰川水) & × 
    \\  & P(Na^+=高 {\ \big|\ } Type=冰川水) & × 
    \\  & P(Cl^-=低 {\ \big|\ } Type=冰川水) & ×
    \\  & P(冰川水)
    \\\\    = \left(
        \dfrac{1}{2} × \dfrac{3}{4} × \dfrac{2}{4} × \dfrac{2}{6}
    \right) × \dfrac{4}{8} = \dfrac{1}{32}
    \end{array}
$

$P(Ca^{+}=低,Mg^+=高,Na^+=高,Cl^=低 {\ \big|\ } Type=湖泊水) × P(湖泊水)$
$   
    \begin{array}{l}
    \\  =
    \\  & P(Ca^+=低 {\ \big|\ } Type=湖泊水) & × 
    \\  & P(Mg^+=高 {\ \big|\ } Type=湖泊水) & × 
    \\  & P(Na^+=高 {\ \big|\ } Type=湖泊水) & × 
    \\  & P(Cl^-=低 {\ \big|\ } Type=湖泊水) & ×
    \\  & P(湖泊水)
    \\\\    = \left(
        \dfrac{1}{2} × \dfrac{1}{4} × \dfrac{2}{4} × \dfrac{4}{6}
    \right) × \dfrac{4}{8} = \dfrac{1}{48}
    \end{array}
$

故$(Ca^{+}=低,Mg^+=高,Na^+=高,Cl^=低)$为冰川水。

### 朴素贝叶斯分类器表达式

$$h_{nb} = 
    \argmax_{c∈\mathcal{Y}} P(c) 
        \prod_{i=1}^{d} P(x_i \bold{\ \vert\ } c)
$$

**先验概率**

$$P(c) = \dfrac{|D_c|}{|D|}$$

**似然（离散）**

$$P(x_i \bold{\ \vert\ } c) = 
    \dfrac{|D_{c,x_i}|}{|D_c|}
$$

**似然（连续）**

$$P(x_i \bold{\ \vert\ } c) = 
    \dfrac{1}{\sqrt{2π}σ_{c,i}}
    \exp\left(
        -
        \dfrac{
            (x_i - μ_{c,i})^2
        }{
            2σ_{c,i}^2
        }
    \right)
$$

### 拉普拉斯修正

若某个属性值在训练集中没有与某个类同时出现过，则直接计算会出现问题，为了避免其它属性携带的信息被训练集中未出现的属性值抹去，在估计概率时需要进行**拉普拉斯修正**。

$$P(x_i \bold{\ \vert\ } c) = \dfrac{|D_{c,x_i}| + 1}{|D_c| + N_i}$$

## 半朴素贝叶斯

一般情况下，属性条件独立性假设很难成立，尝试对该条件进行一定的放松，得到半朴素贝叶斯分类器学习方法。