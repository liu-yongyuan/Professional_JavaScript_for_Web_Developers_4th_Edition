import { logSpace } from "../../lib/utils.js";

console.log(`

    3.3.3 const 声明
        const 的行为与 let 基本相同，唯一一个重要的区别是用它声明变量时
    必须同时初始化变量，且尝试修改 const 声明的变量会导致运行时错误。

        const age = 26;
        age = 36; // TypeError: 给常量赋值

        // const 也不允许重复声明
        const name = 'Matt';
        const name = 'Nicholas'; // SyntaxError
    `);
const name = "Matt";
if (true) {
    const name = "Nicholas";
}
console.log(name);
console.log(`
    
        const 声明的作用域也是块作用域。

        const 声明的限制只适用于它指向的变量的引用。换句话来说，
    如果 const 变量引用的是一个对象，那么修改这个对象内部的属性并不违反 const 限制。

        const person = {};
        person.name = 'Matt'; // OK

    `);
logSpace();

console.log(`
    
            const 声明一个不会被修改的 for 循环变量也是可以的。
        对 for-of 和 for-in 循环特别有意义。
    
    `);

for (const key in { a: 1, b: 2 }) {
    console.log(key);
}

for (const value of [1, 2, 3, 4]) {
    console.log(value);
}
