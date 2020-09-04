<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [矩阵分解](./index.html)

[TOC]

## 三角分解

>**注**：上角标用来标记变换次数，$^{(1)}$表示没有发生变化。

若有$A = 
    \left[\begin{array}{c}
        a_{11} & a_{12} & \dots  & a_{1n}
    \\  a_{21} & a_{22} & \dots  & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{n1} & a_{n2} & \dots  & a_{nn}
    \end{array}\right]_{n×n}
$，则第一步高斯消去的过程就是对矩阵$A$做了$(n-1)$次初等行变换，其效果就相当于左乘$(n-1)$个初等矩阵，将这$(n-1)$个初等矩阵相乘即得**单位下三角矩阵**$L_1$。
&nbsp;

$L_1 =
    \left[\begin{array}{c}
        1       &
    \\  -l_{21} & 1 &
    \\  -l_{31} &   & 1 &
    \\  \vdots  &   &   & \ddots &
    \\  -l_{n1} &   &   &        & 1
    \end{array}\right]_{n×n}
$，$A^{(2)} = L_1A =
    \left[\begin{array}{c}
        a_{11}^{(1)} & a_{12}^{(1)} & \cdots & a_{1n}^{(1)}
    \\  0            & a_{22}^{(2)} & \cdots & a_{2n}^{(2)}
    \\ \vdots        & \vdots       & \ddots & \vdots
    \\ 0             & a_{n2}^{(2)} & \cdots & a_{nn}^{(2)}
    \end{array}\right]
$
&nbsp;

继续对矩阵$A^{(2)}$做初等行变换以得到$A^{(3)}$。

$L_2 =
    \left[\begin{array}{c}
        1 &
    \\    & 1       &
    \\    & -l_{32} & 1 &
    \\    & \vdots  &   & \ddots &
    \\    & -l_{n2} &   &        & 1
    \end{array}\right]_{n×n}
$，$A^{(3)} = L_2A^{(2)}
    \left[\begin{array}{c}
        a_{11}^{(1)} & a_{12}^{(1)} & a_{13}^{(1)} & \cdots & a_{1n}^{(1)}
    \\  0            & a_{22}^{(2)} & a_{23}^{(2)} & \cdots & a_{2n}^{(2)}
    \\  0            & 0            & a_{33}^{(3)} & \cdots & a_{3n}^{(3)}
    \\ \vdots        & \vdots       & \vdots       & \ddots & \vdots
    \\ 0             & 0            & a_{n3}^{(3)} & \cdots & a_{nn}^{(3)}
    \end{array}\right]
$
&nbsp;

**综上**

$$A^{(n)} = L_{n-1}  L_{n-2}  \cdots  L_2  L_1  A$$

$$A = L_1^{-1} L_2^{-1} \cdots L_{n-2}^{-1} L_{n-1}^{-1} A^{(n)}$$

### LU分解

记$\begin{cases}
    L = L_1^{-1}L_2^{-1} \cdots L_{n-2}^{-1} L_{n-1}^{-1}
\\  U=A^{(n)}
\end{cases}$，则$A=LU$，称为**方阵$A$的$LU$三角分解**。

**性质**

- $A$可进行$LU$分解的**充分条件**是$A$的前$n-1$阶顺序主子式不为零
- $L$是一个**单位下三角矩阵**
- $U$是一个**上三角矩阵**

**求解**

已知$Ax=b$，则$LUx=b$，将线性方程组的求解转换为

$$\begin{cases}
    Ux=y
\\  Ly=b
\end{cases}$$

即两个三角方程组的求解。

### LDU分解

如果$A$能分解为$LDU$，则$A=LDU$，称为**方阵$A$的$LDU$三角分解**。

**性质**

- $L$是一个**单位下三角矩阵**
- $D$是一个**对角矩阵**
- $U$是一个**单位上三角矩阵**

### Doolittle分解

对于LU分解，如果$L$是一个单位下三角矩阵，则称它为**Doolittle分解**。

