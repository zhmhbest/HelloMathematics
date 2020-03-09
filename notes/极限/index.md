<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [极限](../index.html)

[TOC]

## 函数的极限

### 定义

$$
\lim_{x→x_0} f(x)=A
\,\,⇔\,\,
∀ε>0, ∃δ>0, 
\,if\, 0<|x-x_0|<δ, \,then\, |f(x)-A|<ε
$$

给定一个$ε$，不论$ε$有多小，总存在一个大于$x$与$x_0$之距离的$δ$，使$f(x)$与$A$的距离小于$ε$。

### 充要条件

- $\lim\limits_{x→x_0}f(x)=A 
    \,\,⇔\,\,
    \lim\limits_{x→x_0^-}f(x)
        = \lim\limits_{x→x_0^+}f(x) = A$
- $\lim\limits_{x→x_0}f(x)=A
    \,\,⇔\,\,
    f(x)=A+α(x), \lim\limits_{x→x_0}α(x)=0$

### 运算规则

$\lim f(x)=A$、$\lim g(x)=B$

- $\lim \left[ C_1 ⋅ f(x) ± C_2 ⋅ g(x) \right] = C_1A ± C_2B$
- $\lim \left[ f(x) ⋅ g(x) \right] = AB$
- $\lim \dfrac{f(x)}{g(x)} = \dfrac{\lim f(x)}{\lim g(x)} = \dfrac{A}{B},\,(B≠0)$

## 数列的极限

### 定义

$$
\lim_{n→∞} x_n=A
\,\,⇔\,\,
∀ε>0, ∃N∈\bold{N^+}, 
\,if\, n<N, \,then\, |x_n-A|<ε
$$

### 充要条件

- $\lim\limits_{n→∞} x_n=A
    \,\,⇔\,\,
    \lim\limits_{k→∞} x_{n_k}=A$，$x_{n_k}$使$x_n$的子数列。

### 运算规则

$\lim x_n=A$、$\lim y_n=B$

- $\lim \left( x_n ± y_n \right) = A ± B$
- $\lim \left( x_n ⋅ y_n \right) = AB$
- $\lim \dfrac{x_n}{y_n} = \dfrac{A}{B},\,(y_n≠0)$

## 极限的性质

- **唯一性**
- **局部有界性**
- **局部保号性**

## 极限存在的充分条件

- 单调有界准则
- 夹逼准则
