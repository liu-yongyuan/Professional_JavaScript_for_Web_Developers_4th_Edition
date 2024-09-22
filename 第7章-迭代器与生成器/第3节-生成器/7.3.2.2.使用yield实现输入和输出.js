import { logSpace } from "../../lib/utils.js";

console.log(`
    
    7.3.2
        2.使用 yield 实现输入和输出
        除了可以作为函数的中间返回语句使用，yield 关键字还可以作为函数的中间参数使用。上一次让
    生成器函数暂停 yield 关键字会接收到传给 next() 方法的第一个值。这里有个地方不太好理解——
    第一次调用 next() 传入的值不会被使用，因为这一次调用时为了开始执行生成器函数。
    
`);

function* generatorFn(initial) {
    console.log(initial);
    console.log(yield);
    console.log(yield);
}
// foo
let generatorObject = generatorFn("foo");
/* 
{ value: undefined, done: false }
baz
 */
console.log(generatorObject.next("bar"));
/* 
{ value: undefined, done: false }
qux
 */
console.log(generatorObject.next("baz"));
// { value: undefined, done: true }
console.log(generatorObject.next("qux"));

logSpace();

console.log(`
    

    yield 关键字并非只能使用一次。比如，以下代码就定义了一个无穷计数生成器函数；
    
`);
function* generatorFn2() {
    for (let i = 0; ; ++i) {
        yield i;
    }
}

let generatorObject2 = generatorFn2();
// 0
console.log(generatorObject2.next().value);
// 1
console.log(generatorObject2.next().value);
// 2
console.log(generatorObject2.next().value);

logSpace();

console.log(`
    
        假设我们想定义一个生成器函数，它会根据配置的值迭代相应次数并产生迭代的索引。初始化一个
    新数组可以实现这个需求，但不用数组也可以实现同样的行为
    
`);
function* nTimes(n) {
    for (let i = 0; i < n; ++i) {
        yield i;
    }
}
/* 
0
1
2
 */
for (let x of nTimes(3)) {
    console.log(x);
}

logSpace();

function* nTimes2(n) {
    let i = 0;
    while (n--) {
        yield i++;
    }
}
/* 
0
1
2
 */
for (const x of nTimes2(3)) {
    console.log(x);
}

logSpace();

console.log(`
    
        这样使用生成器也可以实现范围和填充数组

`);
function* range(start, end) {
    while (end > start) {
        yield start++;
    }
}
/* 
4
5
6
 */
for (const x of range(4, 7)) {
    console.log(x);
}

logSpace();

function* zeroes(n) {
    while (n--) {
        yield 0;
    }
}
/* 
[
  0, 0, 0, 0,
  0, 0, 0, 0
]
 */
console.log(Array.from(zeroes(8)));
