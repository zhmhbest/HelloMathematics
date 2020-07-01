<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>


# [常微分方程的数值解法](./index.html)

[TOC]

## 基本原理

### 符号定义

| 符号| 含义 |
| - | - |
| $y(x_n)$     | $x_n$处精确值，无误差 |
| $y_n$        | $x_n$处理论计算值，只有截断误差影响 |
| $\bar{y}_n$  | $x_n$处实际计算值，还有舍入误差影响 |
| $E_n = y(x_n)-y_n$ | <span class='mark'>局部截断误差，$E_n = O(h^{P+1})$有$P$阶精度。</span> |

### 一阶常微分方程

$$
\begin{cases}
    \dfrac{dy}{dx}=f(x,y) & a≤x≤b
\\  y(x_0)=y_0
\end{cases}
$$

### 李普希茨（Lipschitz）条件

如果函数$f(x,y)$在区域$\{ a≤x≤b, m≤y≤M \}$上连续，且关于$y$满足**Lipschitz条件**：

$$|f(x,y_1)-f(x,y_2)| ≤ L|y_1-y_2|$$

其中$L$为一个正数称为**Lipschitz常数**。若满足**Lipschitz条件**，则一阶常微分方程的解存在且唯一。若不满足，则未必存在唯一解。

### 基本差分公式

$$y(x_{n+1})-y(x_n) = \int_{x_n}^{x_{n+1}} f(x, y(x)) {\rm d}x { \ \ \ } ①$$

$$y(x_{n+1})-y(x_{n-1}) = \int_{x_{n-1}}^{x_{n+1}} f(x, y(x)) {\rm d}x { \ \ \ } ②$$

### 单步法收敛性

对于一阶常微分方程，其单步方法可写成：$y_{n+1} = y_n + hΦ(x_n, y_n, h)$

- $h$：步长
- $Φ(x_n, y_n, h)$：增量函数

**定义1**

$$\lim_{h→0} y_n = y(x_n)$$

**定义2**

$$\lim_{k→∞} y_{n+1}^{[k]} = y_{n+1}$$

- $k$：迭代步

### 单步法稳定性

**定义1**

对于给定的初值问题，取定步长$h$，用差分方法进行计算时，假设只在一个节点值$y_n$上产生计算误差$σ$，如果这个误差引起的以后各节点计算值$y_m, (m>n)$的变化均不超过$σ$，则称此差分方法是绝对稳定的。

通常仅限于实验方程

$$\dfrac{
    {\rm d}x
}{
    {\rm d}y
} = λy
$$

其中$λ$是复数，且$Re(λ)<0$（即$λ$实部$<0$）

**定义2**

将单步方法用于解试验方程，假设得到

$$\dfrac{y_{n+1}}{y_{n}} = E(λh)$$

若满足条件$|E(λh)|<1$则称此单步方法是绝对稳定的。否则是不稳定的。

在复平面上，变量$λh$满足$|E(λh)|<1$的区域称为此方法的**绝对稳定域**，它与实轴的交集称为**绝对稳定区间**。

**计算稳定性**

<div class='mark'>

若满足

$$\dfrac{
    |ρ_{n+1}|
}{
    |ρ_{n}|
} < 1$$

- $ρ_{n}$：计算$y_n$时的误差

则说明计算中摄入误差可以得到控制，数值方法是稳定的。一般仅考虑模型方程$y' = λy$，要求$λ<0$或$Re(λ)<0$。
</div>

## 欧拉（Euler）方法

