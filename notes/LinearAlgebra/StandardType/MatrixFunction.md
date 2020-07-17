<link rel='stylesheet' href='../../../style/index.css'>
<script src='../../../style/index.js'></script>

# [矩阵函数](../index.html)

[TOC]

## 定义

>$$f(x) = \sum_{k=0}^{∞} c_k x^k$$

### 幂级数定义法

设$A∈C^{n×n}$，$\{ c_k \}$是复数列，则称

$$
    f(A)
    = \sum_{k=0}^{∞} c_k A^k
    = c_0E + c_1A + c_2A^2 + \cdots
$$

为方阵$A$的**幂级数**（明显还是一个矩阵）。

<span class='highlight'>其缺点在于定义为无穷个矩阵相加，难于计算。若能再将无穷个矩阵相加合理归纳，则可解决此问题。</span>

设幂级数$f(x)$的收敛半径是$r$

- 当$ρ(A)<r$时，$f(A)$绝对收敛
- 当$ρ(A)>r$时，$f(A)$发散
- 当$ρ(A)=r$时，$f(A)$无定论

#### 例1

>$\dfrac{1}{1-x} = 1 + x + x^2 + \cdots, \ \ \ |x|<1$

$(E-A)^{-1} = E + A + A^2 + \cdots, \ \ \ ρ(A)<1$

#### 例2

>$\cos x = 1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} - \dfrac{x^6}{6!} + \cdots, \ \ \ ∀x$

$n$阶方阵满足$A^2 = A$，求$cos A$。

**解**

$
    \begin{array}{l}
        \cos A \\\\ \\\\ \\\\ \\\\
    \end{array}
    \begin{array}{l}
            = E - \dfrac{1}{2!}A^2 + \dfrac{1}{4!}A^4 - \dfrac{1}{6!}A^6 + \cdots
    \\\\    = E - \dfrac{1}{2!}A + \dfrac{1}{4!}A - \dfrac{1}{6!}A + \cdots
    \\\\    = E + A(-\dfrac{1}{2!} + \dfrac{1}{4!} - \dfrac{1}{6!} + \cdots)
    \\\\    = E + A(\cos 1 - 1)
    \end{array}
$

### Jordan定义法

设$n$阶方阵$A$的Jordan矩阵为$J =
    \left[\begin{array}{c}
        J_1
    \\  & J_2
    \\  && \ddots
    \\  &&& J_s
    \end{array}\right]
$，$s≤n$，$J_i$为Jordan块，明显有$P^{-1}AP = J$，则$A = PJP^{-1}$

$
    \begin{array}{l}
        f(A) \\ \\\\ \\\\ \\\\
    \end{array}\begin{array}{l}
            = c_0E + c_1A + c_2A^2 + \cdots
    \\\\    = c_0\underline{PEP^{-1}} + c_1\underline{PJP^{-1}} + c_2\underline{PJ^2P^{-1}} + \cdots
    \\\\    = P({ c_0E + c_1J + c_2J^2 + \cdots })P^{-1}
    \\\\    = Pf(J)P^{-1}
    \end{array}
$

&nbsp;

<div class='highlight'>

$$f(A) = Pf(J)P^{-1}$$

即$f(A)$与$f(J)$相似，该定义方法适合解决那些与$f(A)$相似的问题，规避掉求$P$的计算量。


$f(J) =
    \left[\begin{array}{c}
        f(J_1)
    \\  & f(J_2)
    \\  && \ddots
    \\  &&& f(J_s)
    \end{array}\right]
$

