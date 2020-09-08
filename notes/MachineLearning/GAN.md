<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [生成式对抗网络](./index.html)

[TOC]

## 算法

```flow
initialize=>operation: 初始化Generator和Discriminator

sub_iteration1=>operation: 固定Generator，更新Discriminator
使Discriminator可以判断生成数据与真实数据的符合程度

sub_iteration2=>operation: 固定Discriminator，更新Generator
提升Generator生成数据的真实程度

initialize()->sub_iteration1()->sub_iteration2
```

&nbsp;
$D(x)=\mathrm{Discriminator}(x)$
$G(x)=\mathrm{Generator}(x)$

在每次迭代中

- *Discriminator*
  - *Step1*: 读出一批次数据，$\{ x_1, x_2, \dots, x_m \}$
  - *Step2*: 通过*Guess Distribution*等方法产生噪点，$\{ z_1, z_2, \dots, z_m \}$
  - *Step3*: 从*Generator*产生数据$\{ \tilde{x}_1, \tilde{x}_2, \dots, \tilde{x}_m \}, \tilde{x}_i = G(z_i)$
  - *Step4*: 更新*Discriminator*参数$θ_d$以最大化$\tilde{V}$
    - $\tilde{V} = \frac{1}{m}\sum_{i=1}^{m} \log D(x_i) + \frac{1}{m} \sum_{i=1}^{m}\log (1-D(\tilde{x}_i))$
    - $θ_d ← θ_d + η▽\tilde{V}(θ_d)$
- *Generator*
  - *Step1*: 产生一组新的噪点，$\{ z_1, z_2, \dots, z_m \}$
  - *Step2*: 更新*Generator*参数$θ_g$以最大化$\tilde{V}$
    - $\tilde{V} = \frac{1}{m}\sum_{i=1}^{m} \log D(G(z_i))$
    - $θ_g ← θ_g + η▽\tilde{V}(θ_g)$
