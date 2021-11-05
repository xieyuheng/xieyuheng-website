### 简介

- 姓名: 谢宇恒
- 出生: 一九九二年
- 邮箱: xyheme@gmail.com
- 诸项目: [github.com/xieyuheng](https://github.com/xieyuheng)
- 主页: [xieyuheng.com](https://xieyuheng.com)

### 学历

- 2015: 学士 数学与应用数学 中山大学

### 工作经历

- 2019-12 - 2021-11:
  - 公司: 风变科技, 深圳
  - 贡献:
    - 作为程序语言工程师，设计并研发创作交互式课程所用的语言
    - 开创了交互式课程创作平台「课灵小馆」，成为了公司新的主打产品
    - 开创「思索」项目，以探索「主动回顾」和「间隔重复」等等认知心理学技术在教学中的应用
- 2019-06 - 2019-08:
  - 公司: 特航航空, 深圳
  - 贡献:
    - 函数式编程内部培训 (typeclass, monad)
    - 第三方数据同步 (scala, akka stream, postgres)
    - 国际酒店 API (scala, akka stream, akka http)
    - Ontology based 数据整合方案设计与实现
    - Propagator model based 爬虫框架设计
- 2018-11 - 2019-02:
  - 公司: 长春理想科技研发部, 北京
  - 贡献:
    - 数据挖掘算法 研究, 设计与实现 (python, pandas, numpy) <br>
    - 主要研究题目包括:
      - 异常检测 (anomaly detection)
      - 根因分析 (root cause analysis)
- 2018-03 - 2018-05:
  - 公司: inblockchain -- pxn.one, 北京
  - 贡献:
    - web 后端 (elixir, phoenix (web framework))
    - GraphQL API (postgresql, absinthe-graphql)
- 2017-10 - 2018-01:
  - 公司: ricequant.com, 深圳
  - 贡献:
    - 爬虫 (python, scrapy, mongodb)
    - web 后端 (python, flask)
    - 量化交易策略 (python, pandas, numpy)

### 授课经历

- 实验性的汇编语言实验 中山大学 2015
  ([主页](http://the-little-language-designer.github.io/cicada-nymph/course/contents.html))
  ([讨论小组](https://github.com/the-little-language-designer))

### 个人项目

#### 拓扑与几何建模

- [cell-complex](https://github.com/xieyuheng/cell-complex) -- Libraries and tools for topological and geometric modeling
- 2019-05-08: A Recursive Combinatorial Description of cell-complex
  ([paper](http://inner-universe.surge.sh/paper/a-recursive-combinatorial-description-of-cell-complex))

#### 程序语言设计

- 2016-06-14: Function compose, Type cut, and The algebra of logic
  ([paper](https://xieyuheng.github.io/writing/function-compose-type-cut.html))
  ([pdf](http://xieyuheng.github.io/paper/function-compose-type-cut.pdf))
  ([demo](https://xieyuheng.github.io/writing/function-compose-type-cut--demo))
  - ICFP, 2016, 日本奈良

#### 更多的程序语言设计 (为应聘程序语言相关职位而列举)

按照从最近到过去的时间顺序排列

- [study](https://github.com/xieyuheng/study)
  - 程序语言实现技术的总结 <br>
    包括 bidirectional type checking <br>
    还有 normalization by evaluation (用于实现 dependent type) <br>
    等等
- [partech](https://github.com/xieyuheng/study/blob/master/src/main/scala/xieyuheng/partech)
  - parser generator 框架 <br>
    目前所用的是 Earley parsing 算法 <br>
    可以 在 O(n^3) 复杂度内 处理任意的 上下文无关语法
  - [cicadoidea/partech](https://github.com/cicadoidea/partech)
    - 同一个 parser generator 框架 和 Earley parsing 算法 <br>
      为 js 而重新实现
- [cat](https://github.com/xieyuheng/cat)
  A categorical semantics library in Agda.
  - 为类型系统提供范畴语义
- [cell-complex](https://github.com/xieyuheng/cell-complex)
  Libraries and tools for topological and geometric modeling.
  - 包括一篇形式化 cell-complex 递归结构的论文 <br>
    (cell-complex 是图论在高维度的推广)
  - 包括一些整系数矩阵的算法 还有同调群的计算 <br>
    代数拓扑与几何建模 为形式化代数拓扑做准备 <br>
    研究同伦类型论的缺点
- [tartlet](https://github.com/xieyuheng/tartlet)
  dependently-typed language (baking little pie) in javascript
- [logic-db](https://github.com/xieyuheng/logic-db)
  combine logic programming and database in js
  - 嵌入在 js 里的类似 prolog 的逻辑式语言
- [cicada-rs](https://github.com/xieyuheng/cicada-rs)
  用 rust 实现的逻辑式语言解释器
  - [cicada-notebook](https://github.com/xieyuheng/cicada-notebook)
    - 这个逻辑式语言的 web 前端 <br>
      核心是用 rust 实现的编译到 wasm 然后在 js 里调用解释器
- [jojo-rs](https://github.com/xieyuheng/cicada-rs/blob/master/jojo/README.md)
  a dynamic language uses S-expression as meta syntax
  - 用 rust 实现的类似 lisp 的动态语言解释器 <br>
    包括一些数值积分程序的例子
- [tangle-rs](https://github.com/xieyuheng/tangle-rs)
  a collection of tools to do tangle in rust
  - 用 rust 写的文学式编程工具 <br>
    包括对 markdown 和 emacs org-mode 的支持
- [exo](https://github.com/xieyuheng/exo)
  logic programming in elixir
  - 在 elixir 中嵌入的类似 minikanren 的逻辑式语言
- 探索类 forth 语言解释器的实现方式, 包含一系列在各个语言中的实现 <br>
  所谓 "类 forth 语言解释器" 是一种栈式虚拟机 <br>
  又叫做 threaded code interpreter (线串码解释器) <br>
  - [jojo in cpp](https://github.com/xieyuheng/jojo-history/tree/master/in-cpp)
  - [jojo in c](https://github.com/xieyuheng/jojo-history/tree/master/in-c)
  - [jojo in nodejs](https://github.com/xieyuheng/jojo-history/tree/master/in-nodejs)
  - [jojo in py](https://github.com/xieyuheng/jojo-history/tree/master/in-py)
- [cicada-baremetal](https://github.com/xieyuheng/cicada-baremetal)
  - 用汇编实现的 类 forth 语言解释器 <br>
    包括汇编写的 bootloader <br>
    可以 dd 到 usb 上然后从 usb 让 boot 起来 <br>
    包括简单 text mode 的驱动 还有简单的键盘驱动
- [sequent1](https://github.com/xieyuheng/sequent1)
  - 用 scheme 实现的 dependent type language 的解释器 <br>
    用于 ICFP scheme workshop 的演讲
- [cicada-nymph](https://github.com/xieyuheng/cicada-nymph)
  a forth like language written in fasm assembler
  - 用汇编实现的 类 forth 语言解释器 <br>
    用于大学时期教学使用的
    - 具体的课程内容 <br>
      实验性的汇编语言实验 中山大学 2015
      ([主页](http://the-little-language-designer.github.io/cicada-nymph/course/contents.html))
      ([讨论小组](https://github.com/the-little-language-designer))
- [xiaolinguist](https://github.com/xieyuheng/xiaolinguist)
  - 汇编实现的 类 forth 语言的解释器 <br>
    包括一个三染色算法的垃圾回收器