<!-- >[近似定积分](Calculus.html#近似定积分) -->

### 欧拉公式

<div class='mark'>

由**基本差分公式①**和**左矩形近似**（$\int_{a}^{b} f(x) {\rm d}x ≈ (b-a)f(a)$）得

$$
    y_{n+1} = y_n + hf(x_n, y_n) 
    { \ \ \ } n=0,1,2,\cdots
$$

**局部截断误差**

$y(x_{n+1}) - y_{n+1} = \dfrac{y''(x_n)}{2!}h^2 + O(h^3) = O(h^2)$，故**欧拉公式**为一阶方法。
</div>

### 梯形公式

<div class='mark'>

由**基本差分公式①**和**梯形近似**（$\int_{a}^{b} f(x) {\rm d}x ≈ \dfrac{b-a}{2}\left[ {f(a) + f(b)} \right]$）得

$$
    y_{n+1} = y_n + \dfrac{h}{2}[ { f(x_n, y_n) + f(x_{n+1}, y_{n+1}) }]
    { \ \ \ } n=0,1,2,\cdots
$$
</div>

### 中点欧拉公式

由**基本差分公式②**和**中矩形近似**（$\int_{a}^{b} f(x) {\rm d}x ≈ (b-a)f(\dfrac{a+b}{2})$）得

$$
    y_{n+1} = y_{n-1} +2hf(x_n, y_n)
    { \ \ \ } n=1,2,\cdots
$$

### 改进的欧拉公式

<div class='mark'>

$$
    y_{n+1} = y_n + \dfrac{h}{2}[
        f(x_n, y_n) +
        f(x_{n+1}, y_n + hf(x_n,y_n))
    ]
    { \ \ \ } n=0,1,2,\cdots
$$

**局部截断误差**

$y(x_{n+1}) - y_{n+1} = O(h^3)$，故**改进的欧拉公式**为二阶方法。
</div>

## 龙格库塔（Runge-Kutta）方法

### $p$级方法

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

### R-K方法

若$p$级Runge-Kutta方法的局部截断误差为$O(h^{p+1})$，则称为$p$级R-K方法。

当$p=2$时

$$
\begin{cases}
    y_{n+1} = y_{n} + h(λ_1K_1 + λ_2K_2)
\\  K_1 = f(x_n, y_n)
\\  K_2 = f(x_n + αh, y_n + hβK_1)
\end{cases}
$$

若取$α=1, λ_1=λ_2=\frac{1}{2}, β=1$，则此时该公式为：**改进的Euler方法**。

若取$α=β=\frac{1}{2}, λ_1=0， λ_2=1$，则此时该公式为：**中点公式**。

<!-- ### 隐式Runge-Kutta方法

$$
\begin{cases}
    y_{n+1} = y_{n} + h(\sum\limits_{r=1}^{p} λ_rK_r)
\\  K_r = f(x_n + a_rh, y_n + h(\sum\limits_{i=1}^{r} β_{ri}K_i)) & r=1,2,\cdots,p
\end{cases}
$$

### 变步长Runge-Kutta方法

略
设从$x_n$以步长$h$计算$y(x_{n+1})$的近似值为$y_{n+1}^{(h)}$，并假设局部截断误差为$y(x_{n+1}) - y_{n+1}^{(h)} = Ch^{p+1}$。

如果将步长减半，取$\dfrac{h}{2}$为步长，从$x_n$经两部  -->

## 线性多步方法

<div class='mark'>

$k+1$步线性多部方法的一般形式为

$$y_{n+1} = \sum_{i=0}^{k} α_iy_{n-i} + h\sum_{i=-1}^{k}β_if_{n-i}$$

| $β_{-1}=0$ | $β_{-1}≠0$
| - | -
| 显式公式 | 隐式公式

**局部截断误差**

$y(x_{n+1})-y_{n+1} = O(h^{k+2})$

</div>

### 外插公式

>阿达姆斯（Adams）显式公式、四阶方法

设已求得精确解$y(x)$在步长为$h$的前$k+1$个等距节点$x_{n-k},\cdots,x_n$上的近似值$y_{n-k},\cdots,y_n$，构造$k$次Lagrange插值多项式

$$P_k(x) = \sum_{i=0}^{k} l_{n-i}(x)f_{n-i}$$

由**基本差分公式①**和$f(x,y) = P_k(x) + R_k(x)$得$k+1$步**Adams显式公式**

<div class='mark'>

$$y_{n+1} = y_n + h\sum_{i=0}^{k} β_{ki}f_{n-i}$$

- $β_{ki} = \dfrac{(-1)^i}{i!(k-i)!} \int_{0}^{1} \prod\limits_{^{j=0}_{j≠i}}^{k} (t+j){\rm d}t$

当$k=3$时，即四阶Adams显式公式为

$$y_{n+1} = y_n + \dfrac{h}{24}(
    55f_{n} - 59f_{n-1} + 37f_{n-2} - 9f_{n-3}
)$$

</div>

### 内插公式

>阿达姆斯（Adams）隐式公式、四阶方法

如果利用$k+1$个数据$(x_{n-k+1},f_{n-k+1}),\cdots,(x_{n+1},f_{n+1})$构造$k$次Lagrange插值多项式$P_k(x)$，则可导出数值稳定性好的**Adams隐式公式**

<div class='mark'>

$$y_{n+1} = y_n + h\sum_{i=0}^{k} β_{ki}^*f_{n-i+1}$$

- $β_{ki}^* = \dfrac{(-1)^i}{i!(k-i)!} \int_{-1}^{0} \prod\limits_{^{j=0}_{j≠i}}^{k} (t+j){\rm d}t$

当$k=3$时，即四阶Adams隐式公式

$$y_{n+1} = y_n + \dfrac{h}{24}(
    9f_{n+1} + 19f_{n} - 5f_{n-1} + f_{n-2}
)$$

</div>
