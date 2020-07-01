<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>


# [数值分析：数值积分](./index.html)

[TOC]

## 数值积分定义

大多数定积分问题都不能通过解析法，即计算牛顿一莱布尼茨公式$\int_{a}^{b}{f(x)}\,{\rm d}x = F(b) - F(a)$来求解，数值积分方法就是将$f(x)$用简单函数近似替代（比如泰勒展开），利用离散数据求函数的数值积分，从而**避免了寻求原函数的困难**，并为计算机求积分提供了可行性。

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

若对于$f(x)=x^k, { \ \ \ } k=0,1,2,\dots,m$，即对于次数不超过$m$的多项式，求积公式$\int_{a}^{b}{f(x)}\,{\rm d}x = \sum\limits_{i=0}^{n} A_if(x_i)$都精确成立，但对$f(x)=x^{m+1}$不精确成立，亦可表示为

$$\begin{cases}
    \int_{a}^{b}{x^k}\,{\rm d}x = \sum\limits_{i=0}^{n} A_if(x_i^k)
\\
\\  \int_{a}^{b}{x^{m+1}}\,{\rm d}x ≠ \sum\limits_{i=0}^{n} A_if(x_i^{m+1})
\end{cases}$$

则称该求积公式具有$m$次代数精度。
</div>

#### 例1

确定下式的代数精度

- $\int_{-1}^{1}f(x){\rm d}x ≈ \dfrac{f(-1) + 2f(0) + f(1)}{2}$
- $\int_{-1}^{1}f(x){\rm d}x ≈ f(-\dfrac{1}{\sqrt{3}}) + f(\dfrac{1}{\sqrt{3}})$

**解**

记

- $I(f) = \int_{-1}^{1}f(x){\rm d}x$
- $I_1(f) = \dfrac{f(-1) + 2f(0) + f(1)}{2}$
- $I_2(f) = f(-\dfrac{1}{\sqrt{3}}) + f(\dfrac{1}{\sqrt{3}})$

|$f$|$I(f)$|$I_1(f)$|$I_2(f)$|
|:-:|:-:|:-:|:-:|
| $1$  |$\int^{1}_{-1}1{\rm d}x=2$            |$\frac{1+2+1}{2}=2$ |$1+1=2$ |
| $x$  |$\int^{1}_{-1}x{\rm d}x=0$            |$\frac{-1+0+1}{2}=0$|$\frac{-1+1}{\sqrt{3}}=0$ |
| $x^2$|$\int^{1}_{-1}x^2{\rm d}x=\frac{2}{3}$|$\frac{1+0+1}{2}=1$ |$\frac{1+1}{3}=\frac{2}{3}$ |
| $x^3$|$\int^{1}_{-1}x^3{\rm d}x=0$          |**INVALID**         |$\frac{1+1}{3\sqrt{3}}=0$ |
| $x^4$|$\int^{1}_{-1}x^4{\rm d}x=\frac{2}{5}$|**INVALID**         |$\frac{1+1}{9}=\frac{2}{9}$ |

综上可知，$I_1(f)$为1次代数精度，$I_2(f)$为3次代数精度。

#### 例2

试确定$\int_{0}^{h} f(x){\rm d}x ≈ A_0f(0) + A_1f(h) + A_2f'(0)$的系数$A_0,A_1,A_2$，使该多项式具有尽可能高的代数精度。

**解**

|$f$|$\int_{0}^{h} f(x){\rm d}x$|$A_0f(0) + A_1f(h) + A_2f'(0)$|
|:-:|:-:|:-:|
| $1$  |$h$            |$A_0+A_1$ |
| $x$  |$\frac{h^2}{2}$|$0+A_1h+A_2$ |
| $x^2$|$\frac{h^3}{3}$|$0+A_1h^2+0$ |
| $x^3$|<span class='hint'>$\frac{h^4}{4}$</span>|<span class='hint'>$0+A_1h^3+0$</span>|

从而得$\begin{cases}
    h = A_0+A_1
\\  \frac{h^2}{2} = A_1h+A_2
\\  \frac{h^3}{3} = A_1h^2
\end{cases}$，解得$\begin{cases}
    A_0 = \frac{2}{3}h
\\  A_1 = \frac{1}{3}h
\\  A_2 = \frac{1}{6}h^2
\end{cases}$

|$f$|$\int_{0}^{h} f(x){\rm d}x$|$A_0f(0) + A_1f(h) + A_2f'(0)$|
|:-:|:-:|:-:|
| $x^3$|$\frac{h^4}{4}$|$A_1h^3=\frac{1}{3}h^4$|

故多项式最高可达2次代数精度，此时系数为$\begin{cases}
    A_0 = \frac{2}{3}h
\\  A_1 = \frac{1}{3}h
\\  A_2 = \frac{1}{6}h^2
\end{cases}$

## 插值型求积公式

>拉格朗日（Lagrange）插值多项式：
>$$L_n(x) = \sum\limits_{i=0}^{n} l_i(x)f(x_i)$$
>- $l_i(x) = \prod\limits_{^{j=0}_{j≠i}}^{n} \dfrac{x-x_j}{x_i-x_j}$
>- $R_n(x) = f(x) - L_n(x) = \dfrac{f^{(n+1)}(ξ)}{(n+1)!} ω_{n+1}(x), { \ \ \ } ξ∈(a,b)$

<div class='mark'>

在节点$x_0,x_1,\cdots,x_n∈[a,b]$上构造插值型求积公式。

$$\int_{a}^{b}{ f(x)ρ(x) }\,{\rm d}x
    ≈ \int_{a}^{b}{ L_n(x)ρ(x) }\,{\rm d}x
    = \sum\limits_{i=0}^{n} A_i f(x_i)
