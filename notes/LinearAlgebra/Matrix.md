<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [矩阵（Matrix）](./index.html)

[TOC]

## 矩阵计算

### 乘法

#### 矩阵与向量乘法

$
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n}
    \\  a_{21} & a_{22} & \cdots & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{array}\right]_{m×n}
    \cdot
    \left[\begin{array}{c} b_1 \\ b_2 \\ \vdots  \\ b_n \end{array}\right]_{n×1}
    =
    \left[\begin{array}{c}
        a_{11}b_1 + a_{12}b_2 + \cdots + a_{1n}b_n
    \\  a_{21}b_1 + a_{22}b_2 + \cdots + a_{2n}b_n
    \\  \vdots
    \\  a_{m1}b_1 + a_{m2}b_2 + \cdots + a_{mn}b_n
    \end{array}\right]_{m×n}
$

#### 矩阵与矩阵乘法

>[线性代数的本质：矩阵乘法](https://www.bilibili.com/video/av6128021)

$A_{m×n}×B_{n×s}$：左阵定行，右阵定列；内等外定。

$
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n}
    \\  a_{21} & a_{22} & \cdots & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{array}\right]_{m×n}
    \cdot
    \left[\begin{array}{c}
        b_{11} & b_{12} & \cdots & b_{1m}
    \\  b_{21} & b_{22} & \cdots & b_{2m}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  b_{n1} & b_{n2} & \cdots & b_{nm}
    \end{array}\right]_{n×s}
    =
    \left[\begin{array}{c}
        a_{11}b_{11} + a_{12}b_{21} + \cdots + a_{1n}b_{n1}
    &   a_{11}b_{12} + a_{12}b_{22} + \cdots + a_{1n}b_{n2}
    &   \dots
    &   a_{11}b_{1m} + a_{12}b_{2m} + \cdots + a_{1n}b_{nm}
    \\  a_{21}b_{11} + a_{22}b_{21} + \cdots + a_{2n}b_{n1}
    &   a_{21}b_{12} + a_{22}b_{22} + \cdots + a_{2n}b_{n2}
    &   \dots
    &   a_{21}b_{1m} + a_{22}b_{2m} + \cdots + a_{2n}b_{nm}
    \\  \vdots
    &   \vdots
    &   \ddots
    \\  a_{m1}b_{11} + a_{m2}b_{22} + \cdots + a_{mn}b_{n1}
    &   a_{m1}b_{12} + a_{m2}b_{22} + \cdots + a_{mn}b_{n2}
    &   \dots
    &   a_{m1}b_{1m} + a_{m2}b_{2m} + \cdots + a_{mn}b_{nm}
    \end{array}\right]_{m×s}
$

**性质**

- $AB ≠ BA$
- $A(BC) = (AB)C$
- $A(B+C) = AB+AC$
- $(kA)(lB) = kl⋅AB$
- $AE=A$、$EA=A$
- $AO=O$、$EO=O$
- ${\rm d}(AB) = {\rm d}(A)B + A{\rm d}(B)$

### 行列式

$$
    |A|=\det(A)=
        \left|\begin{array}{c}
            a_{11} & \cdots & a_{1n}
        \\  \vdots & \ddots & \vdots
        \\  a_{n1} & \cdots & a_{nn}
        \end{array}\right|_{n×n}
        = \sum\limits_{j=1}^{n} a_{rj}A_{rj}
        = \sum\limits_{i=1}^{n} a_{ic}A_{ic}
$$

- $r$：选定的行
- $c$：选定的列
- $A_{rj}$、$A_{ic}$：代数余子式

特别的：

- $|A_{1×1}|=a_{11}$
- $|A_{2×2}|=a_{11}a_{12} - a_{21}a_{12}$
- $|A_{3×3}|= a_{11}a_{22}a_{33} + a_{13}a_{21}a_{32} + a_{31}a_{23}a_{12} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{33}a_{21}a_{12}$

**计算性质**

- $|A^T| = |A|$
- $|kA| = k^n|A|$
- $|A^{-1}| = \dfrac{1}{|A|}$
- $|A^*| = |A|^{n-1}$
- $|A| = \prod_{i=1}^{n} λ_i$，（$λ_i$为$A$的特征值）
- $|AB| = |A|⋅|B| = |BA|$
- $A∼B \,\,⇒\,\, |A|=|B|$

