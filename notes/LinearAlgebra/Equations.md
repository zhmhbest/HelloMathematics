<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [方程组](./index.html)

[TOC]

## 定义

$Ax=b$
&nbsp;
$
    ⇔
    \begin{cases}
        a_{11} ⋅ x_1 + a_{12} ⋅ x_2 + \cdots + a_{1n} ⋅ x_n = b_1
    \\  a_{21} ⋅ x_1 + a_{22} ⋅ x_2 + \cdots + a_{2n} ⋅ x_n = b_2
    \\ \cdots
    \\  a_{m1} ⋅ x_1 + a_{m2} ⋅ x_2 + \cdots + a_{mn} ⋅ x_n = b_m
    \end{cases}
$
&nbsp;
$
    ⇔
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n}
    \\  a_{21} & a_{22} & \cdots & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{array}\right]
    ×
    \left[\begin{array}{c} x_1 \\ x_2 \\ \vdots  \\ x_n \end{array}\right]
    =
    \left[\begin{array}{c} b_1 \\ b_2 \\ \vdots \\ b_m \end{array}\right]
$
&nbsp;

### 系数矩阵

$$A =
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n}
    \\  a_{21} & a_{22} & \cdots & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{array}\right]_{m×n}
$$

### 增广矩阵

$$\overline{A} = (A_{m×n},b_{m×1}) =
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n} & b_1
    \\  a_{21} & a_{22} & \cdots & a_{2n} & b_2
    \\  \vdots & \vdots & \ddots & \vdots & \vdots
    \\  a_{m1} & a_{m2} & \cdots & a_{mn} & b_m
    \end{array}\right]_{m×(n+1)}
$$

## 基本解法

### 齐次线性方程组

$A_{m×n}x=0$

**解的情况**

| 条件 | 解的个数 | 补充说明 |
| :- | :-: | :- |
| $r(A)=n$ | 唯一 | 仅有零解
| $r(A)<n$ | 无穷 | 有非零解

### 非齐次线性方程组

$A_{m×n}x=b$

**解的情况**

| 条件 | 解的个数 |
| :- | :-: |
| $r(A)<r(\overline{A})$   | 无解 
| $r(A)=r(\overline{A})=n$ | 唯一
| $r(A)=r(\overline{A})<n$ | 无穷 

## 广义逆法

若$A$为可逆矩阵，那么方程组$Ax=b$的解为

$$x=A^{-1}b$$

考虑当$A$不可逆时，是否存矩阵$G$使得

$$x=Gb$$

### 减号逆

<span class='hint'>$
    A(Gb)=b { \ \ \ ⇒ \ \ \ } AG(Ax)=(Ax) { \ \ \ ⇒ \ \ \ } AGAx=Ax
$</span>

$x=Gb$是$Ax=b$的解${ \ \ \ ⇔ \ \ \ } AGA=A$

若矩阵$G$满足$AGA=A$，则称$G$是$A$的**减号逆**，记作$A^-$。

**求$G$**

将$A$化作标准型

$$
    \left[\begin{array}{c}
        A_{m×n} & E_{m×m}
    \\  E_{n×n} & 0
    \end{array}\right]
    \xrightarrow[]{初等变换}
    \left[\begin{array}{c}
        \left[\begin{array}{c}
            E_r & 0
        \\  0   & 0
        \end{array}\right] & P_{m×m}
    \\  Q_{n×n} & 0
    \end{array}\right]
$$

即$P_{m×m}A_{m×n}Q_{n×n} = 
    \left[\begin{array}{c}
        E_r & 0
    \\  0   & 0
    \end{array}\right]
$，则

<span class='hint'>$
    A = 
    P^{-1}
    \left[\begin{array}{c}
        E_r & 0
    \\  0   & 0
    \end{array}\right]
    Q^{-1}
$</span>

<span class='hint'>$
    A = AGA = 
    P^{-1}
    \left[\begin{array}{c}
        E_r & 0
    \\  0   & 0
    \end{array}\right]
    Q^{-1} G P^{-1}
    \left[\begin{array}{c}
        E_r & 0
    \\  0   & 0
    \end{array}\right]
    Q^{-1}
$</span>

<span class='hint'>$
    PAQ = 
    \left[\begin{array}{c}
        E_r & 0
    \\  0   & 0
    \end{array}\right]
    Q^{-1} G P^{-1}
    \left[\begin{array}{c}
        E_r & 0
    \\  0   & 0
    \end{array}\right]
$</span>

<span class='hint'>$
    \xrightarrow[]{
        Q^{-1} G P^{-1} = 
        \left[\begin{array}{c}
            G_{11} & G_{12}
        \\  G_{21} & G_{22}
        \end{array}\right]
    }
    \left[\begin{array}{c}
        E_r & 0
    \\  0   & 0
    \end{array}\right]
    \left[\begin{array}{c}
        G_{11} & G_{12}
    \\  G_{21} & G_{22}
    \end{array}\right]
    \left[\begin{array}{c}
        E_r & 0
    \\  0   & 0
    \end{array}\right]
    =
    \left[\begin{array}{c}
        E_r & 0
    \\  0   & 0
    \end{array}\right]
    { \ \ \ ⇒ \ \ \ } G_{11} = E_r
$</span>

$$G =
    Q_{n×n}
    \left[\begin{array}{c}
        E_r    & G_{12}
    \\  G_{21} & G_{22}
    \end{array}\right]_{n×m}
    P_{m×m}
$$

**性质**

- $r(A^-)≥r(A)$
- $A^-A$、$AA^-$都为幂等阵，且$r(A^-A)=r(AA^-)=r(A)$
- 若$A$可逆，则$A^-=A^{-1}$
- 若$B,C$非奇异，则$(BAC)^- = C^{-1}A^-B^{-1}$

