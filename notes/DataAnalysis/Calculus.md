<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>


# [数值分析：数值积分](./index.html)

[TOC]

## 数值积分定义

$$\int_{a}^{b}{f(x)}\,{\rm d}x = F(b) - F(a)$$

大多数定积分问题都不能通过解析法（计算上式）求解，而要用数值方法进行计算。

### 数值求积公式

<div class='mark'>

设$x_0,x_1,\cdots,x_n∈[a,b]$，函数$f(x)$在区间$[a,b]$上可积，对给定权函数$ρ(x)>0$，有

$$\int_{a}^{b} f(x)ρ(x) \,{\rm d}x = \sum\limits_{i=0}^{n} A_if(x_i) + R(f)$$

- $\{x_i\}$：求积节点
- $\{A_i\}$：求积系数
- $R(f)$：误差

**一般形式**

$$\int_{a}^{b}{f(x)}\,{\rm d}x ≈ \sum\limits_{i=0}^{n} A_if(x_i)$$

**代数精度**

若对于$f(x)=x^k, { \ \ \ } k=0,1,2,\dots,m$，求积公式$\int_{a}^{b}{f(x)}\,{\rm d}x = \sum\limits_{i=0}^{n} A_if(x_i)$都精确成立，但对$f(x)=x^{m+1}$不精确成立，即

$$\begin{cases}
    \int_{a}^{b}{x^k}\,{\rm d}x = \sum\limits_{i=0}^{n} A_if(x_i^k)
\\
\\  \int_{a}^{b}{x^{m+1}}\,{\rm d}x ≠ \sum\limits_{i=0}^{n} A_if(x_i^{m+1})
\end{cases}$$

则称该求积公式具有$m$次代数精度。
</div>

### 近似定积分

**左矩形**

$$\int_{a}^{b}{f(x)}\,{\rm d}x = 
    f(a)(b-a) + 
    \dfrac{(b-a)^2}{2} f'(η) { \ \ \ } η∈(a,b)
$$

**右矩形**

$$\int_{a}^{b}{f(x)}\,{\rm d}x = 
    f(b)(b-a) -
    \dfrac{(b-a)^2}{2} f'(η) { \ \ \ } η∈(a,b)
$$

**中矩形**

$$\int_{a}^{b}{f(x)}\,{\rm d}x = 
    f(\dfrac{a+b}{2})(b-a)
    -\dfrac{(b-a)^3}{24} f''(η), { \ \ \ } η∈(a,b)
$$

## 插值型求积公式

>拉格朗日（Lagrange）插值多项式：
>$$L_n(x) = \sum\limits_{i=0}^{n} l_i(x)f(x_i)$$
>- $l_i(x) = \prod\limits_{^{j=0}_{j≠i}}^{n} \dfrac{x-x_j}{x_i-x_j}$
>- $R_n(x) = f(x) - L_n(x) = \dfrac{f^{(n+1)}(ξ_x)}{(n+1)!} ω_{n+1}(x), \,\,\, ξ_x∈(a,b)$

<div class='mark'>

在节点$x_0,x_1,\cdots,x_n∈[a,b]$上构造插值型求积公式。

$$\int_{a}^{b}{ f(x)ρ(x) }\,{\rm d}x
    ≈ \int_{a}^{b}{ L_n(x)ρ(x) }\,{\rm d}x
    = \sum\limits_{i=0}^{n} \left[
        \left( \int_a^b l_i(x) ρ(x) {\rm d}x \right)
        f(x_i)
    \right]
$$

其**误差**为

$$R(f)
    = \dfrac{1}{(n+1)!} \int_{a}^{b}{ f^{(n+1)}(ξ) ω_{n+1}(x) ρ(x) }
    \,{\rm d}x
    { \ \ \ } ξ∈(a,b)
$$

$n+1$个节点至少有$n$次代数精度；$n+1$个互异节点，最高可达$2n+1$次代数精度。
</div>

## 牛顿科特斯（Newton-Cotes）求积公式

当插值节点等距时，得到得**插值型求积公式**即为**牛顿科特斯（Newton-Cotes）求积公式**。