**拉普拉斯展开**

$
    \left|\begin{array}{c}
        A & *
    \\  O & B
    \end{array}\right|_{n×n}
    =|A|⋅|B|
    \newline\,\newline
    \left|\begin{array}{c}
        A & O
    \\  * & B
    \end{array}\right|_{n×n}
    =|A|⋅|B|
    \newline\,\newline
    \left|\begin{array}{c}
        * & A
    \\  B & O
    \end{array}\right|_{n×n}
    =(-1)^{mn}|A|⋅|B|
    \newline\,\newline
    \left|\begin{array}{c}
        O & A
    \\  B & *
    \end{array}\right|_{n×n}
    =(-1)^{mn}|A|⋅|B|
$

### 转置

$$
    \left[\begin{array}{c}
        a_{11} & a_{12} & \dots  & a_{1n}
    \\  a_{21} & a_{22} & \dots  & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{m1} & a_{m2} & \dots  & a_{mn}
    \end{array}\right]_{m×n}^T
    =
    \left[\begin{array}{c}
        a_{11} & a_{21} & \dots  & a_{m1}
    \\  a_{12} & a_{22} & \dots  & a_{m2}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{1n} & a_{2n} & \dots  & a_{mn}
    \end{array}\right]_{n×m}
$$

**计算性质**

- $(A^T)^T = A$
- $(A + B)^T = A^T + B^T$
- $(kA)^T = kA^T$
- $(AB)^T = B^TA^T$
- ${\rm d}(A^T) = ({\rm d}A)^T$

### 共轭

实部不变，虚部取负。记作$\overline{A}$。

### 共轭转置

$$A^H = (\overline{A})^T = \overline{A^T}$$

### 逆

**方法一**

$$A^{-1} = \dfrac{A^*}{|A|}$$

**方法二**

$$(A | E) \xrightarrow{初等行变换} (E | A^{-1})$$

**计算性质**

- $(A^{-1})^{-1}=A$
- $(A^T)^{-1}=(A^{-1})^T$
- $(kA)^{-1} = \frac{1}{k}A^{-1}$
- $(AB)^{-1} = B^{-1}A^{-1}$
- $|A^{-1}| = \frac{1}{|A|}$
- $A^{-1} = \frac{1}{|A|}A^*$

**性质**

- $A$可逆$\ \ \ ⇔ \ \ \ r(A_{n×n})=n$
- $A$可逆$\ \ \ ⇔ \ \ \ |A|≠0$
- $A$可逆$\ \ \ ⇔ \ \ \ Ax=0$仅有$0$解
- $A$可逆$\ \ \ ⇔ \ \ \ A$的行（列）向量线性无关
- $A$可逆$\ \ \ ⇔ \ \ \ 0$不是$A$的特征值

### 微分

**计算性质**

- ${\rm d}(A ± B) = {\rm d}(A) ± {\rm d}(B)$
- ${\rm d}(AB) = {\rm d}(A)B + A{\rm d}(B)$
- ${\rm d}(A^T) = {\rm d}(A)^T$
- ${\rm d}(tr(A)) = tr({\rm d}(A))$

### 求导

矩阵求导的本质（$\frac{∂A}{∂B}$或$\frac{{\rm d}A}{{\rm d}B}$）就是矩阵$A$中的每一个元素对矩阵B中的每一个元素求导。其有两个求导布局：**分子布局**<span class='hint'>（求导结果的维度以分子为主）</span>和**分母布局**<span class='hint'>（求导结果的维度以分母为主）</span>。

#### 分子布局（Numerator layout）

**标量函数/向量**：$
    \dfrac{{\rm d}f(x)}{{\rm d}x_{n×1}}
    =
    \left[\begin{array}{c}
        \frac{∂f(x)}{∂x_{11}}
    &   \cdots
    &   \frac{∂f(x)}{∂x_{n1}}
    \end{array}\right]_{1×n}
$

**向量函数/标量**：$
    \dfrac{{\rm d}f_{n×1}(x)}{{\rm d}x}
    =
    \left[\begin{array}{c}
        \frac{∂f_{11}(x)}{∂x}
    \\  \vdots
    \\  \frac{∂f_{n1}(x)}{∂x}
    \end{array}\right]_{n×1}
$

