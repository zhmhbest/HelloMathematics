<link rel='stylesheet' href='../../../style/index.css'>
<script src='../../../style/index.js'></script>

# [线性空间：线性变换](../index.html)

[TOC]

## 定义

对于任意$α,β∈V$，$k∈P$，映射$T$满足

- $T(α + β) = T(α) + T(β)$
- $T(kα) = kT(α)$

则称$T$是线性空间$V$的线性变换。

**几个线性变换**

- $T(f(t)) = \int_{0}^{t_0} f(t) {\rm d}t$，$f(t)∈P_n(t)$
- $T(X) = AX - XB$，$X∈R^{n×n}$且$X$为非零矩阵

## 值域与核

>线性空间$V$的线性变换$T$的值域与核都是$V$的线性子空间。

### 象空间（值域）

$$R(T) = \{ T(α) \bold{\ |\ } α∈V \}$$

称值域的维数（<span class='hint'>有结构的</span>）为$T$的**秩**，记为$rank(T)$。

<span class='highlight'>若$α$是$V$的一组基，$T(α)=αA$，则$R(T) = Span\{ T(α_1), T(α_2), \dots, T(α_n) \} = αA$，然后对$A$做初等列变换化为列最简，$A$的极大线性无关列左乘$α$即为$R(T)$的一组基。</span>

### 核空间

$$N(T) = \{ α \bold{\ |\ } T(α)=0,α∈V \}$$

记作$Ker(T)$或$N(T)$或$T^{-1}(T)$，称为**零空间**或**核子空间**。

称核子空间的维数$dim(N(T))$（<span class='hint'>没有结构的</span>）为$T$的**亏度**（或**零度**）。

<span class='highlight'>若$α$是$V$的一组基，$T(α)=αA$，构造$(β=αx)∈V$，则$T(β) = αAx = 0$，即解$Ax=0$，$x$的解左乘$α$即为$N(T)$的基。</span>

#### 例1

$T$是$P_4(x)$中的如下线性变换

$$T\big(f(x)\big) = f''(x) + f(1)$$

（1）求$T$的值域$R(T)$的基与维数；
（2）求$T$的核空间$N(T)$的基与维数。

**解**

（1）

取$P_4(x)$的一组基$1,x,x^2,x^3,x^4$。

$$
\begin{array}{l}
    R(T) \\ \\\\ \\\\ \\\\
\end{array}
\begin{array}{l}
        = Span \{ T(1),T(x),T(x^2),T(x^3),T(x^4) \}
\\\\    = Span \{ 0+1, 0+1, 2+1, 6x+1, 12x^2+1 \}
\\\\    = Span \{ 1, 6x+1, 12x^2+1 \}
\\\\    = Span \{ 1, x, x^2 \}
\end{array}
$$

故$1, x, x^2$是$R(T)$的一组基，$dim(R(T)) = 3$。

（2）

设$α = a_0 + a_1x + a_2x^2 + a_3x^3 + a_4x^4$

$T(α) = (2a_2 + 6a_3x + 12a_4x^2) + (a_0+a_1+a_2+a_3+a_4)$

若$α∈N(T)$则$T(α) = (2a_2 + 6a_3x + 12a_4x^2) + (a_0+a_1+a_2+a_3+a_4) = 0$

$\begin{cases}
    a_0+a_1+3a_2+a_3+a_4 = 0
\\  6a_3 = 0
\\  12a_4 = 0
\end{cases}$ 解得 $\begin{cases}
    a_0 = -a_1- 3a_2
\\  a_1 = a_1
\\  a_2 = a_2
\\  a_3 = 0
\\  a_4 = 0
\end{cases}$（取$a_1,a_2$为自由变量）

则$α = a_1(x_1-1) + a_2(x^2-3)$

故$\left[\begin{array}{c}
    x_1-1 & x^2-3
\end{array}\right]$即为$N(T)$的基，$dim(N(T))=2$。

#### 例2

