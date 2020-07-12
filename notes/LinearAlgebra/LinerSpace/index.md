<link rel='stylesheet' href='../../../style/index.css'>
<script src='../../../style/index.js'></script>

# [线性空间](../index.html)

[TOC]

## 定义

>直观理解：给元素装配了加法和数乘的非空集合。

设$P$是一个数域，$V$是一个非空集合。如果下列条件被满足，则称$V$是$P$上的一个**线性空间**。

- **加法规则**：对$V$中任意$α,β$，都有$α+β∈V$
  - **加法交换律**：$α+β = β+α$
  - **加法结合律**：$(α+β)+γ = α+(β+γ)$
  - **零元存在**：$α+0=α$
  - **逆元存在**：$α+(-α)=0$
- **数乘规则**：对$V$中任意$α$，$P$中任意常数$k$，都有$kα∈V$
  - **单位元$e$存在**：$eα = α$
  - **相兼容**：$(μk)α = μ(kα)$
  - **$P$分配律**：$(μ+k)α = μα+kα$
  - **$V$分配律**：$k(α+β) = kα+kβ$

### $P^n$

数域$P$的全体$n$元数组$(x_1,x_2,⋯,x_n)^T$构成$𝑃$上的一个线性空间，记作$P^n$。

### $P^{m×n}$

数域$P$的全体$m×n$矩阵组成的集合在通常矩阵的加法和数与矩阵的乘法下构成$P$上的一个线性空间，称为**矩阵空间**，记作$P^{m×n}$。

### $P_n(t)$

$$P_n(t) = \{ a_0 + a_1t + a_2t^2 + \cdots + a_nt^n \bold{\ |\ } a_k∈R \}$$

表示**至多**$n$次多项式的全体形成的集合，称为**实$n$次多项式空间**。

其中$1,t,t^2,\dots,t^n$是$P_n(t)$的一组基。

### $N(A)$

$$N(A) = \{ x \bold{\ |\ } Ax=0, x∈R^n, A∈R^{m×n} \}$$

称$N(A)$为矩阵$A$的**零空间（核空间）**。

## 基

### 定义

设$V$是数域$V$上的一个线性空间，$V$中满足以下两个条件的向量组$α_1, α_2, \dots, α_n$称为$V$的基

- $α_1, α_2, \dots, α_n$线性无关
- $V$中的每一个向量都可以由$α_1, α_2, \dots, α_n$线性表示（**唯一表示**）

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

由$AX=XA$得$
    \begin{cases}
        x_1=2x_2+x_4
    \\  x_2=x_2
    \\  x_3=2x_2
    \\  x_4=x_4
    \end{cases}
$

则$X = 
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
    +
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

### 坐标

向量由基的唯一表示称为向量在该基下的坐标，两个向量相加可以看作是它们的坐标相加。

$$
    \left[\begin{array}{c}
        γ_1 & γ_2 & \cdots & γ_m
    \end{array}\right]_{1×m}
    =
    \left[\begin{array}{c}
        α_1 & α_2 & \cdots & α_n
    \end{array}\right]_{1×n}
    \left[\begin{array}{c}
        c_{11} & c_{12} & \dots  & c_{1m}
    \\  c_{21} & c_{22} & \dots  & c_{2m}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  c_{n1} & c_{n2} & \dots  & c_{nm}
    \end{array}\right]_{n×m}
$$

$\left[\begin{array}{c}
        c_{1i} & c_{2i} & \cdots & c_{ni}
\end{array}\right]^T$即为向量$γ_i$在基$α$下的坐标。

#### 例

求$\begin{cases}
    f_1(t) = 1 + 4t - 2t^2 + t^3
\\  f_2(t) = -1 + 9t - 3t^2 + 2t^3
\\  f_3(t) = -5 + 6t + t^3
\\  f_4(t) = 5 + 7t - 5t^2 + 2t^3
\end{cases}$的秩和极大线性无关组。

**解**

$
    \left[\begin{array}{c}
        f_1(t) & f_2(t) & f_3(t) & f_4(t)
    \end{array}\right]
    =
    \left[\begin{array}{c}
        1 & t & t^2 & t^3
    \end{array}\right]
    \left[\begin{array}{c}
        1  & -1 & -5 & 5
    \\  4  & 9  & 6  & 7
    \\  -2 & -3 & 0  & -5
    \\  1  & 2  & 1  & 2
    \end{array}\right]
$

$
    \left[\begin{array}{c}
        1  & -1 & -5 & 5
    \\  4  & 9  & 6  & 7
    \\  -2 & -3 & 0  & -5
    \\  1  & 2  & 1  & 2
    \end{array}\right]
    \xrightarrow[]{初等行变换}
    \left[\begin{array}{c}
        1  & -1 & -5 & 5
    \\  0  & 1  & 2  & -1
    \\  0  & 0  & 0  & 0
    \\  0  & 0  & 0  & 0
    \end{array}\right]
$

故$r(\left[\begin{array}{c}
    f_1(t) & f_2(t) & f_3(t) & f_4(t)
\end{array}\right])=2$，极大线性无关组为

- $\left[\begin{array}{c} f_1(t) & f_2(t) \end{array}\right]$
- $\left[\begin{array}{c} f_1(t) & f_3(t) \end{array}\right]$
- $\left[\begin{array}{c} f_1(t) & f_4(t) \end{array}\right]$

以上任意一组。

### 过度矩阵

若存在两组基$α$、$β$，且

$$β = αA$$

