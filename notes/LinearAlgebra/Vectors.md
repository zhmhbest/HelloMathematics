<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [向量组](./index.html)

## 定义

有限个相同维数的行向量或列向量组合成的一个集合就叫做向量组

$$A=(\vec{a}_1, \vec{a}_2, \vec{a}_3, \dots, \vec{a}_n)$$

## 向量组与矩阵

$Y=AX$表示向量$X$和向量$Y$的一种映射关系，其中$A$是描述这种关系的参数。

若令$
    X=\left[\begin{array}{c} x_1 \\ x_2 \\ \vdots  \\ x_n \end{array}\right];
    Y=\left[\begin{array}{c} y_1 \\ y_2 \\ \vdots  \\ y_n \end{array}\right]$，则$
    \left[\begin{array}{c} y_1 \\ y_2 \\ \vdots  \\ y_n \end{array}\right]=A
    \left[\begin{array}{c} x_1 \\ x_2 \\ \vdots  \\ x_n \end{array}\right]$。

## 系数矩阵

若$B$能由$A$线性表示，则：
$
    \left[\begin{array}{c}
        a_{1} & a_{2} & \dots  & a_{m}
    \end{array}\right]
    ×
    \left[\begin{array}{c}
        k_{11} & k_{12} & \dots  & k_{1n}
    \\  k_{21} & k_{22} & \dots  & k_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  k_{m1} & k_{m2} & \dots  & k_{mn}
    \end{array}\right]
    =
    \left[\begin{array}{c}
        b_{1} & b_{2} & \dots  & b_{n}
    \end{array}\right]
$
其中$
    \left[\begin{array}{c}
        k_{11} & k_{12} & \dots  & k_{1n}
    \\  k_{21} & k_{22} & \dots  & k_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  k_{m1} & k_{m2} & \dots  & k_{mn}
    \end{array}\right]$即为**系数矩阵**。

## 线性相关

对$n$维向量$a_1,a_2,\cdots,a_s$，如果存在不全为零的数，使得

$$k_1a_1+k_2a_2+\dots+k_sa_s=0$$

则称向量组$a_1,a_2,\cdots,a_s$**线性无关**，否则称**线性相关**。

## 向量组等价

向量组$B$能由向量组$A$**线性表示**的充要条件为$r(A) = r(B)$。
若$B$能被$A$线性表示的同时，$A$也能被$B$线性表示，则称$A$与$B$**等价**。

## Schmidt正交化

已知$\vec{α}_1$、$\vec{α}_2$、$\vec{α}_3$线性无关。

$\vec{β}_1 = \vec{α}_1$

$\vec{β}_2 = \vec{α}_2 - 
\dfrac{
    \vec{α}_2 \bullet \vec{β}_1
}{
    \vec{β}_1 \bullet \vec{β}_1
}\vec{β}_1$

$\vec{β}_3 = \vec{α}_3 - 
\dfrac{
    \vec{α}_3 \bullet \vec{β}_1
}{
    \vec{β}_1 \bullet \vec{β}_1
}\vec{β}_1 - 
\dfrac{
    \vec{α}_3 \bullet \vec{β}_2
}{
    \vec{β}_2 \bullet \vec{β}_2
}\vec{β}_2$

则$\vec{β}_1$、$\vec{β}_2$、$\vec{β}_3$为正交向量组。

$\vec{γ}_1 = \dfrac{\vec{β}_1}{\|\vec{β}_1\|}$
$\vec{γ}_2 = \dfrac{\vec{β}_2}{\|\vec{β}_2\|}$
$\vec{γ}_3 = \dfrac{\vec{β}_3}{\|\vec{β}_3\|}$

从$\vec{α}_1$、$\vec{α}_2$、$\vec{α}_3$到$\vec{γ}_1$、$\vec{γ}_2$、$\vec{γ}_3$即称为**Schmidt正交化**。