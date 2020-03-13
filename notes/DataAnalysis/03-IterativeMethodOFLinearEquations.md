<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>


# [线性方程组迭代法](./index.html)

[TOC]

## 迭代法基本思想

迭代改善算法是求解病态方程组的比较实用的方法。

对于给定的方程$x=Bx+f$，用公式$x^{(k+1)}=Bx^{k}+f, \ \ \ k∈N$逐步代入求近似解的方法称为**迭代法**（或**一阶定常迭代法**）。如果$\lim\limits_{k→∞}x^{(k)} = x^*$则称此迭代法收敛。
为研究$x^{(k)}$的收敛性，引进**误差向量**$ε^{(k+1)} = x^{(k+1)} - x^*$
$$ε^{(k)} = Bε^{(k-1)} = B^{2}ε^{(k-2)} = \cdots = B^kε^{(0)}$$
迭代法收敛其实就是$ε^{(k)}$收敛到0。当迭代序列收敛时，迭代序列的收敛解就是原方程的精确解。

## 迭代法

设$Ax=b, \ \ \ |A|≠0$，
将$A$分裂为$A=M-N$,其中$M$称为**分裂矩阵**。
则问题转换为$Mx = Nx + b$，$x=M^{-1}Nx+M^{-1}b$
构造一阶定常迭代法：$x^{(k+1)}=Bx^{k}+f$
则$
    \begin{cases}
        B = M^{-1}N
    \\  f = M^{-1}b
    \end{cases}
$
$A=M-N \ \  ⇒ \ \ B =  M^{-1}(M-A) = I - M^{-1}A$
称$B = I - M^{-1}A$为**迭代法的迭代矩阵**。

### 雅可比迭代（Jacobi）

若$a_{ii}≠0$，则$A = D - L - U
    \newline =
    \left[\begin{array}{c}
        a_{11} &        &        &             &
    \\         & a_{22} &        &             &
    \\         &        & \ddots &             &
    \\         &        &        & a_{n-1,n-1} &
    \\         &        &        &             & a_{nn}
    \end{array}\right]
    \newline -
    \left[\begin{array}{c}
        0          &            &        &            &
    \\  -a_{21}    & 0          &        &            &
    \\  \vdots     & \vdots     & \ddots &            &
    \\  -a_{n-1,1} & -a_{n-1,2} & \cdots & 0          &
    \\  -a_{n1}    & -a_{n2}    & \cdots & -a_{n,n-1} & 0
    \end{array}\right]
     -
    \left[\begin{array}{c}
        0      & -a_{12}  & \cdots & -a_{1,n-1} & -a_{1,n}
    \\         & 0        & \cdots & -a_{2,n-1} & -a_{2,n}
    \\         &          & \ddots & \vdots     & \vdots
    \\         &          &        & 0          & -a_{n-1,n}
    \\         &          &        &            & 0
    \end{array}\right]
$

**雅可比迭代公式**

$$x^{(k+1)} = (I-D^{-1})Ax^{(k)} + D^{-1}b$$
$
    \begin{cases}
        B = I-D^{-1}A = I-D^{-1}(D-L-U) = D^{-1}(L+U)
    \\  f = D^{-1}b
    \end{cases}
$

**雅可比迭代法计算公式**

由迭代公式得$Dx^{(k+1)} = (L+U)x^{(k)} + b$
记$x^{(k)} = \left[ x_1^{(k)}, x_i^{(k)}, \cdots, x_n^{(k)} \right]^T$
得：$a_{ii}x_i^{(k+1)} = 
    -\sum\limits_{j=1}^{i-1} a_{ij} x_j^{(k)}
    -\sum\limits_{j=i+1}^{n} a_{ij} x_j^{(k)}
    + b_i
$

$$x_i^{(k+1)} = \dfrac{
    b_i - \sum\limits_{j=1, j≠i}^{n} a_{ij}x_j^{(k)}
}{
    a_{ii}
}$$

### 高斯-赛德尔迭代（Gauss-Seide）

记$M=D-L$，$A=M-U$（$L$为下三角矩阵）
得$
    \begin{cases}
        B = I-(D-L^{-1})A = (D-L)^{-1}U
    \\  f = (D-L)^{-1}b
    \end{cases}
$