已知$R^{2×2}$的线性变换$T(X) = MX - XM$，其中$X∈R^{2×2}, M=\left[\begin{array}{c} 1 & 2 \\ 0 & 3 \end{array}\right]$，求$R[T]$、$N[T]$的基与维数。

**解**

取$R^{2×2}$的一组基

$$
    \left[\begin{array}{c}
        E_{11} & E_{12} & E_{21} & E_{22}
    \end{array}\right]
    =
    \left[\begin{array}{c}
          \left[\begin{array}{c} 1 & 0 \\ 0 & 0 \end{array}\right]
        & \left[\begin{array}{c} 0 & 1 \\ 0 & 0 \end{array}\right]
        & \left[\begin{array}{c} 0 & 0 \\ 1 & 0 \end{array}\right]
        & \left[\begin{array}{c} 0 & 0 \\ 0 & 1 \end{array}\right]
    \end{array}\right]
$$

则$R[T] = Span\left[\begin{array}{c} T(E_{11}) & T(E_{12}) & T(E_{21}) & T(E_{22}) \end{array}\right] = $

$$
    Span\left(\begin{array}{c}
          \left[\begin{array}{c} 0 & -2 \\ 0 & 0 \end{array}\right]
        & \left[\begin{array}{c} 0 & -2 \\ 0 & 0 \end{array}\right]
        & \left[\begin{array}{c} 2 & 0 \\ 2 & -2 \end{array}\right]
        & \left[\begin{array}{c} 0 & 2 \\ 0 & 0 \end{array}\right]
    \end{array}\right)
$$

<div class='hint'>

$
    \left[\begin{array}{c}
          \left[\begin{array}{c} 0 & -2 \\ 0 & 0 \end{array}\right]
        & \left[\begin{array}{c} 0 & -2 \\ 0 & 0 \end{array}\right]
        & \left[\begin{array}{c} 2 & 0 \\ 2 & -2 \end{array}\right]
        & \left[\begin{array}{c} 0 & 2 \\ 0 & 0 \end{array}\right]
    \end{array}\right]
    =
    \left[\begin{array}{c}
        E_{11} & E_{12} & E_{21} & E_{22}
    \end{array}\right]
    \left[\begin{array}{c}
        0  & 0  & 2  & 0
    \\  -2 & -2 & 0  & 2
    \\  0  & 0  & 2  & 0
    \\  0  & 0  & -2 & 0
    \end{array}\right]
    \xrightarrow[]{初等行变换}
    \left[\begin{array}{c}
        1 & 1 & 0 & -1
    \\  0 & 0 & 1 & 0
    \\  0 & 0 & 0 & 0
    \\  0 & 0 & 0 & 0
    \end{array}\right]
$
</div>

观察可知$dim(R[T])=2$，即$R[T]=Span\left[\begin{array}{c}
    \left[\begin{array}{c} 2 & 0 \\ 2 & -2 \end{array}\right]
&   \left[\begin{array}{c} 0 & 2 \\ 0 & 0 \end{array}\right]
\end{array}\right]$

设$X = \left[\begin{array}{c} x_1 & x_2 \\ x_3 & x_4 \end{array}\right]$则

$$T(X) =
    \left[\begin{array}{c}
        2x_3 & 2x_4 - 2x_2 - 2x_1
    \\  2x_3 & -2x_3
    \end{array}\right]
    =
    \left[\begin{array}{c}
        0 & 0
    \\  0 & 0
    \end{array}\right]
$$

解得$\begin{cases}
        x_1 = x_1
    \\  x_2 = x_2
    \\  x_3 = 0
    \\  x_4 = x_2 + x_1
    \end{cases}$，$X = \left[\begin{array}{c}
        x_1 & x_2
    \\  0 & x_1 + x_2
    \end{array}\right]
    =
    x_1 \left[\begin{array}{c} 1 & 0 \\ 0 & 1 \end{array}\right]
    +
    x_2 \left[\begin{array}{c} 0 & 1 \\ 0 & 1 \end{array}\right]
