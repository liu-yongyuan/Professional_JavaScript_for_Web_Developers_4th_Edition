import { logSpace } from "../../lib/utils.js";

console.log(`
    
    3.4.7 Symbol 类型

        Symbol（符号）是ECMAScript 6 新增的数据类型。符号是原始值，
    且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标志符，
    不会发生属性冲突的危险。
        尽管听起来跟私有属性有点类似，但符号并不是为了提供私有属性的行为
    才增加的。相反，符号是用来创建唯一记号，进而用作非字符串形式的对象属性
    
    `);
logSpace();

console.log(`
    
        1、符号的基本用法
        符号需要使用 Symbol() 函数初始化。因为符号本身是原始类型，
    所以 typeof 操作符对符号返回 symbol。

    `);

let sym = Symbol();
console.log(typeof sym); // symbol

console.log(`

        调用 Symbol 函数时，也可以传入一个字符串参数作为符号的描述
    将来可以通过这个字符串来调试代码。但是这个字符串参数与符号定义
    或标识完全无关：

    `);
let genericSymbol = Symbol();
let otherGenericSymbol = Symbol();

let fooSymbol = Symbol("foo");
let otherFooSymbol = Symbol("foo");
console.log(genericSymbol == otherGenericSymbol);
console.log(fooSymbol == otherFooSymbol);

console.log(`
    
        按照规范，你只要创建 Symbol() 实例并将其用作对象
    新属性，就可以保证它不会覆盖已有的对象属性，无论是符号
    属性还是字符串属性。

    `);
console.log(genericSymbol);
console.log(fooSymbol);
console.log("Symbol() 函数不能用作构造函数，与 new 关键字一起使用。");

logSpace();

console.log(`
    
        2、使用全局符号注册表
        如果运行时的不同部分需要共享和重用符号实例，
    那么可以用一个字符串作为键，在全局符号注册表中创建并重用符号。

    `);
let fooGlobalSymbol = Symbol.for("foo");
// Symbol(foo) false
console.log(fooGlobalSymbol, fooGlobalSymbol == fooSymbol);

let otherFooGlobalSymbol = Symbol.for("foo");
// true
console.log(fooGlobalSymbol == otherFooGlobalSymbol);
console.log(`
    
        Symbol.for() 对每个字符串键执行幂等操作。第一次调用时
    会检查全局允许时注册表，发现不存在对应的符号，于是就会生成
    一个新符号实例并添加到注册表中。后续使用相同字符串的调用
    同样会检查注册表，发现存在该字符串对应的符号，就返回该符号。

        即使采用相同的符号描述，在全局注册表中定义的符号跟
    Symbol() 定义的符号也并不相等。

    `);

console.log(`
    
        Symbol.keyFor 来查询全局注册表，这个方法接收符号，
    返回该全局符号对应的字符串键。如果查询的不是全局符号，则
    返回 undefined
    `);
// foo undefined
console.log(Symbol.keyFor(fooGlobalSymbol), Symbol.keyFor(fooSymbol));
logSpace();

console.log(`
    
        3、使用符号作为属性
        凡是可以使用字符串或数值作为属性的地方，都可以使用符号。
    这就包括了对象字面量属性和 Object.defineProperty() /
    Object.defineProperties() 定义的属性。对象字面量只能
    在计算属性语法中使用符号作为属性。

    `);
let s1 = Symbol("foo"),
    s2 = Symbol("bar"),
    s3 = Symbol("baz"),
    s4 = Symbol("qux");
let o = {
    [s1]: "foo val",
};
// {Symbol(foo): 'foo val'}，在 node.js 中 enumerable 默认为 false
console.log(o);

Object.defineProperty(o, s2, { value: "bar val", enumerable: true });
// {Symbol(foo): 'foo val', Symbol(bar): 'bar val'}
console.log(o);

Object.defineProperties(o, {
    [s3]: { value: "vaz val", enumerable: true },
    [s4]: { value: "qux val", enumerable: true },
});
// {Symbol(foo): 'foo val', Symbol(bar): 'bar val', Symbol(baz): 'vaz val', Symbol(qux): 'qux val'}
console.log(o);
logSpace();
console.log(`
    
        类似于 Object.getOwnPropertyNames() 返回对象实例的常规属性组，
    Object.getOwnpropertySymbols() 返回对象实例的符号属性组。
    这两个返回值彼此互斥。Object.getOwnProperty-Descriptors()
    会返回同时包含常规和符号属性描述符的对象。Reflect.ownKeys() 
    会返回两种类型的键。

    `);
Object.defineProperty(o, "age", { value: 26, enumerable: true });
// [ 'age' ]
console.log(Object.getOwnPropertyNames(o));
/* [ Symbol(foo), Symbol(bar), Symbol(baz), Symbol(qux) ] */
console.log(Object.getOwnPropertySymbols(o));
/* {
  age: { value: 26, writable: false, enumerable: true, configurable: false },
  [Symbol(foo)]: {
    value: 'foo val',
    writable: true,
    enumerable: true,
    configurable: true
  },
  [Symbol(bar)]: {
    value: 'bar val',
    writable: false,
    enumerable: true,
    configurable: false
  },
  [Symbol(baz)]: {
    value: 'vaz val',
    writable: false,
    enumerable: true,
    configurable: false
  },
  [Symbol(qux)]: {
    value: 'qux val',
    writable: false,
    enumerable: true,
    configurable: false
  }
} */
console.log(Object.getOwnPropertyDescriptors(o));
/* [ 'age', Symbol(foo), Symbol(bar), Symbol(baz), Symbol(qux) ] */
console.log(Reflect.ownKeys(o));
logSpace();

console.log(`
    
        4、常用内置符号
    ECMAScript 6 也引入了一批常用内置符号（well-known symbol），用于
    暴露语言内部行为，开发者可以直接访问、重写或模拟这些行为。这些内置
    符号都以 Symbol 工厂函数字符串属性的形式存在。
        这些内置符号也没有什么特别之处，它们就是全局函数 Symbol 的
    普通字符串属性，指向一个符号的实例。所有内置符号属性都是不可写、
    不可枚举、不可配置的。
        在提到 ECMAScript 规范时，经常会引用符号在规范中的名称，
    前缀为 @@。比如 @@iterator 指的就是 Symbol.iterator。

    `);