**向量函数/向量**：$
    \dfrac{{\rm d}f_{m×1}(x)}{{\rm d}x_{n×1}}
    =
    \left[\begin{array}{c}
        \frac{∂f_{11}(x)}{∂x_{n×1}}
    \\  \frac{∂f_{21}(x)}{∂x_{n×1}}
    \\  \vdots
    \\  \frac{∂f_{m1}(x)}{∂x_{n×1}}
    \end{array}\right]
    =
    \left[\begin{array}{c}
        \frac{∂f_{11}(x)}{∂x_{11}} & \frac{∂f_{11}(x)}{∂x_{21}}
            & \cdots & \frac{∂f_{11}(x)}{∂x_{n1}}
    \\  \frac{∂f_{21}(x)}{∂x_{11}} & \frac{∂f_{21}(x)}{∂x_{21}}
            & \cdots & \frac{∂f_{21}(x)}{∂x_{n1}}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  \frac{∂f_{m1}(x)}{∂x_{11}} & \frac{∂f_{m1}(x)}{∂x_{21}}
            & \cdots & \frac{∂f_{m1}(x)}{∂x_{n1}}
    \end{array}\right]_{m×n}
$（**雅可比矩阵**）

#### 分母布局（Denominator layout）

**标量函数/向量**：$
    \dfrac{{\rm d}f(x)}{{\rm d}x_{n×1}}
    =
    \left[\begin{array}{c}
        \frac{∂f(x)}{∂x_{11}}
    \\  \vdots
    \\  \frac{∂f(x)}{∂x_{n1}}
    \end{array}\right]_{n×1}
$

**向量函数/标量**：$
    \dfrac{{\rm d}f_{n×1}(x)}{{\rm d}x}
    =
    \left[\begin{array}{c}
        \frac{∂f_{11}(x)}{∂x}
    &   \cdots
    &   \frac{∂f_{n1}(x)}{∂x}
    \end{array}\right]_{1×n}
$

**向量函数/向量**：$
    \dfrac{{\rm d}f_{m×1}(x)}{{\rm d}x_{n×1}}
    =
    \left[\begin{array}{c}
        \frac{∂f_{m×1}(x)}{∂x_{11}}
    \\  \frac{∂f_{m×1}(x)}{∂x_{21}}
    \\  \vdots
    \\  \frac{∂f_{m×1}(x)}{∂x_{n1}}
    \end{array}\right]
    =
    \left[\begin{array}{c}
        \frac{∂f_{11}(x)}{∂x_{11}} & \frac{∂f_{21}(x)}{∂x_{11}}
            & \cdots & \frac{∂f_{m1}(x)}{∂x_{11}}
    \\  \frac{∂f_{11}(x)}{∂x_{21}} & \frac{∂f_{21}(x)}{∂x_{21}}
            & \cdots & \frac{∂f_{m1}(x)}{∂x_{21}}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  \frac{∂f_{11}(x)}{∂x_{n1}} & \frac{∂f_{21}(x)}{∂x_{n1}}
            & \cdots & \frac{∂f_{m1}(x)}{∂x_{n1}}
    \end{array}\right]_{n×m}
$（**梯度矩阵**）

#### 混合布局

在一些情况下，我们未指明具体使用哪种布局，则默认按以下要求。

- 如果**向量或矩阵**对**标量**求导，使用分子布局。
- 如果**标量**对**向量或矩阵**求导，使用分母布局。
- 如果**向量**对**向量**求导，一般以分子布局的雅可比矩阵为主。

**【例1】**：对于$α=\left[\begin{array}{c} α_1 \\ \vdots \\ α_n  \end{array}\right]_{n×1}$、$x=\left[\begin{array}{c} x_1 \\ \vdots \\ x_n  \end{array}\right]_{n×1}$，有$f(x)=α^Tx=x^Tα=\sum_{i}{α_i x_i}$，即$f$为标量函数。

则$
    \dfrac{{\rm d}f}{{\rm d}x}
    =
    \dfrac{{\rm d}(α^Tx)}{{\rm d}x}
    =
    \dfrac{{\rm d}(x^Tα)}{{\rm d}x}
    =
    \left[\begin{array}{c}
        \frac{∂f}{∂x_{1}}
    \\  \vdots
    \\  \frac{∂f}{∂x_n}
    \end{array}\right]
    =
    \left[\begin{array}{c}
        α_1
    \\  \vdots
    \\  α_n
    \end{array}\right]
    = α
$

