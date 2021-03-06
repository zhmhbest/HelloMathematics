<link rel='stylesheet' href='../../../style/index.css'>
<script src='../../../style/index.js'></script>

# [数值分析：绪论2](../index.html)

[TOC]

## 范数

### 向量点积

- $\vec{x} = (x_1,x_2,\cdots,x_n)^T$
- $\vec{y} = (y_1,y_2,\cdots,y_n)^T$

$$\vec{x} \bullet \vec{y}
    = \sum_{i=1}^{n} x_iy_i
    = x_1y_1 + x_2y_2 + \cdots + x_ny_n
$$

**向量的模、向量的长度、向量的L2范数**

$$|\vec{x}| = \sqrt{ \vec{x} \bullet \vec{x} } = \sqrt{|x_1|^2 + |x_2|^2 + \cdots + |x_n|^2}$$

**性质**

- 当且仅当$\vec{x}=\vec{0}$时$\vec{x} \bullet \vec{x}=0$。
- $\vec{x} \bullet \vec{y} = \vec{y} \bullet \vec{x} =  y^T x = x^T y$
- $(α\vec{x}) \bullet \vec{y} = α(\vec{x} \bullet \vec{y})$
- $(\vec{x}_a + \vec{x}_b) \bullet \vec{y} = \vec{x}_a \bullet \vec{y} + \vec{x}_b \bullet \vec{y}$
- **柯西—施瓦茨不等式**：$|\vec{x} \bullet \vec{y}| ≤ |\vec{x}| ⋅ |\vec{y}|$
- **三角不等式**：$|\vec{x} + \vec{y}| ≤ |\vec{x}| + |\vec{y}|$

### 向量范数

| $L_0$ | $L_1$ | $L_2$ | $L_p, \,\,(p≥1)$ | $L_∞$
| - | - | - | - | -
| $\|x\|_0$          | $\|x\|_1$                          | $\|x\|_2$、$\vert{x}\vert$            | $\|x\|_p$                                                    | $\|x\|_∞$
| 向量中非零元素的个数 | $$\sum_{i=1}^{n} \vert{x_i}\vert$$ | $$\sqrt{ \sum_{i=1}^{n} {x_i^2} }$$   | $$(\sum\limits_{i=1}^{n}{\vert{x_i}\vert}^p)^{\frac{1}{p}}$$ | $$\max\left\{\vert{x_1}\vert, \vert{x_2}\vert, \cdots. \vert{x_n}\vert\right\}$$
| | 曼哈顿范数 | 欧式范数 | | 切比雪夫范数

<!-- **向量范数的等价性定理**

设$\|x\|_s$、$\|x\|_t$为$R^n$上向量的任意两种范数，则存在常数$c_1, c_2 > 0$，使对一切$x∈R^n$有$c_1 \|x\|_s ≤ \|x\|_t ≤ c_2 \|x\|_s$（**该定理不能推广到无穷维空间**）。 -->

<!-- ![](dump/范数等价性证明.jpg) -->

### 矩阵范数

