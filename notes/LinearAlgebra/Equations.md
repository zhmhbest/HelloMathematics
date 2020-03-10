<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [方程组](./index.html)

## 方程组与矩阵

$
    \begin{cases}
        a_{11} ⋅ x_1 + a_{12} ⋅ x_2 + \cdots + a_{1n} ⋅ x_n = b_1
    \\  a_{21} ⋅ x_1 + a_{22} ⋅ x_2 + \cdots + a_{2n} ⋅ x_n = b_2
    \\ \cdots
    \\  a_{m1} ⋅ x_1 + a_{m2} ⋅ x_2 + \cdots + a_{mn} ⋅ x_n = b_m
    \end{cases}
$

$
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

$$Ax=b$$

## 解方程组

### 齐次线性方程组

$$A_{n×n}x=0$$

**解的情况**

- 当$r(A)<n$时：有无穷多解，含$n-r(A)$个解向量。
- 当$r(A)=n$时：仅有零解。

### 非齐次线性方程组

$$A_{n×n}x=b$$

**解的情况**

- 当$r(A)<r(A,b)$时：无解。
- 当$r(A)=r(A,b)=n$时：有解，有$n-r(A)$个解向量。
