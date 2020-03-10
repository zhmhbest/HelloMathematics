<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [矩阵（Matrix）](./index.html)

[TOC]

## 矩阵变换

### 乘法

**矩阵与向量乘法**

$
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n}
    \\  a_{21} & a_{22} & \cdots & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{array}\right]_{m×n}
    ×
    \left[\begin{array}{c} b_1 \\ b_2 \\ \vdots  \\ b_n \end{array}\right]_{n×1}
    =
    \left[\begin{array}{c}
        a_{11}b_1 + a_{12}b_2 + \cdots + a_{1n}b_n
    \\  a_{21}b_1 + a_{22}b_2 + \cdots + a_{2n}b_n
    \\  \vdots
    \\  a_{m1}b_1 + a_{m2}b_2 + \cdots + a_{mn}b_n
    \end{array}\right]_{m×n}
$

**矩阵与矩阵乘法**

$A_{m×n}×B_{n×s}$：左阵定行，右阵定列；内等外定。
$
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n}
    \\  a_{21} & a_{22} & \cdots & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{array}\right]_{m×n}
    ×
    \left[\begin{array}{c}
        b_{11} & b_{12} & \cdots & b_{1m}
    \\  b_{21} & b_{22} & \cdots & b_{2m}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  b_{n1} & b_{n2} & \cdots & b_{nm}
    \end{array}\right]_{n×s}
    =
    \left[\begin{array}{c}
        a_{11}b_{11} + a_{12}b_{21} + \cdots + a_{1n}b_{n1}
    &   a_{11}b_{12} + a_{12}b_{22} + \cdots + a_{1n}b_{n2}
    &   \dots
    &   a_{11}b_{1m} + a_{12}b_{2m} + \cdots + a_{1n}b_{nm}
    \\  a_{21}b_{11} + a_{22}b_{21} + \cdots + a_{2n}b_{n1}
    &   a_{21}b_{12} + a_{22}b_{22} + \cdots + a_{2n}b_{n2}
    &   \dots
    &   a_{21}b_{1m} + a_{22}b_{2m} + \cdots + a_{2n}b_{nm}
    \\  \vdots
    &   \vdots
    &   \ddots
    \\  a_{m1}b_{11} + a_{m2}b_{22} + \cdots + a_{mn}b_{n1}
    &   a_{m1}b_{12} + a_{m2}b_{22} + \cdots + a_{mn}b_{n2}
    &   \dots
    &   a_{m1}b_{1m} + a_{m2}b_{2m} + \cdots + a_{mn}b_{nm}
    \end{array}\right]_{m×s}
$

### 行列式

一个线性变换，对**面积**（**体积或是其它超维概念**）的影响。
$|A|=\det(A)=
    \left|\begin{array}{c}
        a_{11} & \cdots & a_{1n}
    \\  \vdots & \ddots & \vdots
    \\  a_{n1} & \cdots & a_{nn}
    \end{array}\right|_{n×n}
$
特别的：
$|A_{1×1}|=a_{11}$
$|A_{2×2}|=a_{11}a_{12} - a_{21}a_{12}$
$|A_{3×3}|=
    a_{11}a_{22}a_{33} + a_{13}a_{21}a_{32} + a_{31}a_{23}a_{12}
    -
    a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{33}a_{21}a_{12}
$

若方阵$A$的行列式的值等于0，那么方阵$A$叫做**奇异矩阵**，否则叫做**非奇异矩阵**。

### 转置

$$
    \left[\begin{array}{c}
        a_{11} & a_{12} & \dots  & a_{1n}
    \\  a_{21} & a_{22} & \dots  & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{m1} & a_{m2} & \dots  & a_{mn}
    \end{array}\right]_{m×n}^T
    =
    \left[\begin{array}{c}
        a_{11} & a_{21} & \dots  & a_{m1}
    \\  a_{12} & a_{22} & \dots  & a_{m2}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{1n} & a_{2n} & \dots  & a_{mn}
    \end{array}\right]_{n×m}
$$

### 逆

若存在$AB=BA=E$，则称矩阵$B$是矩阵$A$的**逆矩阵**。$A$被称为**可逆矩阵**或**非奇异矩阵**。

**性质**

- 若$A$可逆，则$A$的逆矩阵存在且唯一
- 若$A$可逆，则$A$一定为方阵
- 若$A$可逆，则$r(A)=n$
- $|A| \neq 0 ⇔ A$可逆
- $(A^{-1})^{-1}=A$
- $(A^T)^{-1}=(A^{-1})^T$
- $AB=AC ⇒ A^{-1}AB=A^{-1}AC ⇒ B=C$
- $(kA)^{-1} = \frac{1}{k}A^{-1}$
- $(AB)^{-1} = B^{-1}A^{-1}$
- $|A^{-1}| = \frac{1}{|A|}$
- $A^{-1} = \frac{1}{|A|}A^*$

### 初等变换

1. 交换两行（列）：$(r_i↔r_j)$、$(c_i↔c_j)$。
1. $k$乘以某一行（列）：$(r_i×k)$、$(c_i×k)$。
1. 某行（列）的$k$倍加到另一行上：$(r_i+kr_j)$、$(c_i+kc_j)$。

**左行右列规则**

- 对矩阵$A$**左**乘一个初等矩阵，等于对$A$做相应的**行**变换
- 对矩阵$A$**右**乘一个初等矩阵，等于对$A$做相应的**列**变换

<!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->

## 定义

### 矩阵

描述线性代数中线性关系的参数，即矩阵是一个线性变换， 可以将一些向量转换为另一些向量。

### 等价

若矩阵$A$经过有限次**初等变换**变成了矩阵$B$，就称$A$与$B$等价。记作：$A ≌ B$
等价的充要条件是，$A$与$B$同型且等秩。

