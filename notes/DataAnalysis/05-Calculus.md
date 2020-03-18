<link rel='stylesheet' href='../style.css'>
<script src='../style.js'></script>

# [数值积分与微分](./index.html)

[TOC]

$$\int_{a}^{b}{f(x)}\,{\rm d}x = F(b) - F(a)$$

## 近似定积分

$$\int_{a}^{b}{f(x)}\,{\rm d}x = \sum\limits_{k=0}^{n} A_kf(x_k) + R[f]$$

- **求积点**：$\{x_k\} \ \ \ k=0,1,\cdots,n$
- **求积系数**：$\{A_k\} \ \ \ k=0,1,\cdots,n$
- **误差**：$R[f]$
- **求积节点**：$\int_{a}^{b}{f(x)}\,{\rm d}x ≈ \sum\limits_{k=0}^{n} A_kf(x_k)$

求积公式由**求积节点**和**求积系数**唯一确定。


### 左矩形

$$\int_{a}^{b}{f(x)}\,{\rm d}x ≈ f(a)(b-a)$$

- $R[f] = \dfrac{(b-a)^2}{2} f'(η), \ \ \ η∈(a,b)$

### 右矩形

$$\int_{a}^{b}{f(x)}\,{\rm d}x ≈ f(b)(b-a)$$

- $R[f] = -\dfrac{(b-a)^2}{2} f'(η), \ \ \ η∈(a,b)$

### 中矩形

$$\int_{a}^{b}{f(x)}\,{\rm d}x ≈ f(\dfrac{a+b}{2})(b-a)$$

- $R[f] = -\dfrac{(b-a)^3}{24} f''(η), \ \ \ η∈(a,b)$


## 代数精度

若求积公式$\int_{a}^{b}{f(x)}\,{\rm d}x ≈ \sum\limits_{k=0}^{n} A_kf(x_k)$对于$f(x)=x^j, \ \ \ j=0,1,2,\cdots,m$都精确成立，但对$f(x)=x^{m+1}$不精确成立，即：

- $\int_{a}^{b}{x^j}\,{\rm d}x = \sum\limits_{k=0}^{n} A_kf(x_k^j)$
- $\int_{a}^{b}{x^{m+1}}\,{\rm d}x ≠ \sum\limits_{k=0}^{n} A_kf(x_k^{m+1})$

即称该公式具有$m$次代数精度。

## 插值型数值求积公式

构造$n$次拉格朗日插值多项式$L_n(x) = \sum\limits_{k=1}^{n} f(x_k)l_k(x)$，则$\int_{a}^{b}{f(x)}\,{\rm d}x ≈ \int_{a}^{b}{L_n(x)}\,{\rm d}x$。

$$\int_{a}^{b}{L_n(x)}\,{\rm d}x
    = \int_{a}^{b}{\left[\sum\limits_{k=0}^{n} f(x_k)l_k(x)\right]}\,{\rm d}x
    = \sum\limits_{k=0}^{n} \left[{
        \int_{a}^{b}{ l_k(x) }\,{\rm d}x
    }\right] f(x_k)
$$

- 记$A_k = \int_{a}^{b}{ l_k(x) }\,{\rm d}x$

$$\int_{a}^{b}{f(x)}\,{\rm d}x ≈ \sum\limits_{k=0}^{n} A_kf(x_k)$$

上式称为**插值型数值求积公式**。其**误差**为：

$$R[f] 
    = \int_{a}^{b}{\left[f(x)-L_n(x)\right]}\,{\rm d}x 
    = \dfrac{1}{(n+1)!} \int_{a}^{b}{ f^{(n+1)}(ξ_x) ⋅ ω_{n+1}(x) }\,{\rm d}x
    \ \ \ ξ_x∈(a,b)
$$

## 牛顿科特斯（Newton-Cotes）求积公式

对于$I=\int_a^b ρ(x)f(x){\rm d}x$，其中$ρ(x)$是区间$[a,b]$上的非负连续函数，称为$[a,b]$上的**权函数**。

**求积系数**

$$A_k = \int_a^b ρ(x)l_k(x){\rm d}x$$

**误差**

$$R[f] = \dfrac{1}{(n+1)!} \int_{a}^{b}{ ρ(x) ⋅ f^{(n+1)}(ξ_x) ⋅ ω_{n+1}(x) }\,{\rm d}x$$

简化计算，取等距节点$x_k = a +kh, \,\,\, k=0,1,2,\cdots,n;\, h=\dfrac{b-a}{n}$，得：

$$A_k
    = \int_{a}^{b}{ l_k(x) }\,{\rm d}x
    = \int_{a}^{b}{ 
        \prod_{^{i=0}_{i≠k}}^{n} \dfrac{x-x_i}{x_k-x_i}
     }\,{\rm d}x
$$

- 令$x=a+th$

$$A_k
    = \dfrac{(-1)^{n-k}h}{k!(n-k)!} \int_0^n{
        \prod_{^{i=0}_{i≠k}}^n (t-i)
    }\,{\rm d}t
