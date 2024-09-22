import { logSpace } from "../../lib/utils.js";

console.log(`

    7.3.4 
        1.return()
        return() 方法会强制生成器进入关闭状态。提供给 return() 方法的值，就是终止迭代器对象的值
`);
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

const g = generatorFn();
// generatorFn {<suspended>}
console.log(g);
// { value: 4, done: true }
console.log(g.return(4));
// { value: undefined, done: true }
console.log(g.next());
// generatorFn {<closed>}
console.log(g);

logSpace();

console.log(`
    
        与迭代器不同，所有生成器对象都有 return() 方法，只要通过它进入关闭状态，就无法恢复了。
    后续调用 next() 会显示 done: true 状态，而提供的任何返回值都不会被存储或传播。

`);

const g1 = generatorFn();
// { value: 1, done: false }
console.log(g1.next());
// { value: 4, done: true }
console.log(g1.return(4));
// { value: undefined, done: true }
console.log(g1.next());
// { value: undefined, done: true }
console.log(g1.next());

logSpace();

console.log(`

        for-of 循环等内置语言结构会忽略状态为 done:true 的 IteratorObject 内部返回的值。
    --- 不会，依旧会输出 1-3
`);
const g2 = generatorFn();
/* 
1
2
3
 */
for (const x of g2) {
    if (x > 1) {
        g.return(4);
    }
    console.log(x);
}

logSpace();
