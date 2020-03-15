<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [解线性方程组：直接解法](./index.html)

[TOC]

&nbsp;
$
    \begin{cases}
        a_{11} ⋅ x_1 + a_{12} ⋅ x_2 + \dots + a_{1n} ⋅ x_n = b_1
    \\  a_{21} ⋅ x_1 + a_{22} ⋅ x_2 + \dots + a_{2n} ⋅ x_n = b_2
    \\  \dots
    \\  a_{m1} ⋅ x_1 + a_{m2} ⋅ x_2 + \dots + a_{mn} ⋅ x_n = b_m
    \end{cases}
    ⇔
    \left[\begin{array}{c}
        a_{11} & a_{12} & \dots  & a_{1n}
    \\  a_{21} & a_{22} & \dots  & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{m1} & a_{m2} & \dots  & a_{mn}
    \end{array}\right]
    \left[\begin{array}{c} x_1 \\ x_2 \\ \vdots  \\ x_n \end{array}\right]
    =
    \left[\begin{array}{c} b_1 \\ b_2 \\ \vdots \\ b_m \end{array}\right]
$
&nbsp;
$$A_{m×n} ⋅ x_{n×1}=b_{m×1}$$
&nbsp;

## 高斯（Gauss）消去法

### 顺序消去法

**能执行的充要条件**

各阶顺序主子式都不为零。

**缺陷**

可能会产生大数吃掉小数的情况。

#### eg

计算$
    \begin{cases}
        2x_1 + 4x_2 - 2x_3 = 2
    \\  x_1 - 3x_2 - 3x_3 = -1
    \\  4x_1 + 2x_2 +2x_3 = 3
    \end{cases}
$

**解**

$
(A,b) =
    \left[\begin{array}{c}
        2 & 4  & -2 & \vdots & 2
    \\  1 & -3 & -3 & \vdots & -1
    \\  4 & 2  & 2  & \vdots & 3
    \end{array}\right]
$

- $row_2 - \frac{1}{2}row_1$
- $row_3 - 2row_1$

$
(A,b) =
    \left[\begin{array}{c}
        2 & 4  & -2 & \vdots & 2
    \\  0 & -5 & -2 & \vdots & -2
    \\  0 & -6 & 6  & \vdots & -1
    \end{array}\right]
$

- $row_3 - \frac{6}{5}row_2$

$
(A,b) =
    \left[\begin{array}{c}
        2 & 4  & -2           & \vdots & 2
    \\  0 & -5 & -2           & \vdots  & -2
    \\  0 & 0  & \frac{42}{5} & \vdots & \frac{7}{5}
    \end{array}\right]
$

得，$x_3=\frac{1}{6}$、$x_2=\frac{1}{3}$、$x_1=\frac{1}{2}$

### 列主元消去法

**思想**

尽量选择的主元素是绝对值比较大的元素，以减少舍入误差。

**方法**

在每一步消元前，在主元所在列找出绝对值最大的元素，然后将当前行与最大元素所在行互换，然后再进行Gauss消去。

#### eg

$
(A,b) =
    \left[\begin{array}{c}
        0.0120 & 0.0100 & 0.1670 & \vdots & 0.6781
    \\  1.000  & 0.8334 & 5.910  & \vdots & 12.10
    \\  3200   & 1200   & 4.200  & \vdots & 981.0
    \end{array}\right]
$

- $row_1↔row_3$

$
(A,b) =
    \left[\begin{array}{c}
        3200   & 1200   & 4.200  & \vdots & 981.0
    \\  1.000  & 0.8334 & 5.910  & \vdots & 12.10
    \\  0.0120 & 0.0100 & 0.1670 & \vdots & 0.6781
    \end{array}\right]
$

- 接下来按顺序Gauss消去法求解

### 全主元消去法

**方法**

在每一步消元前，在所有元素中选取绝对值最大的元素作为主元素。


## 直接三角分解

### 高斯消去的矩阵运算

**注**：上角标用来标记变换次数，$^{(1)}$表示没有发生变化。

第一步高斯消去的过程就是对矩阵做了$(n-1)$次初等行变换，其效果就相当于左乘$(n-1)$个初等矩阵，将这$(n-1)$个初等矩阵相乘即得**单位下三角矩阵**$L_1$。

- $L_1 =
    \left[\begin{array}{c}
        1       &
    \\  -l_{21} & 1 &
    \\  -l_{31} &   & 1 &
    \\  \vdots  &   &   & \ddots &
    \\  -l_{n1} &   &   &        & 1
    \end{array}\right]_{n×n}
