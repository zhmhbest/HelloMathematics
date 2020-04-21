<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [线性空间](./index.html)

[TOC]

## 定义

设$P$是一个数域，$V$是一个非空集合。如果下列条件被满足，则称$V$是$P$上的一个**线性空间**。

- **加法规则**：对$V$中任意$α,β$，都有$α+β∈V$
- **数乘规则**：对$V$中任意$α$，$P$中任意常数$k$，都有$kα∈V$
- 其它规则
  - $α+β = β+α$
  - $(α+β)+γ = α+(β+γ)$
  - $V$中存在元素$0$，$α+0=α$
  - $V$中存在元素$α'$，$α+α'=0$，$α'$叫做负元素记作$-α$
  - $1α = α$
  - $(μk)α = μ(kα)$
  - $(μ+k)α = μα+kα$
  - $k(α+β) = kα+kβ$

### $P^n$

数域$P$的全体$n$元数组$(x_1,x_2,⋯,x_n)^T$构成$𝑃$上的一个线性空间，记作$P^n$。

### $P^{m×n}$

数域$P$的全体$m×n$矩阵组成的集合在通常矩阵的加法和数与矩阵的乘法下构成$P$上的一个线性空间，称为**矩阵空间**，记作$P^{m×n}$。

### $P_n(t)$

$$P_n(t) = \{ a_0 + a_1t + a_2t^2 + \cdots + a_nt^n \bold{\ |\ } a_k∈R \}$$

表示至多$n$次多项式的全体形成的集合，称为**实$n$次多项式空间**。

### $N(A)$

$$N(A) = \{ x \bold{\ |\ } Ax=0, x∈R^n, A∈R^{m×n} \}$$

称$N(A)$为矩阵$A$的**零空间（核空间）**。

## 基

设$V$是数域$V$上的一个线性空间，$V$中满足以下两个条件的向量组$a_1, a_2, …, a_n$称为$V$的基

- $a_1, a_2, …, a_n$线性无关
- $V$中的每一个向量都可以由$a_1, a_2, …, a_n$线性表示

此时，称$n$为线性空间$V$的维数。线性空间$V$的维数记为$dim⁡(V)$。

#### 例

$A =
    \left[\begin{array}{c}
        1 & 1
    \\  2 & -1
    \end{array}\right]
$，$V_A = \{ X \bold{\ |\ } AX=XA,X∈R^{2×2} \}$，求$V_A$的基与维数。

**解**

令$X=
    \left[\begin{array}{c}
            x_1 & x_2
        \\  x_3 & x_4
    \end{array}\right]
$

$AX =
    \left[\begin{array}{c}
            1 & 1
        \\  2 & -1
    \end{array}\right]
    \left[\begin{array}{c}
            x_1 & x_2
        \\  x_3 & x_4
    \end{array}\right]
    =
    \left[\begin{array}{c}
        x_1+x_3  & x_2+x_4
    \\  2x_1−x_3 & 2x_2−x_4
    \end{array}\right]
$

$XA =
    \left[\begin{array}{c}
            x_1 & x_2
        \\  x_3 & x_4
    \end{array}\right]
    \left[\begin{array}{c}
            1 & 1
        \\  2 & -1
    \end{array}\right]
    =
    \left[\begin{array}{c}
        x_1+2x_2 & x_1-x_2
    \\  x_3+2x_4 & x_3−x_4
    \end{array}\right]
$

由$AX=XA$得

$
\begin{cases}
    x_1=2x_2+x_4
\\  x_2=x_2
\\  x_3=2x_2
\\  x_4=x_4
\end{cases}
$

则

$X = 
    \left[\begin{array}{c}
            2x_2+x_4 & x_2
        \\  2x_2     & x_4
    \end{array}\right]
    =
    x_2
    \left[\begin{array}{c}
            2 & 1
        \\  2 & 0
    \end{array}\right]
    x_4
    \left[\begin{array}{c}
            1 & 0
        \\  0 & 1
    \end{array}\right]
$

即基为$\left[\begin{array}{c}
        2 & 1
    \\  2 & 0
\end{array}\right]$和$\left[\begin{array}{c}
        1 & 0
    \\  0 & 1
\end{array}\right]$，维数是2。