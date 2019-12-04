### 简介

- 姓名: 谢宇恒
- 出生: 一九九二年
- 邮箱: xyheme@gmail.com
- 诸项目: [github.com/xieyuheng](https://github.com/xieyuheng)
- 主页: [xieyuheng.github.io](https://xieyuheng.github.io)

### 学历

- 2015: 学士 数学与应用数学 中山大学

### 程序语言设计项目经历

(大致按照从最近到过去的时间顺序排列)

- [study](https://github.com/xieyuheng/study)
  - 这是一些程序语言实现技术的总结 <br>
    包括 bidirectional type checking <br>
    还有 normalization by evaluation (用于实现 dependent type) <br>
    等等
- [partech](https://github.com/xieyuheng/study/blob/master/src/main/scala/xieyuheng/partech)
  - 这是一个 parser generator 框架 <br>
    目前所用的是 Earley parsing 算法 <br>
    可以 在 O(n^3) 复杂度内 处理任意的 上下文无关语法
  - [cicadoidea/partech](https://github.com/cicadoidea/partech)
    - 同一个 parser generator 框架 和 Earley parsing 算法 <br>
      为 js 而重新实现
- [cat](https://github.com/xieyuheng/cat)
  A categorical semantics library in Agda.
  - 这是为类型系统提供范畴语义而写的
- [cell-complex](https://github.com/xieyuheng/cell-complex)
  Libraries and tools for topological and geometric modeling.
  - 包括一篇形式化 cell-complex 递归结构的论文 <br>
    (cell-complex 是图论在高维度的推广)
  - 包括一些整系数矩阵的算法 还有同调群的计算 <br>
    这算是 代数拓扑与几何建模 <br>
    是我为以我的方式形式化代数拓扑做准备的 <br>
    想要研究的是同伦类型论的缺点
- [tartlet](https://github.com/xieyuheng/tartlet)
  dependently-typed language (baking little pie) in javascript
- [logic-db](https://github.com/xieyuheng/logic-db)
  combine logic programming and database in js
  - 这是一个嵌入在 js 里的类似 prolog 的逻辑式语言
- [cicada-rs](https://github.com/xieyuheng/cicada-rs)
  这是用 rust 实现的逻辑式语言解释器
  - [cicada-notebook](https://github.com/xieyuheng/cicada-notebook)
    - 这是这个逻辑式语言的 web 前端 <br>
      语言是用 rust 实现的编译到 wasm 然后在 js 里调用解释器
- [jojo-rs](https://github.com/xieyuheng/cicada-rs/blob/master/jojo/README.md)
  a dynamic language uses S-expression as meta syntax
  - 这是一个用 rust 实现的类似 lisp 的动态语言解释器 <br>
    包括一些数值积分程序的例子
- [tangle-rs](https://github.com/xieyuheng/tangle-rs)
  a collection of tools to do tangle in rust
  - 这是一个用 rust 写的文学式编程工具 <br>
    包括对 markdown 和 emacs org-mode 的支持
- [exo](https://github.com/xieyuheng/exo)
  logic programming in elixir
  - 这是在 elixir 中嵌入的类似 minikanren 的逻辑式语言
- [jojo in cpp](https://github.com/xieyuheng/jojo-history/tree/master/in-cpp)
  - 这是用 cpp 实现的 类 forth 语言解释器 <br>
    所谓 "类 forth 语言解释器" 是一种栈式虚拟机 <br>
    又叫做 threaded code interpreter (线串码解释器) <br>
- [jojo in c](https://github.com/xieyuheng/jojo-history/tree/master/in-c)
  - 这是用 c 实现的 类 forth 语言解释器
- [jojo in nodejs](https://github.com/xieyuheng/jojo-history/tree/master/in-nodejs)
  - 这是用 nodejs 实现的 类 forth 语言解释器
- [jojo in py](https://github.com/xieyuheng/jojo-history/tree/master/in-py)
  - 这是用 python 实现的 类 forth 语言解释器
- [cicada-baremetal](https://github.com/xieyuheng/cicada-baremetal)
  - 这是用汇编实现的 类 forth 语言解释器 <br>
    包括汇编写的 bootloader <br>
    可以 dd 到 usb 上然后从 usb 让 boot 起来 <br>
    包括简单 text mode 的驱动 还有简单的键盘驱动
- [sequent1](https://github.com/xieyuheng/sequent1)
  - 这是用 scheme 实现的 dependent type language 的解释器 <br>
    用于 ICFP scheme workshop 的演讲
- [cicada-nymph](https://github.com/xieyuheng/cicada-nymph)
  a forth like language written in fasm assembler
  - 用汇编实现的 类 forth 语言解释器 <br>
    用于我大学时期教学使用的
    - 具体的课程内容 <br>
      实验性的汇编语言实验 中山大学 2015
      ([主页](http://the-little-language-designer.github.io/cicada-nymph/course/contents.html))
      ([讨论小组](https://github.com/the-little-language-designer))
- [xiaolinguist](https://github.com/xieyuheng/xiaolinguist)
  - 这是汇编实现的 类 forth 语言的解释器 <br>
    包括一个三染色算法的垃圾回收器