$

即$dim(N[T])=2$，$\left[\begin{array}{c} 1 & 0 \\ 0 & 1 \end{array}\right], \left[\begin{array}{c} 0 & 1 \\ 0 & 1 \end{array}\right]$是$N[T]$的基。

## 表示矩阵

### 定义

$α = (α_1,α_2,\dots,α_n)$是$V$的一组基，有

- $T(α_1) = a_{11}α_1 + a_{21}α_2 + \cdots + a_{n1}α_n$
- $T(α_2) = a_{12}α_1 + a_{22}α_2 + \cdots + a_{n2}α_n$
- $\cdots$
- $T(α_n) = a_{1n}α_1 + a_{2n}α_2 + \cdots + a_{nn}α_n$

则$
    \left[\begin{array}{c}
        T(α_1) & \cdots & T(α_n)
    \end{array}\right]
    = 
    T(α_1, \dots, α_n)
    =
    \left[\begin{array}{c}
        α_1 & \cdots & α_n
    \end{array}\right]
    \left[\begin{array}{c}
        a_{11} & \cdots & a_{1n}
    \\  \vdots & \ddots & \vdots
    \\  a_{n1} & \cdots & a_{nn}
    \end{array}\right]
    =αA
$

即

<span class='highlight'>$$T(α) = αA$$</span>

则称$A$为$T$在基$α$下的**表示矩阵**（<span class='hint'>也可看做$T(α)$在基$α$下的坐标</span>）。

#### 例

线性空间$P^{3×3}$的线性变换$σ$为

$$
    σ \left(
        \left[\begin{array}{c}
            x_1 \\ x_2 \\ x_3
        \end{array}\right]
    \right)
    =
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ x_1 + x_2
    \end{array}\right]
$$

求$σ$在标准基$(ε_1, ε_2, ε_3) =
    \left[\begin{array}{c}
        1 \\ 0 \\ 0
    \end{array}\right],
    \left[\begin{array}{c}
        0 \\ 1 \\ 0
    \end{array}\right],
    \left[\begin{array}{c}
        0 \\ 0 \\ 1
    \end{array}\right]
$下的表示矩阵。

**解**

$$
    σ \left(
        \left[\begin{array}{c}
            x_1 \\ x_2 \\ x_3
        \end{array}\right]
    \right)
    =
    \left[\begin{array}{c}
        1 & 0 & 0
    \\  0 & 1 & 0
    \\  1 & 1 & 0
    \end{array}\right]
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ x_3
    \end{array}\right]
$$

即求$σ(ε_1, ε_2, ε_3) = (ε_1, ε_2, ε_3)A$的矩阵$A$。

$
    \begin{array}{l}
        σ(ε_1, ε_2, ε_3) \\
        \\ \\ \\ \\
        \\ \\ \\ \\
        \\ \\ \\ \\
    \end{array}
    \begin{array}{l}
        = \left[\begin{array}{c}
            1 & 0 & 0
        \\  0 & 1 & 0
        \\  1 & 1 & 0
        \end{array}\right]
        \left[\begin{array}{c}
            ε_1 & ε_2 & ε_3
        \end{array}\right]
    \\\\=
        \left[\begin{array}{c}
            1 & 0 & 0
        \\  0 & 1 & 0
        \\  1 & 1 & 0
        \end{array}\right]
        \left[\begin{array}{c}
            1 & 0 & 0
        \\  0 & 1 & 0
        \\  0 & 0 & 1
        \end{array}\right]
    \\\\ =
        \left[\begin{array}{c}
            1 & 0 & 0
        \\  0 & 1 & 0
        \\  1 & 1 & 0
        \end{array}\right]
    \\\\ =
        \left[\begin{array}{c}
            ε_1 & ε_2 & ε_3
        \end{array}\right]
        \left[\begin{array}{c}
            1 & 0 & 0
        \\  0 & 1 & 0
        \\  1 & 1 & 0
        \end{array}\right]
    \end{array}
