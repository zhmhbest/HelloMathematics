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

## 单射

若$α$是$V$的一组基

$$\begin{array}{l}
    T是单射
\\  ⇔ T(α_1),T(α_2),\dots,T(α_n)线性无关
\\  ⇔ T满
\\  ⇔ R(T)=V
\\  ⇔ N(T)=0
\end{array}$$