$$Dx^{(k+1)} = Dx^{(k)} - (Lx^{(k+1)} + Ux^{(k)} - Dx^{(k)} + b)$$


### 逐次超松弛迭代（SOR）

记$M=\dfrac{1}{ω}(D-ωL)$
得$
    \begin{cases}
        B = L_ω = I - ω(D-ωL)^{-1}A = (D-ωL)^{-1}((1-ω)D+ωU)
    \\  f = ω(D-ωL)^{-1}b
    \end{cases}
$

$$Dx^{(k+1)} = Dx^{(k)} + ω(Lx^{(k+1)} + Ux^{(k)} - Dx^{(k)} + b)$$

$$x_i^{(k+1)} =  x_i^{(k)} + 
    ω ⋅ \dfrac{
        b_i - 
        \sum\limits_{j=1}^{i-1} a_{ij}x_j^{(k+1)} - 
        \sum\limits_{j=1}^{n} a_{ij}x_j^{(k)}
    }{
        a_{ii}
    }
$$

高斯-赛德尔迭代是逐次超松弛迭代的一个特例情况。

| $ω<1$ | $ω=1$ | $ω>1$ |
| -     | -     | -     |
| 低松弛迭代 | 高斯-赛德尔迭代 | 超松弛迭代 |


## 迭代法的收敛性

### 误差向量

$ε^{(k)} = x^{(k)} - x^*$
$
    \begin{cases}
        ε^{(k+1)} = Bε^{(k)}
    \\  ε^{(k)} = B^kε^{(0)}
    \end{cases}
$

### 迭代法收敛定理

如果由$n^2$个数列极限存在，且有$\lim\limits_{k→∞} a_{ij}^{(k} = a_{ij} \ \ \ (i,j = 1,2,\cdots,n)$，则称$\{A_k\}$收敛于$A$，记为$\lim\limits_{k→∞} A_k = A$。

**定理**

- $\lim\limits_{k→∞} A_k = A \ \ ⇔ \ \ \lim\limits_{k→∞} \|A_k-A\| = 0$
- $\lim\limits_{k→∞} A_k = A \ \ ⇔$对于任何向量$x∈R^n$都有$$\lim\limits_{k→∞} A_kx = Ax$
- $B=(b_{ij})∈R^{n×n}$，$\lim\limits_{k→∞} B^k = 0 \ \ ⇔ \ \ ρ(B)<1$，其中$ρ(B)$为$B$的谱半径
- $\|B\| = q < 1 \ \ ⇒ \ \ \lim\limits_{k→∞} A_k = A$
    - $\|x^*-x^{(k}\| ≤ q^k ⋅ \|x^*-x^{(0)}\|$
    - $\|x^*-x^{(k}\| ≤ \frac{q}{1-q} ⋅ \|x^{(k)}-x^{(k-1)}\|$
    - $\|x^*-x^{(k}\| ≤ \frac{q^k}{1-q} ⋅ \|x^{(1)}-x^{(0)}\|$

### 特殊方程收敛性

**对角占优阵**

设$A=(a_{ij})_{n×n}$

- 若$|a_{ii}| > \sum\limits_{j=1,j≠i}^{n} |a_{ij}|$，则称矩阵$A$为**严格对角占优阵**。
- 若$|a_{ii}| ≥ \sum\limits_{j=1,j≠i}^{n} |a_{ij}|$，且至少一个不等式严格成立，则称矩阵$A$为**弱对角占优阵**。

**定理**

- $A$严格对角占$\ \ ⇒ \ \ A$非奇异。
- $A$严格对角占$\ \ ⇒ \ \ Ax=b$的Jacobi和Gauss-Seide的迭代解均收敛。
- $0<ω<2 \ \ ⇐ \ \ Ax=b$的SOR迭代解收敛
- $A$对称正定且$0<ω<2 \ \ ⇒ \ \ Ax=b$的SOR迭代解收敛
- $A$对称正定$\ \ ⇒ \ \ Ax=b$的Gauss-Seide迭代解收敛
- $A$严格对角占（或$A$弱对角占优不可约）且$0<ω≤1 \ \ ⇒ \ \ Ax=b$的SOR迭代解收敛
- $A$严格对角占（或$A$弱对角占优不可约）$\ \ ⇒ \ \ Ax=b$的Gauss-Seide迭代解收敛