**【例2】**：对于$x=\left[\begin{array}{c} x_1 \\ \vdots \\ x_n  \end{array}\right]_{n×1}$，$A=\left[\begin{array}{c}
    a_{11} & \cdots & a_{1n}
\\  \vdots & \ddots & \vdots
\\  a_{n1} & \cdots & a_{nn}
\end{array}\right]_{n×n}$，有$f(x)=x^TAx=\sum_{i}\sum_{j} {a_{ij}x_{i}x_{j}}$，即$f$为标量函数。

则$
    \dfrac{{\rm d}f}{{\rm d}x}
    =
    \left[\begin{array}{c}
        \frac{∂f}{∂x_{1}}
    \\  \vdots
    \\  \frac{∂f}{∂x_n}
    \end{array}\right]
    =
    \left[\begin{array}{c}
        \sum_{j} a_{1j} \cdot x_{j}
    \\  \vdots
    \\  \sum_{j} a_{nj} \cdot x_{j}
    \end{array}\right]
    +
    \left[\begin{array}{c}
        \sum_{i} a_{i1} \cdot x_{i}
    \\  \vdots
    \\  \sum_{i} a_{in} \cdot x_{i}
    \end{array}\right]
    =
    \left[\begin{array}{c}
        a_{11} & \cdots & a_{1n}
    \\  \vdots & \ddots & \vdots
    \\  a_{n1} & \cdots & a_{nn}
    \end{array}\right]
    \left[\begin{array}{c} x_1 \\ \vdots \\ x_n  \end{array}\right]
    +
    \left[\begin{array}{c}
        a_{11} & \cdots & a_{n1}
    \\  \vdots & \ddots & \vdots
    \\  a_{1n} & \cdots & a_{nn}
    \end{array}\right]
    \left[\begin{array}{c} x_1 \\ \vdots \\ x_n  \end{array}\right]
    = (A + A^T)x
$

#### 常见情况

- $\vec{x}$表示行向量
- $\hat{y}$表示列向量
- 明显$\vec{x}_{1×?} \cdot \hat{y}_{?×1}$为标量

（1）$z_{n×k} = w_{n×m} x_{m×k}$

$
    \begin{array}{l}
        ⇒
            \left[\begin{array}{c}
                \hat{z}_1 & \cdots & \hat{z}_k
            \end{array}\right]
            =
            \left[\begin{array}{c}
                \vec{w}_1 \\ \vdots \\ \vec{w}_n
            \end{array}\right]
            \left[\begin{array}{c}
                \hat{x}_1 & \cdots & \hat{x}_k
            \end{array}\right]
            =
            \left[\begin{array}{c}
                \vec{w}_1 \hat{x}_1 & \cdots & \vec{w}_1 \hat{x}_k
            \\  \vdots & \ddots & \vdots
            \\  \vec{w}_n \hat{x}_1 & \cdots & \vec{w}_n \hat{x}_k
            \end{array}\right]
        \\ ⇒
            \begin{cases}
                \hat{z}_1 = \left[\begin{array}{c}
                    \vec{w}_1 \hat{x}_1 & \cdots & \vec{w}_n \hat{x}_1
                \end{array}\right]^T
            \\  \vdots
            \\  \hat{z}_j = \left[\begin{array}{c}
                    \vec{w}_1 \hat{x}_j & \cdots & \vec{w}_n \hat{x}_j
                \end{array}\right]^T
            \\  \vdots
            \\  \hat{z}_k = \left[\begin{array}{c}
                    \vec{w}_1 \hat{x}_k & \cdots & \vec{w}_n \hat{x}_k
                \end{array}\right]^T
            \end{cases}
        \\\\ ⇒
        \dfrac{∂\hat{z}_j}{∂\hat{x}_j} = w
    \end{array}
$

（2）$z_{k×n} = x_{k×m} w_{m×n}$