### 相似

若存在可逆矩阵$P$且$P^{-1}AP=B$，则称$A$与$B$相似，记作：**$A ∼ B$**

### 合同

若存在可逆矩阵$C$且$C^TAC=B$，则称$A$与$B$合同，记作：**$A ≃ B$**

### 正定

对于方阵$A_{n×n}$，若任意$n$阶向量$x$，都有$x^TAx>0$，则称矩阵A为**正定矩阵**。若$x^TAx≥0$则矩阵$A$为**半正定矩阵**。

### $k$阶子式

在$m×n$矩阵中，任取$k$行$k$列，不改变这$k^2$个元素在A中的次序，得到的$k$阶方阵。

### 余子式

**余子式**

把$a_{ij}$所在行，所在列的元素删去后，剩下$(n-1)$个元素组成的行列式$M_{ij}$称为**余子式**。

**代数余子式**

$A_{ij}=(-1)^{(i+j)}M_{ij}$

### 矩阵的秩

若矩阵$A$有一个子式$B_{r×r} \,,\, |B_{r×r}| \neq 0$，且$(r+1)$阶子式不存在或其行列式全部为$0$，则$B$称为$A$的**最高阶非零子式**，$r$称为矩阵$A$的**秩**。记作：**$r(A)=r$**



<!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->

## 特殊矩阵

### 初等矩阵

由单位矩阵经过一次初等变换得到的矩阵。

### 零矩阵

所有元素均为0的矩阵，例如：
$0=
    \left[\begin{array}{c}
        0      & 0      & \cdots & 0      & 0
    \\  0      & 0      & \cdots & 0      & 0
    \\  \vdots & \vdots & \ddots & \vdots & \vdots
    \\  0      & 0      & \cdots & 0      & 0
    \\  0      & 0      & \cdots & 0      & 0
    \end{array}\right]_{m×n}
$

### 单位矩阵

主对角线均为1，其余均为0的矩阵。
$E=
    \left[\begin{array}{c}
        1      & 0      & \cdots & 0
    \\  0      & 1      & \cdots & 0
    \\  \vdots & \vdots & \ddots & \vdots
    \\  0      & 0      & \cdots & 1
    \end{array}\right]_{n×n}
$

### 三角矩阵

**对角矩阵**
$A=
    \left[\begin{array}{c}
        a_{11} & 0      & \cdots & 0
    \\  0      & a_{22} & \cdots & 0
    \\  \vdots & \vdots & \ddots & \vdots
    \\  0      & 0      & \cdots & a_{nn}
    \end{array}\right]_{n×n}
$

**上三角矩阵**
$A=
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n}
    \\  0      & a_{22} & \cdots & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  0      & 0      & \cdots & a_{nn}
    \end{array}\right]_{n×n}
$

**下三角矩阵**
$A=
    \left[\begin{array}{c}
        a_{11} & 0      & \cdots & 0
    \\  a_{21} & a_{22} & \cdots & 0
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{n1} & a_{n2} & \cdots & a_{nn}
    \end{array}\right]_{n×n}
$

### 行阶梯矩阵

$eg:
    \left[\begin{array}{c}
        1 & 1 & 1 & 1 & 1
    \\  0 & 1 & 1 & 1 & 1
    \\  0 & 0 & 0 & 1 & 1
    \\  0 & 0 & 0 & 0 & 0
    \end{array}\right]
$

**不影响方程组结果的变换方法**

- 交换两个方程次序
- 数乘某个方程
- 一个方程的$k$倍加到另一个方程上

**性质**

- 行阶梯矩阵的秩就是其非零行数

### 伴随矩阵

将所有的代数余子式按照次序进行排列，可以得到一个$n$阶的方阵
$A^*=
    \left[\begin{array}{c}
        A_{11} & A_{21} & \dots  & A_{n1}
    \\  A_{12} & A_{22} & \dots  & A_{n2}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  A_{1n} & A_{2n} & \dots  & A_{nn}
    \end{array}\right]_{n×n}
$

注意$A^*$是矩阵$A$每个元素替换为其代数余子式再转置得到的。
特别的$A⋅A^*=|A|E$

### 正交矩阵

若$n$阶方阵$A$满足$A^TA=E$，则称$A$为**正交矩阵**，简称**正交阵**。

**充要条件**

$A$是正交阵的充要条件是$A$的列（行）向量都是单位向量，且两两正交。

**正交变换**

若$A$为正交阵，$x$为向量，$Ax$称为正交变换。
正交变换不改变向量的长度。

**性质**

- 若$A$为正交阵，则$A^{-1}$也是正交阵
- 若$P$、$Q$为正交阵，则$P×Q$也是正交阵

## 特征值和特征向量

$$Aλ=λξ, ξ \neq 0$$

### 定义

$$
    λEξ-Aξ=0
    ⇒ (λE-A)ξ=0
    ⇒ |λE-A|=0
$$
$λ$称为$A$的**特征值**，$ξ$称为$A$的对应于特征值$λ$的**特征向量**。$|λE-A|$叫做$A$的**特征多项式**，$|λE-A|=0$叫做$A$的**特征方程**。

### 特征值的性质

- $\sum\limits_{i=1}^{n}λ_i=\sum\limits_{i=1}^{n}a_{ii}$
- $\prod_{i=1}^{n}λ_i=|A|$
- 不同特征值的特征向量线性无关

### 相似对角化

$A∼Λ$

- $A$有$n$个线性无关的特征向量$⇔A$可相似对角化。
- $A$有$n$个不同的特征值$⇒A$可相似对角化。
- $λ_i$是矩阵$A$的$r_i$重特征值，$r_i=n-r(A-λ_iE)⇒A$可相似对角化。
