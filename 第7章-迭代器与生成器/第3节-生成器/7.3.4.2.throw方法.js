import { logSpace } from "../../lib/utils.js";

console.log(`

    7.3.4 
        2.throw()
        throw() 方法会在暂停的适合将一个提供的错误注入到生成器对象中。如果错误未被处理，生成器
    就会关闭：
`);

function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

const g = generatorFn();
// generatorFn {<suspended>}
console.log(g);

try {
    g.throw("foo");
} catch (e) {
    // foo
    console.log(e);
}
// generatorFn {<closed>}
console.log(g);

logSpace();

console.log(`

        不过，假如生成器函数内部处理了这个错误，那么生成器就不会关闭，而且还可以恢复执行。错误
    处理会跳过对应的 yield，因此在这个例子中会跳过一个值。

`);
function* generatorFn1() {
    for (const x of [1, 2, 3]) {
        try {
            yield x;
        } catch (e) {}
    }
}

const g1 = generatorFn1();
// { value: 1, done: false }
console.log(g1.next());
// 被处理，不会抛出错误
g1.throw("foo");
// { value: 3, done: false }
console.log(g1.next());

console.log(`

        这个例子中，生成器在 try/catch 块中的 yield 关键字会暂停执行。在暂停期间，throw() 方法
    向生成器对象内部注入了一个错误：字符串“foo”。错误被 yield 关键字抛出。因为错误是在生成器
    的 try/catch 块中抛出的，所以仍然在生成器内部被捕获。可是，由于 yield 抛出那个错误，
    生成器就不会再产出值2。此时，生成器函数继续执行，再下一次迭代再次遇到 yield 关键字时产出了
    值 3.
`)