- 其中$f(J_i) =
    \left[\begin{array}{c}
        f(λ_i) & \dfrac{f'(λ_i)}{1!} & \cdots & \dfrac{f^{(n_i-1)}(λ_i)}{(k_i-1)!}
    \\         & f(λ_i)              & \ddots & \vdots
    \\         &                     & \ddots & \dfrac{f'(λ_i)}{1!}
    \\  &&& f(λ_i)
    \end{array}\right]
$，记住此结论即可。

</div>

#### 例1

$A =
    \left[\begin{array}{c}
        -4 & 2  & 10
    \\  -4 & 3  & 7
    \\  -3 & 1  & 7
    \end{array}\right]
$的Jordan矩阵$J=
    \left[\begin{array}{c}
        2 & 1  & 0
    \\  0 & 2  & 1
    \\  0 & 0  & 2
    \end{array}\right]
$，$P^{-1}AP=J$，求$\cos A$

**解**

Jordan标准型仅由一个Jordan块组成

- $λ_i = 2$

$\cos J = \cos J_1 =
    \left[\begin{array}{c}
        f(λ_i) & f'(λ_i) & \dfrac{f''(λ_i)}{2!}
    \\  0      & f(λ_i)  & f'(λ_i)
    \\  0      & 0       & f(λ_i)
    \end{array}\right]
    =
    \left[\begin{array}{c}
        \cos 2 & -\sin 2 & -\dfrac{\cos 2}{2}
    \\  0      & \cos 2  &  -\sin 2
    \\  0      & 0       & \cos 2
    \end{array}\right]
$

$\cos A = P \cos J P^{-1}$

#### 例2

$A = 
    \left[\begin{array}{c}
        3  & 1  & -1
    \\  -2 & 0  & 2
    \\  -1 & -1 & 3
    \end{array}\right]
$，分别求$\sin(\dfrac{π}{4}A)$和$e^A$的Jordan标准型

**解**

<span class='hint'>求$f(A)$的Jordan标准型，即求$f(J_A)$的Jordan标准型。</span>

$A$的Jordan标准型为（计算略）

$J = 
    \left[\begin{array}{c}
        2 & 0 & 0
    \\  0 & 2 & 1
    \\  0 & 0 & 2
    \end{array}\right]
    =
    \left[\begin{array}{c}
        \left[\begin{array}{c}
            2
        \end{array}\right]
        \\ &
        \left[\begin{array}{c}
            2 & 1
        \\  0 & 2
        \end{array}\right]
    \end{array}\right]
    =
    \left[\begin{array}{c}
        J_1
    \\& J_2
    \end{array}\right]
$

则

$\sin(\dfrac{π}{4}J)
    =
    \left[\begin{array}{c}
        \sin(\frac{π}{4}J_1)
    \\& \sin(\frac{π}{4}J_2)
    \end{array}\right]
    =
    \left[\begin{array}{c}
        \sin(\frac{π}{2})
    \\&
        \left[\begin{array}{c}
            \sin(\frac{π}{2}) & \frac{π}{2}\cos(\frac{π}{2})
        \\                    & \sin(\frac{π}{2})
        \end{array}\right]
    \end{array}\right]
    =
        \left[\begin{array}{c}
            1 &
        \\    & 1 & 0
        \\    &   & 1
        \end{array}\right]
$

$\sin(\dfrac{π}{4}J)$本身就是对角阵，所以就是$\sin(\dfrac{π}{4}A)$的Jordan标准型就是$
    \left[\begin{array}{c}
        1 &
    \\    & 1
    \\    &   & 1
    \end{array}\right]
$

$e^J = 
    \left[\begin{array}{c}
        e^{J_1}
    \\& e^{J_2}
    \end{array}\right]
    =
    \left[\begin{array}{c}
        e^2
    \\&
        \left[\begin{array}{c}
            e^2 & e^2
        \\      & e^2
        \end{array}\right]
    \end{array}\right]
    =
    \left[\begin{array}{c}
        e^2 &
    \\      & e^2 & e^2
    \\      &     & e^2
    \end{array}\right]
$

接下来求$e^J$的Jordan标准型。

$|λE - e^J| = (λ-e^2)^3$

则存在以下三个情形。


| Stuation | Smith | Jordan: $J_{e^J}$ |
| :-: | -: | :- |
| ① | $\left[\begin{array}{c} 1 & \\& 1 \\&& (λ-e^2)^3     \end{array}\right]$ | $\left[\begin{array}{c} e^2 & 1 & \\& e^2 & 1 \\&& e^2 \end{array}\right]$
| ② | $\left[\begin{array}{c} 1 & \\& λ-e^2 \\&& (λ-e^2)^2 \end{array}\right]$ | $\left[\begin{array}{c} e^2 & \\& e^2 & 1 \\&& e^2 \end{array}\right]$
| ③ | $\left[\begin{array}{c} λ-e^2 & \\& λ-e^2 \\&& λ-e^2 \end{array}\right]$ | $\left[\begin{array}{c} e^2 & \\& e^2 \\&& e^2 \end{array}\right]$

取$λ=e^2,-e^2$得到满足$r(λE-e^J) = r(λE-J_{e^J})$的情况，计算得正确情况为②。

即$e^J$的Jordan标准型为$\left[\begin{array}{c} e^2 & \\& e^2 & 1 \\&& e^2 \end{array}\right]$

### 待定多项式法

>**最小多项式**：能使$\varphi(A)=0$的多项式中，次数最低，首项系数为$1$的多项式，记作$m(λ)$。

设$A$的最小多项式

$$m(λ) = (λ-λ_1)^{m_1} (λ-λ_2)^{m_2} \cdots (λ-λ_s)^{m_s}$$

称为$σ_A = \{ (λ_1,m_1), (λ_2,m_2), \cdots, (λ_s,m_s)\}$为$A$的**谱**。

称集合

$$\{  f^{(k_i)}(λ_i) \bold{\ |\ } k_i = 0,1,2,\dots,m_i-1 \ \ \ i=1,2,\dots,s\}$$

为函数$f(x)$在$A$上的**谱值**，记为$f(σ_A)$。

若函数$f(x)$在$A$上的谱值$f(σ_A)$存在，有复系数待定多项式$g(x)$使得

$$g(σ_A) = f(σ_A)$$

则定义$f(A) = g(A)$，<span class='highlight'>实际上$g(x)$就是比最小多项式的次数低$1$次的多项式（证明略）</span>。

#### 例1

$m(λ) = (λ-3)^2(λ-5)^3$

则

- $σ_A = \{ (3,2), (5,3) \}$
- $f(σ_A) = \{ f(3), f'(3), f(5), f'(5), f''(5) \}$

#### 例2

$A=
    \left[\begin{array}{c}
        -4 & 2  & 10
    \\  -4 & 3  & 7
    \\  -4 & 1  & 7
    \end{array}\right]
$，求$\cos A$

**解**

$f(λ) = |λE-A| = (λ-2)^3$

特征多项式一定是零化多项式，最小多项式一定是零化多项式的因子。

则$A$的最小多项式可能是以下三种情形

- $m_1(λ) = (λ-2)^3$
- $m_2(λ) = (λ-2)^2$
- $m_3(λ) = (λ-2)$

将$A$带入上式，仅有$(A-2E)^3 = 0$，故$A$的最小多项式为

$$m(λ) = (λ-2)^3$$

- $σ_A = \{ (2,3) \}$
- $\cos(σ_A) = \{ \cos2, -\sin2, -\cos2 \}$

则待定多项式$g(x)$应该是一个$2$次多项式记为

$$g(x) = a_0 + a_1x + a_2x^2$$

即 $\begin{cases}
    g(2) = a_0 + 2a_1 + 4a_2 = \cos2
\\  g'(2) = a_1 + 4a_2 = -\sin2
\\  g''(2) = 2a_2 = -\cos2
\end{cases}$，解得 $\begin{cases}
    a_0 = -\cos2 + 2\sin2
\\  a_1 = -\sin2 + 2\cos2
\\  a_2 = \frac{1}{2}\cos2
\end{cases}$

$\cos A = a_0E + a_1A + a_2A^2$（带入$a_0,a_1,a_2$即得最终结果）