$

综上可得$A =
    \left[\begin{array}{c}
        1 & 0 & 0
    \\  0 & 1 & 0
    \\  1 & 1 & 0
    \end{array}\right]
$。

### 抽象组合

$T$作用到抽象向量组的组合上，形式上组合系数直接提到外面

$$
    \begin{array}{l}
        T\left(
            \left[\begin{array}{c}
                α_1 & \cdots & α_n
            \end{array}\right]
            \left[\begin{array}{c}
                x_1 \\ \vdots \\ x_n
            \end{array}\right]
        \right)
    \\ \\ \\ \\ \\ \\ \\ \\ \\ \\
    \end{array}
    \begin{array}{l}
    \\  = T(x_1α_1 + \cdots + x_nα_n)
    \\
    \\  = x_1T(α_1) + \cdots + x_nT(α_n)
    \\
    \\  = 
        \left[\begin{array}{c}
            T(α_1) & \cdots & T(α_n)
        \end{array}\right]
        \left[\begin{array}{c}
            x_1 \\ \vdots \\ x_n
        \end{array}\right]
    \\  = T(α_1,\dots,α_n)
        \left[\begin{array}{c}
            x_1 \\ \vdots \\ x_n
        \end{array}\right]
    \end{array}
$$

上式，当$
    \left[\begin{array}{c}
        x_1 \\ \vdots \\ x_n
    \end{array}\right]
$替换为矩阵$X$时同样适用，即

<span class='highlight'>$$T(αX) = T(α)X = αAX$$</span>

### 坐标关系

当$α,T(α)$在基$α$下的坐标分别是$x,y$时

$
    \begin{cases}
        T(α) = T(αx) = αAx
    \\  T(α) = αy
    \end{cases}
    { \ \ \ ⇒ \ \ \ }
    αAx = αy
    { \ \ \ ⇒ \ \ \ }
    y = Ax
$

当$A$可逆时
- ${ \ \ \ ⇔ \ \ \ } R(T)$满
- ${ \ \ \ ⇔ \ \ \ } T$可逆

### 线性变换复合

若在基$α$下，$T_1(α) = αA$，$T_2(α) = αB$，则

- $T_1+T_2$的表示矩阵为$A+B$
- $kT_1$的表示矩阵为$kA$
- $T_1T_2$的表示矩阵为$AB$
- 若$T_1$可逆，则$T_1^{-1}$的表示矩阵为$A^{-1}$

#### 例

在$R^{2×2}$上的变换$T(X)=
    X
    \left[\begin{array}{c}
        1 & 1 \\ 1 & -1
    \end{array}\right]
$，$S(X)=
    X
    \left[\begin{array}{c}
        1 & 0 \\ -2 & 0
    \end{array}\right]
$

（1）$T+S$，$TS$在基$ e = \left[\begin{array}{c}
    \left[\begin{array}{c}
        1 & 0 \\ 0 & 0
    \end{array}\right]
    &
    \left[\begin{array}{c}
        0 & 1 \\ 0 & 0
    \end{array}\right]
    &
    \left[\begin{array}{c}
        0 & 0 \\ 1 & 0
    \end{array}\right]
    &
    \left[\begin{array}{c}
        0 & 0 \\ 0 & 1
    \end{array}\right]
\end{array}\right]$下的矩阵；
（2）$T,S$是否可逆，若可逆，求其其逆变换。

**解**

（1）

<span class='hint'>$T(e) =
    e
    \left[\begin{array}{c}
        1 & 1 \\ 1 & -1
    \end{array}\right] 
    = 
    \left[\begin{array}{c}
        \left[\begin{array}{c}
            1 & 1 \\ 0 & 0
        \end{array}\right]
        &
        \left[\begin{array}{c}
            1 & -1 \\ 0 & 0
        \end{array}\right]
        &
        \left[\begin{array}{c}
            0 & 0 \\ 1 & 1
        \end{array}\right]
        &
        \left[\begin{array}{c}
            0 & 0 \\ 1 & -1
        \end{array}\right]
    \end{array}\right]
