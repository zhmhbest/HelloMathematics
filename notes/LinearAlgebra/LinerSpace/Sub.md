<link rel='stylesheet' href='../../../style/index.css'>
<script src='../../../style/index.js'></script>

# [线性空间：线性子空间](../index.html)

[TOC]

## 定义

设$V$是数域$P$上的一个线性空间，$S$为$V$中的一个非空子集。若$S$对于$V$中定义的加法与数乘构成一个线性空间，则$S$称为$V$的**线性子空间**。**充要条件**是$S$对于$V$中的线性运算封闭（$α+β∈S,kα∈S$）。

单独一个零向量构成的子集$\{0\}$与$V$都是$V$的线性子空间，称它们为线性空间$V$的**平凡子空间**。

**子空间的一组基可以扩成大空间的一组基。**

## 生成子空间

如果$V$是数域$P$上的一个线性空间，$α_1, α_2, \dots,α_m$是给定的$m$个向量，定义一个集合

$$S = \{ λ_1α_1 + \cdots + λ_mα_m \bold{\ |\ } λ_1,\dots,λ_m ∈ P\}$$

显然集合$S$非空，且$S$对于$V$中的线性运算封闭，因此$S$是$V$的子空间，记作$Span(α_1, α_2, \dots,α_m)$，称为**生成子空间**，$α_1, α_2, \dots,α_m$称为**生成元**。其生成元的极大线性无关组就是生成子空间的一组基。

#### 例

$\begin{cases}
    f_1(t) = 1 + 4t - 2t^2 + t^3
\\  f_2(t) = -1 + 9t - 3t^2 + 2t^3
\\  f_3(t) = -5 + 6t + t^3
\\  f_4(t) = 5 + 7t - 5t^2 + 2t^3
\end{cases}$

(1) 求$Span\{f_1(t), f_2(t), f_3(t), f_4(t) \}$的基与维数。
(2) 将$Span\{f_1(t), f_2(t), f_3(t), f_4(t) \}$的基扩充成$P_3(t)$的基。

**解**

$
    \left[\begin{array}{c}
        f_1(t) & f_2(t) & f_3(t) & f_4(t)
    \end{array}\right]
    =
    \left[\begin{array}{c}
        1 & t & t^2 & t^3
    \end{array}\right]
    A
$

$A =
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

取生成子空间的基$(f_1, f_2)$

$
    \left[\begin{array}{c}
        f_1 & f_2 & ? & ?
    \end{array}\right]
    =
    \left[\begin{array}{c}
        1 & t & t^2 & t^3
    \end{array}\right]
    \left[\begin{array}{c}
        1  & -1 & ? & ?
    \\  4  & 9  & ? & ?
    \\  -2 & -3 & ? & ?
    \\  1  & 2  & ? & ?
    \end{array}\right]
$

仅需在右侧矩阵添加两列（原则上任意，但简单方便计算）并使其可逆，添加$
    \left[\begin{array}{c}
        0 & 0
    \\  0 & 0
    \\  1 & 0
    \\  0 & 1
    \end{array}\right]
$后得

$
    \left[\begin{array}{c}
        f_1 & f_2 & t^2 & t^3
    \end{array}\right]
    =
    \left[\begin{array}{c}
        1 & t & t^2 & t^3
    \end{array}\right]
    \left[\begin{array}{c}
        1  & -1 & 0 & 0
    \\  4  & 9  & 0 & 0
    \\  -2 & -3 & 1 & 0
    \\  1  & 2  & 0 & 1
    \end{array}\right]
$

得到$P_3(t)$的一组基$(f_1, f_2, t^2, t^3)$。

## 子空间的交并

**交空间**

设$V_1$，$V_2$是线性空间$V$的子空间，$V_1∩V_2$（<span class='hint'>$V_1∩V_2$没有结构</span>）也是$V$的子空间（$V_1∪V_2$不是子空间），称这个子空间为$V_1$与$V_2$的**交空间**。

<span class='highlight'>对于任意$γ∈V_1(α)∩V_2(β)$，$x,y∈P$，应有$γ=αx=βy$，即$
\left[\begin{array}{c} α & -β \end{array}\right]{\cdot}\left[\begin{array}{c} x \\ y \end{array}\right]$</span>。

**和空间**

设$V_1$，$V_2$是线性空间$V$的子空间

$$V_1 + V_2 = \{ α_1+α_2 \bold{\ |\ } α_1∈V_1, α_2∈V_2 \}$$

也是$V$的子空间，称这个子空间为$V_1$与$V_2$的**和空间**。