$$

- 令$C_k^{(n)}=\dfrac{1}{b-a}A_k$，则

$$\int_a^b f(x) \,{\rm d}x ≈ (b-a)\sum\limits_{k=0}^{n} C_k^{(n)}f(x_k)$$

上式称为**牛顿科特斯求积公式**。以梯形面积来近似替代曲边梯形得面积。

当科特斯系数为负时，是数值不稳定得。$n≥8$的牛顿科特斯公式是不稳定的。

### Simpson公式（抛物线公式）

$$\int_a^b f(x) \,{\rm d}x ≈ \dfrac{b-a}{6}\left[ f(a)+4f(\dfrac{a+b}{2})+f(b) \right] = S$$

该式对不高于3次得多项式精确成立。

## 复化求积公式

通过增加求积节点的个数来提高计算精度是不可行的。

将区间分成若干个小区间，每个区间的结果加起来得到整个区间的求积公式。

$$I = \int_a^b f(x) \,{\rm d}x ≈ T_n = \dfrac{h}{2}
    \left[
        f(a) + 2\sum_{k=1}^{n-1}f(x_k) + f(b)
    \right]
$$

### 复化Simpson公式

$$I = \int_a^b f(x) \,{\rm d}x 
    ≈ \sum_{k=1}^{n} \dfrac{h}{6}
    \left[
        f(x_{k-1}) + 4f(x_{k-\frac{1}{2}}) + f(x_k)
    \right]
    \newline = \dfrac{h}{6}
    \left[
        f(a) + 
        4\sum_{k=1}^{n}f(x_{k-\frac{1}{2}}) + 
        2\sum_{k=1}^{n-1}f(x_k) + 
        f(b)
    \right]
$$

## 龙贝格求积公式（Romberg）

$$\dfrac{64C_{2n}-C_n}{63} = R_n$$

- $C_n = \dfrac{16S_{2n}-S_n}{15}$

## 正交多项式

### 定义

**函数内积**

记区间$[a,b]$上所有连续函数全体为$C[a,b]$（线性空间），记所有次数不超过$n$的多项式为$P_n$，则$P_n$是$C[a,b]$的子空间。

若$f(x), g(x) ∈ C[a,b]$，则称$\int_a^b f(x)g(x) \,{\rm d}x$为$f(x)$与$g(x)$的内积，记为$(f, g)$，满足：

- $(f, g) = (g, f)$
- $(cf, g) = c(f, g)$
- $(f_1+f_2, g) = (f_1, g) + (f_2, g)$

若$(f, g)=0$，则记$f⊥g$，称$f(x)$与$g(x)$**正交**。

**函数平方模**

$$\|f\|_2 = \sqrt{(f,f)} = \sqrt{\int_a^b f^2(x) \,{\rm d}x}$$

- $\|f\|_2 = 0  \,⇔\,  f(x) = 0$
- $\|cf\|_2 = |c| ⋅ \|f\|_2$
- $\|f+g\|_2 ≤ \|f\|_2 + \|g\|_2$
- $|(f,g)| ≤ \|f\|_2 ⋅ \|g\|_2$

**加权定义**

$$(f, g) = \int_a^b ρ(x)f(x)g(x) \,{\rm d}x$$

$$\|f\|_2 = \sqrt{\int_a^b  ρ(x)f^2(x) \,{\rm d}x}$$

**正交多项式等价**

若$f_k(x), \,\,\,k=0,1,\cdots,n$为$C[a,b]$上的一组线性无关函数，则可得$C[a,b]$上一组两两正交的函数组$g_k(x), \,\,\,k=0,1,\cdots,n$满足：

1. $g_k(x)$为$f_0(x), f_1(x), \cdots, f_k(x)$的线性组合。
2. $f_k(x)$为$g_0(x), g_1(x), \cdots, g_k(x)$的线性组合。

$g_0(x), g_1(x), \cdots, g_n(x)$两两正交且满足1.、2.。
$$e_k(x) = \dfrac{1}{\|g_k\|_2} g_k(x), \,\,\,k=0,1,\cdots,n$$
称函数组$e_0(x), e_1(x), \cdots, e_n(x)$为**规范正交组**。
$P_n$上由线性无关函数$1,x,x^2,\cdots,x^n$经过*Schemite*正交化过程得到的多项式$p_0(x), p_1(x), \cdots, p_n(x)$称为$[a,b]$上的**正交多项式**。

### Legendre多项式

$L_n(x) 
    = \dfrac{1}{2^nn!} \dfrac{d^n}{dx^n} (x^2-1)^n, \,\,\,
    x∈[-1,1], \,n=0,1,2,\cdots
$

是区间$[-1, 1]$上权函数$ρ(x)=1$的正交多项式，且满足：

$(L_m, L_n)=
    \begin{cases}
        0               & m≠n 
    \\  \dfrac{2}{2n+1} & m=n
    \end{cases}