$$

- $A_i = \int_a^b l_i(x) ρ(x) {\rm d}x$

其**误差**为

$$R(f)
    = \dfrac{1}{(n+1)!} \int_{a}^{b}{ f^{(n+1)}(ξ) ω_{n+1}(x) ρ(x) }
    \,{\rm d}x
    { \ \ \ } ξ∈(a,b)
$$

$n+1$个互异节点至少有$n$次代数精度，最高可达$2n+1$次代数精度（详见[高斯型求积公式](#高斯型求积公式)）。
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

<!--
- $R[f] = \int_a^b f[x,x_1,x_2,\dots,x_n]ω_{n+1}(x){\rm d}x = \dfrac{1}{(n+1)!} \int_{a}^{b}{ f^{(n+1)}(ξ) ω_{n+1}(x)}{\rm d}x$
-->

<div class='mark'>

<span class='highlight'>当Cotes系数为负数时是数值不稳定的，当$n≥8$时Cotes系数开始出现负数，即高阶Newton-Cotes公式的稳定性无法得到保证</span>；$n+1$个节点的求积公式至少有$n$次代数精度；当$n$为偶数时，至少有$n+1$次代数精度。
</div>

### 梯形公式

当**牛顿科特斯（Newton-Cotes）求积公式**的$n=1$，即2个节点时

<div class='mark'>

$$\int_{a}^{b}{f(x)}\,{\rm d}x ≈ \dfrac{b-a}{2} [f(a)+f(b)] = T$$

- $C_{0}^{(1)} = C_{1}^{(1)} = \frac{1}{2}$
- $R[f] = - \dfrac{(b-a)^3}{12}f''(η) { \ \ \ } η∈(a,b)$

**1次代数精度**。
</div>

### 辛普森（Simpson）公式

当**牛顿科特斯（Newton-Cotes）求积公式**的$n=2$，即3个节点时

<div class='mark'>

$$\int_a^b f(x) \,{\rm d}x ≈ \dfrac{b-a}{6}\left[ f(a)+4f(\dfrac{a+b}{2})+f(b) \right] = S$$

- $C_{0}^{(2)} = \frac{1}{6}$；$C_{1}^{(2)} = \frac{4}{6}$；$C_{2}^{(2)} = \frac{1}{6}$
- $R(f) = -\dfrac{(b-a)^5}{2880}f^{(4)}η { \ \ \ } η∈(a,b)$

**3次代数精度**。
</div>

### 科特斯（Cotes）公式

当**牛顿科特斯（Newton-Cotes）求积公式**的$n=4$，即5个节点时

$$\int_a^b f(x) {\rm d}x ≈ \dfrac{b-a}{90} \left[
    7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)
\right] = C$$

- $C_{0}^{(4)} = \frac{7}{90}$；$C_{1}^{(4)} = \frac{32}{90}$；$C_{2}^{(4)} = \frac{12}{90}$；$C_{3}^{(4)} = \frac{32}{90}$；$C_{4}^{(4)} = \frac{7}{90}$；

<div class='mark'>

**5次代数精度**。
</div>

## 复化求积公式

通过增加求积节点的个数来提高计算精度是不可行的（高阶Newton-Cotes公式稳定性得不到保证）。

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

### 龙贝格（Romberg）求积公式

略
<!-- 
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

### 复化Cotes公式

略

## 高斯型求积公式

>[正交多项式](./Introduction/part2.html#正交多项式)

使求积公式具有$2n+1$次代数精度的节点$x_0,x_1,x_2,\dots,x_n$（$n+1$个节点）称为**Gauss点**，此时的插值型求积公式称为**Gauss型求积公式**。

当且仅当$x_0,x_1,x_2,\dots,x_n$是$[a,b]$上以$ρ(x)$为权函数的$n+1$次正交多项式$P_{n+1}(x)$的零点，$x_0,x_1,x_2,\dots,x_n$为**Gauss点**。

- Gauss-Legendre求积公式
- Gauss-Laguerre求积公式
- Gauss-Hermite求积公式

<div class='mark'>

特别地，在区间$[-1,1]$上，权函数$ρ(x)=1$，取$P_{n+1}(x) = \dfrac{1}{2^{n+1}(n+1)!}\dfrac{{\rm d}^{n+1}}{{\rm d}x^{n+1}}(x^2-1)^{n+1}$的零点$x_0,x_1,x_2,\dots,x_n$，构造插值型求积公式，即**古典高斯型求积公式**

$$\int_{-1}^{1} ρ(x)f(x) \,{\rm d}x ≈
    \sum_{i=0}^{n} A_if(x_i)
$$

- $A_i = \int_{-1}^{1} \dfrac{P_{n+1}(x)}{(x-x_i)P'_{n+1}(x_i)} {\rm d}x = \dfrac{2}{(1-x_i^2)[P'_{n+1}(x_i)]^2}$

**3次代数精度**。

$∀x∈[a,b]$，若令$x=\dfrac{a+b}{2}+\dfrac{b-a}{2}t$，则${\rm d}x = \dfrac{b-a}{2}{\rm d}t { \ \ \ } t∈[-1,1]$，得

$$\int_{a}^{b} f(x) {\rm d}x
    = \dfrac{b-a}{2} \int_{-1}^{1} f \left(
        \dfrac{a+b}{2} + \dfrac{b-a}{2}t
    \right) {\rm d}t
    ≈ \dfrac{b-a}{2} \sum_{i=0}^{n} A_i f \left(
        \dfrac{a+b}{2} + \dfrac{b-a}{2}t_i
    \right)
$$

</div>

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
