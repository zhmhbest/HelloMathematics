<link rel='stylesheet' href='../../style/index.css'>
<script src='../../style/index.js'></script>

# [机器学习：强化学习](./index.html)

## 基本概念

### 常见强化学习算法

- **Value-based**：Learnin a Critic
  - Q-Learning
  - DQN（Deep Q Network）
- **Policy-based**：Learnin an Actor
  - PG（Policy Gradients）
- **Module-based**
  - Module based RL
- **Actor Critic**
  - A3C（Asynchronous Advantage Actor-Critic）

### 基本要素

- $Agent$：智能体
- $State$：环境状态
- $Action$：在当前环境状态下智能体所能执行的决策
- $Reward$：执行决策后获得的奖励，奖励可以为负

### 探索—利用困境（Explore-Exploit dilemma）

- **仅探索**能很好的估计每种情况的奖赏，却会失去选择最优情况的机会；
- **仅利用**不能很好地估计估计每种情况的期望奖赏，很可能经常选不到最优情况。

$$\mathrm{times}(try) = \mathrm{times}(use) + \mathrm{times}(explore)$$

探索和利用是矛盾的，因为**尝试次数**有限，加强了一方则会自然消弱另一方。

算法中一般使用$\epsilon=\dfrac{\mathrm{times}(explore)}{\mathrm{times}(try)}$或$\epsilon\rule[2pt]{1mm}{0.01em}greedy=\dfrac{\mathrm{times}(use)}{\mathrm{times}(try)}$来平衡探索和利用。
若初始$\epsilon$非常大，则通常让$\epsilon=\dfrac{1}{\sqrt{\mathrm{times}(try)}}$，即使$\epsilon$随着探索次数的增加而减小。

## Q-Learning

>[Flappy Bird](https://enhuiz.github.io/flappybird-ql/)

### Q-Table

| $States$ | $Action_1$ | $Action_2$ | $\cdots$ | $Action_*$ |
| :-: | :-: | :-: | :-: | :-: |
| $S_0$    | $score_{01}$ | $score_{02}$ | $\cdots$ | $score_{0*}$ |
| $S_1$    | $score_{11}$ | $score_{12}$ | $\cdots$ | $score_{1*}$ |
| $\vdots$ | $\vdots$     | $\vdots$     |          | $\vdots$     |
| $S_*$    | $score_{*1}$ | $score_{*2}$ | $\cdots$ | $score_{**}$ |

- 在状态$S_i$时，执行$Action_j$得到的$score_{ij}$越高，智能体（Agent）就越大概率地采取这个$Action$。
- Q表是经过学习之后的结果，学习并不断更新Q表的过程就是Q Learning。

### Update Q-Table

$$
    Q(s \xrightarrow{a} s') =
        (1-\eta) Q(s \xrightarrow{a} s') +
        \eta \left[
            R(s \xrightarrow{a} s') +
            \gamma  \max_{a' } Q(s'  \xrightarrow{a' } s'' )
        \right]
$$

- $\eta$：学习速率（learning rate），$0<\eta<1$
- $\gamma$：折扣因子（discount factor），$0<\gamma<1$，对未来奖励的衰减，越大越重视以往经验
- $s \xrightarrow{a} s'$：在$State=s$下采取$Action=a$到达$State=s'$
- $Q(\cdots)$：根据**历史**情况算出的$Reward$
- $R(\cdots)$：根据**实际**情况得到的$Reward$

## DQN

Q-Learning使用表格来存储$Q(s,a)$，但该方法在很多现实问题上是不可行的（状态过多将会导致表格的“维度爆炸”）。

### 价值函数近似（Value Function Approximation）

该方法就是为了解决状态空间过大的问题，用一个函数来近似表示$Q(s, a)$

$$Q(s, a) = f(s, a, w)$$

## Policy Gradients

>待补充

## A3C

>待补充