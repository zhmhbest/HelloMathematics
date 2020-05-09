<link rel='stylesheet' href='../../../style/index.css'>
<script src='../../../style/index.js'></script>

# [矩阵标准形](../index.html)

[TOC]

## λ矩阵

以$λ$的复系数多项式为元素的矩阵，称为**λ矩阵**。

### 秩

$r$阶子式不为零，$r+1$阶子式全为零。

### 逆

$A(λ)B(λ) = E$则$A^{-1}(λ) = B(λ)$

$n$阶$λ$阵可逆的充要条件是$|A(λ)|$等于非零常数。

对于数字矩阵来说，满秩$⇔$可逆，但$λ$矩阵不一定。

### 初等变换

- 互换
- 数乘
- 某行（列）乘一个$λ$多项式后加到另一行（列）

### 等价

$A(λ)$经过有限次初等变换后可变成$B(λ)$，则成$A(λ)$与$B(λ)$等价，记作$A(λ) ≃ B(λ)$。

$$B(λ) = P(λ)A(λ)Q(λ)$$

有$|B(λ)| = |P(λ)||A(λ)||Q(λ)| = k|A(λ)|$

即等价的两个$λ$阵行列式是常数倍关系。

对于数字矩阵来说，矩阵等价$⇔$矩阵等秩，但$λ$矩阵仅有<span class='highlight'>矩阵等价$⇒$矩阵等秩</span>。

## *Smith*标准型

若$A(λ)$的秩为$r$，则$A(λ)$与如下矩阵等价

$$
    \left[\begin{array}{c}
        d_1(λ)
    \\  & d_2(λ)
    \\  && \ddots
    \\  &&& d_r(λ)
    \\  &&&& 0
    \\  &&&&& \ddots
    \\  &&&&&& 0
    \end{array}\right]
$$

- $d_i(λ)$的最高次幂系数为1的多项式。
- $d_i(λ)$是$d_{i+1}(λ)$的因子

则称为矩阵$A(λ)$的**Smith标准型**，$d_k(λ)$称为$A(λ)$的第$k$个**不变因子**。

### 行列式因式

- $D_1(λ)$：所有1阶子式行列式的最大公因子。
- $D_2(λ)$：所有2阶子式行列式的最大公因子。
- $\cdots$

设$λ$矩阵$A(λ)$的秩为$r>0$，对于$1≤k≤r$，$A(λ)$中必存在着非零的$k$阶子式。$A(λ)$中全部$k$阶子式的最高次幂系数为1的最大公因式称为$A(λ)$的$k$**阶行列式因式**，记为$D_k(λ)$。

$$D_k(λ) = \prod_{i=1}^{k}d_i(λ) = d_1(λ)d_2(λ)\dots d_k(λ) = D_{k-1}(λ)d_k(λ)$$

Smith标准型是唯一的。两个$λ$矩阵等价的充要条件为它们具有相同的行列式因式，有相同的不变因式。

### 初等因式

$$d_k(λ) = \prod_{j}(λ-λ_j)^{e^j}$$

其中$λ_j$互不相同，$0 ≤ e^j ≤ e^{j+1}$，所有$(λ-λ_j)^{e^j}$即称为$A(λ)$的**初等因式**。

#### 例

$5$阶方阵$A(λ)$的秩为$4$，全体初等因式为$\{ λ, λ^2, λ^2, λ-2, λ-2, λ+1, (λ+1)^2 \}$，试求不变因式和Smith标准型。

**解**

求$d_1,d_2,d_3,d_4$

- 观察$\{ λ, λ^2, λ^2 \}$，$λ^2$出现两次
  - 明显$d_4$中含有$λ^2$
  - 故$d_3$中也含有$λ^2$
  - 故$d_2$中只能含有$λ$

- 观察$\{ λ-2, λ-2 \}$
  - 明显$d_4$中含有$λ-2$
  - 故$d_3$中含有$λ-2$

- 观察$\{ λ+1, (λ+1)^2 \}$
  - 明显$d_4$中含有$(λ+1)^2$
  - 故$d_3$中含有$λ+1$

综上可得

