<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>


# [数值分析：线性方程组迭代法](./index.html)

[TOC]

## 迭代法思想

迭代改善算法是求解病态矩阵的一种比较理想的方法。

对于给定的方程组

$
\begin{cases}
    a_{11} ⋅ x_1 + a_{12} ⋅ x_2 + \cdots + a_{1n} ⋅ x_n = b_1
\\  a_{21} ⋅ x_1 + a_{22} ⋅ x_2 + \cdots + a_{2n} ⋅ x_n = b_2
\\ \cdots
\\  a_{n1} ⋅ x_1 + a_{n2} ⋅ x_2 + \cdots + a_{nn} ⋅ x_n = b_n
\end{cases}
$

将其改写为$x=B_0x+f$的形式

$
\begin{cases}
    x_1 = - \dfrac{ (a_{12} ⋅ x_2 + \cdots + a_{1n} ⋅ x_n) }{ a_{11} } + \dfrac{b_1}{a_{11}}
\\  x_2 = - \dfrac{ (a_{21} ⋅ x_1 + \cdots + a_{2n} ⋅ x_n) }{ a_{22} } + \dfrac{b_2}{a_{22}}
\\ \cdots
\\  x_n = - \dfrac{ (a_{n1} ⋅ x_1 + a_{n2} ⋅ x_2 + \cdots) }{ a_{nn} } + \dfrac{b_n}{a_{nn}}
\end{cases}
$

$B_0=
\left[\begin{array}{c}
    0                      & -\frac{a_{12}}{a_{11}} & \cdots & -\frac{a_{1n}}{a_{11}}
\\  -\frac{a_{21}}{a_{22}} & 0                      & \cdots & -\frac{a_{2n}}{a_{22}}
\\  \vdots                 & \vdots                 & \ddots & \vdots
\\  -\frac{a_{n1}}{a_{nn}} & -\frac{a_{n2}}{a_{nn}} & \cdots & 0
\end{array}\right]
$，$f=
\left[\begin{array}{c}
    \frac{b_1}{a_{11}}
\\  \frac{b_2}{a_{22}}
\\  \vdots
\\  \frac{b_n}{a_{nn}}
\end{array}\right]
$

任取初值$x^{(0)} = \left[ x_1^{(0)}, x_2^{(0)}, \cdots, x_n^{(0)} \right]^T$，带入上式右端即可得：

$$x^{(1)} = \left[ x_1^{(1)}, x_2^{(1)}, \cdots, x_n^{(1)} \right]^T$$

重复上步，即可得：

$$x^{(k)} = \left[ x_1^{(k)}, x_2^{(k)}, \cdots, x_n^{(k)} \right]^T, \ \ \ k∈N$$

若$\lim\limits_{k→∞}x^{(k)} = x^*$则称此迭代收敛。该方法称为**迭代法**（或**一阶定常迭代法**）。

### 迭代格式

<div class='mark'>

$$x^{(k+1)}=Bx^{k}+f, \ \ \ k∈N$$

- $B$：迭代矩阵
</div>

### 误差向量

为研究$x^{(k)}$的收敛性，引进**误差向量**$ε^{(k+1)} = x^{(k+1)} - x^*$

$$ε^{(k)} = Bε^{(k-1)} = B^{2}ε^{(k-2)} = \cdots = B^kε^{(0)}$$

迭代法收敛其实就是$ε^{(k)}$收敛到0。当迭代序列收敛时，迭代序列的收敛解就是原方程的精确解。

### 迭代矩阵

设$Ax=b, \ \ \ |A|≠0$，将$A$分裂为$A=M-N$，其中$M$称为**分裂矩阵**。

$(M-N)x=b$
${ \ \ \ ⇒ \ \ \ } Mx=Nx+b$
${ \ \ \ ⇒ \ \ \ } x=M^{-1}Nx+M^{-1}b$