<span class='highlight'>实际运算时，应将$V_1$和$V_2$的向量拼在一起即为$V_1$与$V_2$的和空间。</span>

#### 例

$
    α_1 = \left[\begin{array}{c} 1  \\ 2  \\ 1 \\ 0 \end{array}\right],
    α_2 = \left[\begin{array}{c} -1 \\ 1  \\ 1 \\ 1 \end{array}\right],
    β_1 = \left[\begin{array}{c} 2  \\ -1 \\ 0 \\ 1 \end{array}\right],
    β_2 = \left[\begin{array}{c} 1  \\ -1 \\ 3 \\ 7 \end{array}\right]
$

$V_1 = Span(α_1, α_2)$
$V_2 = Span(β_1, β_2)$

（1）求$V_1+V_2$的维数及基。
（2）求$V_1∩V_2$的维数及基。

**解**

（1）

$V_1+V_2 = Span(α_1, α_2, β_1, β_2)$

$
    \left[\begin{array}{c}
        1 & −1 & 2  & 1
    \\  2 & 1  & −1 & −1
    \\  1 & 1  & 0  & 3
    \\  0 & 1  & 1  & 7
    \end{array}\right]
    \xrightarrow[]{初等行变换}
    \left[\begin{array}{c}
        1 & −1 & 2  & 1
    \\  0 & 1  & −3 & −5
    \\  0 & 0  & 4  & 12
    \\  0 & 0  & 0  & 0
    \end{array}\right]
$

明显$r(α_1, α_2, β_1, β_2)=3$，基为$(α_1, α_2, β_1)$或$(α_1, α_2, β_2)$。

（2）

对于任意$γ∈V_1∩V_2$有$a_1,a_2,b_1,b_2∈P$满足

$γ
    = \left[\begin{array}{c}
        α_1 & α_2
    \end{array}\right]
    \left[\begin{array}{c}
        a_1 \\ a_2
    \end{array}\right]
    = \left[\begin{array}{c}
        β_1 & β_2
    \end{array}\right]
    \left[\begin{array}{c}
        b_1 \\ b_2
    \end{array}\right]
$

即$
    \left[\begin{array}{c}
        α_1 & α_2 & -β_1 & -β_2
    \end{array}\right]
    \left[\begin{array}{c}
        a_1 \\ a_2 \\ b_1 \\ b_2
    \end{array}\right]
    = 0
$

$
    \left[\begin{array}{c}
        α_1 & α_2 & -β_1 & -β_2
    \end{array}\right]
    =
    \left[\begin{array}{c}
        1 & -1 & -2 & -1
    \\  2 & 1  & 1  & 1
    \\  1 & 1  & 0  & -3
    \\  0 & 1  & -1 & -7
    \end{array}\right]
    \xrightarrow[]{初等行变换}
    \left[\begin{array}{c}
        1 & 0 & 0 & 1
    \\  0 & 1 & 0 & -4
    \\  0 & 0 & 1 & 3
    \\  0 & 0 & 0 & 0
    \end{array}\right]
$

解得$
    \left[\begin{array}{c}
        a_1 \\ a_2 \\ b_1 \\ b_2
    \end{array}\right]
    = b_2
    \left[\begin{array}{c}
        -1 \\ 4 \\ -3 \\ 1
    \end{array}\right]
$

$
    \begin{matrix}
        γ \\\\\\\\\\\\\\\\\\
    \end{matrix}
    \begin{array}{l}
    =
        \left[\begin{array}{c}
            α_1 & α_2
        \end{array}\right]
        \left[\begin{array}{c}
            a_1 \\ a_2
        \end{array}\right]
    \\=
        \left[\begin{array}{c}
            1 & -1
        \\  2 & 1
        \\  1 & 1
        \\  0 & 1
        \end{array}\right]
        \left[\begin{array}{c}
            -1 \\ 4
        \end{array}\right]
        b_2
    \\=
        \left[\begin{array}{c}
            -5 \\ 2 \\ 3 \\ 4
        \end{array}\right]
        b_2
    \end{array}
$

故$\left[\begin{array}{c}
        -5 \\ 2 \\ 3 \\ 4
    \end{array}\right]
$是$V_2∩V_2$得一组基且$dim(V_1∩V_2)=1$。

## 维数定理

$$dim(V_1 + V_2) = dim(V_1) + dim(V_2) - dim(V_1∩V_2)$$

#### 例

$V_1,V_2$是线性空间$V^n$的两个子空间，$dim(V_1)+dim(V_2)>n$。证明必存在$α≠0$，使得$α∈V_1∩V_2$。

**证明**

