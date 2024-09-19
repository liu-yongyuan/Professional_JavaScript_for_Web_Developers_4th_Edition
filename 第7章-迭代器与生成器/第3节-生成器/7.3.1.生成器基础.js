import { logSpace } from "../../lib/utils.js";

console.log(`
    
    7.3.1 生成器基础

        生成器的形式是一个函数，函数名称前面加一个星号（*）表示它是一个生成器。只要是可以定义
    函数的地方，就可以定义生成器。
    
`);

// 生成器函数声明
function* generatorFn() {}

// 生成器函数表达式
let generatorFn1 = function* () {};

// 作为对象字面量方法的生成器函数
let foo = {
    *generatorFn() {},
};

// 作为类实例方法的生成器函数
class Foo {
    *generatorFn() {}
}

// 作为类静态方法的生成器函数
class Bar {
    static *generatorFn() {}
}

logSpace();

console.log(`
    
        标识生成器函数的星号不受两侧空格的影响。

        调用生成器函数会产生一个生成器对象。生成器对象一开始处于暂停执行（suspended）的状态。
    与迭代器相似，生成器对象也实现了 Iterator 接口，因此具有 next() 方法。调用这个方法会让生成器
    开始或恢复执行。
    
`);
const g1 = generatorFn();
// Object [Generator] {}
console.log(g1);
// [Function: next]
console.log(g1.next);

logSpace();

console.log(`

        next() 方法的返回值类似于迭代器，有个 done 熟悉和一个 value 熟悉。函数体为空的生成器
    函数中级不会停留，调用一次 next() 就会让生成器到达 done: true 状态。
`);
// { value: undefined, done: true }
console.log(g1.next());

logSpace();

function* generatorFn2() {
    return "foo";
}

let g2 = generatorFn2();
// Object [Generator] {}
console.log(g2);
// { value: 'foo', done: true }
console.log(g2.next());

logSpace();

console.log(`

        生成器函数只会在初次调用 next() 方法后开始执行
`);
function* generatorFn3() {
    console.log("foobar");
}
// 初次调用生成器函数并不会打印日志
let g3 = generatorFn3();
logSpace();
/* 
foobar
{ value: undefined, done: true }
 */
console.log(g3.next());

logSpace();

console.log(`
    
        生成器对象实现了 Iterable 接口，它们默认的迭代器是自引用的
    
`);
function* generatorFn4() {}
// [GeneratorFunction: generatorFn4]
console.log(generatorFn4);
// [Function: [Symbol.iterator]]
console.log(generatorFn4()[Symbol.iterator]);
// Object [Generator] {}
console.log(generatorFn4()[Symbol.iterator]());

const g = generatorFn4();
// true
console.log(g === g[Symbol.iterator]());
