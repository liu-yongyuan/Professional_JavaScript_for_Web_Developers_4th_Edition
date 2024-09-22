import { logSpace } from "../../lib/utils.js";

console.log(`
    
    7.3.2
        3.产生可迭代对象
        可以使用星号增强 yield 的行为，让它能够迭代一个可迭代对象，从而一次产出一个值：
    
`);

/* 
等价的
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
 */
function* generatorFn() {
    yield* [1, 2, 3];
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

// 与生成器函数的星号类似，yield 星号两侧的空格不影响其行为
function* generatorFn1() {
    yield* [1, 2];
    // yield  *[3, 4];
    // yield * [5, 6];
}

logSpace();

console.log(`
    
        因为 yield* 实际上只是将一个可迭代对象序列化为一连串可以单独产出的值，所以这跟把 yield
    放到一个循环离没什么不同。下面两个生成器函数的行为是等价的

`);

function* generatorFnA() {
    for (let x of [1, 2, 3]) {
        yield x;
    }
}

function* generatorFnB() {
    yield* [1, 2, 3];
}

logSpace();

console.log(`

        yield* 的值是关联迭代器返回 done: true 时的 value 属性。对于普通迭代器来说，这个值是
    undefined

`);

function* generatorFn3() {
    console.log(`iter value:`, yield* [1, 2, 3]);
}

/* 
value: 1
value: 2
value: 3
iter value: undefined
 */

for (const x of generatorFn3()) {
    console.log(`value: ${x}`);
}

logSpace();

function* innerGeneratorFn() {
    yield "foo";
    return "bar";
}

function* outerGeneratorFn(genObj) {
    console.log(`iter value:`, yield* innerGeneratorFn());
}

/* 
value foo
iter value: bar
 */
for (const x of outerGeneratorFn()) {
    console.log("value", x);
}

logSpace();