$
    \begin{array}{l}
        ⇒
            \left[\begin{array}{c}
                \vec{z}_1 \\ \vdots \\ \vec{z}_k
            \end{array}\right]
            =
            \left[\begin{array}{c}
                \vec{x}_1 \\ \vdots \\ \vec{x}_k
            \end{array}\right]
            \left[\begin{array}{c}
                \hat{w}_1 & \cdots & \hat{w}_n
            \end{array}\right]
            =
            \left[\begin{array}{c}
                \vec{x}_1 \hat{w}_1 & \cdots & \vec{x}_1 \hat{w}_n
            \\  \vdots & \ddots & \vdots
            \\  \vec{x}_k \hat{w}_1 & \cdots & \vec{x}_k \hat{w}_n
            \end{array}\right]
        \\\\ ⇒
            \vec{z}_i
            =
            \left[\begin{array}{c}
                \vec{x}_i \hat{w}_1 & \cdots & \vec{x}_i \hat{w}_n
            \end{array}\right]
        \\\\
            z^T_{n×k} = w^T_{n×m} x^T_{m×k}
        \\\\ ⇒
            (\vec{z}_i)^T
            =
            \left[\begin{array}{c}
                (\hat{w}_1)^T (\vec{x}_i)^T  & \cdots & (\hat{w}_n)^T (\vec{x}_i)^T
            \end{array}\right]^T
        \\\\ ⇒
            \dfrac{∂(\vec{z}_i)^T}{∂(\vec{x}_i)^T} = w^T
    \end{array}
$

（3）$
    \begin{array}{l}
        \left[\begin{array}{c}
            z_1 \\ \vdots \\ z_n
        \end{array}\right]
        =
        \left[\begin{array}{c}
            x_1 \\ \vdots \\ x_n
        \end{array}\right]
        ⇒
        \dfrac{∂z}{∂x} = I
    \end{array}
$

