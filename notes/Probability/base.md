<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [概率论：基础](./index.html)

[TOC]

## 排列组合

**排列数**

$$\mathop{A}_{n}^{k} = \dfrac{n!}{(n-k)!}$$

**组合数**

$$\mathop{C}_{n}^{k} = \dfrac{\mathop{A}_{n}^{k}}{k!} = \dfrac{n!}{k!(n-k)!}$$

## 事件

>$A$、$B$为事件、$S$为样本空间。

### 基本事件运算

- $A∩B  = \{x \bold{\ |\ } x∈A {\ \ and \ \ } x∈B\} = A ⋅ B = AB$
- $A∪B = \{x \bold{\ |\ } x∈A {\ \ or \ \ } x∈B\}$
- $A-B  = \{x \bold{\ |\ } x∈A {\ \ and \ \ } x∉B\}$
- $\overline{A} = S-A$
- $\bigcap\limits_{i=1}^{n} A_i$：所有$A_i$必须同时发生
- $\bigcup\limits_{i=1}^{n} A_i$：所有$A_i$至少有一个发生。

### 事件类型

| 事件类型 | $A$与$B$关系 |
| :-: | :- |
| 互斥事件 | $A∩B=∅$
| 对立事件 | $A∩B=∅$、$A∪B=S$记作$\overline{A}=B$
| 相同事件 | $A⊂B$、$A⊃B$则$A=B$

### 运算定律

- 交换律
  - $A∩B=B∩A$
  - $A∪B=B∪A$
- 结合律
  - $(A∩B)∩C=A∩(B∩C)$
  - $(A∪B)∪C=A∪(B∪C)$
- 分配律
  - $A∩(B∪C)=(A∩B)∪(A∩C)$
  - $A∪(B∩C)=(A∪B)∩(A∪C)$
- 对偶律
  - $\overline{A∩B}=\overline{A}∪\overline{B}$
  - $\overline{A∪B}=\overline{A}∩\overline{B}$
- 对偶律推广
  - $\bigcap\limits_{i=1}^{n} A_i = \bigcup\limits_{i=1}^{n} \overline{A_i}$
  - $\bigcup\limits_{i=1}^{n} A_i = \bigcap\limits_{i=1}^{n} \overline{A_i}$

## 概率

当试验的次数增加时，随机事件$A$发生的频率的稳定值$p$称为概率，记为$P(A)=p$。

### 基本性质

- **非负性**
  - $P(A)≥0$
  - $P(∅)=0$
- **规范性**
  - $P(S)=1$
  - $P(A)=1-P(\overline{A})$
- **可加性**
  - 若事件间两两互斥则$P(\bigcup\limits_{i=1}^{n} A_i) = \sum\limits_{i=1}^{n} P(A_i)$

### 运算性质

- $P(A∪B) = P(A) + P(B) - P(AB)$
  - $1-P(A∪B) = P(\overline{A∪B}) = P(\overline{A}∩\overline{B})$
  - $1-P(A∩B) = P(\overline{A∩B}) = P(\overline{A}∪\overline{B})$
- $P(A-B)=P(A\overline{B})=P(A)-P(AB)$
  - $B⊂A \ \ ⇒ \ \ P(A-B)=P(A)-P(B)$
- 若$A$与$B$互斥$\ \ ⇒ \ \ P(AB)=P(A) \cdot P(B)$

## 古典概型

样本空间$S$中样本点有限（**有限性**），出现每一个样本点的概率相等（**等可能性**），称这种试验为等可能概型（**古典概型**）。

#### 例

在一个箱子中共有7个球，3个黑球，四个白球

（1）**无放回**抽取3个球，取得两黑一白（事件$A$）的概率。

$$P(A)= \dfrac
    {\mathop{C}_{3}^{2} \mathop{C}_{4}^{1}}
    {\mathop{C}_{7}^{3}}
    = \dfrac{12}{35}
$$

（2）**有放回**抽取3个球，取得两黑一白（事件$B$）的概率。

$$P(B)=
    \mathop{C}_{3}^{2}
    ×
    \left( \dfrac{3}{7} \right)^2
    ×
    \dfrac{4}{7}
$$
