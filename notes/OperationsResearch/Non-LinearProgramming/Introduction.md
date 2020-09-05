<link rel='stylesheet' href='../../../style/index.css'>
<script src='../../../style/index.js'></script>

# [非线性规划：导论](../index.html)

如果目标函数或约束条件中含有非线性函数，就称这种问题为非线性规划问题。

## 数学模型

$$
\begin{cases}
    \min f(x)
\\  h_i(x) = 0, i=1,2,\cdots,m
\\  g_j(x) ≥ 0, j=1,2,\cdots,l
\end{cases}
$$

- $x$：$n$维欧氏空间$E^n$中的向量（点）
- $f(x)$：目标函数
- $h_i(x)=0$、$g_j(x)≥0$：约束条件

需使目标函数极大化时，只需使其负值极小化，即

$$\max f(x) = - \min [-f(x)]$$
