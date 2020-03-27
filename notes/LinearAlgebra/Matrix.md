<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [矩阵（Matrix）](./index.html)

[TOC]

## 矩阵计算

### 乘法

#### 矩阵与向量乘法

$
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n}
    \\  a_{21} & a_{22} & \cdots & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{array}\right]_{m×n}
    \cdot
    \left[\begin{array}{c} b_1 \\ b_2 \\ \vdots  \\ b_n \end{array}\right]_{n×1}
    =
    \left[\begin{array}{c}
        a_{11}b_1 + a_{12}b_2 + \cdots + a_{1n}b_n
    \\  a_{21}b_1 + a_{22}b_2 + \cdots + a_{2n}b_n
    \\  \vdots
    \\  a_{m1}b_1 + a_{m2}b_2 + \cdots + a_{mn}b_n
    \end{array}\right]_{m×n}
$

#### 矩阵与矩阵乘法

>[线性代数的本质：矩阵乘法](https://www.bilibili.com/video/av6128021)

$A_{m×n}×B_{n×s}$：左阵定行，右阵定列；内等外定。

$
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n}
    \\  a_{21} & a_{22} & \cdots & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{array}\right]_{m×n}
    \cdot
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

**性质**

- $AB ≠ BA$
- $A(BC) = (AB)C$
- $A(B+C) = AB+AC$
- $(kA)(lB) = kl⋅AB$
- $AE=A$、$EA=A$
- $AO=O$、$EO=O$

### 行列式

$$|A|=\det(A)=
    \left|\begin{array}{c}
        a_{11} & \cdots & a_{1n}
    \\  \vdots & \ddots & \vdots
    \\  a_{n1} & \cdots & a_{nn}
    \end{array}\right|_{n×n}
    = \sum\limits_{j=1}^{n} a_{rj}A_{rj}
    = \sum\limits_{i=1}^{n} a_{ic}A_{ic}
$$

- $r$：选定的行
- $c$：选定的列
- $A_{ij}$：代数余子式

特别的：

- $|A_{1×1}|=a_{11}$
- $|A_{2×2}|=a_{11}a_{12} - a_{21}a_{12}$
- $|A_{3×3}|= a_{11}a_{22}a_{33} + a_{13}a_{21}a_{32} + a_{31}a_{23}a_{12} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{33}a_{21}a_{12}$

**性质**

- $|A^T| = |A|$
- $|kA| = k^n|A|$
- $|A^{-1}| = \dfrac{1}{|A|}$
- $|A^*| = |A|^{n-1}$
- $|A| = \prod_{i=1}^{n} λ_i$，（$λ_i$为$A$的特征值）
- $|AB| = |A|⋅|B| = |BA|$
- $A∼B \,\,⇒\,\, |A|=|B|$

**拉普拉斯展开**

$
    \left|\begin{array}{c}
        A & *
    \\  O & B
    \end{array}\right|_{n×n}
    =|A|⋅|B|
    \newline\,\newline
    \left|\begin{array}{c}
        A & O
    \\  * & B
    \end{array}\right|_{n×n}
    =|A|⋅|B|
    \newline\,\newline
    \left|\begin{array}{c}
        * & A
    \\  B & O
    \end{array}\right|_{n×n}
    =(-1)^{mn}|A|⋅|B|
    \newline\,\newline
    \left|\begin{array}{c}
        O & A
    \\  B & *
    \end{array}\right|_{n×n}
    =(-1)^{mn}|A|⋅|B|
$

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

**性质**

- $(A^T)^T = A$
- $(A + B)^T = A^T + B^T$
- $(kA)^T = kA^T$
- $(AB)^T = B^TA^T$

### 逆

**方法一**

$$A^{-1} = \dfrac{A^*}{|A|}$$

**方法二**

$$(A | E) \xrightarrow{初等行变换} (E | A^{-1})$$

**性质**

- $(A^{-1})^{-1}=A$
- $(A^T)^{-1}=(A^{-1})^T$
- $(kA)^{-1} = \frac{1}{k}A^{-1}$
- $(AB)^{-1} = B^{-1}A^{-1}$
- $|A^{-1}| = \frac{1}{|A|}$
- $A^{-1} = \frac{1}{|A|}A^*$

