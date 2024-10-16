console.log(`

    7.2.1 可迭代协议

        实现 Iterable 接口（可迭代协议）要求同时具备两种能力：支持迭代的自我识别能力和创建实现
    Iterator 接口的对象的能力。在 ECMAScript 中，这意味着必须暴露一个属性作为“默认迭代器”，而
    且这个属性必须使用特殊的 Symbol.iterator 作为键。这个默认迭代器属性必须引用一个迭代器工厂函数，
    调用这个工厂函数必须返回一个新迭代器。
        很多内置类型都实现了 Iterable 接口：
        · 字符串
        · 数组
        · 映射
        · 集合
        · arguments 对象
        · NodeList 等 DOM 集合类型


        实际写代码过程中，不需要显式调用这个工厂函数来生成迭代器。实现可迭代协议的所有类型都会
    自动兼容接收可迭代对象的任何语言特性。接收可迭代对象的原生语言特性包括：
        · for-of 循环
        · 数组结构
        · 扩展操作符
        · Array.from()
        · 创建集合
        · 创建映射
        · Promise.all() 接收由期约组成的可迭代对象
        · Promise.race() 接收由期约组成的可迭代对象
        · yield* 操作符，在生成器中使用
        这些原生语言结构会在后台调用提供的可迭代对象的这个工厂函数，从而创建一个迭代器
`);