<!--
    \left[\begin{array}{c}
        a_{11} & a_{12} & \dots  & a_{1n}
    \\  a_{21} & a_{22} & \dots  & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{n1} & a_{n2} & \dots  & a_{nn}
    \end{array}\right] 
-->

则矩阵$A$称为基$α$到基$β$的**过度矩阵**，上式称为**基变换公式**。

若$γ = αx = βy$，其中$x$、$y$分别为向量$γ$在不同基下的坐标，则$αx = (αA)y$即

$$x = Ay$$

**基的构造**

若$α$是一组基，$A$可逆，则$αA$也是一组基。

#### 例1

已知$α_1,α_2,α_3$是3维线性空间$V$的一组基，向量组$β_1,β_2,β_3$满足

$\begin{cases}
        β_1 + β_3 = α_1 + α_2 + α_3
    \\  β_1 + β_2 = α_2 + α_3
    \\  β_2 + β_3 = α_1 + α_3
\end{cases}$

(1) 证明$β_1, β_2, β_3$也是$V$的一组基。
(2) 求由基$β_1, β_2, β_3$到基$α_1, α_2, α_3$的过渡矩阵。
(3) 求向量$α_1 + 2α_2 − α_3$在基$β_1, β_2, β_3$下的坐标。

**解**

易得$
    \left[\begin{array}{c}
        β_1 & β_2 & β_3
    \end{array}\right]
    =
    \left[\begin{array}{c}
        α_1 & α_2 & α_3
    \end{array}\right]
    \left[\begin{array}{c}
        0 & 0 & 1
    \\  1 & 0 & 0
    \\  \frac{1}{2} & \frac{1}{2} & \frac{1}{2}
    \end{array}\right]
$

记$C=\left[\begin{array}{c}
        0 & 0 & 1
    \\  1 & 0 & 0
    \\  \frac{1}{2} & \frac{1}{2} & \frac{1}{2}
    \end{array}\right]$，明显$C$可逆，故$β_1, β_2, β_3$也是$V$的一组基。

$β=αC { \ \ \ ⇒ \ \ \ } α=βC^{-1}$，易得过渡矩阵$C^{-1}=\left[\begin{array}{c}
        0 & 1 & 0
    \\  1 & 1 & −2
    \\  1 & 0 & 0
    \end{array}\right]$

$α_1 + 2α_2 − α_3 =
    α
    \left[\begin{array}{c}
        1 \\ 2 \\ -1
    \end{array}\right]
    =
    βC^{-1}
    \left[\begin{array}{c}
        1 \\ 2 \\ -1
    \end{array}\right]
    =
    β
    \left[\begin{array}{c}
        2 \\ 5 \\ 1
    \end{array}\right]
$

#### 例2

已知$R^{2×2}$的两组基

- $①=\left[
        \left[\begin{array}{c}
            1 & 0 \\ 0 & 0
        \end{array}\right],
        \left[\begin{array}{c}
            1 & 1 \\ 0 & 0
        \end{array}\right],
        \left[\begin{array}{c}
            1 & 1 \\ 1 & 0
        \end{array}\right],
        \left[\begin{array}{c}
            1 & 1 \\ 1 & 1
        \end{array}\right]
    \right]$
- $②=\left[
        \left[\begin{array}{c}
            1 & 0 \\ 1 & 1
        \end{array}\right],
        \left[\begin{array}{c}
            0 & 1 \\ 1 & 1
        \end{array}\right],
        \left[\begin{array}{c}
            1 & 1 \\ 1 & 0
        \end{array}\right],
        \left[\begin{array}{c}
            1 & 1 \\ 0 & 1
        \end{array}\right]
    \right]$

(1)由基①到基②的过渡矩阵。
(2)求在基①与基②下有相同坐标的矩阵。

**解**

取$R^{2×2}$中的一组自然基$③=\left[
        \left[\begin{array}{c}
            1 & 0 \\ 0 & 0
        \end{array}\right],
        \left[\begin{array}{c}
            0 & 1 \\ 0 & 0
        \end{array}\right],
        \left[\begin{array}{c}
            0 & 0 \\ 1 & 0
        \end{array}\right],
        \left[\begin{array}{c}
            0 & 0 \\ 0 & 1
        \end{array}\right]
    \right]$

则

- $①= ③
    \left[\begin{array}{c}
        1 & 1 & 1 & 1
    \\  0 & 1 & 1 & 1
    \\  0 & 0 & 1 & 1
    \\  0 & 0 & 0 & 1
    \end{array}\right] = ③A$
- $②=③
    \left[\begin{array}{c}
        1 & 0 & 1 & 1
    \\  0 & 1 & 1 & 1
    \\  1 & 1 & 1 & 0
    \\  1 & 1 & 0 & 1
    \end{array}\right] = ③B$

则$③ = ①A^{-1} = ②B^{-1}$，即$② = ①A^{-1}B$

<span class="hint">此处计算$A^{-1}B$（略）</span>

设$X = 
    \left[\begin{array}{c}
        x_1 & x_2 \\ x_3 & x_4
    \end{array}\right]
$，则$X = 
    ③
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ x_3 \\ x_4
    \end{array}\right]
    = ①A^{-1}
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ x_3 \\ x_4
    \end{array}\right]
    = ②B^{-1}
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ x_3 \\ x_4
    \end{array}\right]
$

坐标相同即$
    A^{-1}
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ x_3 \\ x_4
    \end{array}\right]
    = B^{-1}
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ x_3 \\ x_4
    \end{array}\right]$

$$(A^{-1} -  B^{-1})
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ x_3 \\ x_4
    \end{array}\right]
    = 0$$

<span class="hint">结果即为齐次线性方程组的解</span>
