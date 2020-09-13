<link rel='stylesheet' href='../../../style/index.css'>
<script src='../../../style/index.js'></script>

# [非线性规划：无约束问题](../index.html)

[TOC]

>$$\begin{matrix} \min f(x) & x∈E^n\end{matrix}$$

## 梯度法

### 基本思路

>泰勒展开：$f(x) =f(x_0) + f'(x_0)(x-x_0) + \dfrac{1}{2}f''(x_0)(x-x_0)^2 + \cdots + \dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n + R_n(x)$

$f(x)$有一阶连续偏导数，具有极小点$x^*$。$x^{(k)}$表示向极小点的第$k$次近似

$$\begin{matrix}
    x^{(k+1)} = x^{(k)} + λ_kP^{(k)} & λ_k≥0
\end{matrix}$$

- $P^{(k)}$：方向
- $λ_k$：步长，步长过大有可能会越过极小点


将$f(x)$在$x^{(k)}$处，泰勒展开

<!--
$$\begin{matrix}
    f(x) =  f(x^{(k)}) + f'(x^{(k)})(x-x^{(k)}) + R_2(x)
\end{matrix}$$
-->
$$\begin{matrix}
    f(x) = f[x^{(k)} + λP^{(k)}]
    =  f(x^{(k)}) + λ_k▽f(x^{(k)})^TP^{(k)} + o(λ)
    &
    \lim\limits_{λ→0} \dfrac{o(λ)}{λ} < 0
\end{matrix}$$

- $▽f(x^{(k)})$：函数$f$在当前点时的梯度

为了使目标函数值能得到尽量大的改善，必须寻求使$f(x^{(k)})^TP^{(k)}$取最小值的$P^{(k)}$

$$▽f(x^{(k)})^TP^{(k)} = \|▽f(x^{(k)})\| ⋅ \|P^{(k)}\| \cosθ$$

当$θ$为钝角时，即可下降，为$180°$时（$\cosθ=-1$），下降最快有

$$P^{(k)}=-▽f(x^{(k)})$$

称为**负梯度方向**。

### 计算步骤

>海赛（Hessian）矩阵：$H(x) = 
\left[\begin{array}{c}
    \frac{∂^2f}{∂x_1^2}   & \frac{∂^2f}{∂x_1∂x_2}
\\
\\  \frac{∂^2f}{∂x_2∂x_1} & \frac{∂^2f}{∂x_2^2}
\end{array}\right]
$

**求步长**

$λ_k = \dfrac{
    ▽f[x^{(k)}]^T ⋅ ▽f[x^{(k)}]
}{
    ▽f[x^{(k)}]^T ⋅ H(x^{(k}) ⋅ ▽f[x^{(k)}]
}$

**停止条件**

- $\|▽f(x^{(k)}\|^2 ≤ ε$
- $\|x^{(k)} - x^{(k-1)}\| ≤ ε$

其中$ε$为精度，满足以上任意一条时，停止迭代。

<!-- **步长确定**

$$f[x^{(k)} - λ▽f(x^{(k)})] < f(x^{(k)})$$

步长$λ$应满足上式。 -->

#### 例

求$f(x) = (x_1 - 1)^2 + (x_2 - 1)^2$的极小点，$x_0 = \left[\begin{array}{c} 0 \\ 0 \end{array}\right]$，已知$ε=0.1$。

**解**

梯度表达式：$▽f(x) = 
    \left[\begin{array}{c}
        2(x_1-1)
    \\  2(x_2-1)
    \end{array}\right]
$
- $▽f(x^{(0)}) = 
    \left[\begin{array}{c}
        -2
    \\  -2
    \end{array}\right]
$
- $\|▽f(x^{(0)})\|^2 = (-2)^2 + (-2)^2 = 8 > ε$
- $H(x) = 
    \left[\begin{array}{c}
        2 & 0
    \\  0 & 2
    \end{array}\right]
$

求步长

$$λ_0 = \dfrac{
    \left[\begin{array}{c} -2 &  -2 \end{array}\right]
    \left[\begin{array}{c} -2 \\ -2 \end{array}\right]
}{
    \left[\begin{array}{c} -2 &  -2 \end{array}\right]
    \left[\begin{array}{c} 2 & 0 \\ 0 & 2 \end{array}\right]
    \left[\begin{array}{c} -2 \\ -2 \end{array}\right]
} = \dfrac{1}{2}$$

迭代

$$x^{(1)} = x^{(0)} - λ_0▽f(x^{(0)})
    = \left[\begin{array}{c} 0 \\ 0 \end{array}\right]
    - \dfrac{1}{2}
    \left[\begin{array}{c} -2 \\ -2 \end{array}\right]
    = \left[\begin{array}{c} 1 \\ 1 \end{array}\right]
$$

$▽f(x^{(1)}) = 
    \left[\begin{array}{c}
        0
    \\  0
    \end{array}\right]
$，$\|▽f(x^{(1)})\|^2=0<0.1=ε$，迭代停止

故$x^{(1)}$即为在精度$ε=0.1$下的极小点。