$$\begin{matrix}
    x &=& \underbrace{(M^{-1}N)}x  &+& \underbrace{(M^{-1}b)}
\\  && B && f
\end{matrix}$$

构造**一阶定常迭代法**

$$x^{(k+1)}=Bx^{k}+f$$

$A=M-N ,\,\, B=M^{-1}N$
$\,\,⇒\,\, B = M^{-1}(M-A)$
$\,\,⇒\,\, B = I - M^{-1}A$

<span class='highlight'>$$B = I - M^{-1}A$$</span>

同理，若将$A$分解为$A=M+N$则上式依然成立。

<div class='mark'>

通过将$A$分解为$A=M-N$或$A=M+N$，可构造出

<span class='highlight'>$$
    \begin{cases}
        B = I - M^{-1}A
    \\  f = M^{-1}b
    \end{cases}
$$</span>
</div>

## 迭代改善算法

$$\begin{matrix}
    ① & A = D - (L + U)
\\  ② & A = D + (L + U)
\end{matrix}$$

>①和②均为正确构造方法，上课时，老师使用的是②。

- $D$: 主对角矩阵
- $L$: 下三角矩阵（对角为0）
- $U$: 上三角矩阵（对角为0）

<!--
- $D =
    \left[\begin{array}{c}
        a_{11} &        &        &             &
    \\         & a_{22} &        &             &
    \\         &        & \ddots &             &
    \\         &        &        & a_{n-1,n-1} &
    \\         &        &        &             & a_{nn}
    \end{array}\right]
$
- $L =
    \left[\begin{array}{c}
        0          &            &        &            &
    \\  -a_{21}    & 0          &        &            &
    \\  \vdots     & \vdots     & \ddots &            &
    \\  -a_{n-1,1} & -a_{n-1,2} & \cdots & 0          &
    \\  -a_{n1}    & -a_{n2}    & \cdots & -a_{n,n-1} & 0
    \end{array}\right]
$
- $U =
    \left[\begin{array}{c}
        0      & -a_{12}  & \cdots & -a_{1,n-1} & -a_{1,n}
    \\         & 0        & \cdots & -a_{2,n-1} & -a_{2,n}
    \\         &          & \ddots & \vdots     & \vdots
    \\         &          &        & 0          & -a_{n-1,n}
    \\         &          &        &            & 0
    \end{array}\right]
$
-->

### 雅可比迭代（Jacobi）

<div class='mark'>

**同步迭代算法**

若$a_{ii}≠0$，记$
    \begin{cases}
        M = D
    \\  N = L + U
    \end{cases}
$，则

**迭代矩阵**

$$B = I-M^{-1}A = \begin{cases}
    ① &  I-D^{-1}(D-L-U) = D^{-1}(L+U)
\\  ② &  I-D^{-1}(D+L+U) = -D^{-1}(L+U)
\end{cases}$$

</div>

**计算公式**

由$①$得

$$Dx^{(k+1)} = (L+U)x^{(k)} + b$$

记$x^{(k)} = \left[ x_1^{(k)}, x_i^{(k)}, \cdots, x_n^{(k)} \right]^T$

$$a_{ii}x_i^{(k+1)} = 
    -\sum\limits_{j=1}^{i-1} a_{ij} x_j^{(k)}
    -\sum\limits_{j=i+1}^{n} a_{ij} x_j^{(k)}
    + b_i
$$

<div class='mark'>

$$x_i^{(k+1)} = \dfrac{
    b_i - \sum\limits_{^{j=1}_{j≠i}}^{n} a_{ij}x_j^{(k)}
}{
    a_{ii}
}$$
</div>

### 高斯-赛德尔迭代（Gauss-Seide）

<div class='mark'>

**异步迭代算法**

$①
    \begin{cases}
        M = D - L
    \\  N = U
    \end{cases}
$，$②
    \begin{cases}
        M = D + L
    \\  N = U
    \end{cases}
$

**迭代矩阵**