明显$(V_1 + V_2)∈V^n$，有$dim(V_1 + V_2) ≤ n$

又有$dim(V_1) + dim(V_2) = dim(V_1 + V_2) + dim(V_1∩V_2) > n$

故$dim(V_1∩V_2) > n - dim(V_1 + V_2) ≥ 0$

$dim(V_1∩V_2) > 0$，即$V_1∩V_2$内一定有非零元。

## 直和

若$V_1+V_2$中每个向量的分解式$α = α_1 + α_2 \ \ \ (α_1∈V_1, α_2∈V_2)$都是唯一的，则称$V_1+V_2$为**直和**。

记作

$$V_1⊕V_2$$

**等价形式**

- $V_1+V_2$为直和
- <span class='highlight'>$V_1∩V_2=\{0\}$</span>
- $α_1 + α_2 = 0 { \ \ \ ⇒ \ \ \ } α_1 = α_2=0$
- <span class='highlight'>$dim(V_1 + V_2) = dim(V_1) + dim(V_2)$</span>
- $V_1+V_2$的基由$V_1$的基与$V_2$的基合并而成

**直和分解**

若$V=V_1⊕V_2$，则称$V_1$与$V_2$是互补的，两者互称为对方的**补空间**。称$V_1⊕V_2$为$V$的**直和分解**。

#### 例1

$V_1 = \left\{
    \left[\begin{array}{c}
        x_1 & x_2
    \\  x_3 & x_4
    \end{array}\right]
    \Big|\,
    2x_1 + 3x_2 - x_3 = 0,
    x_1 + 2x_2 + x_3 - x_4 = 0
\right\}$

$V_2 = \left\{
    \left[\begin{array}{c}
        2   & -1
    \\  a+2 & 1
    \end{array}\right]
    ,
    \left[\begin{array}{c}
        -1 & 2
    \\  4  & a+8
    \end{array}\right]
\right\}$

（1）求$V_1$的基与维数。
（2）$a$为何值时$V_1+V_2$是直和；当$V_1+V_2$不是直和时，求$V_1∩V_2$的维数。

**解**

（1）

解$\begin{cases}
    2x_1 + 3x_2 - x_3 = 0
\\  x_1 + 2x_2 + x_3 - x_4 = 0
\end{cases}$，得$
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ x_3 \\ x_4
    \end{array}\right]
    =
    k_1
    \left[\begin{array}{c}
        1 \\ 0 \\ 2 \\ 3
    \end{array}\right]
    +
    k_2
    \left[\begin{array}{c}
        0 \\ 1 \\ 3 \\ 5
    \end{array}\right]
$，即

$$
    \left[\begin{array}{c}
        x_1 & x_2
    \\  x_3 & x_4
    \end{array}\right]
    =
    k_1
    \left[\begin{array}{c}
        1 & 0
    \\  2 & 3
    \end{array}\right]
    +
    k_2
    \left[\begin{array}{c}
        0 & 1
    \\  3 & 5
    \end{array}\right]
$$

故$dim(V_1)=2$，$base(V_1)=\left[\begin{array}{c}
    \left[\begin{array}{c}
        1 & 0
    \\  2 & 3
    \end{array}\right]
    &
    \left[\begin{array}{c}
        0 & 1
    \\  3 & 5
    \end{array}\right]
\end{array}\right]$

（2）

为直和即$a$为何值时$V_1∩V_2=\{0\}$

$$γ=
    x_1
    \left[\begin{array}{c}
        1 & 0
    \\  2 & 3
    \end{array}\right]
    + x_2
    \left[\begin{array}{c}
        0 & 1
    \\  3 & 5
    \end{array}\right]
    = x_3
    \left[\begin{array}{c}
        2   & -1
    \\  a+2 & 1
    \end{array}\right]
    + x_4
    \left[\begin{array}{c}
        -1 & 2
    \\  4  & a+8
    \end{array}\right]
$$

即$
    \left[\begin{array}{c}
        x_1−2x_3+x_4            & x_2+x_3−2x_4
    \\  2x_1+3x_2−(a+2)x_3−4x_4 & 3x_1+5x_2−x_3−(a+8)x_4
    \end{array}\right]
    = 0
$

即$\begin{cases}
    x_1-2x_3+x_4=0
\\  x_2+x_3-2x_4=0
\\  2x_1+3x_2−(a+2)x_3-4x_4=0
\\  3x_1+5x_2-x_3-(a+8)x_4=0
\end{cases}$