$$\int_a^b f(x) \,{\rm d}x 
    ≈ \sum\limits_{i=0}^{n} A_i f(x_i)
    = (b-a)\sum\limits_{i=0}^{n} C_i^{(n)}f(x_i)
$$

- $A_i
    = \int_{a}^{b}{ l_i(x) }\,{\rm d}x
    \xrightarrow[(h=\frac{b-a}{n},\,i=0,1,\cdots,n)]{x_i=a+ih}
    \,
    \xrightarrow[]{x=a+th}
    \dfrac{(-1)^{n-i}h}{i!(n-i)!} \int_0^n{
        \prod\limits_{^{j=0}_{j≠i}}^n (t-j)
    }\,{\rm d}t
$
- $C_i^{(n)}=\dfrac{1}{b-a}A_i$，称为Cotes系数

<div class='mark'>

<span class='highlight'>当Cotes系数为负数时是数值不稳定的，高阶Newton-Cotes公式（一般$n≥8$）的Cotes系数为负</span>；$n+1$个节点的求积公式至少有$n$次代数精度；当$n$为偶数时，可达$n+1$次代数精度。
</div>

### 梯形公式

当**牛顿科特斯（Newton-Cotes）求积公式**的$n=1$，即2个节点时

<div class='mark'>

$$\int_{a}^{b}{f(x)}\,{\rm d}x = 
    \dfrac{b-a}{2} [f(a)+f(b)]
    - \dfrac{(b-a)^3}{12}f''(η) { \ \ \ } η∈(a,b)
$$

**1次代数精度**。
</div>

### 辛普森（Simpson）公式

当**牛顿科特斯（Newton-Cotes）求积公式**的$n=2$，即3个节点时

<div class='mark'>

$$\int_a^b f(x) \,{\rm d}x ≈ \dfrac{b-a}{6}\left[ f(a)+4f(\dfrac{a+b}{2})+f(b) \right] = S$$

- $R(f) = -\dfrac{(b-a)^5}{2880}f^{(4)}η { \ \ \ } η∈(a,b)$

**3次代数精度**。
</div>

### 科特斯（Cotes）公式

当**牛顿科特斯（Newton-Cotes）求积公式**的$n=4$，即5个节点时，为**Cotes公式**，其具有**5次代数精度**。

## 复化求积公式

通过增加求积节点的个数来提高计算精度是不可行的（高阶Newton-Cotes公式不稳定）。

将区间分成若干个小区间，每个区间的结果加起来得到整个区间的求积公式。

### 复化梯形公式

<div class='mark'>

$$T_n =
    \dfrac{h}{2} \left[
        f(a) + 2\sum_{i=1}^{n-1}f(x_i) + f(b)
    \right]
$$

- $h = \dfrac{b-a}{n}$
- $R(T_n) = -\dfrac{b-a}{12}h^2 f''(η)$
</div>

### 复化辛普森公式

<div class='mark'>

$$S_n =
    \dfrac{h}{6} \left[
        f(a) +
        4\sum_{i=0}^{n-1} f(x_{i+\frac{1}{2}}) +
        2\sum_{i=1}^{n-1} f(x_i) +
        f(b)
    \right]
$$

- $R(S_n) = -\dfrac{b-a}{2880}h^4 f^{(4)}(η)$
</div>

<!-- 
### 龙贝格（Romberg）求积公式

对复化梯形公式逐次区间分半和逐次外推就得到龙贝格方法。

- $T_1 = \dfrac{b-a}{2} [f(a) + f(b)]$
- $T_n = 
    \sum\limits_{i=0}^{n-1}
        \dfrac{h_n}{2} [f(x_i)+f(x_{i+1})]
$

$$T_{2n} = 
    \dfrac{1}{2}T_n +
    \dfrac{h_n}{2} \sum_{i=0}^{n-1} f(x_{i+\frac{1}{2}})
$$

$$T_{m+1}^{k-1} = \dfrac{
    4^mT_m^{(k)} - T_m^{k-1}
}{
    4^m - 1
}$$ -->

<!-- $$\dfrac{64C_{2n}-C_n}{63} = R_n$$
- $C_n = \dfrac{16S_{2n}-S_n}{15}$
- -->