$</span>

$T(e) = 
    e
    \left[\begin{array}{c}
        1 & 1  & 0 & 0
    \\  1 & -1 & 0 & 0
    \\  0 & 0  & 1 & 1
    \\  0 & 0  & 1 & -1
    \end{array}\right]
    \xrightarrow[]{记为}
    eA
$

<span class='hint'>$S(e) = 
    e
    \left[\begin{array}{c}
        1 & 0 \\ -2 & 0
    \end{array}\right]
    =
    \left[\begin{array}{c}
        \left[\begin{array}{c}
            1 & 0 \\ 0 & 0
        \end{array}\right]
        &
        \left[\begin{array}{c}
            -2 & 0 \\ 0 & 0
        \end{array}\right]
        &
        \left[\begin{array}{c}
            0 & 0 \\ 1 & 0
        \end{array}\right]
        &
        \left[\begin{array}{c}
            0 & 0 \\ -2 & 0
        \end{array}\right]
    \end{array}\right]
$</span>

$S(e) = 
    e
    \left[\begin{array}{c}
        1 & -2 & 0 & 0
    \\  0 & 0  & 0 & 0
    \\  0 & 0  & 1 & -2
    \\  0 & 0  & 0 & 0
    \end{array}\right]
    \xrightarrow[]{记为}
    eB
$

则$T+S$的表示矩阵为$A+B$，$TS$的表示矩阵为$AB$（计算略）。

（2）明显$r(B)≠4$，$S$不可逆；计算得$r(A)=4$，接下来求$T^{-1}$（$T^{-1}$也是一个线性变换）

$$X = T^{-1}\big(T(X)\big) 
    = 
    T^{-1} \left(
        X
        \left[\begin{array}{c}
            1 & 1 \\ 1 & -1
        \end{array}\right]
    \right)
    =
    T^{-1}(X)
    \left[\begin{array}{c}
        1 & 1 \\ 1 & -1
    \end{array}\right]
$$

综上

$$T^{-1}(X) =
    X
    \left[\begin{array}{c}
        1 & 1 \\ 1 & -1
    \end{array}\right]^{-1}
$$

### 基过度

$T$在基$α,β$下的表示矩阵为$A,B$，且$β=αP$则

$
    \begin{cases}
        T(α) = αA
    \\  T(β) = \underline{β}B = αPB
    \\  T(β) = T(αP) = \underline{T(α)}P = αAP
    \end{cases}
    { \ \ \ ⇒ \ \ \ }
    αPB = αAP
    { \ \ \ ⇒ \ \ \ }
$

$$B = P^{-1}AP$$

<!-- 
## 单射

若$α$是$V$的一组基

$$\begin{array}{l}
    T是单射
\\  ⇔ T(α_1),T(α_2),\dots,T(α_n)线性无关
\\  ⇔ T满
\\  ⇔ R(T)=V
\\  ⇔ N(T)=0
\end{array}$$
-->

## 不变子空间

$W$是$V$的子空间，若对于任意向量$α∈W$，有$T(α)∈W$，则称$W$是线性变换$T$的**不变子空间**，简称**T子空间**。

显然零空间是任何线性变换的不变子空间，称为**平凡不变子空间**。

## 线性变换的特征值与特征向量

设$T$是数域$P$上$n$维线性空间$V$的线性变换。如果对于数域$P$中的某一个数$λ$，存在非零向量$α∈V$，使得

$$T(α)=λα$$

成立，则称$λ$为线性变换$T$的特征值，$α$为线性变换$T$的属于特征值$λ$的特征向量。

**求线性变换的特征值与特征向量**

取基为$α$

- **特征值**：求线性变换在该基下表示矩阵$A$的特征值，即为线性变换的特征值；
- **特征向量**：<span class='highlight'>$A$的特征向量左乘基$α$，即为线性变换的特征向量。</span>