即$
    \left[\begin{array}{c}
        1 & 0 & -2   & 1
    \\  0 & 1 & 1    & -2
    \\  2 & 3 & -a-2 & -4
    \\  3 & 5 & -1   & -a-8
    \end{array}\right]
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ x_3 \\ x_4
    \end{array}\right]
    = Ax = 0
$

则当$r(A)=4 { \ \ \ ⇔ \ \ \ } |A|≠0 { \ \ \ ⇔ \ \ \ } A$可逆时$V_1+V_2$是直和。

$
    \left[\begin{array}{c}
        1 & 0 & -2   & 1
    \\  0 & 1 & 1    & -2
    \\  2 & 3 & -a-2 & -4
    \\  3 & 5 & -1   & -a-8
    \end{array}\right]
    \xrightarrow[]{初等行变换}
    \left[\begin{array}{c}
        1&0&-2&1
    \\  0&1&1&-2
    \\  0&0&-a-1&0
    \\  0&0&0&-a-1
    \end{array}\right]
$

当$a≠-1$时，$r(A)=4$，是直和
当$a=-1$时，$r(A)=2$，（选取$x_3,x_4$为自由变量）

$$γ=
    x_3
    \left[\begin{array}{c}
        2 & -1
    \\  1 & 1
    \end{array}\right]
    + x_4
    \left[\begin{array}{c}
        -1 & 2
    \\  4  & 7
    \end{array}\right]
$$

则$dim(V_1∩V_2)=2$，$base(V_1∩V_2)=\left[\begin{array}{c}
    \left[\begin{array}{c}
        2 & -1
    \\  1 & 1
    \end{array}\right]
    &
    \left[\begin{array}{c}
        -1 & 2
    \\  4  & 7
    \end{array}\right]
\end{array}\right]$

#### 例2

$R^{n×n}$的两个子空间，$S_1 = \{ A \bold{\ |\ } A^T=A \}$，$S_2 = \{ A \bold{\ |\ } A^T=-A \}$

（1）证明$R^{n×n}=S_1⊕S_2$
（2）当$n=3$时，求$S_1$的一组基及$dim(S_2)$

**证明**

（1）

对于矩阵$A$，若$A∈S_1$，$A∈S_2$则

$
    \begin{cases}
        A^T=A
    \\  A^T=-A
    \end{cases}
    { \ \ \ ⇒ \ \ \ }
    A = -A
    { \ \ \ ⇒ \ \ \ }
    A = 0_{n×n}
$

即$S_1∩S_2 = \{0\}$（保证了直和）

<span class='hint'>$dim(S_1) = 1 + 2 + \dots + (n-1) + n$</span>
<span class='hint'>$dim(S_2) = 1 + 2 + \dots + (n-1)$</span>
<span class='hint'>$dim(S_1 + S_2) = dim(S_1) + dim(S_2) = n(n-1) + n = n^2 = dim(R^{n×n})$</span>

对任意矩阵$A$，令$B=\dfrac{A+A^T}{2}$，$C=\dfrac{A-A^T}{2}$，则

$$\begin{matrix}
    A=B+C & (B∈S_1,C∈S_2)
\end{matrix}$$

因此$R^{n×n} ⊆ S_1+S_2$，反之亦然$R^{n×n} ⊇ S_1+S_2$（保证了相等）。

即得$R^{n×n}=S_1⊕S_2$

（2）

若$A∈S_1$则

$A = \begin{array}{c}
    a_{11}
    \left[\begin{array}{c}
        1 & 0 & 0
    \\  0 & 0 & 0
    \\  0 & 0 & 0
    \end{array}\right]+
    a_{22}
    \left[\begin{array}{c}
        0 & 0 & 0
    \\  0 & 1 & 0
    \\  0 & 0 & 0
    \end{array}\right]+
    a_{33}
    \left[\begin{array}{c}
        0 & 0 & 0
    \\  0 & 0 & 0
    \\  0 & 0 & 1
    \end{array}\right]
    \\ + \\
    a_{12}
    \left[\begin{array}{c}
        0 & 1 & 0
    \\  1 & 0 & 0
    \\  0 & 0 & 0
    \end{array}\right]+
    a_{13}
    \left[\begin{array}{c}
        0 & 0 & 1
    \\  0 & 0 & 0
    \\  1 & 0 & 0
    \end{array}\right]+
    a_{23}
    \left[\begin{array}{c}
        0 & 0 & 0
    \\  0 & 0 & 1
    \\  0 & 1 & 0
    \end{array}\right]
\end{array}$

明显$dim(S_1) = 6$

则$dim(S_2) = dim(R^{3×3}) - dim(S_1) = 9 - 6 = 3$