## 正交多项式

<!-- ### 正交多项式等价

若$f_k(x), \,\,\,k=0,1,\cdots,n$为$C[a,b]$上的一组线性无关函数，则可得$C[a,b]$上一组两两正交的函数组$g_k(x), \,\,\,k=0,1,\cdots,n$满足：

1. $g_k(x)$为$f_0(x), f_1(x), \cdots, f_k(x)$的线性组合。
2. $f_k(x)$为$g_0(x), g_1(x), \cdots, g_k(x)$的线性组合。

$g_0(x), g_1(x), \cdots, g_n(x)$两两正交且满足1.、2.。
$$e_k(x) = \dfrac{1}{\|g_k\|_2} g_k(x), \,\,\,k=0,1,\cdots,n$$
称函数组$e_0(x), e_1(x), \cdots, e_n(x)$为**规范正交组**。
$P_n$上由线性无关函数$1,x,x^2,\cdots,x^n$经过*Schemite*正交化过程得到的多项式$p_0(x), p_1(x), \cdots, p_n(x)$称为$[a,b]$上的**正交多项式**。 -->

### Legendre多项式

<span class='hint'>勒让德多项式</span>

<div class='mark'>

| 区间 | 权函数 | 定义
| - | - | -
| $[-1, 1]$ | $ρ(x)=1$ | $P_n(x) = \dfrac{1}{2^nn!} \dfrac{d^n}{dx^n} (x^2-1)^n$

**正交关系**

$$(P_m, P_n)=
    \begin{cases}
        0               & m≠n
    \\  \dfrac{2}{2n+1} & m=n
    \end{cases}
$$

**递推关系**

$
    \begin{cases}
        (n+1)P_{n+1}(x)=(2n+1)xP_n(x)-nP_{n-1}(x) & n=1,2,3,\cdots
    \\  P_0(x)=1
    \\  P_1(x)=x
    \\  P_2(x)=\dfrac{1}{2}(3x^2-1)
    \end{cases}
$
</div>

### Chebyshev多项式

<span class='hint'>切比雪夫多项式</span>

<div class='mark'>

| 区间 | 权函数 | 定义
| - | - | -
| $[-1, 1]$ | $ρ(x)=\dfrac{1}{\sqrt{1-x^2}}$ | $T_n(x)=cos({\rm narccosx})$

**正交关系**

$$(T_m, T_n) = \int_{-1}^{1}
    \dfrac{ T_m(x) T_n(x) }{ \sqrt{1-x^2} }
    {\rm d}x
    = \int_{0}^{π} {\cos}(mθ) ⋅  {\cos}(nθ) {\rm d}θ
    =
    \begin{cases}
        0           & m≠n
    \\  π           & m=n=0
    \\ \dfrac{π}{2} & m=n≠0
    \end{cases}
$$

**递推关系**

$
    \begin{cases}
        T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x) & n=1,2,3,\cdots
    \\  T_0(x)=1
    \\  T_1(x)=x
    \\  T_2(x)=2x^2-1
    \end{cases}
$
</div>

### Laguere多项式

<span class='hint'>拉盖尔多项式</span>

| 区间 | 权函数 | 定义
| - | - | -
| $[0, +∞)$ | $ρ(x)=e^{-x}$ | $e^x \dfrac{d^n}{dx^n} (x^ne^{-x})$

**正交关系**

$$(L_m, L_n)
    =
    \int_{0}^{+∞} e^{-x}L_m(x)L_n(x) {\rm d}x
    =
    \begin{cases}
        0           & m≠n
    \\  (n!)^2      & m=n
    \end{cases}
$$

**递推关系**

$
    \begin{cases}
        L_{n+1}(x) = (2n+1-x)L_n(x)-n^2L_{n-1}(x) & n=1,2,3,\cdots
    \\  L_0(x)=1
    \\  L_1(x)=1-x
    \end{cases}
$

### Hermite多项式

<span class='hint'>埃尔米特多项式</span>

| 区间 | 权函数 | 定义
| - | - | -
| $(-∞, +∞)$ | $ρ(x)=e^{-x^2}$ | $(-1)^n e^{x^2} \dfrac{d^n}{dx^n} (e^{-x^2})$