（4）$
    \begin{array}{l}
        \left[\begin{array}{c}
            z_1 \\ \vdots \\ z_n
        \end{array}\right]
        =
        f\left(\left[\begin{array}{c}
            x_1 \\ \vdots \\ x_n
        \end{array}\right]\right)
        ⇒
        \dfrac{∂z}{∂x} = \mathrm{diag}(f'(x_i))
    \end{array}
$

（5）$z_{n×1}=w_{n×m}x_{m×1}$、$\dfrac{∂J}{∂z}=δ_{n×1}$、$\dfrac{∂J}{∂w}=\dfrac{∂J}{∂z}\dfrac{∂z}{∂w}=?_{n×m}$

$
    w_{n×m}x_{m×1}
    =
    \left[\begin{array}{c}
        \sum_{j=1}^{m} w_{1j}x_{j}
    \\  \vdots
    \\  \sum_{j=1}^{m} w_{ij}x_{j}
    \\  \vdots
    \\  \sum_{j=1}^{m} w_{nj}x_{j}
    \end{array}\right]
    ⇒
    \dfrac{∂z}{∂w_{ij}}=
    \left[\begin{array}{c}
        0
    \\  \vdots
    \\  x_{j}
    \\  \vdots
    \\  0
    \end{array}\right]_{n×1}
    ← i {\rm th}
$

$
    \dfrac{∂z}{∂w}
    =
    \left[{\dfrac{∂z}{∂w_{ij}}}\right]_{(n×1)×(n×m)}
    =
    \left[\begin{array}{c}
        \left[\begin{array}{c}
            x_1
        \\  \vdots
        \\  0
        \end{array}\right]
        & \cdots &
        \left[\begin{array}{c}
            x_m
        \\  \vdots
        \\  0
        \end{array}\right]
        \\ \vdots & \ddots & \vdots \\
        \left[\begin{array}{c}
            0
        \\  \vdots
        \\  x_1
        \end{array}\right]
        & \cdots &
        \left[\begin{array}{c}
            0
        \\  \vdots
        \\  x_m
        \end{array}\right]
    \end{array}\right]
$

$
    \dfrac{∂J}{∂w}=\dfrac{∂J}{∂z}\dfrac{∂z}{∂w}
    =
    δ_{(1×n)×1} \dfrac{∂z}{∂w}
    =
    \left[\begin{array}{c}
        δ_1 x_1 & \cdots & δ_1 x_m
        \\ \vdots & \ddots & \vdots \\
        δ_n x_1 & \cdots & δ_n x_m
    \end{array}\right]
    =
    \left[\begin{array}{c}
        δ_1 \\ \vdots \\ δ_n
    \end{array}\right]
    \left[\begin{array}{c}
        x_1 & \cdots & x_m
    \end{array}\right]
    = δ x^T
$

（6）$z_{1×n}=x_{1×m}w_{m×n}$、$\dfrac{∂J}{∂z}=δ_{1×n}$、$\dfrac{∂J}{∂w}=\dfrac{∂J}{∂z}\dfrac{∂z}{∂w}=?$

$z^T_{n×1}=w^T_{n×m}x^T_{m×1}$、$\dfrac{∂J}{∂z^T}=δ^T_{n×1}$

$\dfrac{∂J}{∂w^T}=δ^Tx ⇒ \dfrac{∂J}{∂w}=x^Tδ$

（7）$\tilde{y} = \mathrm{Softmax}(θ)$、$L = \mathrm{CE}(y, \tilde{y})$、$\dfrac{∂J}{∂θ}=?$

$y$为行向量$\dfrac{∂J}{∂θ}=\tilde{y} - y$

$y$为列向量$\dfrac{∂J}{∂θ}=(\tilde{y} - y)^T$

<!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->

## 特殊矩阵

### 零矩阵

所有元素均为0的矩阵。

$0=
    \left[\begin{array}{c}
        0      & 0      & \cdots & 0      & 0
    \\  0      & 0      & \cdots & 0      & 0
    \\  \vdots & \vdots & \ddots & \vdots & \vdots
    \\  0      & 0      & \cdots & 0      & 0
    \\  0      & 0      & \cdots & 0      & 0
    \end{array}\right]_{m×n}
$

### 单位矩阵

主对角线均为1，其余均为0的矩阵。

$E=
    \left[\begin{array}{c}
        1      & 0      & \cdots & 0
    \\  0      & 1      & \cdots & 0
    \\  \vdots & \vdots & \ddots & \vdots
    \\  0      & 0      & \cdots & 1
    \end{array}\right]_{n×n}
$

### 初等矩阵

由单位矩阵经过一次初等变换得到的矩阵。

**左行右列规则**

- 对矩阵$A$**左**乘一个初等矩阵，等于对$A$做相应的**行**变换
- 对矩阵$A$**右**乘一个初等矩阵，等于对$A$做相应的**列**变换

### 三角矩阵

#### 主对角

主对角矩阵的行列式满足：$|A| = a_{11}a_{22}\cdots a_{nn}$

**三角矩阵**

$A=
    \left[\begin{array}{c}
        a_{11} & 0      & \cdots & 0
    \\  0      & a_{22} & \cdots & 0
    \\  \vdots & \vdots & \ddots & \vdots
    \\  0      & 0      & \cdots & a_{nn}
    \end{array}\right]_{n×n}
$

**上三角矩阵**

$A=
    \left[\begin{array}{c}
        a_{11} & a_{12} & \cdots & a_{1n}
    \\  0      & a_{22} & \cdots & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  0      & 0      & \cdots & a_{nn}
    \end{array}\right]_{n×n}
$

**下三角矩阵**

$A=
    \left[\begin{array}{c}
        a_{11} & 0      & \cdots & 0
    \\  a_{21} & a_{22} & \cdots & 0
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{n1} & a_{n2} & \cdots & a_{nn}
    \end{array}\right]_{n×n}
$

**单位上三角矩阵**

$A=
    \left[\begin{array}{c}
        1      & a_{12} & \cdots & a_{1n}
    \\  0      & 1      & \cdots & a_{2n}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  0      & 0      & \cdots & 1
    \end{array}\right]_{n×n}
$

**单位下三角矩阵**

$A=
    \left[\begin{array}{c}
        1      & 0      & \cdots & 0
    \\  a_{21} & 1      & \cdots & 0
    \\  \vdots & \vdots & \ddots & \vdots
    \\  a_{n1} & a_{n2} & \cdots & 1
    \end{array}\right]_{n×n}
$

#### 副对角

副对角矩阵的行列式满足：$|A| = (-1)^{\frac{n(n-1)}{2}} a_{1n}a_{2,n-1}\cdots a_{n1}$

**三角矩阵**

$A=
    \left[\begin{array}{c}
            &        &           & a_{1n}
    \\         &        & a_{2,n-1} &
    \\         &        &           &
    \\  a_{n1} &        &           &
    \end{array}\right]_{n×n}
$

### 希尔伯特（Hilbert ）矩阵

$A=
    \left[\begin{array}{c}
            1           & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n}
    \\\\    \frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1}
    \\\\    \frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2}
    \\\\    \vdots      & \vdots      & \vdots      & \ddots & \vdots
    \\\\    \frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1}
    \end{array}\right]_{n×n}
$