$$
    \left[\begin{array}{c}
        a_{11} & a_{12} & \dots  & a_{1n}
    \\  a_{21} & a_{22} & \dots  & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{n1} & a_{n2} & \dots  & a_{nn}
    \end{array}\right]
    =
    \left[\begin{array}{c}
        1      &
    \\  l_{21} & 1      &
    \\  \vdots & \vdots & \ddots &
    \\  l_{n1} & l_{n2} & \dots  & 1
    \end{array}\right]
    \left[\begin{array}{c}
        u_{11} & u_{12} & \dots  & u_{1n}
    \\         & u_{22} & \dots  & u_{2n}
    \\         &        & \ddots & \vdots
    \\         &        &        & u_{nn}
    \end{array}\right]
$$

**性质**

- $L$的主对角线上元素全为$1$。
- $A$和$U$第一行元素相同：$u_{1j} = a_{1j}$，$j=1,2,\dots,n$
- $L$的第一列元素等于$A$的第一列元素除以$u_{11}$，$l_{i1} = \dfrac{a_{i1}}{u_{11}}, \,\,i=2,3,\dots,n$

#### 分解法

**变换法**

- 从左上角取最外圈一行一列（不包含交叉点）拷贝
  - 拷贝的列除以交叉点元素
- 以被取行将原矩阵被取列高斯消去为0
- 除去被拷贝的行列，对子式重复上述操作，直至剩最后一个元素
- 被拷贝部分右上角即为$U$
- 被拷贝部分左下角，对角线替换为$1$后即为$L$

**直接分解法**

- 先求$U$的第1行，$L$的第1列：套用性质
- 再求$U$的第2行，$L$的第2列：计算$a_{2j}, \,\,j=2,\dots,n$；$a_{i2}, \,\,j=3,\dots,n$。
- 然后$U$的第3行，$L$的第3列：$\cdots$
- $\cdots$

### Crout分解

对于LU分解，如果$U$是一个单位上三角矩阵，则称它为**Crout分解**。

$$
    \left[\begin{array}{c}
        a_{11} & a_{12} & \dots  & a_{1n}
    \\  a_{21} & a_{22} & \dots  & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{n1} & a_{n2} & \dots  & a_{nn}
    \end{array}\right]
    =
    \left[\begin{array}{c}
        l_{11} &
    \\  l_{21} & l_{22} &
    \\  \vdots & \vdots & \ddots &
    \\  l_{n1} & l_{n2} & \dots  & l_{nn}
    \end{array}\right]
    \left[\begin{array}{c}
        1      & u_{12} & \dots  & u_{1n}
    \\         & 1      & \dots  & u_{2n}
    \\         &        & \ddots & \vdots
    \\         &        &        & 1
    \end{array}\right]
$$

### 小结

对于LDU分解、Doolittle分解、Crout分解

- 三者可以相互转换
- 三个分解结果都唯一，且唯一的充要条件为$A$的前$n-1$阶顺序主子式不为零

#### 例

已知$
    \begin{cases}
        x_1 + 2x_2 - 3x_3 = 1
    \\  2x_1 - x_2 + 3x_3 = 5
    \\  3x_1 - 2x_2 + 2x_3 = 1
    \end{cases}
$

**解**

则$A=
    \left[\begin{array}{c}
        1 & 2  & -3
    \\  2 & -1 & 3
    \\  3 & -2 & 2
    \end{array}\right]
$

使用Doolittle分解法，直接分解该矩阵。

- $A$和$U$第一行元素相同

$L{\backslash}U=
    \left[\begin{array}{c}
        1 & 2  & -3
    \\  \,
    \\  \,
    \end{array}\right]
$

- $L$的第一列元素等于$A$的第一列元素除以$u_{11}$

$L{\backslash}U=
    \left[\begin{array}{c}
        1 & 2  & -3
    \\  2 &
    \\  3 &
    \end{array}\right]
$

- $a_{22} = l_{21}u_{12} + u_{22}$
- $a_{23} = l_{21}u_{31} + u_{32}$

$L{\backslash}U=
    \left[\begin{array}{c}
        1 & 2           & -3
    \\  2 & -5          & 9
    \\  3 &
    \end{array}\right]
$

- $a_{32} = l_{31}u_{12} + l_{32}u_{22}$

$L{\backslash}U=
    \left[\begin{array}{c}
        1 & 2           & -3
    \\  2 & -5          & 9
    \\  3 & \frac{8}{5} &
    \end{array}\right]
$