>[矩阵论：矩阵范数](../../LinearAlgebra/LinerSpace/Normed.html#%E6%96%B9%E9%98%B5%E7%A9%BA%E9%97%B4rnn%E4%B8%8A%E7%9A%84%E8%8C%83%E6%95%B0)

**算子范数（从属范数）**

设$x∈R^n$，$A∈R^{n×n}$，给出一种向量范数$\|x\|_{ν}$（eg：$ν=1,2,∞$），相对应地，定义一个矩阵的非负函数。

$$\|A\|_ν = \max_{x≠0} \dfrac{\|Ax\|_{ν}}{\|x\|_{ν}}$$

则$\|A\|_ν$满足矩阵范数的性质，称$\|A\|_ν$为**算子范数**。

<div class='mark'>

| $\|A\|_1$  |  $\|A\|_2$ |  $\|A\|_∞$
| - | - | -
| $$\max\limits_{1≤j≤n} \sum\limits_{i=1}^{n} \vert{a_{ij}}\vert$$ | $$\sqrt{λ_{max} (A^TA)}$$ | $$\max\limits_{1≤i≤n} \sum\limits_{j=1}^{n} \vert{a_{ij}}\vert$$
| $A$的列范数 | $A$的谱范数 | $A$的行范数
</div>

**性质**

- $\|A\| ≥ 0$
- $\|cA\| = |c|⋅\|A\|$
- $\|A+B\| ≤ \|A\| + \|B\|$
- $\|AB\| ≤ \|A\|\|B\|$

#### 例

$A=
    \left[\begin{array}{c}
       1  & -2
    \\ -3 & 4
    \end{array}\right]
$

- $\|A\|_1 = \max((1+3), (2+4))=6$
- $\|A\|_2 = \sqrt{15 + \sqrt{221}} ≈ 5.46$
- $\|A\|_∞ = \max((1+2), (3+4))=7$


## 谱

$A$的所有特征值的全体，称$A$的谱，记作$λ(A)$。

### 谱半径

>$|a+bi| = \sqrt{a^2 + b^2}$

<div class='mark'>

$$ρ(A) = \max\limits_{1≤i≤n} |λ_i|$$
</div>

谱半径即包含所有特征值的圆的最小半径。

**性质**

- <span class='mark'>$ρ(A)≤\|A\|$（特征值上界）</span>
- 若$A∈R^{n×n}$为对称矩阵，则$\|A\|_2 = ρ(A)$。
- 若$\|B\|<1$，则$I±B$为非奇异矩阵，且$\|(I±B)^{-1}\| ≤ \dfrac{1}{1-\|B\|}$

## 病态矩阵

### 病态矩阵

假设非奇异矩阵$A$，考虑$Ax=b$。如果矩阵$A$或常数项$b$的微小变化，引起方程组$Ax=b$解的巨大变化，则称此方程组为**病态方程组**，矩阵$A$为**病态矩阵**。否则称为**良态方程组**
、**良态矩阵**。

### 条件数

<!-- **定理1**

$Ax=b≠0$，且$A(x+δx)=b+δb$，则$\dfrac{\|δx\|}{\|x\|} ≤ \|A^{-1}\| ⋅ \|A\| ⋅ \dfrac{\|δb\|}{\|b\|}$。
即$δx$对常数项$b$的影响上界为$\|A^{-1}\| ⋅ \|A\|$。

**定理2**

$(A+δA)(x+δx)=b$，则$\|δx\| ≤ \dfrac{
        \|A^{-1}\| ⋅ \|δA\| ⋅ \|x\|
    }{
        1 - \|A^{-1}(δA)\|
    }$。

设$\|A^{-1}\| ⋅ \|δA\| < 1$，则$
    \dfrac{\|δA\|}{x} ≤ \dfrac{
        \|A^{-1}\| ⋅ \|A\| ⋅ \dfrac{\|δA\|}{A}
    }{
        1 - \|A^{-1}\| ⋅ \|A\| ⋅ \dfrac{\|δA\|}{A}
    }$。

**综上** -->

$\|A^{-1}\| ⋅ \|A\|$刻画了解对原始数据变化的灵敏程度，即方程组的病态程度。

称$cond(A)_v = \|A^{-1}\|_v ⋅ \|A\|_v$（eg：$v=1, 2, ∞$）为矩阵$A$的**条件数**。其中条件数越大，矩阵越病态。

**性质**

- 若$A$非奇异，则$cond(A)_v = \|A^{-1}\|_v ⋅ \|A\|_v ≥ \|A^{-1}⋅ A\|_v = 1$。
- $cond(cA)_v = cond(A)_v$
- 若$A$为正交矩阵（$A^{-1}=A^T$），则$cond(A)_2 = 1$
- 若$A$非奇异，且$R$正交，则$cond(RA)_2 = cond(AR)_2 = cond(A)_2$

### 谱条件数

<div class='mark'>

- $cond(A)_2 = \|A^{-1}\|_2\|A\|_2 = \sqrt{ \dfrac{ λ_{max}(A^TA) }{ λ_{min}(A^TA) } }$
- 当$A$为对称矩阵时：$cond(A)_2 = \dfrac{ |λ_{max}| }{ |λ_{min}| }$，（$|λ_{max}|,|λ_{min}|$为绝对值最大和最小的特征值）

</div>

### 非条件数病态判别

矩阵病态的其它充分条件

- 矩阵元素间数量级差很大，且无一定规律。
- 矩阵行列式值相对来说很小。
- 列主元消去过程中，出现了量级很小的主元素。
- 数值求解过程中，计算解$x$的剩余向量$r=b-Ax$已经很小，但$x$仍不符合要求。

## 差商

<div class='mark'>

**差商表**

|节点|0阶差商|1阶差商|2阶差商|$\cdots$|
|:-:|:-:|:-:|:-:|:-:|
|$x_0$   |$f[x_0]$|            |                |        |
|$x_1$   |$f[x_1]$|$f[x_0,x_1]$|                |        |
|$x_2$   |$f[x_2]$|$f[x_1,x_2]$|$f[x_0,x_1,x_2]$|        |
|$x_3$   |$f[x_3]$|$f[x_2,x_3]$|$f[x_1,x_2,x_3]$|$\ddots$|
|$\vdots$|$\vdots$|$\vdots$    |$\vdots$        |$\vdots$|

- **零阶差商**：$f[x_0]=f(x_0)$
- **一阶差商**：$f[x_0,x_1]=\dfrac{f[x_1]-f[x_0]}{x_1-x_0}$
- **二阶差商**：$f[x_0,x_1,x_2]=\dfrac{f[x_1, x_2]-f[x_0, x_1]}{x_2-x_0}$
- **$K$阶差商（均差）**：$f[x_0,x_1,\cdots,x_{k-1},x_k]=\dfrac{f[x_1,\cdots,x_{k-1},x_k]-f[x_0,x_1,\cdots,x_{k-1}]}{x_k-x_0}$

**性质**

- 差商的值与节点的排列次序无关
- 若$f(x)$为$n$次多项式，则$f[x_0,x_1,\cdots,x_n]$为一个常数，$f[x_0,x_1,\cdots,x_n,x_{n+1}] = 0$。
- $f[x_0, \cdots, x_k]
    = \sum\limits_{i=0}^{k} \left[
        f(x_i) \left( \prod\limits_{^{j=0}_{j≠i}}^{k} \dfrac{1}{x_i-x_j} \right)
    \right]
$
- <span class='highlight'>$f[x_0,\cdots,x_k] = \dfrac{f^{(k)}(ξ)}{k!}, \,\,\, ξ∈[a,b]$</span>

</div>

#### 例1

$f(x)=1+x+x^2+x^3$，求$f[x_0,x_1,x_2,x_3]$

**解**

$f[x_0,x_1,x_2,x_3] = \dfrac{f^{(3)}(ξ)}{3!} = \dfrac{6}{3!} = 1$

#### 例2

已知多项式$f(x)=(x-x_0)(x-x_1)\cdots(x-x_n)$有$n+1$个互异节点，若$p≤n$，求$f[x_0,x_1,\dots,x_p]$

**解**

$f[x_0, \cdots, x_p]
    = \sum\limits_{i=0}^{p} \left[
        f(x_i) \left( \prod\limits_{^{j=0}_{j≠i}}^{k} \dfrac{1}{x_i-x_j} \right)
    \right]
$

明显对任意$x_i, { \ \ \ } i=0,1,\dots,n$，$f(x_i)=0$

故$f[x_0, \cdots, x_p]=0$

## 函数空间

### 函数内积

记区间$[a,b]$上所有连续函数全体为$C[a,b]$（线性空间），记所有次数不超过$n$的多项式为$P_n$，则$P_n$是$C[a,b]$的子空间。

若$f(x), g(x) ∈ C[a,b]$，则称

$$\int_a^b f(x)g(x) \,{\rm d}x$$

为$f(x)$与$g(x)$的内积，记为$(f, g)$。

**加权定义**

$$(f, g) = \int_a^b ρ(x)f(x)g(x) \,{\rm d}x$$

**性质**

- $(f, g) = (g, f)$
- $(cf, g) = c(f, g)$
- $(f_1+f_2, g) = (f_1, g) + (f_2, g)$

**正交**

若$(f, g)=0$，则称$f(x)$与$g(x)$，记为$f⊥g$。

### 函数平方模

$$\|f\|_2 = \sqrt{(f,f)} = \sqrt{\int_a^b f^2(x) \,{\rm d}x}$$

**加权定义**

$$\|f\|_2 = \sqrt{\int_a^b  ρ(x)f^2(x) \,{\rm d}x}$$

**性质**

- $\|f\|_2 = 0  \,⇔\,  f(x) = 0$
- $\|cf\|_2 = |c| ⋅ \|f\|_2$
- $\|f+g\|_2 ≤ \|f\|_2 + \|g\|_2$
- $|(f,g)| ≤ \|f\|_2 ⋅ \|g\|_2$

## 正交多项式

### 定义

<div class='mark'>

设$n$次多项式$p_n(x)=a_0+a_1x+\cdots+a_{n-1}x+a_nx, { \ \ \ } a_n≠0$，多项式序列$\big\{p_n(x)\big\}_{n=0}^{∞}$满足

<!-- 对于多项式$P_m(x)$、$P_n(x)$和权函数$ρ(x)≥0$，若[函数内积](#函数内积) -->

$$\left<p_m(x),\,p_n(x)\right> =  \int_{a}^{b} p_m(x)p_n(x)ρ(x) \,{\rm d}x = \begin{cases}
    0 & m≠n
\\  \|p_n(x)\|^2 & m=n
\end{cases}$$

则称$\big\{p_n(x)\big\}_{n=0}^{∞}$为区间$[a,b]$带权$ρ(x)$的**正交多项式（Orthogonal Polynomials）**，若此外还满足$\|p_n(x)\|^2 = 1$，则称为**规范正交多项式**。

**性质**

- $\big\{p_n(x)\big\}_{n=0}^{∞}$一定是$[a,b]$上线性无关的函数系，即$p_0(x),p_1(x),\dots,p_n(x)$线性无关
- 任何不高于$n$次的多项式，均可由$\big\{p_n(x)\big\}_{n=0}^{∞}$线性表出
- $p_n(x)$与任何不高于$n-1$次的多项式正交
- $n$次正交多项式$p_n(x)$有$n$个互异的实根，且全部落在$(a,b)$内

</div>

#### 例

$\big\{\varphi_n(x)\big\}_{n=0}^{∞}$是区间$[0,1]$上，最高次项系数为$1$的正交多项式序列，其中$\varphi_0(x)=1$，求$\int_0^1 x\varphi_2(x) {\rm d}x = $

**解**

$\int_0^1 x\varphi_0(x)\varphi_n(x) {\rm d}x
    = \int_0^1 x\varphi_n(x) {\rm d}x
    = \begin{cases}
        0 & n≠0
    \\  \frac{1}{2} & n=0
\end{cases}$

故$\int_0^1 x\varphi_2(x) {\rm d}x = 0$

<!-- ### 正交多项式等价

若$f_k(x), \,\,\,k=0,1,\cdots,n$为$C[a,b]$上的一组线性无关函数，则可得$C[a,b]$上一组两两正交的函数组$g_k(x), \,\,\,k=0,1,\cdots,n$满足：

1. $g_k(x)$为$f_0(x), f_1(x), \cdots, f_k(x)$的线性组合。
2. $f_k(x)$为$g_0(x), g_1(x), \cdots, g_k(x)$的线性组合。

$g_0(x), g_1(x), \cdots, g_n(x)$两两正交且满足1.、2.。
$$e_k(x) = \dfrac{1}{\|g_k\|_2} g_k(x), \,\,\,k=0,1,\cdots,n$$
称函数组$e_0(x), e_1(x), \cdots, e_n(x)$为**规范正交组**。
$P_n$上由线性无关函数$1,x,x^2,\cdots,x^n$经过*Schemite*正交化过程得到的多项式$p_0(x), p_1(x), \cdots, p_n(x)$称为$[a,b]$上的**正交多项式**。 -->

### Legendre多项式

<span class='hint'>勒让德多项式</span>

<div class='mark'>

由$\{ 1, x, x^2, \dots, x^n \}$经过*Schmidt*正交化得到

| 区间 | 权函数 | 表达式 | 最高项系数为1的表达式 |
|:-:|:-:|:-:|:-:|
| $[-1, 1]$ | $ρ(x)=1$ | $P_n(x) = \dfrac{1}{2^nn!} \dfrac{ {\rm d}^n }{ {\rm d}x^n } (x^2-1)^n$ | $P_n(x) = \dfrac{n!}{(2n)!} \dfrac{ {\rm d}^n }{ {\rm d}x^n } (x^2-1)^n$ |

**正交关系**

$$(P_m, P_n)=
    \begin{cases}
        0               & m≠n
    \\  \dfrac{2}{2n+1} & m=n
    \end{cases}
$$

**递推关系**

$
    \begin{cases}
        (n+1)P_{n+1}(x)=(2n+1)xP_n(x)-nP_{n-1}(x) & n=1,2,3,\cdots
    \\  P_0(x)=1
    \\  P_1(x)=x
    \\  P_2(x)=\dfrac{1}{2}(3x^2-1)
    \end{cases}
$
</div>

### Chebyshev多项式

<span class='hint'>切比雪夫多项式</span>

<div class='mark'>

| 区间 | 权函数 | 表达式 |
|:-:|:-:|:-:|
| $[-1, 1]$ | $ρ(x)=\dfrac{1}{\sqrt{1-x^2}}$ | $T_n(x)=cos({\rm narccosx})$ |

**正交关系**

$$(T_m, T_n) = \int_{-1}^{1}
    \dfrac{ T_m(x) T_n(x) }{ \sqrt{1-x^2} }
    {\rm d}x
    = \int_{0}^{π} {\cos}(mθ) ⋅  {\cos}(nθ) {\rm d}θ
    =
    \begin{cases}
        0           & m≠n
    \\  π           & m=n=0
    \\ \dfrac{π}{2} & m=n≠0
    \end{cases}
$$

**递推关系**

$
    \begin{cases}
        T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x) & n=1,2,3,\cdots
    \\  T_0(x)=1
    \\  T_1(x)=x
    \\  T_2(x)=2x^2-1
    \end{cases}
$
</div>

### Laguere多项式

<span class='hint'>拉盖尔多项式</span>

| 区间 | 权函数 | 表达式 |
|:-:|:-:|:-:|
| $[0, +∞)$ | $ρ(x)=e^{-x}$ | $L_n(x)=e^x \dfrac{ {\rm d}^n }{ {\rm d}x^n } (x^ne^{-x})$ |

**正交关系**

$$(L_m, L_n)
    =
    \int_{0}^{+∞} e^{-x}L_m(x)L_n(x) {\rm d}x
    =
    \begin{cases}
        0           & m≠n
    \\  (n!)^2      & m=n
    \end{cases}
$$

**递推关系**

$
    \begin{cases}
        L_{n+1}(x) = (2n+1-x)L_n(x)-n^2L_{n-1}(x) & n=1,2,3,\cdots
    \\  L_0(x)=1
    \\  L_1(x)=1-x
    \end{cases}
$

### Hermite多项式

<span class='hint'>埃尔米特多项式</span>

| 区间 | 权函数 | 表达式 |
|:-:|:-:|:-:|
| $(-∞, +∞)$ | $ρ(x)=e^{-x^2}$ | $H_n(x)=(-1)^n e^{x^2} \dfrac{ {\rm d}^n }{ {\rm d}x^n } (e^{-x^2})$ |

**正交关系**

$$(H_m, H_n)
    =
    \int_{-∞}^{+∞} e^{-x^2}H_m(x)H_n(x) {\rm d}x
    =
    \begin{cases}
        0          & m≠n
    \\  2^n (n!)\sqrt{π}  & m=n
    \end{cases}
$$

**递推关系**

$
    \begin{cases}
        H_{n+1}(x) = 2xH_n(x)-2nH_{n-1}(x) & n=1,2,3,\cdots
    \\  H_0(x)=1
    \\  H_1(x)=2x
    \end{cases}
$
