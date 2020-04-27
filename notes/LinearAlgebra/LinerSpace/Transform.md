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

**抽象组合**

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

同理可得

$$T(α_{1×n}A) = T(α_1,\dots,α_n)A$$

## 值域与核

>线性空间$V$的线性变换$T$的值域与核都是$V$的线性子空间。

### 值域

$$R(T) = \{ T(α) \bold{\ |\ } α∈V \}$$

称值域的维数（<span class='hint'>有结构的</span>）为$T$的**秩**，记为$rank(T)$。

若$α$是$V$的一组基，则$R(T) = Span\{ T(α_1), T(α_2), \dots, T(α_n) \}$。

### 核

$$N(T) = \{ α \bold{\ |\ } T(α)=0,α∈V \}$$

记作$Ker(T)$或$N(T)$或$T^{-1}(T)$，称为**零空间**或**核子空间**。

称核子空间的维数$dim(N(T))$（<span class='hint'>没有结构的</span>）为$T$的**亏度**（或**零度**）。

#### 例

$T$是$P_4(x)$中的如下线性变换

$$T\big(f(x)\big) = f''(x) + f(1)$$

求$T$得值域$R(T)$和核空间$N(T)$的基与维数。

**解**

取$P_4(x)$的一组基$1,x,x^2,x^3,x^4$。

$R(T) = Span \{ T(1),T(x),T(x^2),T(x^3),T(x^4) \} = Span \{ 1, 6x+1, 12x^2+1 \} = Span \{ 1, x, x^2 \}$

故$1, x, x^2$是$R(T)$的一组基，$dim(R(T)) = 3$。

设$α = a_0 + a_1x + a_2x^2 + a_3x^3 + a_4x^4$

$T(α) = (2a_2 + 6a_3x + 12a_4x^2) + (a_0+a_1+a_2+a_3+a_4)$

若$α∈N(T)$则$(2a_2 + 6a_3x + 12a_4x^2) + (a_0+a_1+a_2+a_3+a_4) = 0$

$\begin{cases}
    a_0+a_1+3a_2+a_3+a_4 = 0
\\  6a_3 = 0
\\  12a_4 = 0
\end{cases}$ 解得 $\begin{cases}
    a_0 = -a_1- 3a_2
\\  a_3 = a_4 = 0
\end{cases}$（取$a_1,a_2$为自由变量）

则$α = a_1(x_1-1) + a_2(x^2-3)$

故$\left[\begin{array}{c}
    x_1-1 & x^2-3
\end{array}\right]$即为$N(T)$的基，$dim(N(T))=2$。

## 单射

若$α$是$V$的一组基

$$\begin{array}{l}
    T是单射
\\  ⇔ T(α_1),T(α_2),\dots,T(α_n)线性无关
\\  ⇔ T满
\\  ⇔ R(T)=V
\\  ⇔ N(T)=0
\end{array}$$

## 不变子空间

$W$是$V$的子空间，若对于任意向量$α∈W$，有$T(α)∈W$，则称$W$是线性变换$T$的**不变子空间**，简称**T子空间**。

显然零空间是任何线性变换的不变子空间，称为**平凡不变子空间**。

## 表示矩阵

$α_1,α_2,\dots,α_n$是$V$的一组基，有

- $T(α_1) = c_{11}α_1 + c_{21}α_2 + \cdots + c_{n1}α_n$
- $T(α_2) = c_{12}α_1 + c_{22}α_2 + \cdots + c_{n2}α_n$
- $\cdots$
- $T(α_n) = c_{1n}α_1 + c_{2n}α_2 + \cdots + c_{nn}α_n$

则$
    \left[\begin{array}{c}
        T(α_1) & \cdots & T(α_n)
    \end{array}\right]
    =
    \left[\begin{array}{c}
        α_1 & \cdots & α_n
    \end{array}\right]
    \left[\begin{array}{c}
        c_{11} & \cdots & c_{1n}
    \\  \vdots & \ddots & \vdots
    \\  c_{n1} & \cdots & c_{nn}
    \end{array}\right]
    =αA
$

则称$A$为$T$在基$α$下的**表示矩阵**。

#### 例

线性变换$σ$为

$$
    σ
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ x_3
    \end{array}\right]
    =
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ x_1 + x_2
    \end{array}\right]
$$

求$σ$在标准基$ε_1,ε_2,ε_3 = 
    \left[\begin{array}{c}
        1 \\ 0 \\ 0
    \end{array}\right],
    \left[\begin{array}{c}
        0 \\ 1 \\ 0
    \end{array}\right],
    \left[\begin{array}{c}
        0 \\ 0 \\ 1
    \end{array}\right]
$下的矩阵。

**解**

$σ(ε_1) =
    \left[\begin{array}{c}
        1 \\ 0 \\ 1
    \end{array}\right]$，$σ(ε_2) =
    \left[\begin{array}{c}
        0 \\ 1 \\ 1
    \end{array}\right]$，$σ(ε_3) =
    \left[\begin{array}{c}
        0 \\ 0 \\ 0
    \end{array}\right]$

综上$σ(ε_1,ε_2,ε_3) = 
    \left[\begin{array}{c}
        1 & 0 & 0
    \\  0 & 1 & 0
    \\  0 & 0 & 1
    \end{array}\right]
$