$$B = I-M^{-1}A = \begin{cases}
    ① &  I-M^{-1}(M-U) = (D-L)^{-1}U
\\  ② &  I-M^{-1}(M+U) = -(D+L)^{-1}U
\end{cases}$$
</div>

**计算公式**

由$①$得

$$Dx^{(k+1)} = Dx^{(k)} - (Lx^{(k+1)} + Ux^{(k)} - Dx^{(k)} + b)$$

<div class='mark'>

$$x_i^{(k+1)} = 
    \dfrac{
        b_i - 
        \sum\limits_{j=1}^{i-1} a_{ij}x_j^{(k+1)} - 
        \sum\limits_{j=i+1}^{n} a_{ij}x_j^{(k)}
    }{
        a_{ii}
    }
$$
</div>

### 逐次超松弛迭代（SOR）

$①$

记$M=\dfrac{1}{ω}(D-ωL)$得

$$B = I - ω(D-ωL)^{-1}A = (D-ωL)^{-1} \big[ (1-ω)D+ωU \big]$$

$②$

<div class='mark'>

记$M=\dfrac{1}{ω}(D+ωL)$得

$$B = I - ω(D+ωL)^{-1}A = -(D+ωL)^{-1} \big[ (1-ω)D-ωU \big]$$
</div>

**计算公式**

由$①$得

$$Dx^{(k+1)} = Dx^{(k)} + ω(Lx^{(k+1)} + Ux^{(k)} - Dx^{(k)} + b)$$

<div class='mark'>

$$x_i^{(k+1)} =  (1-ω)x_i^{(k)} + 
    ω ⋅ \dfrac{
        b_i - 
        \sum\limits_{j=1}^{i-1} a_{ij}x_j^{(k+1)} - 
        \sum\limits_{j=i+1}^{n} a_{ij}x_j^{(k)}
    }{
        a_{ii}
    }
$$
</div>

**高斯-赛德尔迭代**是**逐次超松弛迭代**的一个特例情况。

| $ω<1$ | $ω=1$ | $ω>1$ |
| -     | -     | -     |
| 低松弛迭代 | 高斯-赛德尔迭代 | 超松弛迭代 |


## 迭代法的收敛性

### 定义

**误差向量**

- $e^{(k)} = x^{(k)} - x^*$
- $e^{(k)} = x^{(k)} - x^* = [Bx^{(k-1)}+f] - [Bx^*+f] = B[x^{(k-1)}-x^*] = Be^{(k-1)}$
- $e^{(k)} = Be^{(k-1)} = \cdots = B^ke^{(0)}$

$$
\begin{cases}
    e^{(k+1)} = Be^{(k)}
\\  e^{(k)} = B^ke^{(0)}
\\  k∈N
\end{cases}
$$

**收敛性定义**

记$A_k = (a_{ij}^{(k)}∈R^{n×n})$，如果由$n^2$个数列极限存在，且有$\lim\limits_{k→∞} a_{ij}^{(k)} = a_{ij} \ \ \ (i,j = 1,2,\cdots,n)$，则称$\{A_k\}$收敛于$A$，记为$\lim\limits_{k→∞} A_k = A$。

- $\lim\limits_{k→∞} A_k = A \,\,⇔\,\, \lim\limits_{k→∞} \|A_k-A\| = 0$
- $\lim\limits_{k→∞} A_k = A \,\,⇔\,\,$ 对于任何向量$x∈R^n$都有$\lim\limits_{k→∞} A_kx = Ax$

### 收敛性判别

**收敛的充要条件**

$B=(b_{ij})∈R^{n×n}$

<div class='mark'>

$$\lim\limits_{k→∞} B^k = 0 { \ \ \ ⇔ \ \ \ } ρ(B)<1$$

其中$ρ(B)$为$B$的谱半径。
</div>

**收敛的充分条件**

<div class='mark'>

