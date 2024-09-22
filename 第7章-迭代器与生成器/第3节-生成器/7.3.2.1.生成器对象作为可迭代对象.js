import { logSpace } from "../../lib/utils.js";

console.log(`
    
    7.3.2
        1.生成器对象作为可迭代对象
        在生成器对象上显式调用 next() 方法的用处并不大。其实，如果把生成器对象当成可迭代对象，
    那么使用起来会更方便。
    
`);

function* generatorFn() {
    yield 1;
    yield 2;
    yield 3;
}
/* 
1
2
3
 */
for (const x of generatorFn()) {
    console.log(x);
}

logSpace();

console.log(`
        需要定义一个可迭代对象，而他会产生一个迭代器，这个迭代器会执行指定的次数。使用生成器
    可以通过一个简单的循环来实现。

        传给生成器的函数可以控制迭代循环的次数。在 n 为 0 时，while 条件为假，循环退出，生成器
    函数返回。
`);
function* nTimes(n) {
    while (n--) {
        yield n;
    }
}
/* 
foo: 2
foo: 1
foo: 0
 */
for (const x of nTimes(3)) {
    console.log(`foo: ${x}`);
}
logSpace();