$
    \left[\begin{array}{c}
        1
    \\  & λ
    \\  && λ^2 (λ-2) (λ+1)
    \\  &&& λ^2 (λ-2) (λ+1)^2
    \\  &&&& 0
    \end{array}\right]_{5×5}
$

### 特殊矩阵

$
\begin{array}{l}
    A \\\\ \\\\ \\\\ \\
\end{array}
\begin{array}{l}
    =
    \left[\begin{array}{c}
        λ-a & c_1
    \\  & λ-a & c_2
    \\  && \ddots & \ddots
    \\  &&& λ-a  & c_{n-1}
    \\  &&&& λ-a
    \end{array}\right]_{n×n}
    \\\\
    =
    λE-
    \left[\begin{array}{c}
        a & -c_1
    \\  & a & -c_2
    \\  && \ddots & \ddots
    \\  &&& a & -c_{n-1}
    \\  &&&& a
    \end{array}\right]_{n×n}
\end{array}
$

矩阵$A$性质如下：

- **Smith标准型**：$
    \left[\begin{array}{c}
       1
    \\  & 1
    \\  && 1
    \\  &&& \ddots
    \\  &&&& (λ-a)^n
    \end{array}\right]_{n×n}
$
- **初等因子**：$(λ-a)^n$

特别当$c_i = -1$时，$a$以$λ_i$替换，有

$$
    \left[\begin{array}{c}
        λ-λ_i & -1
    \\  & λ-λ_i & -1
    \\  && \ddots & \ddots
    \\  &&& λ-λ_i  & -1
    \\  &&&& λ-λ_i
    \end{array}\right]
    =
    λE-
    \left[\begin{array}{c}
        λ_i & 1
    \\  & λ_i & 1
    \\  && \ddots & \ddots
    \\  &&& λ_i & 1
    \\  &&&& λ_i
    \end{array}\right]
    \xrightarrow[]{记作}
    λE-J_i
$$

当知道初等因子$(λ-λ_i)^n$时，易得到矩阵$J_i$。

### 派生$λ$矩阵

$$λE - A$$

数字阵派生的$λ$阵一定是满秩的。

若两个数字阵相似，则它们的派生阵等价，Smith标准型相同。

### 分块矩阵

矩阵$A(λ) =
\left[\begin{array}{c}
    B(λ) & 0
\\  0    & C(λ)
\end{array}\right]
$的全部初等因式是$B(λ)$的全部初等因式与$C(λ)$的全部初等因式的并集。

## *Jordan*标准形

$n$阶矩阵$A$可以与不同的矩阵相似，我们希望在与$A$相似的全体矩阵中，找到一个比较简单的矩阵，作为这一类矩阵的代表，从而简化这一类矩阵的讨论。

### 定义

<span class='highlight'>数字阵$A ∼ B$的充要条件是$λE-A$与$λE-B$等价（即特征多项式等价，或称派生$λ$阵等价）。</span>

#### Jordan块

$$J(λ_i, n_i) = 
    \left[\begin{array}{c}
        λ_i & 1
    \\  & λ_i & 1
    \\  && \ddots & \ddots
    \\  &&& λ_i & 1
    \\  &&&& λ_i
    \end{array}\right]_{n_i×n_i}
$$

$J(λ_i, n_i)$称为**Jordan块**。其中$λ_i$为常数，故$J(λ_i, n_i)$是一个数字矩阵。

