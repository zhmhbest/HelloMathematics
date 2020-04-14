<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [概率论：随机变量](./index.html)

[TOC]

## 定义

![](./images/RandomVariable.png)

$X(e)$为定义在$S$上的实值单值函数，则称$X(e)$为随机变量。

- 对于$i≠j$，必有$X(i)∩X(j)=∅$

### 随机变量类型

- 离散型
- 连续型

### 概率密度

概率密度函数对区间积分的面积就是事件在这个区间发生的概率。

$$\int\nolimits_{-∞}^{+∞}{f(t)}\,{\rm d}t = 1$$

## 离散型随机变量

随机变量$X$的取值为有限个或可列无穷个。

$P\{ X=x_i \} = p_i, \ \ \ (i = 1, 2, \dots, n)$

| $X$ | $x_1$ | $x_2$  | $\dots$  | $x_n$  |
|  -  | - | - | - | - |
| $P$ | $p_1$ | $p_2$ | $\dots$ | $p_n$ |

$$\sum\limits_{i=1}^{n} p_i= 1$$

### 伯努力分布（Bernoulli Distribution）

若它的样本空间只包含两个元素，我们总能在$S=\{e_1, e_2\}$上定义一个服从伯努力分布分布的随机变量。

$X = \begin{cases}
    0 & e=e_1
\\  1 & e=e_2
\end{cases}$

记为

$$\begin{matrix}
    X∼B(1, p):
&   P\{X=k\} = p^k(1-p)^{1-k},
&   (k=0,1,\dots; 0<p<1)
\end{matrix}$$

| $X$ | $0$ | $1$  |
|  -  | - | - |
| $P$ | $1-p$ | $p$ |

### 二项分布（Binomial Distribution）

$$\begin{matrix}
    X∼B(n, p): 
&   P\{X=k\} = C_n^k p^k(1-p)^{n-k},
&   (k=0,1,\dots; 0<p<1)
\end{matrix}$$

### 泊松分布（Poisson Distribution）

$$\begin{matrix}
    X∼P(λ):
&   P\{X=k\} = \dfrac{λ^k}{k!}e^{-λ},
&   (k=0,1,2,\dots; λ>0)
\end{matrix}$$

### 几何分布（Geometric Distribution）

$$\begin{matrix}
    X∼Geom(p):
&   P\{X=k\} = p^{k-1}(1-p),
&   (k=1,2,\dots; 0<p<1)
\end{matrix}$$

### 超几何分布（Hypergeometric Distribution）

$$\begin{matrix}
    X~H(n,M,N):
&   P\{X=k\} = \dfrac
    {\mathop{C}_{M}^{k}\mathop{C}_{N-M}^{n-k}}
    {\mathop{C}_{N}^{n}},
&   (k=0,1,2,\dots,\min(n,M))
\end{matrix}$$

## 连续型随机变量

### 均匀分布（Uniform Distribution）

$X∼Unif(a, b)$

**密度函数**：$f(x)=
    \begin{cases}
        \dfrac{1}{b-a} \ \ \ \ & a < x < b
    \\  0              \ \ \ \ & others
    \end{cases}
$

**分布函数**：$F(x)=
    \begin{cases}
        0                & x < a
    \\  \dfrac{x-a}{b-a} & a ≤ x ≤ b
    \\  1                & x > b
    \end{cases}
$

### 指数分布（Exponential Distribution）

$X∼Exp(λ)$

**密度函数**：$f(x)=
    \begin{cases}
        λe^{-λx} \ \ \ \ & x>0
    \\  0        \ \ \ \ & x≤0
    \end{cases}
$

**分布函数**：$F(x)=
    \begin{cases}
        1-e^{-λx} \ \ \ \ & x>0
    \\  0         \ \ \ \ & x≤0
    \end{cases}
$

### 正态分布（Normal Distribution）

$X∼N(μ, σ^2)$

**密度函数**：$f(x)=
    \dfrac{1}{\sqrt{2π}σ}e^{-\dfrac{(x-μ)^2}{2σ^2}}
    \ \ \ \ -∞ < x < +∞
$

#### 标准正态分布

$X∼N(0, 1)$

**标准正态分布的密度函数**：$φ(x)=
    \dfrac{1}{\sqrt{2π}}e^{-\frac{x^2}{2}}
$

**标准正态分布的分布函数**：$Φ(x)=
    \int_{-∞}^{x} \dfrac{1}{\sqrt{2π}} e^{-\frac{t^2}{2}} {\rm d}t
$

### 埃尔朗分布（Erlang Distribution）

**密度函数**：$f(x)=
    \begin{cases}
        \dfrac{λ^n}{(n-1)!}x^{n-1}e^{-λx}
            \ \ \ \ & x>0
    \\  0
            \ \ \ \ & x≤0
    \end{cases}
$

### 卡方分布（chi-square Distribution）

**密度函数**：$f(x)=
    \begin{cases}
        \dfrac{1}{2^{\frac{n}{2}}Γ(\frac{n}{2})}
        x^{\frac{n}{2}-1}e^{-\frac{x}{2}}
            \ \ \ \ & x>0
    \\  0
            \ \ \ \ & x≤0
    \end{cases}
$

### 伽马分布（Gamma Distribution）

$X∼Γ(r, λ)$

**$Γ$函数**：$Γ(r) =
    \int\nolimits_{0}^{+∞}{x^{r-1}e^{-x}}\,{\rm d}x,
    \ \ \ \ x∈(0, +∞)
$

**密度函数**：$f(x)=
    \begin{cases}
        \dfrac{λ^r}{Γ(r)}x^{r-1}e^{-λx}
            \ \ \ \ & x>0
    \\  0
            \ \ \ \ & x≤0
    \end{cases}
$

当$r=1, Γ(1)=1$得到**指数分布**；
当$r=n, Γ(n)=(n-1)!$得到**埃尔朗分布**；
当$r=\frac{n}{2}, λ=\frac{1}{2}$得到**卡方分布**；