$
- $A^{(2)} = L_1A =
    \left[\begin{array}{c}
        a_{11}^{(1)} & a_{12}^{(1)} & \cdots & a_{1n}^{(1)}
    \\  0            & a_{22}^{(2)} & \cdots & a_{2n}^{(2)}
    \\ \vdots        & \vdots       & \ddots & \vdots
    \\ 0             & a_{n2}^{(2)} & \cdots & a_{nn}^{(2)}
    \end{array}\right]
$

继续对矩阵$A^{(2)}$做初等行变换以得到$A^{(3)}$。

- $L_2 =
    \left[\begin{array}{c}
        1 &
    \\    & 1       &
    \\    & -l_{32} & 1 &
    \\    & \vdots  &   & \ddots &
    \\    & -l_{n2} &   &        & 1
    \end{array}\right]_{n×n}
$
- $A^{(3)} = L_2A^{(2)} = L_2L_1A =
    \left[\begin{array}{c}
        a_{11}^{(1)} & a_{12}^{(1)} & a_{13}^{(1)} & \cdots & a_{1n}^{(1)}
    \\  0            & a_{22}^{(2)} & a_{23}^{(2)} & \cdots & a_{2n}^{(2)}
    \\  0            & 0            & a_{33}^{(3)} & \cdots & a_{3n}^{(3)}
    \\ \vdots        & \vdots       & \vdots       & \ddots & \vdots
    \\ 0             & 0            & a_{n3}^{(3)} & \cdots & a_{nn}^{(3)}
    \end{array}\right]
$

**综上**

- $A^{(n)} = L_{n-1}  L_{n-2}  \cdots  L_2  L_1  A$
- $A = L_1^{-1} L_2^{-1} \cdots L_{n-2}^{-1} L_{n-1}^{-1} A^{(n)}$

### $LU$三角分解

记
- $L = L_1^{-1}L_2^{-1} \cdots L_{n-2}^{-1} L_{n-1}^{-1}$
- $U=A^{(n)}$。

则$A=LU$，称为**方阵$A$的$LU$三角分解**。

其中

- $L$是一个单位的下三角矩阵
- $U$是一个上三角矩阵

**性质**

- 则该分解存在唯一的$L$和$U$。

### Doolittle分解法

<!-- 能进行直接三角分解的充要条件——各阶顺序主子式都不为零。 -->

已知$Ax=b$

- 令$A=LU \,\,⇒\,\, LUx=b$
- 令$Ux=y \,\,⇒\,\, Ly=b$

将线性方程组的求解转换为$
    \begin{cases}
        Ly=b
    \\  Ux=y
    \end{cases}
$即两个三角方程组的求解。

**分解**

$A=LU \,\,⇔\,\,
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
$

**性质**

- $L$的主对角线上元素全为$1$。
- $A$和$U$第一行元素相同：$u_{1j} = a_{1j}$，$j=1,2,\dots,n$
- $L$的第一列元素等于$A$的第一列元素除以$u_{11}$，$l_{i1} = \dfrac{a_{i1}}{u_{11}}, \,\,i=2,3,\dots,n$

**求解方法**

- 先求$U$的第1行，$L$的第1列：套用性质
- 再求$U$的第2行，$L$的第2列：计算$a_{2j}, \,\,j=2,\dots,n$；$a_{i2}, \,\,j=3,\dots,n$。
- 然后$U$的第3行，$L$的第3列：$\cdots$
- $\cdots$

#### eg

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

## 平方根法

### Cholesky分解

当矩阵$A$**对称**（$A^T=A$）且**正定**（$x^TAx>0$）时，$U$可以进一步分解为$DM$

$U=DM \,\,⇔\,\,
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
$

$A=LDM$，$A^T=A$
$\,\,⇒\,\, A^T = (LDM)^T = M^TDL^T = A = LDM$
$\,\,⇒\,\, M^TDL^T = LDM$
$\,\,⇒\,\, M = L^T$
$\,\,⇒\,\, A = LDL^T$

令$D = D^{\frac{1}{2}} ⋅ D^{\frac{1}{2}} =
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

$\,\,⇒\,\, A
    = L D^{\frac{1}{2}} D^{\frac{1}{2}} L^T
    = (LD^{\frac{1}{2}}) (LD^{\frac{1}{2}})^T
$

令$G = L D^{\frac{1}{2}} =
    \left[\begin{array}{c}
        g_{11} &
    \\  g_{21} & g_{22} &
    \\  g_{31} & g_{32} & g_{33} &
    \\  \vdots & \vdots & \vdots & \ddots &
    \\  g_{n1} & g_{n2} & g_{n3} & \cdots & g_{nn}
    \end{array}\right]
    ,
