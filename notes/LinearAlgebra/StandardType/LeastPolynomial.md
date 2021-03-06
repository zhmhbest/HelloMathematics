<link rel='stylesheet' href='../../../style/index.css'>
<script src='../../../style/index.js'></script>

# [矩阵最小多项式](../index.html)

[TOC]

## 矩阵多项式

定义关于$x$的多项式

$$f(x) = a_{n}x^{n} + a_{n-1}x^{n-1} + \cdots + a_{1}x^{} + a_{0}$$

对于方阵$A$

$$f(A) = a_{n}A^{n} + a_{n-1}A^{n-1} + \cdots + a_{1}A^{} + a_{0}E$$

称为$A$的**矩阵多项式**。

### *Cayley-Hamilton*定理

$f(λ) = |λE-A|$为矩阵$A$的特征多项式，则$f(A) = 0$，即对于任意一个$n$阶矩阵$A$，一定存在多项式$\varphi(λ)$使得$\varphi(A)=0$。

<span class='highlight'>即特征多项式$|λE-A|$一定是零化多项式。</span>

### 零化多项式

凡是能使$\varphi(A)=0$的多项式$\varphi(λ)$叫做矩阵$A$的**零化多项式**。

明显，零化多项式乘上任意一个多项式还是零化多项式。

### 最小多项式

所有零化多项式中，次数最低，并且首项系数为$1$的零化多项式称为**最小多项式**记作$m(λ)$

<span class='highlight'>最小多项式一定是零化多项式的因子</span>

多项式$\varphi(λ)$是零化多项式的充要条件为$\varphi(λ)$可以被$m(λ)$整除，也可表述为$m(λ)$整除$\varphi(λ)$

$$\varphi(λ) = m(λ)q(λ) + r(λ)$$

<div class='highlight'>

数字阵$A_{n×n}$的派生$λ$阵的最后一个不变因子$d_r(λ)$就是$A$的最小多项式。

又因为派生$λ$阵一定满秩，则有$n=r$，可得

$$D_n(λ) = |λE-A| = d_1(λ) ⋅ d_2(λ) ⋅ d_3(λ) \cdots d_n(λ)$$

其中$d_n(λ)$即为数字阵$A_{n×n}$的最小多项式。
</div>

#### 例1

求矩阵$
    \left[\begin{array}{c}
        8  & -3 & 6
    \\  3  & -2 & 0
    \\  -4 & 2  & -2
    \end{array}\right]
$的最小多项式。

**解**

<span class='hint'>本题利用：数字阵$A_{n×n}$的派生$λ$阵的最后一个不变因子$d_r(λ)$就是$A$的最小多项式。</span>

$|λE-A| = (λ-1)^2(λ-2)$

则有以下情况

- $m_1(λ) = (λ-1)(λ-2)$
- $m_2(λ) = (λ-1)^2(λ-2)$

检验$m_1(A)$，$m_2(A)$，为$0$的即为最小多项式。

得最小多项式$m(λ) = (λ-1)^2(λ-2)$

#### 例2

$n$阶方阵$A$满足$A^2-2A-3E=0$，$r(A-3E)=r$，求$A$的Jordan标准型

**解**

<span class='hint'>本题利用：零化多项式一定包含最小多项式。</span>

$
    A^2-2A-3E=0
    { \ \ \ ⇒ \ \ \ }
    λ^2 - 2λ - 3 = 0
    { \ \ \ ⇒ \ \ \ }
    (λ-3)(λ+1)=0
$

则有以下情况

- $m_1(λ) = (λ-3)$
- $m_2(λ) = (λ+1)$
- $m_3(λ) = (λ-3)(λ+1)$

1. 若为$m_1$，则$A-3E=0$ 与 $r(A-3E)=r$矛盾
2. 若为$m_2$，则$A+E=0 { \ \ \ ⇒ \ \ \ } A-3E=-4E$ 与 $r(A-3E)=r$矛盾

综上得

$$m(λ) = (λ-3)(λ+1)$$

即$(λ-3)(λ+1)$为最后一个不变因子，在此之前的不变因子一定是$(λ-3)(λ+1)$的因子，故只能为

- $d_a(λ) = λ-3$
- $d_b(λ) = λ+1$
- $d_c(λ) = (λ-3)(λ+1)$

其中$d_a(λ)$与$d_b(λ)$不能共存。则初等因子只有$λ-3$和$λ+1$这两种。

又$r(A-3E)=r$，故$r(J-3E)=r$，即初等因子有$r$个$λ+1$和$n-r$个有$λ-3$

综上得Jordan标准型

$J = 
    \left[\begin{array}{c}
        \left[\begin{array}{c}
            3
        \\  & \ddots
        \\  && 3
        \end{array}\right]_{n-r}
        \\ &
        \left[\begin{array}{c}
            -1
        \\  &\ddots
        \\  && -1
        \end{array}\right]_{r}
    \end{array}\right]
$

### 对角化

$A$可以对角化的充要条件是$A$的最小多项式无重根，即所有Jordan块都为1阶。

#### 例

求$
    \left[\begin{array}{c}
        1 & 1 & \cdots & 1
    \\  1 & 1 & \cdots & 1
    \\  \vdots & \vdots & \ddots & \vdots
    \\  1 & 1 & \cdots & 1
    \end{array}\right]_{n×n}
$的最小多项式。

**解**

显然$A$是对称阵，因此可对角化，则其最小多项式无重根

又$|λE-A| = λ^{n-1}(λ-n)$

故$m(λ) = λ(λ-n)$


