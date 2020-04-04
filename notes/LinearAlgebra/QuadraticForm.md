<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [二次型](./index.html)

## 二次型的定义

若含有$n$个变量$x_1,x_2,\cdots,x_n$的二次齐次函数

$f(x_1,x_2,\cdots,x_n) = \begin{array}{l}
    \\  a_{11}x_1^2 + a_{22}x_2^2 + \cdots + a_{nn}x_n^2 +
    \\  2a_{12}x_1x_2 + 2a_{13}x_1x_3 + \cdots + 2a_{1n}x_1x_n +
    \\  2a_{23}x_2x_3 + \cdots + 2a_{2n}x_2x_n +
    \\  \cdots + 2a_{n-1,n}x_{n-1}x_n
    \end{array}
$

可写成

$$f(x_1,x_2,\cdots,x_n) = 
    \left[\begin{array}{c}
        x_1 & x_2 & \cdots & x_n
    \end{array}\right]
    \left[\begin{array}{c}
        a_{11}           & \frac{a_{12}}{2} & \cdots & \frac{a_{1n}}{2}
    \\  \frac{a_{12}}{2} & a_{22}           & \cdots & \frac{a_{2n}}{2}
    \\  \vdots           & \vdots           & \ddots & \vdots
    \\  \frac{a_{1n}}{2} & \frac{a_{2n}}{2} & \cdots & a_{nn}
    \end{array}\right]
    \left[\begin{array}{c}
        x_1 \\ x_2 \\ \vdots \\ x_n
    \end{array}\right]
    = x^TAx
$$

其中$A^T = A$，称$A$为**二次型矩阵**。若$x^TAx>0$，则称$x^TAx$为**正定二次型**，$A$是**正定矩阵**。

### 标准形

若所有$a_{ij,i≠j}=0$，即只含有变量的**平方顶**，则称该二次型为**标准形**。

其中正的$a_{ii}$的个数称为**正惯性指数**，负的$a_{ii}$的个数称为**负惯性指数**。

### 规范形

在标准形的基础上，若所有$a_{ii} = 1,-1,0$，则称该二次型为**规范形**。
