<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [导数](../index.html)

[TOC]

## 导数定义

## 求导方法

### 公式法

### 复合求导

## 导数应用

>**驻点**：导数值等于零的点。

### 单调性

### 极值

### 最值

## 导数与微分

$y = y(x)$

- $y'(x)
    = \dfrac{
        {\rm d}y
    }{
        {\rm d}x
    }
$
- $y''(x)
    = \dfrac{
        {\rm d} (\dfrac{ {\rm d} y}{ {\rm d}x})
    }{
        {\rm d}x
    } = 
    \dfrac{ {\rm d}^2y}{ {\rm d}x^2}
$
- $x'(y)
    = \dfrac{
        {\rm d}x
    }{
        {\rm d}y
    }
    = \dfrac{1}{y'(x)}
$
- $x''(y)
    = \dfrac{
        {\rm d} (\dfrac{ {\rm d}x}{ {\rm d}y})
    }{
        {\rm d}y
    }
    = \dfrac{
        {\rm d} (\dfrac{1}{y'(x)})
    }{
        {\rm d}x
    }
    ⋅
    \dfrac{
        {\rm d} x
    }{
        {\rm d}y
    }
    = -\dfrac{y''(x)}{[y'(x)]^3}
$

## *Taylor*展开

$$f(x) = \dfrac{f(x_0)}{0!} + \dfrac{f'(x_0)}{1!}(x-x_0) + \dfrac{f''(x_0)}{2!}(x-x_0)^2 + \cdots + \dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n + R_n(x)$$

## 偏导数

偏导数就是关于其中一个变量的导数而保持其它变量恒定不变。

$z = f(x,y)$

- $f''_{xx}= \dfrac{∂(\dfrac{∂z}{∂x})}{∂x} = \dfrac{∂^2z}{∂x^2}$
- $f''_{yy}= \dfrac{∂(\dfrac{∂z}{∂y})}{∂y} = \dfrac{∂^2z}{∂y^2}$
- $f''_{xy}= \dfrac{∂(\dfrac{∂z}{∂x})}{∂y} = \dfrac{∂^2z}{∂x∂y}$
- $f''_{yx}= \dfrac{∂(\dfrac{∂z}{∂y})}{∂x} = \dfrac{∂^2z}{∂y∂x}$

## 梯度

### 方向导数

若函数$f(x,y,z)$在点$P_0(x_0,y_0,z_0)$处沿方向$l$（方向角：$α$、$β$、$γ$）存在下列极限

$$\lim_{ρ→0} \dfrac{Δf}{ρ}
    = \lim_{ρ→0} \dfrac{
        f(x_0+Δx,y_0+Δy,z_0+Δz) - f(x_0,y_0,z_0)
    }{ρ}
    = \dfrac{Δf}{Δl}
$$

- $ρ = |Δ\vec{l}| = \sqrt{(Δx)^2+(Δy)^2+(Δz)^2}$
  - $Δx = ρ\cos α$
  - $Δy = ρ\cos β$
  - $Δz = ρ\cos γ$

则称$\dfrac{Δf}{Δl}$为函数在点$P_0$处的**方向导数**。且有

$$\dfrac{∂f}{∂l}
    = \dfrac{∂f}{∂x}\cos α
    = \dfrac{∂f}{∂y}\cos β
    = \dfrac{∂f}{∂z}\cos γ
$$

### 梯度

令$\vec{G} = (\dfrac{∂f}{∂x}, \dfrac{∂f}{∂y}, \dfrac{∂f}{∂z})$，$\vec{l}_0 = (\cos α, \cos β, \cos γ)$，当$\vec{G}$与$\vec{l}_0$方向一直时，变化率最大，此时$\vec{G}$称为函数$f$在$P_0$处的的**梯度（Gradient）**，记作

$$gradf = (\dfrac{∂f}{∂x}, \dfrac{∂f}{∂y}, \dfrac{∂f}{∂z}) = ▽f$$

- 函数沿**梯度**方向增加（上升）最快
- 函数沿**负梯度**方向减小（下降）最快