<!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->

## 特殊矩阵

### 零矩阵

所有元素均为0的矩阵。

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

### 初等矩阵

由单位矩阵经过一次初等变换得到的矩阵。

**左行右列规则**

- 对矩阵$A$**左**乘一个初等矩阵，等于对$A$做相应的**行**变换
- 对矩阵$A$**右**乘一个初等矩阵，等于对$A$做相应的**列**变换

### 三角矩阵

#### 主对角

主对角矩阵的行列式满足：$|A| = a_{11}a_{22}\cdots a_{nn}$

**三角矩阵**

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

#### 副对角

副对角矩阵的行列式满足：$|A| = (-1)^{\frac{n(n-1)}{2}} a_{1n}a_{2,n-1}\cdots a_{n1}$

**三角矩阵**

$A=
    \left[\begin{array}{c}
            &        &           & a_{1n}
    \\         &        & a_{2,n-1} &
    \\         &        &           &
    \\  a_{n1} &        &           &
    \end{array}\right]_{n×n}
$

### 行阶梯矩阵

$eg:
    \left[\begin{array}{c}
        a_{11} & a_{12} & a_{13} & a_{14} & a_{15}
    \\  0      & a_{22} & a_{23} & a_{24} & a_{25}
    \\  0      & 0      & 0      & a_{34} & a_{35}
    \\  0      & 0      & 0      & 0      & a_{45}
    \end{array}\right]
$

对系数矩阵做**初等行变换**不影响方程组结果。

- 交换两个方程次序
- 数乘某个方程
- 一个方程的$k$倍加到另一个方程上

**性质**

- 行阶梯矩阵的秩就是其非零行数

### 伴随矩阵

$A^*=
    \left[\begin{array}{c}
        A_{11} & A_{21} & \dots  & A_{n1}
    \\  A_{12} & A_{22} & \dots  & A_{n2}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  A_{1n} & A_{2n} & \dots  & A_{nn}
    \end{array}\right]_{n×n}
$

注意$A^*$是矩阵$A$每个元素替换为其代数余子式再转置得到的。

**性质**

- $AA^* = A^*A = |A|E$
- $A^* = |A|A^{-1}$
- $|A^*| = |A|^{n-1}$
- $(A^*)^{-1} = (A^{-1})^{*} = \dfrac{A}{|A|}$
- $(A^*)^T = (A^T)^*$
- $(kA)^* = k^{n-1} A^*$
- $(A^*)^* = |A|^{n-2}A$

$r(A^*)=
\begin{cases}
    n, & if \ \ \ r(A)=n
\\  1, & if \ \ \ r(A)=n-1
\\  0, & if \ \ \ r(A)<n-1
\end{cases}
$

### 范德蒙矩阵

$A=
    \left[\begin{array}{c}
        1         & 1         & \cdots & 1
    \\  x_1       & x_2       & \cdots & x_n
    \\  x_1^2     & x_2^2     & \cdots & x_n^2
    \\  \vdots    & \vdots    &        & \vdots
    \\  x_1^{n-1} & x_2^{n-1} &        & x_n^{n-1} 
    \end{array}\right]_{n×n}
$

其行列式（**范德蒙行列式**）为$\prod\limits_{1≤j<i≤n} (x_i-x_j)$。

### 对称矩阵

满足$A^T=A$的矩阵。

### 正交矩阵

若$n$阶方阵$A$满足$AA^T=A^TA=E$，则称$A$为**正交矩阵**，简称**正交阵**。

**充要条件**

$A$是正交阵的充要条件是$A$的列（行）向量都是单位向量，且两两正交。

**正交变换**

若$A$为正交阵，$x$为向量，$Ax$称为正交变换。
正交变换不改变向量的长度。

**性质**

- $A$为正交阵$\,\,⇔\,\, A^T=A^{-1}$
- $A$为正交阵$\,\,⇒\,\, |A|^2 = 1$
- 若$A$为正交阵，则$A^{-1}$也是正交阵
- 若$P$、$Q$为正交阵，则$P×Q$也是正交阵