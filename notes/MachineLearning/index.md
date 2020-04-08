<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [机器学习](../index.html)

| 符合 | 含义 |
| - | - |
| $D$ | 数据集
| $m$ | 样本数
| $y_i$    | 真实值
| $f(x_i)$ | 预测值
| $Ⅱ(.)$ | $Ⅱ(true)=1$、$Ⅱ(false)=0$
| $\vert.\vert$ | 集合中元素个数
| $\mathrm{sign}(.)$  | 符号函数，$\mathrm{sign}(.)=-1,0,1$
## [导论](./Introduction.html)

## [模型评估](./Evaluation.html)

## 线性模型

$$f(x) = w^Tx + b$$

寻找一个能将$x$映射为$f(x)$的$w$和$b$，且使得$MSE(f, y)$尽可能小。

## 决策树

### 相关定义

#### 信息熵

$$\mathrm{Ent}(D) = -\sum_{i=1}^{n} p_k ⋅ \log_2 p_k$$

- $p_k$：第$k$类样本所占比例
- $n$：样本种类数

信息熵是度量样本纯度地指标，该值越小，样本纯度越高，即样本中尽可能属于同一类别。

#### 信息增益

$$\mathrm{Gain}(D, attribute.V) = Ent(D)  - \sum_{v=1}^{V} \dfrac{|D^v|}{|D|}Ent(D^v)$$

- $attribute.V$：样本的某一属性，$V$为其可能的取值数。

信息增益越大，即使用该属性进行划分时，对纯度的提升越大。信息增益准则对可取值数目较多的属性有所偏好。

#### 增益率

$$\mathrm{Gain\_ratio}(D, attribute.V) = \dfrac{\mathrm{Gain}(D, attribute.V)}{\mathrm{IV(attribute.V)}}$$

- $IV$：属性的固有值（Intrinsic Value），
 
$$IV(attribute.V) = -\sum\limits_{v=1}^{V} \dfrac{|D^v|}{|D|} \log_2 \dfrac{|D^v|}{|D|}$$

增益率准则对可取值数目较少的属性有所偏好。

#### 基尼指数

$$Gini(D) = \sum_{k=1}^{n} \sum_{k'≠k} p_kp_{k'} = 1 - \sum_{k=1}^{n} {p_k}^2$$

- $n$：样本种类数

$Gini(D)$反映了从数据集中随机抽取两个样本，其类别标记不一致的概率。基尼指数越小，数据集纯度越高。

$$\mathrm{Gini\_index}(D, attribute.V) = \sum_{v=1}^{V} \dfrac{|D^{v}|}{|D|} \mathrm{Gini}(D^v)$$

### 算法

#### C4.5

先从候选属性中找出信息增益高于平均水平的属性，再从中选择增益率最高的。

#### CART

优先选择基尼指数小的属性。