- $a_{ij} = \dfrac{1}{i+j-1}$

### 行阶梯矩阵

$eg:
    \left[\begin{array}{c}
        a_{11} & a_{12} & a_{13} & a_{14} & a_{15}
    \\  0      & a_{22} & a_{23} & a_{24} & a_{25}
    \\  0      & 0      & 0      & a_{34} & a_{35}
    \\  0      & 0      & 0      & 0      & a_{45}
    \end{array}\right]
$

对系数矩阵做**初等行变换**不影响方程组结果。

- 交换两个方程次序
- 数乘某个方程
- 一个方程的$k$倍加到另一个方程上

**性质**

- 行阶梯矩阵的秩就是其非零行数

### 伴随矩阵

$A^*=
    \left[\begin{array}{c}
        A_{11} & A_{21} & \dots  & A_{n1}
    \\  A_{12} & A_{22} & \dots  & A_{n2}
    \\  \vdots & \vdots & \ddots & \vdots
    \\  A_{1n} & A_{2n} & \dots  & A_{nn}
    \end{array}\right]_{n×n}
$

注意$A^*$是矩阵$A$每个元素替换为其代数余子式再转置得到的。

**计算性质**

- $AA^* = A^*A = |A|E$
- $A^* = |A|A^{-1}$
- $|A^*| = |A|^{n-1}$
- $(A^*)^{-1} = (A^{-1})^{*} = \dfrac{A}{|A|}$
- $(A^*)^T = (A^T)^*$
- $(kA)^* = k^{n-1} A^*$
- $(A^*)^* = |A|^{n-2}A$

$r(A^*)=
\begin{cases}
    n, & if \ \ \ r(A)=n
\\  1, & if \ \ \ r(A)=n-1
\\  0, & if \ \ \ r(A)<n-1
\end{cases}
$

### 范德蒙矩阵

$A=
    \left[\begin{array}{c}
        1         & 1         & \cdots & 1
    \\  x_1       & x_2       & \cdots & x_n
    \\  x_1^2     & x_2^2     & \cdots & x_n^2
    \\  \vdots    & \vdots    &        & \vdots
    \\  x_1^{n-1} & x_2^{n-1} &        & x_n^{n-1}
    \end{array}\right]_{n×n}
$

其行列式（**范德蒙行列式**）为$\prod\limits_{1≤j<i≤n} (x_i-x_j)$。

### 对称矩阵

满足$A^T=A$的矩阵。

### 正交

#### 正交向量

若$\vec{a}$与$\vec{b}$正交，则$\vec{a} ⋅ \vec{b} = 0$。

#### 正交矩阵

若$n$阶方阵$A$满足$AA^T=A^TA=E$，则称$A$为**正交矩阵**，简称**正交阵**。

**充要条件**

$A =
    \left[\begin{matrix}
        a_1 & a_2 & \cdots & a_n
    \end{matrix}\right]
$

$A^TA =
    \left[\begin{matrix}
        {a_1}^T \\ {a_2}^T \\ \vdots \\ {a_n}^T
    \end{matrix}\right]
    \left[\begin{matrix}
        a_1 & a_2 & \cdots & a_n
    \end{matrix}\right]
    =
    \left[\begin{matrix}
        {a_1}^T a_1 & {a_1}^T a_2 & \cdots & {a_1}^T a_n
    \\  {a_2}^T a_1 & {a_2}^T a_2 & \cdots & {a_2}^T a_n
    \\  \vdots  & \vdots  & \ddots & \vdots
    \\  {a_n}^T a_1 & {a_n}^T a_2 & \cdots & {a_n}^T a_n
    \end{matrix}\right]
    = E
$

即$\begin{cases}
    {a_i}^T {a_j} = 1 & i=j
\\  {a_i}^T {a_j} = 0 & i≠j
\end{cases}$

$A$是正交阵的充要条件是$A$的列（行）向量都是单位向量，且两两正交。

**正交变换**

若$A$为正交阵，$x$为向量，$Ax$称为正交变换。
正交变换不改变向量的长度。

**性质**

- $A$为正交阵$\,\,⇔\,\, A^T=A^{-1}$
- $A$为正交阵$\,\,⇒\,\, |A|^2 = 1$
- 若$A$为正交阵，则$A^{-1}$也是正交阵
- 若$P$、$Q$为正交阵，则$P×Q$也是正交阵
