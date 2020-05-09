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

$(E-A)^{-1} = E + x + x^2 + \cdots, \ \ \ ρ(A)<1$

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

$$f(A) = Pf(J)P^{-1}$$

<span class='highlight'>即$f(A)$与$f(J)$相似，该定义方法适合解决那些与$f(A)$相似的问题，规避掉求$P$的计算量。</span>

$
\begin{array}{l}
    f(J) \\\\ \\\\ \\\\
\end{array}
\begin{array}{l}
    =
    \left[\begin{array}{c}
        f(J_1)
    \\  & f(J_2)
    \\  && \ddots
    \\  &&& f(J_s)
    \end{array}\right]
    \\\\
    =
    \left[\begin{array}{c}
        a_0E + a_1J_1 + a_2J_1^2 + \cdots
    \\  & a_0E + a_1J_2 + a_2J_2^2 + \cdots
    \\  && \cdots
    \\  &&& a_0E + a_1J_s + a_2J_s^2 + \cdots
    \end{array}\right]
\end{array}
$

<span class='highlight'>其中$f(J_i) =
    \left[\begin{array}{c}
        f(λ_i) & \dfrac{f'(λ_i)}{1!} & \cdots & \dfrac{f^{k_i-1}(λ_i)}{(k_i-1)!}
    \\         & f(λ_i)              & \ddots & \vdots
    \\         &                     & \ddots & \dfrac{f'(λ_i)}{1!}
    \\  &&& f(λ_i)
    \end{array}\right]
$，记住此结论即可。</span>

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

<span class='hint'>求$f(A)$的Jordan标准型，即求$f(J_A)$的Jordan标准型。</span>

$A = 
    \left[\begin{array}{c}
        3  & 1  & -1
    \\  -2 & 0  & 2
    \\  -1 & -1 & 3
    \end{array}\right]
$，求$\sin(\dfrac{π}{4}A)$，$e^A$的Jordan标准型

**解**

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
    \\    & 1 & 0
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

