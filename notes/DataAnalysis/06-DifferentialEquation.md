<link rel='stylesheet' href='../style.css'>
<script src='../style.js'></script>

# [常微分方程的数值解法](./index.html)

[TOC]

| 符号| 含义 | 误差 |
| ----------- | ---------------- | --- |
| $y(x_n)$    | $x_n$处精确值     | 无误差
| $y_n$       | $x_n$处理论计算值 | 只有截断误差影响
| $\bar{y}_n$ | $x_n$处实际计算值 | 还有舍入误差影响

## 一阶常微分初值问题

$$
\begin{cases}
    \dfrac{dy}{dx}=f(x,y) & a≤x≤b
\\  y(a)=\alpha
\end{cases}
$$

## 李普希兹条件（lipschitz）

如果函数$f(x,y)$在区域$\left\{{ a≤x≤b, m≤y≤M }\right\}$上连续，且关于$y$满足李普希兹条件：

$$|f(x,y)-f(x,\bar{y})| ≤ L|y-\bar{y}|$$

- 此时$L$不必小于$1$。 

## 基本差分公式

$$y(x_{n+1})-y(x_n) = \int_{x_n}^{x_{n+1}} f(x, y(x)) {\rm d}x \ \ \ ①$$
$$y(x_{n+1})-y(x_{n-1}) = \int_{x_{n-1}}^{x_{n+1}} f(x, y(x)) {\rm d}x \ \ \ ②$$

### Euler公式

由①和$\int_{a}^{b} f(x) {\rm d}x ≈ (b-a)f(a)$得Euler差分公式：

$$
\begin{cases}
    y_{n+1} = y_n + hf(x_n, y_n)
\\  y_0 = α, n=0,1,2,\cdots,N-1
\end{cases}
$$

**局部截断误差**

$y(x_{n+1}) - y_{n+1} = \dfrac{y''(x_n)}{2!}h^2 + O(h^3) = O(h^2)$
故该公式为一阶方法。

### 梯形公式

由①和$\int_{a}^{b} f(x) {\rm d}x ≈ \dfrac{b-a}{2}\left[ {f(a) + f(b)} \right]$得梯形公式：

$$
\begin{cases}
    y_{n+1} = y_n + \dfrac{h}{2}\left[ { f(x_n, y_n) + f(x_{n+1}, y_{n+1}) } \right]
\\  y_0 = α, n=0,1,2,\cdots,N-1
\end{cases}
$$

### Euler中点（双步Euler）公式

由②和$\int_{a}^{b} f(x) {\rm d}x ≈ (b-a)f(\dfrac{a+b}{2})$得Euler中点（双步Euler）公式：

$$
\begin{cases}
    y_{n+1} = y_{n-1} +2hf(x_n, y_n)
\\  y_0 = α, n=1,2,\cdots,N-1
\end{cases}
$$

### 改进的Euler方法

$$
\begin{cases}
    y_{n+1} = y_{n} + hf(x_n, y_n)
\\  y_{n+1} = y_{n} + \dfrac{h}{2}\left[ { f(x_n,y_n) + f(x_{n+1},\bar{y}_{n+1}) } \right]
\\  y_0 = α, n=0,1,2,\cdots,N-1
\end{cases}
$$

**局部截断误差**

$y(x_{n+1}) - y_{n+1} = O(h^3)$
故该公式为二阶方法。


## Runge-Kutta方法

$$
\begin{cases}
    y_{n+1} = y_{n} + h(\sum\limits_{i=1}^{p} λ_iK_i)
\\  K_1 = f(x_n, y_n)
\\  K_2 = f(x_n + α_2h, y_n + hβ_{21}K_1)
\\  \cdots, \cdots
\\  K_p = f(x_n + a_ph, y_n + h(\sum\limits_{i=1}^{p-1} β_{pi}K_i))
\end{cases}
$$

其中$\{λ_i, α_i, β_{ij}\}$为待定参数，此公式称为：$p$**级Runge-Kutta方法**。

### $p$级R-K方法

若$p$级Runge-Kutta方法的局部截断误差为$O(h^{p+1})$，则称为$p$级R-K方法。

**$p=2$**

$$
\begin{cases}
    y_{n+1} = y_{n} + h(λ_1K_1 + λ_2K_2)
