<link rel='stylesheet' href='../../../style/index.css'>
<script src='../../../style/index.js'></script>

# [线性空间：内积空间](../index.html)

[TOC]

## 定义

对于实数$R$上的线性空间$V$，有$α,β,γ∈V,k∈R$，在$V×V$上定义了实函数$(α,β)$，满足以下条件

- **对称性**：$(α,β) = (β,α)$
- **线性性**：
  - $(α+γ,β) = (α,β) + (γ,β)$
  - $(kα,β) = k(α,β)$
  - $(α,0) = (0,β) = 0$
- **正定性**：
  - $(α,α)≥0$
  - $(α,α)=0 { \ \ \ ⇔ \ \ \ } α=0$

则称实数$(α,β)$为向量$α$与$β$的**内积**，称定义了内积的线性空间$V$为**内积空间**。

## 导出范数

$$\|α\| = \sqrt{(α,α)}$$

由内积导出的范数，称为**导出范数**。

## 夹角

>*Cauchy-Schwarz*不等式：$(α,β)^2 ≤ (α,α)(β,β)$

$$\cosθ = \dfrac{(α,β)}{\|α\|\|β\|}$$

- $θ=0$：同向
- $θ=\frac{π}{2}$：正交，记为$α⊥β$
- $θ=π$：反向

若$α⊥β$，则

$$\|α+β\|^2 = \|α\|^2 + \|β\|^2$$

## 内积表示

在$n$维内积空间$V$中，取基$e$，对于$V$中任意两个向量$α,β$有

- $α = x_1e_1 + x_2e_2 + \cdots + x_ne_n$
- $β = y_1e_1 + y_2e_2 + \cdots + y_ne_n$

则$(α,β) = α^Tβ = (ex)^T(ey) = x^T(e^Te)y = x^TAy = $

$$
    \left[\begin{array}{c}
        x_1 & x_2 & \cdots & x_n
    \end{array}\right]
    \left[\begin{array}{c}
        (e_1,e_1) & (e_1,e_2) & \cdots & (e_1,e_n)
    \\  (e_2,e_1) & (e_2,e_2) & \cdots & (e_2,e_n)
    \\  \vdots    & \vdots    & \ddots & \vdots
    \\  (e_n,e_1) & (e_n,e_2) & \cdots & (e_n,e_n)
    \end{array}\right]
    \left[\begin{array}{c}
        y_1 \\ y_2 \\ \vdots \\ y_n
    \end{array}\right]
$$

即

$$(α,β) = x^TAy$$

- $A=e^Te$，称为$V$在$e$下的**度量矩阵**，$A$一定是正定矩阵。

上式称为**内积的表示式**。

#### 例

如果内积空间在基$e=(e_1, e_2, e_3)$下的度量矩阵$A = \left[\begin{array}{c}
    10 & -3 & 4
\\  -3 & 20 & 1
\\  4  & 1  & 30
\end{array}\right]$，求向量$α = 3e_1 + 2e_2 - e_3$的长度$\|α\|$，及它与$β = e_1 + 2e_2$的夹角。

**解**

$α = e \left[\begin{array}{c} 3 \\ 2 \\ -1 \end{array}\right]$，$β = e \left[\begin{array}{c} 1 \\ 2 \\ 0 \end{array}\right]$

$(α, α) =
  \left[\begin{array}{c} 3 & 2 & -1 \end{array}\right]
  A
  \left[\begin{array}{c} 3 \\ 2 \\ -1 \end{array}\right]
  = 136
$

$(β, β) =
  \left[\begin{array}{c} 1 & 2 & 0 \end{array}\right]
  A
  \left[\begin{array}{c} 1 \\ 2 \\ 0 \end{array}\right]
  = 78
$

$(α, β) =
  \left[\begin{array}{c} 3 & 2 & -1 \end{array}\right]
  A
  \left[\begin{array}{c} 1 \\ 2 \\ 0 \end{array}\right]
  = 80
$

$\cosθ = \dfrac{(α,β)}{\|α\|\|β\|} = \dfrac{80}{\sqrt{136}\sqrt{78}}$

$θ = \arccos \dfrac{80}{\sqrt{136}\sqrt{78}}$

## 标准正交系

内积空间中一组向量$α_1,α_2,,\dots,α_n$，若

$$(α_i,α_j) = 0 \ \ \  (i≠j;\ i,j=1,2,\dots,n)$$

则称这组向量为**正交组**（正交组一定是无关组）。若还满足$\|α_k\|=1,\ (k=1,2,\dots,n)$，则称$α_1,α_2,,\dots,α_n$为$V$中的一个**标准正交系**（**标准正交基**），此时的度量矩阵为单位阵。

在$n$维内积空间$V$中必存在标准正交基，可通过将普通基经过*Schmidt*正交化得到。