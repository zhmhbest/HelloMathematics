<link rel='stylesheet' href='../../../style/index.css'>
<script src='../../../style/index.js'></script>

# [线性规划（*Linear Programming*）：灵敏度分析](../index.html)

## 基本思想

>本处系数主要指：价值系数$c$和资源系数$b$。

- 系数在什么范围内变化，不会影响已获得的最优基（即最优解或最优解结构不变）。
- 如果系数的变化超过以上范围，如何在用最简便的方法在原来最优解的基础上求得新的最优解。
- 当线性规划问题增加一个新的变量或新的约束，如何在原有最优解的基础上获得新的最优解。

| 原问题 | 对偶问题  | 方法 |
|:-:|:-:|:-:|
| 可行解  | 可行解   | 已是最优解
| 可行解  | 非可行解 | 单纯形法
| 非可行解| 可行解   | 对偶单纯形法
| 非可行解| 非可行解 | 引入人工变量

## 资源系数变化分析

$$
\left[\begin{array}{c}
    B & I
\end{array}\right]
\left[\begin{array}{c}
    x_B
\\  x_I
\end{array}\right]
=b
\,\,\, ⇒ \,\,\,
x_B = B^{-1}b - B^{-1}Ix_I
$$

当资源限制变化为$Δb$，有

$$x_B = B^{-1}(b+Δb) - B^{-1}Ix_I$$

记$\hat{x}_B = B^{-1}b + B^{-1}Δb$

- $\hat{x}_B≥0$：最优基不变，$x_I=0$，$x_B = \hat{x}_B$。
- $\hat{x}_B<0$：最优基变化，用对偶单纯形法求新解。

#### 例

$\min \,\,\, ω =-5x_1 - 12x_2 - 4x_3 + 0x_4 + Mx_5$
$
\begin{cases}
    x_1 + 2x_2 + x_3 + x_4 = 5
\\  2x_1 - x_2 + 3x_3 + x_5 = 2
\\  x_j≥0, j=1,2,3,4,5
\end{cases}
$

计算结果为

|   |   |   |   |   |   |   |   |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|       | $c_j$ | -5     | -12   | -4             | 0     | M      |
| $C_B$ | $X_B$ | $x_1$  | $x_2$ | $x_3$          | $x_4$ | $x_5$  | $b$
| -12   | $x_2$ | 0      | 1     | -$\frac{1}{5}$ | $\frac{2}{5}$  | -$\frac{1}{5}$     | $\frac{8}{5}$
| -5    | $x_1$ | 1      | 0     | $\frac{7}{5}$  | $\frac{1}{5}$  | $\frac{2}{5}$      | $\frac{9}{5}$
|       | $σ_j$ | 0      | 0     | $\frac{3}{5}$  | $\frac{29}{5}$ | -$\frac{2}{5}$+$M$ |

- $ω = -5⋅\frac{9}{5} - 12⋅\frac{8}{5} = -\frac{141}{5}$

**注**：使用单纯形法求解后$\left[\begin{array}{c} B & I \end{array}\right]$转化为$\left[\begin{array}{c} I & B^{-1} \end{array}\right]$。

<!-- $(B|I|b) =
    \left[\begin{array}{c}
        1 & 2  & 1 & \vdots & 1 & 0 & \vdots & 5
    \\  2 & -1 & 3 & \vdots & 0 & 1 & \vdots & 2
    \end{array}\right]
$ -->

$(\ \ I \ \ \bold| \ \ B^{-1} \ \ \bold| \ \ b \ \ ) =
    \left[\begin{array}{c}
        0 & 1 & -\frac{1}{5} & \vdots & \frac{2}{5} & -\frac{1}{5} & \vdots & \frac{8}{5}
    \\  1 & 0 & \frac{7}{5}  & \vdots & \frac{1}{5} & \frac{2}{5}  & \vdots & \frac{9}{5}
    \end{array}\right]
$

**问**

1. $b_2$在什么范围内变化时，最优解保持不变。
2. $b_2$由2变为15，求最新最优解。

**解**

（1）

设$b_2$的变化为$Δb_2$，有

$$\hat{x}_B =
    \left[\begin{array}{c}
        \frac{8}{5}
    \\
    \\  \frac{9}{5}
    \end{array}\right]
    +
    \left[\begin{array}{c}
        \frac{2}{5} & -\frac{1}{5}
    \\
    \\  \frac{1}{5} & \frac{2}{5}
    \end{array}\right]
    \left[\begin{array}{c}
        0
    \\
    \\  Δb_2
    \end{array}\right]
    =
    \left[\begin{array}{c}
        \frac{8-Δb_2}{5}
    \\
    \\  \frac{9+2Δb_2}{5}
    \end{array}\right]
$$

要保持最优解不变，有$\hat{x}_B ≥ 0$

- $\frac{8-Δb_2}{5} ≥ 0$
- $\frac{9+2Δb_2}{5} ≥ 0$

故$Δb_2∈[-\frac{5}{2}, 10]$

（2）

$$\hat{x}_B = B^{-1}b_{current} =
    \left[\begin{array}{c}
        \frac{2}{5} & -\frac{1}{5}
    \\
    \\  \frac{1}{5} & \frac{2}{5}
    \end{array}\right]
    \left[\begin{array}{c}
        5
    \\
    \\  15
    \end{array}\right]
    =
    \left[\begin{array}{c}
        -1
    \\
    \\  7
    \end{array}\right]
$$


最优基变化，使用对偶单纯形法