- $a_{33} = l_{31}u_{13} + l_{32}u_{23} + u_{33}$

$L{\backslash}U=
    \left[\begin{array}{c}
        1 & 2           & -3
    \\  2 & -5          & 9
    \\  3 & \frac{8}{5} & -\frac{17}{5}
    \end{array}\right]
$

故$A=
    \left[\begin{array}{c}
        1 &
    \\  2 & 1           &
    \\  3 & \frac{8}{5} & 1
    \end{array}\right]
    \left[\begin{array}{c}
        1 & 2  & -3
    \\    & -5 & 9
    \\    &    & -\frac{17}{5}
    \end{array}\right]
$

### Cholesky分解

当矩阵$A$实**对称**（$A^T=A$）且**正定**（$x^TAx>0$）时，$LU$分解的$U$可以进一步分解为$DM$

$$
    \left[\begin{array}{c}
        u_{11} & u_{12} & \dots  & u_{1n}
    \\         & u_{22} & \dots  & u_{2n}
    \\         &        & \ddots & \vdots
    \\         &        &        & u_{nn}
    \end{array}\right]
    =
    \left[\begin{array}{c}
        u_{11} &
    \\         & u_{22} &
    \\         &        & \ddots &
    \\         &        &        & u_{nn}
    \end{array}\right]
    \left[\begin{array}{c}
        1 & \frac{u_{12}}{u_{11}} & \dots  & \frac{u_{1n}}{u_{11}} 
    \\    & 1                     & \dots  & \frac{u_{2n}}{u_{22}} 
    \\    &                       & \ddots & \vdots
    \\    &                       &        & 1
    \end{array}\right]
$$

$A=LDM$，$A^T=A$

$\begin{array}{l}
    ⇒ A^T = (LDM)^T = M^TDL^T = A = LDM
\\  ⇒ M^TDL^T = LDM
\\  ⇒ M = L^T
\\  ⇒ A = LDL^T
\end{array}$

令$
    D = D^{\frac{1}{2}} ⋅ D^{\frac{1}{2}} =
    \left[\begin{array}{c}
        \sqrt{u_{11}} &
    \\                & \sqrt{u_{22}} &
    \\                &               & \ddots &
    \\                &               &        & \sqrt{u_{nn}}
    \end{array}\right]
    \left[\begin{array}{c}
        \sqrt{u_{11}} &
    \\                & \sqrt{u_{22}} &
    \\                &               & \ddots &
    \\                &               &        & \sqrt{u_{nn}}
    \end{array}\right]
$

则$A = L D^{\frac{1}{2}} D^{\frac{1}{2}} L^T 
   = (LD^{\frac{1}{2}}) (LD^{\frac{1}{2}})^T
$

令$
    G = L D^{\frac{1}{2}} =
    \left[\begin{array}{c}
        g_{11} &
    \\  g_{21} & g_{22} &
    \\  g_{31} & g_{32} & g_{33} &
    \\  \vdots & \vdots & \vdots & \ddots &
    \\  g_{n1} & g_{n2} & g_{n3} & \cdots & g_{nn}
    \end{array}\right]
$，$
    G^T = 
    \left[\begin{array}{c}
        g_{11} & g_{21} & g_{31} & \cdots & g_{n1}
    \\         & g_{22} & g_{32} & \cdots & g_{n1}
    \\         &        & g_{33} & \cdots & g_{n3}
    \\         &        &        & \ddots &
    \\         &        &        &        & g_{nn}
    \end{array}\right]
$

**综上**

$$A = GG^T$$

称为**对称正定矩阵的Cholesky分解**或**平方根分解**。

## 满秩分解

将矩阵$A_{m×n}$化为行最简$H$有

$$A_{m×n} 
    = {P^{-1}}_{m×m} H_{m×n}
    =
    \left[\begin{array}{c}
        B_{m×r} & S_{m×(m-r)}
    \end{array}\right]
    \left[\begin{array}{c}
        C_{r×n} \\ 0_{(m-r)×n}
    \end{array}\right]
    =
    BC
$$

