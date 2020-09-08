<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [生成式对抗网络](./index.html)

[TOC]

>[Generative Adversarial Nets](https://arxiv.org/pdf/1406.2661.pdf)

## GAN

### 算法

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

## 相关衍生算法

>[Gan Zoo](https://github.com/hindupuravinash/the-gan-zoo)

### DCGAN

>[Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks](https://arxiv.org/abs/1511.06434.pdf)

将卷积神经网络应用到了GAN中。通过**反卷积层**进行放大操作。帮助我们将低分辨率图像转换为高分辨率图像。

### CGAN

>[Conditional Generative Adversarial Network](https://arxiv.org/abs/1411.1784)

原始GAN从随机噪声生成数据。这意味着可以在狗图像上训练它，并且它将生成更多的狗图像。也可以在猫图像上训练它，在这种情况下，它将生成猫图像。但如果尝试同时在狗和猫的图像上训练它，则会产生模糊的混血儿。CGAN旨在通过告诉生成器仅生成特定类别的图像来解决此问题。

### CycleGAN

>[Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks](https://arxiv.org/abs/1703.10593v6)

CycleGAN旨在解决一个称为图像到图像转换的问题。

### 

### InfoGAN

>[Interpretable Representation Learning by Information Maximizing Generative Adversarial Nets](https://arxiv.org/abs/1606.03657v1)

普通的GAN存在无约束、不可控、噪声信号很难解释等问题。InfoGAN让网络学到了可解释的特征，网络训练完成之后，我们可以通过设定输入生成器的隐含编码来控制生成数据的特征。