**Jordan块的初等因子**，即Jordan块的派生$λ$矩阵[$λE-J(λ_i, n_i)$](#特殊矩阵)的Smith标准型的初等因子，为<span class='highlight'>$(λ-λ_i)^{n_i}$</span>

$$J(λ, n)^m = 
    \left[\begin{array}{c}
        λ^m    & C_{m}^{1} λ^{m-1} & C_{m}^{2} λ^{m-2} & \cdots & C_{m}^{n-1} λ^{m-(n-1)}
    \\         & λ^m               & C_{m}^{1} λ^{m-1} & \ddots & \vdots
    \\         &                   & λ^m               & \ddots & C_{m}^{2} λ^{m-2}
    \\         &                   &                   & \ddots & C_{m}^{1} λ^{m-1}
    \\  0      &                   &                   &        & λ^m
    \end{array}\right]_{n×n}
$$

#### Jordan矩阵

形如$
    J = \left[\begin{array}{c}
       J_1
    \\  & J_2
    \\  && \ddots
    \\  &&& J_s
    \end{array}\right]
$由若干个Jordan块组成的准对角矩阵。

Jordan矩阵的初等因子即所有Jordan块的初等因子的全体。

**对角阵**即所有Jordan块都为一阶的Jordan矩阵，故对角阵是特殊的Jordan阵。

<span class='highlight'>求矩阵$A$的Jordan标准形，即求$A$的派生$λ$阵$(λE-A)$的Smith标准型的，不变因式的，全部初等因子，[再通过初等因子求Jordan块](#特殊矩阵)，最终将Jordan块组合为Jordan矩阵。</span>

### 变换法

略

### 特殊矩阵

$
    \left[\begin{array}{c}
        1 & 1 & \cdots & 1
    \\  1 & 1 & \cdots & 1
    \\  \vdots & \vdots & \ddots & \vdots
    \\  1 & 1 & \cdots & 1
    \end{array}\right]_{n×n}
$的Jordan标准形为$
    \left[\begin{array}{c}
        0 & 0 & \cdots & 0
    \\  0 & 0 & \cdots & 0
    \\  \vdots & \vdots & \ddots & \vdots
    \\  0 & 0 & \cdots & n
    \end{array}\right]_{n×n}
$

### 行列式因子法

#### 例

求矩阵$A =
    \left[\begin{array}{c}
        8  & -3 & 6
    \\  3  & -2 & 0
    \\  -4 & 2  & -2
    \end{array}\right]
$的Jordan标准形。

**解**

矩阵$A$的派生$λ$矩阵为$λE-A =
    \left[\begin{array}{c}
       λ-8 & 3   & -6
    \\  -3 & λ+2 & 0
    \\  4  & -2  & λ+2
    \end{array}\right]
$

明显$D_1(λ)=1$

由$
    \left|\begin{array}{c}
        3   & -6
    \\  λ+2 & 0
    \end{array}\right|
    = 6(λ+2)
$，$
    \left|\begin{array}{c}
        -3 & λ+2
    \\  4  & -2
    \end{array}\right|
    = -4λ-2
$，可知$D_2(λ)=1$

$D_3(λ) = |λE-A| = (λ-1)^2(λ-2)$

综上

- $d_1(λ) = D_1(λ) = 1$
- $d_2(λ) = \dfrac{D_2(λ)} {D_1(λ)} = 1$
- $d_3(λ) = \dfrac{D_3(λ)} {D_2(λ)} = (λ-1)^2(λ-2)$

因此$λE-A$的初等因子为$(λ-1)^2, λ-2$，的$A$的Jordan标准形

$$
    \left[\begin{array}{c}
        1 & 1
    \\  & 1
    \\  && 2
    \end{array}\right]
$$

### 初等因子积法

#### 例

求矩阵$A =
    \left[\begin{array}{c}
        -1 & 2  & 2  & 0
    \\  3  & -1 & 1  & 0
    \\  2  & 2  & -1 & 0
    \\  1  & -4 & 3  & 3
    \end{array}\right]
$的Jordan标准形。

**解**

$λE - A$是满秩的，即$r(λE - A)=4$

$$|λE - A| = (λ-3)^2(λ+3)^2 = d_1 ⋅ d_2 ⋅ d_3 ⋅ d_4$$

则有以下情况

| 情况 | Smith标准形 | 初等因子 | Jordan标准形 |
| :-: | -: | :-: | :-: |
| ① | $\scriptsize{\left[\begin{array}{c} 1 \\& 1 \\&& (λ-3)(λ+3) \\&&& (λ-3)(λ+3) \end{array}\right]}$ | $\scriptsize{\begin{matrix} λ-3 \\ λ-3 \\ λ+3 \\ λ+3 \end{matrix}}$ | $\scriptsize{\left[\begin{array}{c} 3 \\& 3 \\&& -3 \\&&& -3 \end{array}\right]}$
| ② | $\scriptsize{\left[\begin{array}{c} 1 \\& 1 \\&& (λ-3) \\&&& (λ-3)(λ+3)^2 \end{array}\right]}$    | $\scriptsize{\begin{matrix} λ-3 \\ λ-3 \\ (λ+3)^2 \end{matrix}}$    | $\scriptsize{\left[\begin{array}{c} 3 \\& 3 \\&& -3 & 1 \\&&& -3 \end{array}\right]}$
| ③ | $\scriptsize{\left[\begin{array}{c} 1 \\& 1 \\&& (λ+3) \\&&& (λ-3)^2(λ+3) \end{array}\right]}$    | $\scriptsize{\begin{matrix} λ+3 \\ λ+3 \\ (λ-3)^2 \end{matrix}}$    | $\scriptsize{\left[\begin{array}{c} -3 \\& -3 \\&& 3 & 1 \\&&& 3 \end{array}\right]}$
| ④ | $\scriptsize{\left[\begin{array}{c} 1 \\& 1 \\&& 1 \\&&& (λ-3)^2(λ+3)^2 \end{array}\right]}$      | $\scriptsize{(λ-3)^2(λ+3)^2}$                                       | $\scriptsize{\left[\begin{array}{c} -3 & 1 \\& -3 \\&& 3 & 1 \\&&& 3 \end{array}\right]}$

记$A$的Jordan标准形为$J$，因为$A ∼ J$，所以$λE-A$与$λE-J$等价，即$r(λE-A) = r(λE-J)$

取$λ = 3, -3$，从上述情况中，看是否满足$r(λE-A) = r(λE-J)$。

### $n$次方问题

#### 例1

$n$阶方阵，$A^2=0$，$r(A)=r$，求$A$的Jordan标准形

**解**

由$A^2=0$可知，$A$的特征值都是$0$。

- $J_1 = 
    \left[\begin{array}{c}
        0
    \end{array}\right]
$，$(J_1)^2=0$
- $J_2 = 
    \left[\begin{array}{c}
        0 & 1
    \\  0 & 0
    \end{array}\right]
$，$(J_2)^2=0$
- $J_3 = 
    \left[\begin{array}{c}
        0 & 1 & 0
    \\  0 & 0 & 1
    \\  0 & 0 & 0
    \end{array}\right]
$，$(J_3)^2≠0$

故Jordan块只能是一阶或二阶。

明显，$J_1$的存在不增加Jordan阵的秩，由$r(A)=r$可知，Jordan标准形由$r$个二阶块，$n-r$个一阶块组成。

#### 例2

$n$阶方阵，$A^3=0$，$r(A)=r_1$，$r(A^2)=r_2$，求$A$的Jordan标准形

由$A^3=0$可知，$A$的特征值都是$0$。

- $J_1 = 
    \left[\begin{array}{c}
        0
    \end{array}\right]
$，$(J_1)^2=0$，$(J_1)^3=0$
- $J_2 = 
    \left[\begin{array}{c}
        0 & 1
    \\  0 & 0
    \end{array}\right]
$，$(J_2)^2=0$，$(J_2)^3=0$
- $J_3 = 
    \left[\begin{array}{c}
        0 & 1 & 0
    \\  0 & 0 & 1
    \\  0 & 0 & 0
    \end{array}\right]
$，$(J_3)^2≠0$，$(J_3)^3=0$
- $J_4 = 
    \left[\begin{array}{c}
        0 & 1 & 0 & 0
    \\  0 & 0 & 1 & 0
    \\  0 & 0 & 0 & 1
    \\  0 & 0 & 0 & 0
    \end{array}\right]
$，$(J_4)^3≠0$

故Jordan块只能是一阶、二阶或三阶块。

明显

- 每个$i$阶块产生$i-1$的秩。
- $A^2$仅有三阶块不为$0$

设有$x$个1阶块，$y$个2阶块，$z$个3阶块。

$$
    \begin{cases}
            x+y+z = n
        \\  y+2z = r_1
        \\  z = r_2
    \end{cases} 
    { \ \ \ ⇒ \ \ \ }
    \begin{cases}
            x = n - r_1 + r_2
        \\  y = r_1 - 2r_2
        \\  z = r_2
    \end{cases} 
$$