$$
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n}
    \\  a_{21} & a_{22} & \cdots & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{array}\right]_{m×n}
    =
    \left[\begin{array}{c}
        b_{11} & b_{12} & \cdots & b_{1r}
    \\  b_{21} & b_{22} & \cdots & b_{2r}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  b_{m1} & b_{m2} & \cdots & b_{mr}
    \end{array}\right]_{m×r}
    \left[\begin{array}{c}
        c_{11} & c_{12} & \cdots & c_{1n}
    \\  c_{21} & c_{22} & \cdots & c_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  c_{r1} & c_{r2} & \cdots & c_{rn}
    \end{array}\right]_{r×n}
$$

对$H$施列变换，使得$HQ = \left[\begin{array}{c}
    E_r & *
\\  0   & 0
\end{array}\right]_{m×n}$

$$AQ = P^{-1}HQ
    = \left[\begin{array}{c}
        B & S
    \end{array}\right]
    HQ
    =\left[\begin{array}{c}
        B & S
    \end{array}\right]
    \left[\begin{array}{c}
        E_r & *
    \\  0   & 0
    \end{array}\right]
    = \left[\begin{array}{c}
        B & B^*
    \end{array}\right]
$$

**性质**

- 满秩分解不唯一
- 若$B,C$、$B_1,C_1$分别为满秩分解，则存在$r$阶可逆阵$P$，使$B=B_1P, C=P^{-1}C_1$

**求解思路**

- *Step1*: 将$A$化为行最简$H$，并求出$H$的秩$r$
  - $H$的前$r$行即为$C$
- *Step2*: 换列$H$使其左上角成$E_{r×r}$，并将同样操作应用于$A$得$A'$
  - $A'$的前$r$列即为$B$
- *Step3*: 综上即可得$A=B×C$

#### 例

求矩阵$A = 
    \left[\begin{array}{c}
        2 & 0  & 4 & 3 & 2
    \\  1 & −2 & 4 & 0 & 3
    \\  1 & 1  & 1 & 1 & 0
    \\  2 & 1  & 3 & 2 & 1
    \end{array}\right]
$的满秩分解。

**解**

$$A = 
    \left[\begin{array}{c}
        2 & 0  & 4 & 3 & 2
    \\  1 & −2 & 4 & 0 & 3
    \\  1 & 1  & 1 & 1 & 0
    \\  2 & 1  & 3 & 2 & 1
    \end{array}\right]
    \xrightarrow[]{初等行变换}
    \left[\begin{array}{c}
        1 & 1 & 1  & 1 & 0
    \\  0 & 1 & −1 & 0 & 1
    \\  0 & 0 & 0  & 1 & 0
    \\  0 & 0 & 0  & 0 & 0
    \end{array}\right]
    \xrightarrow[]{初等行变换}
    \left[\begin{array}{c}
        1 & 0 & 2  & 0 & 1
    \\  0 & 1 & −1 & 0 & −1
    \\  0 & 0 & 0  & 1 & 0
    \\  0 & 0 & 0  & 0 & 0
    \end{array}\right]
$$

明显$r=3$（前3行不为0）

$$C = 
    \left[\begin{array}{c}
        1 & 0 & 2  & 0 & 1
    \\  0 & 1 & −1 & 0 & −1
    \\  0 & 0 & 0  & 1 & 0
    \end{array}\right]
$$

由$AQ = \left[\begin{array}{c} B & B^* \end{array}\right]$（即3、4列互换）

$$B = 
    \left[\begin{array}{c}
        2 & 0  & 3 
    \\  1 & −2 & 0 
    \\  1 & 1  & 1
    \\  2 & 1  & 2
    \end{array}\right]
$$

综上

$$A =
    \left[\begin{array}{c}
        2 & 0  & 3 
    \\  1 & −2 & 0 
    \\  1 & 1  & 1
    \\  2 & 1  & 2
    \end{array}\right]
    \left[\begin{array}{c}
        1 & 0 & 2  & 0 & 1
    \\  0 & 1 & −1 & 0 & −1
    \\  0 & 0 & 0  & 1 & 0
    \end{array}\right]
$$

### QR分解

$$A_{m×n} = Q_{m×r} R_{r×n}$$

其中$Q$满足$Q^TQ=E_r$，可对满秩分解的$B$矩阵做*Schmidt*正交化得到$Q$矩阵。

**性质**

- QR分解一定存在

## 奇异值分解

略