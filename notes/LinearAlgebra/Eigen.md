<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [特征值和特征向量](./index.html)

>[线性代数的本质：特征值和特征向量](https://www.bilibili.com/video/av6540378)

$$Aλ=λξ, ξ \neq 0$$

## 定义

$$
    λEξ-Aξ=0
    ⇒ (λE-A)ξ=0
    ⇒ |λE-A|=0
$$

- $λ$称为$A$的**特征值**
- $ξ$称为$A$的对应于特征值$λ$的**特征向量**
- $|λE-A|$叫做$A$的**特征多项式**
- $|λE-A|=0$叫做$A$的**特征方程**。

## 性质

- $\sum\limits_{i=1}^{n}λ_i=\sum\limits_{i=1}^{n}a_{ii}$
- $\prod_{i=1}^{n}λ_i=|A|$
- 不同特征值的特征向量线性无关

## 相似对角化

$A∼Λ$

- $A$有$n$个线性无关的特征向量$⇔A$可相似对角化。
- $A$有$n$个不同的特征值$⇒A$可相似对角化。
- $λ_i$是矩阵$A$的$r_i$重特征值，$r_i=n-r(A-λ_iE)⇒A$可相似对角化。
