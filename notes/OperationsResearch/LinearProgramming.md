<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [线性规划（*Linear Programming*）](./index.html)

[TOC]

## 导论

### 基本思想

有限得资源获得最大收益。

### 不等式转等式

假设存在不等式

$$x_1 + x_2 ≤ b$$

现新增一个变量$x_3$，将不等式转化为等式

$$x_1 + x_2 + x_3 = b$$

$x_3$即称为**剩余变量**。

同理，若有$x_1 + x_2 ≥ b$，则转换为$x_1 + x_2 - x_3 = b$。此时$x_3$称为**松弛变量**。

### 表示形式

**一般形式**

$$\{\max | \min \} \,\,\, z = c_1x_1 + c_2x_2 + \cdots + c_nx_n
\newline
\begin{cases}
    a_{11}x_1 + \cdots + a_{1n}x_n \,\,\, \{ ≤ | = | ≥ \} \,\,\, b_1
\\  \cdots
\\  a_{m1}x_1 + \cdots + a_{mn}x_n \,\,\, \{ ≤ | = | ≥ \} \,\,\, b_m
\\  x_1, x_2, \cdots, x_n ≥ 0
\end{cases}
$$

- $c$：价值系数
- $a$：技术系数
- $b$：资源限制

**标准型**

$$\max \,\,\, z = c_1x_1 + c_2x_2 + \cdots + c_nx_n
\newline
\begin{cases}
    a_{11}x_1 + \cdots + a_{1n}x_n \,\,\, = \,\,\, b_1 
\\  \cdots
\\  a_{m1}x_1 + \cdots + a_{mn}x_n \,\,\, = \,\,\, b_m
\\  x_1, x_2, \cdots, x_n ≥ 0
\\  b_i ≥ 0 \,\,\, (i=1,2,\cdots,m)
\end{cases}
$$

每个约束条件都是不可缺省得，所以矩阵$A_{m×n}$应该是行满秩（$r(A)=m ≤ n$）得。

### 解

- **可行解**：满足约束条件的解。
- **可行域**：所有可行解的集合。
- **最优解**：使目标函数达到最大的可行解。
- **基**：$B_{m×m}$是约束方程$A_{m×n}$的非奇异子矩阵，称$B$是线性规划的一个基，最多有$C_n^m$个基。

**基解**

$Ax=b$
$\,\,\, ⇒ \,\,\,
\left[\begin{array}{c}
    B & N
\end{array}\right]
\left[\begin{array}{c}
    x_B
\\  x_N
\end{array}\right]
=b
$
$\,\,\, ⇒ \,\,\, Bx_B + Nx_N = b$
$\,\,\, ⇒ \,\,\, x_B = B^{-1}b - B^{-1}Nx_N$

$x_B$即为**基解**。

**基可行解**

![](./images/base.png)

满足非负约束条件的基解，称为**基可行解**。

### 凸集

![](./images/convex.png)

从直观上将，凸集没有凹入部分，其内部没有空洞。

(a)、(b)是凸集，(c)不是凸集，任何两个凸集的交集是凸集(d)。

### Example

#### 例1：将一般形转化为标准型

有一般形
$\max \,\,\, z = 2x_1 + 3x_2
\newline
\begin{cases}
    x_1 + 2x_2 ≤ 80
\\  4x_1 ≤ 160
\\  4x_2 ≤ 120
\\  x_1, x_2 ≥ 0
\end{cases}
$

转化为标准型得

$\max \,\,\, z = 2x_1 + 3x_2 + 0x_3 + 0x_4 + 0x_5
\newline
\begin{cases}
    x_1 + 2x_2 + x_3 = 80
\\  4x_1 + x_4 = 160
\\  4x_2 + x_5 = 120
\\  x_1, x_2, x_3, x_4, x_5 ≥ 0
\end{cases}
$

## 图解法

只适合两个变量

## 单纯形法

>**单纯形**：指0维中的点，1维中的线段，2维中的三角形，3维中的四面体，$n$维空间中的有$n+1$个顶点的多面体。

## 对偶理论

## 灵敏度分析