G^T = 
    \left[\begin{array}{c}
        g_{11} & g_{21} & g_{31} & \cdots & g_{n1}
    \\         & g_{22} & g_{32} & \cdots & g_{n1}
    \\         &        & g_{33} & \cdots & g_{n3}
    \\         &        &        & \ddots &
    \\         &        &        &        & g_{nn}
    \end{array}\right]
$

&nbsp;
$$A = GG^T$$

称为**对称正定矩阵的Cholesky分解**。

$Ax=b$转换为$
    \begin{cases}
        Gy=b
    \\  G^Tx=y
    \end{cases}
$

#### eg

已知$
    \begin{cases}
        4x_1 + 2x_2 + 4x_3 = 4
    \\  2x_1 - 10x_2 - x_3 = 17
    \\  4x_1 - x_2 + 6x_3 = 0
    \end{cases}
$

**解**

则$A=
    \left[\begin{array}{c}
        4 & 2  & 4
    \\  2 & 10 & -1
    \\  4 & -1 & 6
    \end{array}\right]
$，且$A$满足$A^T=A$

- $g_{11}=a_{11}$

$G{\backslash}G^T=
    \left[\begin{array}{c}
        2 & & 
    \\    & & 
    \\    & & 
    \end{array}\right]
$

- $a_{21}=g_{21}g_{11}$
- $a_{31}=g_{31}g_{11}$

$G{\backslash}G^T=
    \left[\begin{array}{c}
        2 & & 
    \\  1 & & 
    \\  2 & & 
    \end{array}\right]
$

- $a_{22}=g_{21}^2+g_{22}^2$
- $a_{32}=g_{31}g_{21}+g_{32}g_{22}$

$G{\backslash}G^T=
    \left[\begin{array}{c}
        2 &    & 
    \\  1 & 3  & 
    \\  2 & -1 & 
    \end{array}\right]
$

- $a_{33}=g_{31}^2+g_{32}^2+g_{33}^2$

$G{\backslash}G^T=
    \left[\begin{array}{c}
        2 &    & 
    \\  1 & 3  & 
    \\  2 & -1 & 1
    \end{array}\right]
$

## 追赶法

### 三对角形矩阵

形如$
    \left[\begin{array}{c}
        a_1 & c_d
    \\  d_1 & a_2    & c_2
    \\      & \ddots & \ddots  & \ddots
    \\      &        & d_{n-1} & a_{n-1} & c_{n-1}
    \\      &        &         & d_n     & a_n
    \end{array}\right]
$的矩阵，称为**三对角形矩阵**。

**满足三对角形矩阵的一个充分条件**

- $|a_1|>|c_1|>0$
- $|a_n|>|d_n|>0$
- $|a_i|>|c_i|+|d_i|$，$i=2,3,\cdots,n$
- $c_i ⋅ d_i≠0$

### Crout分解

当矩阵$A$满足三对角形式时，$LDM$可继续分解为$TM$。

$A=TM \,\,⇔\,\,
    \left[\begin{array}{c}
        α_1 &
    \\  γ_2 & α_2 &
    \\      & \ddots & \ddots  &
    \\      &        & γ_{n-1} & α_{n-1} &
    \\      &        &         & γ_n     & α_n
    \end{array}\right]
    ×
    \left[\begin{array}{c}
        1 & β_1 &
    \\    & 1   & β_2    &
    \\    &     & \ddots & \ddots &
    \\    &     &        & 1      & β_{n-1}
    \\    &     &        &        & 1
    \end{array}\right]
$

- $T$：下三角矩阵
- $M$：单位上三角矩阵

**性质**

- $α_1 = a_1$
- $β_1 = \dfrac{c_!}{α_1}$
- $γ_i = d_i, \,i=2,3,\cdots,n$
- $α_i = a_i - d_iβ_{i-1}, \,i=2,3,\cdots,n$
- $β_i = \dfrac{c_i}{α_i}, \,i=2,3,\cdots,n-1$

<!-- #### eg

$
    \left[\begin{array}{c}
        3  & 2  &    & 
    \\  -1 & 3  & 2  &
    \\     & -1 & 3  & 2
    \\     &    & -1 & 3
    \end{array}\right]
    \left[\begin{array}{c}
        x_1
    \\  x_2
    \\  x_3
    \\  x_4
    \end{array}\right]
    \left[\begin{array}{c}
        7
    \\  11
    \\  15
    \\  9
    \end{array}\right]
$

**解**

$A=
    \left[\begin{array}{c}
        3  & 2  &    & 
    \\  -1 & 3  & 2  &
    \\     & -1 & 3  & 2
    \\     &    & -1 & 3
    \end{array}\right]
$ -->

