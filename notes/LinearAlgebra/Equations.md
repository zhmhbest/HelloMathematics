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

若$A$使可逆矩阵，那么方程组$Ax=b$的解为$x=A^{-1}b$