**正交关系**

$$(H_m, H_n)
    =
    \int_{-∞}^{+∞} e^{-x^2}H_m(x)H_n(x) {\rm d}x
    =
    \begin{cases}
        0          & m≠n
    \\  2^n (n!)\sqrt{π}  & m=n
    \end{cases}
$$

**递推关系**

$
    \begin{cases}
        H_{n+1}(x) = 2xH_n(x)-2nH_{n-1}(x) & n=1,2,3,\cdots
    \\  H_0(x)=1
    \\  H_1(x)=2x
    \end{cases}
$

## 高斯型求积公式

使求积公式具有$2n-1$次代数精度的节点$x_1, x_2, \cdots, x_n$称为**Gauss点**，此时的插值型求积公式称为**Gauss型求积公式**。

$n$个节点，代数精度为$2n-1$；$n+1$个互异节点，最高可达$2n+1$次代数精度。

### Gauss-Legendre求积公式（标准高斯型求积公式）

<div class='mark'>

在区间$[a,b]$上，权函数$ρ(x)=1$的Gauss型求积公式为：

$$\int_a^b ρ(x)f(x) \,{\rm d}x ≈ 
    \dfrac{b-a}{2}
    \sum_{i=1}^{n} \left[
        A_i 
        f\left(
            \dfrac{a+b}{2} + \dfrac{b-a}{2}x_i
        \right)
    \right]
$$

**3次代数精度**。
</div>

### Gauss-Laguerre求积公式

在区间$[0,+∞)$上，权函数$ρ(x)=1$的Gauss型求积公式为：

$$\int_0^{+∞} ρ(x)f(x) \,{\rm d}x ≈ 
    \sum_{i=1}^{n} 
        A_i e^{x_i} f(x_i)
$$

### Gauss-Hermite求积公式

$$\int_{-∞}^{+∞} ρ(x)f(x) \,{\rm d}x ≈ 
    \sum_{i=1}^{n}
        A_i e^{x_i^2} f(x_i)
$$

## 差商型求积公式

<!-- 考试要求会基于泰勒展开推断截断误差 -->

### 一阶向前差商

<div class='mark'>

$$f'(x_0) = \dfrac{f(x_0+h)-f(x_0)}{h} + O(h)$$
</div>

- $O(h) = -\dfrac{h}{2}f''(x_0+θh), { \ \ \ } 0≤θ≤1$

### 一阶向后差商

<div class='mark'>

$$f'(x_0) = \dfrac{f(x_0)-f(x_0-h)}{h} + O(h)$$
</div>

- $O(h) = \dfrac{h}{2}f''(x_0-θh), { \ \ \ } 0≤θ≤1$

### 一阶中心差商

<div class='mark'>

$$f'(x_0) = \dfrac{f(x_0+h)-f(x_0-h)}{2h} + O(h^2)$$
</div>

- $O(h^2) = -\dfrac{h^2}{6}f'''(x_0+θh), { \ \ \ } -1≤θ≤1$

### 二阶中心差商

<div class='mark'>

$$f'(x_0) = \dfrac{f(x_0+h)-2f'(x_0)+f(x_0-h)}{h^2} + O(h^2)$$
</div>

- $O(h^2) = -\dfrac{h^2}{12}f^{(4)}(x_0+θh), { \ \ \ } -1<θ<1$

<!--
## 插值型数值微分

$$f'(x) ≈ L_n'(x)L_n'(x)$$

- $f'(x_0) = \dfrac{1}{2h}\left[{
    -3f(x_0) + 4f(x_1) - f(x_2)
    }\right] + \dfrac{h^2}{3}f'''(ξ) 
$
- $f'(x_1) = \dfrac{1}{2h}\left[{
    -f(x_0) + f(x_2)
    }\right] - \dfrac{h^2}{6}f'''(ξ) 
$
- $f'(x_2) = \dfrac{1}{2h}\left[{
    f(x_0) - 4f(x_1) + 3f(x_2)
    }\right] + \dfrac{h^2}{3}f'''(ξ) 
$
-->