$
$
    \begin{cases}
        (n+1)L_{n+1}(x)=(2n+1)xL_n(x)-nL_{n-1}(x) & n≥1 
    \\  L_0(x)=1
    \\  L_1(x)=x
    \end{cases}
$

### Chebyshev多项式

$T_n(x)=cos({\rm narccosx}), \,\,\, x∈[-1,1], n=0,1,2,\cdots$是区间$[-1,1]$上权函数$ρ(x)=\dfrac{1}{\sqrt{1-x^2}}$的正交多项式，且满足：

$$(T_m, T_n) = \int_{-1}^{1} 
    T_m(x)
    T_n(x)
    \dfrac{1}{\sqrt{1-x^2}}
    {\rm d}x
    = \int_{0}^{π} {\cos}(mθ) ⋅  {\cos}(nθ) {\rm d}θ
$$

$(T_m, T_n)=
    \begin{cases}
        0           & m≠n 
    \\  π           & m=n=0
    \\ \dfrac{π}{2} & m=n≠0
    \end{cases}
$
$
    \begin{cases}
        T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x) & n=1,2,3,\cdots
    \\  T_0(x)=1
    \\  T_1(x)=x
    \end{cases}
$

### Laguere多项式

$$L_n(x) = 
    e^x
    \dfrac{d^n}{dx^n}
    (x^ne^{-x})
    \ \ \ 0<x<+∞, n=0,1,2,\cdots
$$

$(L_m, L_n)
    =
    \int_{0}^{+∞} e^{-x}L_m(x)L_n(x) {\rm d}x
    =
    \begin{cases}
        0           & m≠n 
    \\  (n!)^2      & m=n
    \end{cases}
$
$
    \begin{cases}
        L_{n+1}(x) = (2n+1-x)L_n(x)-n^2L_{n-1}(x) & n=1,2,\cdots
    \\  L_0(x)=1
    \\  L_1(x)=1-x
    \end{cases}
$

### Hermite多项式

$$H_n(x) = 
    (-1)^n 
    e^{x^2} 
    \dfrac{d^n}{dx^n} 
    (e^{-x^2}) 
    \ \ \ -∞<x<+∞, n=0,1,2,\cdots
$$

$(H_m, H_n)
    =
    \int_{-∞}^{+∞} e^{-x^2}H_m(x)H_n(x) {\rm d}x
    =
    \begin{cases}
        0          & m≠n 
    \\  2^2(n!)π   & m=n
    \end{cases}
$
$
    \begin{cases}
        H_{n+1}(x) = 2xH_n(x)-2nH_{n-1}(x) & n≥1
    \\  H_0(x)=1
    \\  H_1(x)=2x
    \end{cases}
$

## 高斯型求积公式

区间$[a,b]$上权函数为$ρ(x)$的具有$n$个节点的数值积分公式代数精度不超过$2n-1$次。使求积公式具有$2n-1$次代数精度的节点$x_1, x_2, \cdots, x_n$称为**Gauss点**，此时的插值型求积公式称为**Gauss型求积公式**。

### Gauss-Legendre求积公式

在区间$[a,b]$上，权函数$ρ(x)=1$的Gauss型求积公式为：

$$\int_a^b f(x) \,{\rm d}x ≈ 
    \dfrac{b-a}{2}
    \sum_{i=1}^{n} \left[
        A_i 
        f\left(
            \dfrac{a+b}{2} + \dfrac{b-a}{2}x_i
        \right)
    \right]
$$

### Gauss-Laguerre求积公式

在区间$[0,+∞)$上，权函数$ρ(x)=1$的Gauss型求积公式为：

$$\int_0^{+∞} f(x) \,{\rm d}x ≈ 
    \sum_{i=1}^{n} \left[
        A_i
        e^{x_i}
        f(x_i)
    \right]
$$

### Gauss-Hermite求积公式

$$\int_{-∞}^{+∞} f(x) \,{\rm d}x ≈ 
    \sum_{i=1}^{n} \left[
        A_i
        e^{x_i^2}
        f(x_i)
    \right]
$$

## 差商型求积公式

### 向前差商

$$f'(x_0) ≈ \dfrac{f(x_0+h)-f(x_0)}{h}$$

**误差**：$-\dfrac{h}{2}f''(x_0+θh), \,\,\, 0≤θ≤1$

### 向后差商

$$f'(x_0) ≈ \dfrac{f(x_0)-f(x_0-h)}{h}$$

**误差**：$\dfrac{h}{2}f''(x_0-θh), \,\,\, 0≤θ≤1$

### 中心差商

$$f'(x_0) ≈ \dfrac{f(x_0+h)-f(x_0-h)}{2h}$$

**误差**：$-\dfrac{h^2}{6}f'''(x_0+θh), \,\,\, -1≤θ≤1$

### 二阶中心差商

$$f'(x_0) ≈ \dfrac{f(x_0+h)-2f'(x_0)+f(x_0-h)}{h^2}$$

**误差**：$-\dfrac{h^2}{12}f^{(4)}(x_0+θh), \,\,\, -1<θ<1$

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
