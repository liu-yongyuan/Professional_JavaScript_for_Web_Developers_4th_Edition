import { logSpace } from "../../lib/utils.js";

console.log(`

    4.2.2 变量声明

        ES6 之后，增加了 let 和 const 关键字用于声明变量。

    `);
console.log(`
        1、使用 var 的函数作用域声明
        在使用 var 声明变量时，变量会被自动添加到最接近的上下文。
    在函数中，最接近的上下文就是函数的局部上下文。在 with 语句中，
    最接近的上下文也是函数上下文。如果变量未经声明就被初始化了，
    那么它就会自动被添加到全局上下文，例子：
    `);
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
let result = add(10, 20);
// ReferenceError: sum is not defined
// console.log(sum);

function add2(num1, num2) {
    /* Node.js 宿主环境下会报错,ReferenceError: sum is not defined
    sum = num1 + num2;
    return sum; */
}
let result2 = add2(10, 20);
// 30
// Node.js 宿主环境会报错 ReferenceError: sum is not defined
// console.log(sum);
console.log(`
        变量 sum 被用加法操作的结果初始化时并没有使用 var 声明。
    在调用 add2() 之后，sum 被添加到了全局上下文，在函数退出之后
    依然存在，从而在后面可以访问到。

        var 声明会被拿到函数或全局作用域的顶部，位于作用域中所有代码之前。
    这个现象叫做“提升”（hoisting）。提升让同以作用域中的代码不必考虑变量
    是否已经声明就可以直接使用。可是在实践中，提升也会导致合法却奇怪的现象，
    即在变量声明之前使用变量。下面例子展示了全局作用域中两段等价代码：
    
    `);
var name = "Jake";

// 等价于：
name = "Jake";
var name;

// 两个等价的函数
function fn1() {
    var name = "Jake";
}

// 等价于
function fn2() {
    var name;
    name = "Jake";
}

console.log(`
        通过在声明之前打印，可以验正变量会被提升。声明的提升意味着会
    输出 undefined 而不是 Reference Error
    `);
logSpace();

console.log(`

        2、使用 let 的块级作用域声明
        ES6 新增的 let 关键字跟 var 很相似，但它的作用域是块级的，块级
    作用域由最佳的一对包含花括号{} 界定。话句话说，if块、while 块、function 块、
    甚至是单独的块也是 let 声明变量的作用域。

    `);

if (true) {
    let a;
}
// Reference Error，a is not defined
// console.log(a);

let breakx = true;
while (breakx) {
    let b;
    breakx = false;
}
// Reference Error，b is not defined
// console.log(b);

function foo() {
    let c;
}
// Reference Error，c is not defined
// console.log(c);

{
    let d;
}
// Reference Error，d is not defined
// console.log(d);

console.log(`

        let 与 var 的另一个不同之处是在同一作用域内不能声明两次，
    重复的 var 声明会被忽略，而重复的 let 声明会抛出 SyntaxError。

    `);
var a;
var a;
{
    /* 报错，重复声明的变量
    let b;
    let b; */
}

console.log(`

        let 的行为非常适合在循环中声明迭代遍历。使用 var 声明
    的迭代遍历会泄露到循环外部，这种情况应该避免。

    `);
for (var i = 0; i < 10; i++) {}
// var i:10
console.log(`var i:` + i);

for (let j = 0; j < 10; j++) {}
/* ReferenceError: j is not defined
console.log(`var j:` + j); */

logSpace();

console.log(`
    
        3、使用 const 声明
        const 声明时，必须同时初始化为某个值。
    一经声明，在其生命周期的任何适合都不能再赋予新值。

    `);
// SyntaxError：常量声明时没有初始化
// const a;

const b = 3;
// 3
console.log(b);
// TypeError: Assignment to constant variable.
// b = 4;

// const 除了要遵循以上规则，其他方面与 let 声明是一样的
if (true) {
    const a1 = 0;
}
// ReferenceError: a1 is not defined
// console.log(a1);

breakx = true;
while (breakx) {
    const b1 = 1;
    breakx = false;
}
// ReferenceError: b1 is not defined
// console.log(b1);

function foo2() {
    const c1 = 2;
}
foo2();
// ReferenceError: c1 is not defined
// console.log(c1);

{
    const d1 = 3;
}
// ReferenceError: d1 is not defined
// console.log(d1);

console.log(`
        const 声明只应用到顶级原语或对象。换句话说，赋值为对象的 const 变量不能
    再被重新赋值为其他引用值，但对象的键不受限制。
    `);
const o = {};
// TypeError: Assignment to constant variable.
// o = {};

const o2 = {};
o2.name = "Jake";
console.log(o2);

console.log(`
        由于 const 声明暗示变量的值是单一类型且不可修改，JavaScript 运行时
    编译器可以将其所有实例都替换成实际的值，而不会通过查询表进行变量查找。
    谷歌的 V8 引擎就执行这种优化。
    `);


logSpace();


console.log(`
    
        4.标识符查找
        标识符搜索开始于作用域前端，以给定的名称搜索队友的标识符。
    如果在局部上下文中找到该标识符，则搜索停止，变量确定。如果没有
    找到变量名，则沿作用域链偶素所。这个过程一直持续到搜索至全局上下文
    变量对象。如果仍然没有搜索到标识符，则寿命其为声明。

    `)