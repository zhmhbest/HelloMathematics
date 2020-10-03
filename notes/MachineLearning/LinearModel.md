<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [机器学习：线性模型](./index.html)

## 线性回归

$$f(x) = w^Tx + b$$

$$loss = \mathrm{MeanSquareError}(f, y)$$

## Logistic回归

Logistic回归是一种处理二分类问题的线性模型。

$$f(x) = \mathrm{Sigmoid}(w^Tx + b)$$

- $\mathrm{Sigmoid}(x) = \dfrac{1}{1 + e^{-x}}$，激活函数$\mathrm{Sigmoid}$将$f(x)$挤压到$(0, 1)$。

$$loss
    = \mathrm{BinaryCrossEntropy}(f, y)
    = -\Big(
        y \times \log(f) + (1 - y) \times \log(1-f)
    \Big)
$$

## Softmax回归

Softmax回归是一种处理多分类问题的线性模型。

$$f(x) = \mathrm{Softmax}(w^Tx + b)$$

- $
    \mathrm{Softmax}\left(
        \left[\begin{array}{c}
            x_1 \\ x_2 \\ \vdots \\ x_n
        \end{array}\right]
    \right)
    = \dfrac{1}{\sum_{i=1}^{n}e^{x_i}} \left[\begin{array}{c}
        e^{x_1} \\ e^{x_2} \\ \vdots \\ e^{x_n}
    \end{array}\right]
$

$$loss
    = \mathrm{CategoricalCrossEntropy}(f, y)
$$