实际计算中，谱半径可能比较难求，可利用$ρ(B)≤\|B\|<1$（即谱半径≤矩阵的某种算子范数）进行判别

$$\|B\| = q < 1 { \ \ \ ⇒ \ \ \ } \lim\limits_{k→∞} A_k = A$$
</div>

- $\|x^*-x^{(k)}\| ≤ q^k ⋅ \|x^*-x^{(0)}\|$
- $\|x^*-x^{(k)}\| ≤ \frac{q}{1-q} ⋅ \|x^{(k)}-x^{(k-1)}\|$
- $\|x^*-x^{(k)}\| ≤ \frac{q^k}{1-q} ⋅ \|x^{(1)}-x^{(0)}\|$

### 事后估计

<div class='mark'>

若迭代矩阵$B$收敛，且允许误差为$ε$时，当满足

$$\|x^{(k)}-x^{(k-1)}\| ≤ \dfrac{1-q}{q}ε$$

时，有$\|x^{(k)}-x^{(k-1)}\| < ε$，即可停止迭代。
</div>

### 事前估计

若有

$$\dfrac{q^k}{1-q}\|x^{(1)}-x^{(0)}\| ≤ ε$$

就有$\|x^{(k)}-x^{*}\| < ε$，即当

$$k > \dfrac{
    \ln \dfrac{ε(1-q)}{\|x^{(1)}-x^{(0)}\|}
}{
    \ln q
}$$

$k^* = \left\lfloor{ k }\right\rfloor + 1$时即可停止迭代。事前估计往往大于实际次数。

### 收敛速度

由$e^{(k)} = Be^{(k-1)} = \cdots = B^ke^{(0)}$得

$$\|e^{(k)}\| = \|B^ke^{(0)}\| ≤ \|B^k\| \cdot \|e^{(0)}\|$$

即

$$\|B^k\| ≥ \dfrac{\|e^{(k)}\|}{\|e^{(0)}\|}$$

**平均收敛速度**

迭代步数$k$与$-\frac{1}{k}\ln \|B^k\|$成反比

$$R_k(B) = -\dfrac{1}{k}\ln \|B^k\|$$

迭代矩阵$B$的算子范数越小，收敛速度越快。

**渐进收敛速度**

$\lim\limits_{k→∞} R_k(B) = -\ln(ρ(B))$

<div class='mark'>

$$R(B) = -\ln(ρ(B))$$

迭代矩阵$B$的谱半径$ρ(B)$越小，收敛速度越快。
</div>

### 特殊方程收敛性

**对角占优阵**

设$A=(a_{ij})_{n×n}$

- 若$|a_{ii}| > \sum\limits_{^{j=1}_{j≠i}}^{n} |a_{ij}|$，则称矩阵$A$为**严格对角占优阵**。
- 若$|a_{ii}| ≥ \sum\limits_{^{j=1}_{j≠i}}^{n} |a_{ij}|$，且至少一个不等式严格成立（即存在相等的情况），则称矩阵$A$为**弱对角占优阵**。

**性质**

- $A$严格对角占优$ \,\,⇒\,\, A$非奇异。
- <span class='mark'>$A$严格对角占优$ \,\,⇒\,\, Ax=b$的Jacobi和Gauss-Seide的迭代解均收敛。</span>
- $0<ω<2 \,\,⇐\,\, Ax=b$的SOR迭代解收敛。
- $A$对称正定且$0<ω<2  \,\,⇒\,\, Ax=b$的SOR迭代解收敛
- <span class='mark'>$A$对称正定$ \,\,⇒\,\, Ax=b$的Gauss-Seide迭代解收敛</span>
- $A$严格对角占优（或$A$弱对角占优不可约）且$0<ω≤1  \,\,⇒\,\, Ax=b$的SOR迭代解收敛
- $A$严格对角占优（或$A$弱对角占优不可约）$ \,\,⇒\,\, Ax=b$的Gauss-Seide迭代解收敛
