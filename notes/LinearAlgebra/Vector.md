<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [向量（Vector）](./index.html)

### 定义

>[向量究竟是什么？](https://www.bilibili.com/video/av5987715/)

具有$n$个相互独立的维度的对象。

**向量的模**：向量的长度。记作$|\vec{a}|$或$\|\vec{a}\|$。

**单位向量**：长度为1的向量。

### 计算

- $\vec{x} = (x_1,x_2,\cdots,x_n)^T$
- $\vec{y} = (y_1,y_2,\cdots,y_n)^T$

| 运算 | 例子 |
| - | - |
| **加减** | $\vec{x}±\vec{y}=(x_1±y_1,\cdots,x_n±y_n)^T$
| **数乘** | $λ\vec{x}=(λx_1,\cdots,λx_n)^T$
| **内积** | $\vec{x} \bullet \vec{y} = \vert\vec{x}\vert ⋅ \vert\vec{y}\vert \cosθ = x^Ty = y^Tx = x_1y_1 + x_2y_2 + \cdots + x_ny_n$
| **外积** | $\vert\vec{a} ⋅ \vec{b}\vert = \vert\vec{a}\vert ⋅ \vert\vec{b}\vert \sinθ$
| **模**   | $\vert\vec{a}\vert = \|\vec{a}\| = \sqrt{\vec{a} \bullet \vec{a}} = \sqrt{x_1^2 + x_2^2 + \cdots + x_n^2}$
