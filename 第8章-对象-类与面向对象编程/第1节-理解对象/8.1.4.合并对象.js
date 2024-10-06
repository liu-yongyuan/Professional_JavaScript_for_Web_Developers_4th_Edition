import { logSpace } from "../../lib/utils.js";

console.log(`

    8.1.4 合并对象

        JavaScript 开发者经常觉得”合并“（merge）两个对象很有用。更具体地说，就是把源对象所有的
    本地属性一起复制到目标对象上。有时候这种操作也被称为”混入“（mixin），因为目标对象通过混入
    源对象的属性得到了增强。

        ECMAScript 6 专门为合并对象提供了 Object.assign() 方法。这个方法接收一个目标对象和一个
    或多个源对象作为参数，然后将每个源对象可枚举（Object.propertyIsEnumerable() 返回 true ）
    和自有（Object.hasOwnProperty() 返回 true）属性复制到目标对象。以字符串和符号位键的属性
    会被复制。对每个符合条件的属性，这个方法会使用源对象上的[[Get]]取得属性的值，然后使用目标
    对象上的[[Set]]设置属性的值。

`);
let dest, src, result;

/**
 * 简单复制
 */
dest = {};
src = { id: "src" };

result = Object.assign(dest, src);

// Object.assign 修改目标对象
// 也会返回修改后的目标对象
// true
console.log(dest === result);
// true
console.log(dest !== src);
// { id: 'src' }
console.log(result);
// { id: 'src' }
console.log(dest);

logSpace();

/**
 * 多个源对象
 */
dest = {};

result = Object.assign(dest, { a: "foo" }, { b: "bar" });

// { a: 'foo', b: 'bar' }
console.log(result);

logSpace();

/**
 * 获取函数与设置函数
 */
dest = {
    set a(val) {
        console.log(`Invoked dest setter with param ${val}`);
    },
};

src = {
    get a() {
        console.log(`Invoked src getter`);
        return "foo";
    },
};

Object.assign(dest, src);
// 调用 src 的获取方法
// 调用 dest 的设置方法并传入参数”foo“
// 因为这里的设置函数不执行赋值操作
// 所以实际上并没有把值转移过来
/* Invoked src getter
Invoked dest setter with param foo
{ a: [Setter] } */
console.log(dest);

logSpace();

console.log(`

        Object.assign() 实际上对每个源对象执行的是浅复制。如果多个源对象都有相同的属性，则使
    用最后一个复制的值。为此，从源对象访问器属性获得的值，比如获取函数，会作为一个静态赋值给目
    标对象。换句话说，不能在两个对象间转移获取函数和设置函数。

`);

(dest = null), (src = null), (result = null);

/**
 * 覆盖属性
 */
dest = { id: "dest" };

result = Object.assign(
    dest,
    { id: "src1", a: "foo" },
    { id: "src2", b: "bar" }
);
// Object.assign 会覆盖重复的属性
// { id: 'src2', a: 'foo', b: 'bar' }
console.log(result);

logSpace();

// 可以通过目标对象上的设置函数观察到覆盖的过程
dest = {
    set id(x) {
        console.log(x);
    },
};

/* 
first
second
third
 */
Object.assign(dest, { id: "first" }, { id: "second" }, { id: "third" });

logSpace();

/**
 * 对象引用
 */
dest = {};
src = { a: {} };

Object.assign(dest, src);

// { a: {} }
console.log(dest);
// true
console.log(dest.a === src.a);

logSpace();

console.log(`

        如果赋值期间出错，则操作会中止并退出，同时抛出错误。Object.assign() 没有”回滚“之前
    赋值的概念，因此它是一个尽力而为、可能智慧完成部分复制的方法。

`);

(dest = null), (src = null), (result = null);

/**
 * 错误处理
 */
dest = {};
src = {
    a: "foo",
    get b() {
        // Object.assign() 在调用这个获取函数时会抛出错误
        throw new Error();
    },
    c: "bar",
};

try {
    Object.assign(dest, src);
} catch (e) {}

// Object.assign() 没办法回滚已经完成的修改
// 因此在抛出错误之前，目标对象上已经完成的修改会继续存在
// { a: 'foo' }
console.log(dest);