\\  K_1 = f(x_n, y_n)
\\  K_2 = f(x_n + αh, y_n + hβK_1)
\end{cases}
$$

若取$α=1, λ_1=λ_2=\frac{1}{2}, β=1$，则此时该公式为：**改进的Euler方法**。

若取$α=β=\frac{1}{2}, λ_1=0， λ_2=1$，则此时该公式为：**中点公式**。

### 隐式Runge-Kutta方法

$$
\begin{cases}
    y_{n+1} = y_{n} + h(\sum\limits_{r=1}^{p} λ_rK_r)
\\  K_r = f(x_n + a_rh, y_n + h(\sum\limits_{i=1}^{r} β_{ri}K_i)) & r=1,2,\cdots,p
\end{cases}
$$

### 变步长Runge-Kutta方法

略
<!-- 设从$x_n$以步长$h$计算$y(x_{n+1})$的近似值为$y_{n+1}^{(h)}$，并假设局部截断误差为$y(x_{n+1}) - y_{n+1}^{(h)} = Ch^{p+1}$。

如果将步长减半，取$\dfrac{h}{2}$为步长，从$x_n$经两部 -->

## 单步方法

### 收敛性

$$
\begin{cases}
    \dfrac{{\rm d}y}{{\rm d}x} = f(x, y) & a≤x≤b
\\  y(a) = a
\end{cases}
$$

其单步方法可写成：$y_{n+1} = y_n + hΦ(x_n, y_n, h)$，Φ(x_n, y_n, h)称为**增量函数**。

#### 定义1

$$\lim_{h→0} y_n = y(x_n)$$

#### 定义2

$$\lim_{k→∞} y_{n+1}^{[k]} = y_{n+!}$$

### 稳定性

#### 定义1

对于给定的初值问题，取定步长$h$，用差分方法进行计算时，假设只在一个节点值$y_n$上产生计算误差$σ$，如果这个误差引起的以后各节点计算值$y_m, (m>n)$的变化均不超过$σ$，则称此差分方法是绝对稳定的。

$$\dfrac{{\rm d}x}{{\rm d}y} = λy$$

其中$λ$是复数，且$Re(λ)<0$

#### 定义2

将单步方法用于解试验方程，假设得到$y_{n+1}=E(λh)y_n$

若满足条件$|E(λh)|<1$则称此单步方法是绝对稳定的。在复平面上，变量$λh$满足$|E(λh)|<1$的区域称为此方法的**绝对稳定域**，它与实轴的交集称为**绝对稳定区间**。

## 线性多步方法

$r+1$步线性多部方法的一般形式为：

$$y_{n+1} = \sum_{i=0}^{r} α_iy_{n-i} + h\sum_{i=-1}^{r}β_if_{n-i}$$

当$β_{-1}≠0$时，公式为隐式公式，反之为显式公式。

### Adams显式公式

设已求得精确解$y(x)$在步长为$h$的等距节点$x_{n-r},\cdots,x_n$上的近似值$y_{n-r},\cdots,y_n$。

记$f_k = f(x_k, y_k)$，利用$r+1$个数据$(x_{n-r},f_{n-r}),\cdots,(x_n,f_n)$构造$r$次Lagrange插值多项式：

$$p_r(x) = \sum_{j=0}^{r} l_{n-j}(x)f_{n-j}$$

其中

$$l_{n-j}(x) = \prod_{^{k=0}_{k≠j}}^{r} \dfrac{(x-x_{n-k})}{(x_{n-j}-x_{n-k})}, \ \ \ j=0,1,\cdots,r$$

得差分公式

$$y_{n+1} = y_n + \sum_{j=0}^{r}(\int_{x_n}^{x_{n+1}}l_{n-j}(x){\rm d}x)$$

**$r+1$步Adams显式公式**

$$y_{n+1} = y_n + h\sum_{j=0}^{r} β_{rj}f_{n-j}$$

### Adams隐式公式

如果利用$r+1$个数据$(x_{n-r+1},f_{n-r+1}),\cdots,(x_{n+1},f_{n+1})$构造$r$次Lagrange插值多项式$p_r(x)$，则可导出数值稳定性好的隐式公式：

$$y_{n+1} = y_n + h\sum_{j=0}^{r} β_{rj}^*f_{n-j+1}$$