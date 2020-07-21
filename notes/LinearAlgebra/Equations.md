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

$$Ab = (A_{m×n},b_{m×1}) =
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n} & b_1
    \\  a_{21} & a_{22} & \cdots & a_{2n} & b_2
    \\  \vdots & \vdots & \ddots & \vdots & \vdots
    \\  a_{m1} & a_{m2} & \cdots & a_{mn} & b_m
    \end{array}\right]_{m×(n+1)}
$$

## 一般解法

### 齐次线性方程组

$A_{m×n}x=0$

##### 解的情况

| 条件 | 解的个数 | 补充说明 |
| :- | :-: | :- |
| $r(A)=n$ | 唯一 | 仅有零解
| $r(A)<n$ | 无穷 | 有非零解

### 非齐次线性方程组

>$$非齐次方程组通解 = 齐次方程组通解 + 非齐次方程组特解$$

$A_{m×n}x=b$

##### 解的情况

| 条件 | 解的个数 |
| :- | :-: |
| $r(A)<r(Ab)$   | 无解 
| $r(A)=r(Ab)=n$ | 唯一
| $r(A)=r(Ab)<n$ | 无穷 

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

若矩阵$G$满足$AGA=A$，则称$G$是$A$的**减号逆**，记作$A^-$。$A^-b$是方程组的一个**特解**。

##### 求$G$

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

上述表达式为减号逆的**充要条件**。从表达式可知，减号逆不唯一。

##### 性质

- $r(A^-)≥r(A)$
- $A^-A$、$AA^-$都为幂等阵，且$r(A^-A)=r(AA^-)=r(A)$
- 若$A$可逆，则$A^-=A^{-1}$
- 若$B,C$非奇异，则$(BAC)^- = C^{-1}A^-B^{-1}$
- $AA^- ∼ 
    \left[\begin{array}{c}
        E_r & 0
    \\  0   & 0
    \end{array}\right]
$

#### 相容方程组通解

##### $Ax=0$通解

$$x = (E_n - GA)y_{n×1}$$

##### $Ax=b$通解

$$(E_n - GA)y + Gb$$

### 极小范数广义逆

##### 极小范数解

对于相容线性方程组$Ax=b$，如果$x_0∈R^n$，使得$\|x_0\|_2 = \min\limits_{Ax=b} \|x\|_2$，则称$x_0$是$Ax=b$的**极小范数解**。

##### 极小范数广义逆

$x=Gb$是$Ax=b$的**极小范数解**${ \ \ \ ⇔ \ \ \ } AGA=A$，$(GA)^T=GA$

此时$G$称为$A$的**极小范数广义逆**，记为$A^-_m$。

##### 性质

$A^H(AA^H)^-$是$A$的极小范数广义逆（**充分条件**）。故矩阵的**极小范数广义逆$A^-_{m}$一般不唯一**。但相容线性方程组$Ax=b$的**极小范数解$A^-_{m}b$唯一存在**。

### 最小二乘广义逆

##### 最小二乘解

$Ax=b$是矛盾方程，即在通常意义下无解。寻找$x_0$使得

$$\|Ax_0−b\|_2 = \min⁡\{ \|Ax-b\|_2 {\  \ \bold| \ \ }x∈C^n \}$$

$x_0$称为矛盾方程组的**最小二乘解**。

##### 最小二乘广义逆

$AGA=A$，$(AG)^T=AG$，此时$G$称为$A$的**最小二乘广义逆**，记为$A^-_l$。

##### 性质

$(A^TA)^-A^T$是$A$的最小二乘广义逆（**充分条件**）。故矩阵的**最小二乘广义逆$A^-_{l}$一般不唯一**（但当列满秩时唯一）。

### 加号逆

##### 极小范数最小二乘解

$Ax=b$的最小二乘解中二范数最小的解。

$A^-_mAA^-_lb$是$Ax=b$的极小范数最小二乘解（**充分条件**）。

##### 加号逆

$x=Gb$是$Ax=b$的**极小范数最小二乘解**${ \ \ \ ⇔ \ \ \ } AGA=A$，$GAG=G$，$(GA)^T=GA$，$(AG)^T=AG$（*Penrose*—*Moore*方程）

此时$G$称为$A$的**加号逆**，记为$A^+$。

##### 性质

- $A^-_mAA^-_l$是一个加号逆（**充要条件**），加号逆唯一存在。
- <span class='mark'>设$A=BC$是$A$的满秩分解，则$C^H(CC^H)^{-1}(B^HB)^{-1}B^H = A^+$</span>
- $r(A^+)=r(A)$
- $(kA)^+=\frac{1}{k}A^+$
- $(A^+)^+ = A^+$
- $(A^+)^T = (A^T)^+$
- $(A^TA)^+ = A^+(A^+)^T$