# Professional_JavaScript_for_Web_Developers_4th_Edition
Example for Professional JavaScript for Web Developers，4th Edition


```txt
1. ECMAScript 版本
        ECMAScript 不同的版本以 “edition”表示（也就是描述特定实现的ECMA-262 的版本）。
    ECMA-262 第 10 版，发布于 2019 年 6 月。

        ECMA-262 第 1 版本质上跟网景 JavaScript1.1 相同。

        ECMA-262 第 2 版只是做了一些编校工作，主要是为了更新之后严格符合 ISO/IEC-262的
    要求，并没有增减或改变任何特性。

        ECMA-262 第 3 版第一次真正对这个标准进行更新，更新了字符串处理、错误定义和数值
    输出。此外还增加了对正则表达式、新的控制语句、try-catch 异常处理的支持，以及为了更好
    地让标准国际化所作的少量修改。

        ECMA-262 第 4 版是对这门语言的一次彻底修订。几乎在第 3 版基础上完全定义了一门
    新的语言。第 4 版本包括强类型变量、新语句和数据结构、真正的类和经典的继承，以及操作数据
    的新手段。
        与此同时，TC39 委员会的一个子委员会也提出了另一份提案，叫做“ECMAScript 3.1”，
    只对语言进行少量的改进。第 4 版对这门语言跳跃太大，3.1 获得了支持。第 4 版被放弃发布。

        ECMA-262 第 5 版，也就是 ECMAScript 3.1，于 2009 年 12 月 3 日正式发布。第 5 版
    致力于厘清第 3 版存在的歧义，添加了新功能。包括原生的解析和序列化 JSON 数据的 JSON 对象、
    方便继承和高级属性定义的方法，以及新增的增强 ECMAScript 引擎解释和执行代码能力的严格模式。

        ECMA-262 第 6 版，俗称 ES6、ES2015，于 2015 年 6 月发布。这一版本包含了大概这个规范
    有史以来最重要的一批增强特性。ES6 正式支持了 类、模块、迭代器、生成器、箭头函数、期约、
    反射、代理和众多新的数据类型。

        ECMA-262 第 7 版，俗称 ES7 或 ES2016，于 2016 年 6 月发布。这次发布只包含少量语法
    层面的增强，如 Array.prototype.includes 和指数操作符。

        ECMA-262 第 8 版，俗称 ES8 或 ES2017，完成于 2017 年 6 月发布。增加了异步函数
    （aysnc/await）、SharedArrayBuffer 以及 Atomics API，以及 Object.values()/
    Object.entries()/Object.getOwnPropertyDescriptors()和字符串填充方法，另外明确
    支持对象字面量最后的逗号。

        ECMA-262 第 9 版，俗称 ES9、ES2018，发布于 2018 年 6 月。这次修订包含异步迭代、
    剩余和扩展属性、一组新的正则表达式特性、Promise、finally（），以及模板字面量修订。

        ECMA-262 第 10 版，俗称 ES10、ES2019，发布于 2019 年 6 月。这次修订增加了
    Array.prototype.flat()/flatMap、String.prototype.trimStart()/trimEnd()、
    Object.fromEntries() 方法，以及 Symbol.prototype.description 属性，明确定义了
    Function.prototype.toString() 的返回值并固定了 Array.prototype.sort() 的顺序。

        ECMA-262 第 11 版，俗称 ES11，ES2020，发布于 2020 年 6 月。这次修订增加了
    String.prototype.matchAll()、BigInt 数据类型、Promise.allSettled、globalThis
    指向全局变量、 for-in 增强、Optional Chaining 可访问操作链、Nullish coalescing Operator
    空值合并运算符、import.meta

        ECMA-262 第 12 版，俗称 ES12，ES2021，发布于 2021 年 6 月。这次修订增加了
    String.prototype.replaceAll、Promise.any、WeakRefs 弱引用 WeakMap 和 WeakSet、
    Logical Assignment Operators 逻辑于赋值运算符、Numeric separators 新增数字下画线

        ECMA-262 第 13 版，俗称 ES13，ES2022，发布于 2022 年 6 月份。这次新增了
    Class Fields (Private instance methods and accessors, 
    Class Public Instance Fields & Private Instance Fields, 
    Static class fields and private static methods)类字段（私有实例方法和访问器，
    类公共实例字段和私有实例字段，静态类字段和私有静态方法）、RegExp Match Indices
    RegExp 匹配索引、Top-level await 顶级 await、Ergonomic brand checks for Private Fields
    私有字段检查、.at() 函数、Accessible Object.prototype.hasOwnProperty 访问属性
    Object.hasOwn()、Class Static Block 类的静态模块、Error Cause 错误捕获

        ECMA-262 第 14 版，俗称 ES14，ES2023，发布于 2023 年 6 月份。这次新增了
    Array.prototype.findLast()/findLastIndex()、#! CLI 环境执行、Symbol 作为 WeakMap 的key、
    Array.prototype.toReversed()/toSorted()/toSpliced()/with()

        ECMA-262 第 15 版，俗称 ES15，ES2024，发布于 2024 年 6 月份。这次新增了
    String.prototype.isWellFormed()/toWellFormed()、Atomics.waitAsync 异步原子等待、
    RegExp v flag with set notation + properties of strings、ArrayBuffers 构造函数扩展、
    Promise.withResolvers 返回 Promise 以及方便的公开的 resolution 和 rejection 函数、
    Map.groupBy 数据分组、Object.groupBy 数据分组、ArrayBuffer.prototype.transfer()
    /transferToFixedLength()/detached()


        ECMA-262 第 16 版，俗称 ES16，ES2025，发布于 2025 年 6 月，即将发布
```