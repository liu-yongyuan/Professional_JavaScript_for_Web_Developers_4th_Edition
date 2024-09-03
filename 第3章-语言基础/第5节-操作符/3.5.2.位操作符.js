import { logSpace } from "../../lib/utils.js";

console.log(`
    
        3.5.2 位操作符

    `);

console.log(`
    
        1。按位非
        按位非操作符用波浪符（~）表示，它的作用是返回数值的一补数。
    按位非是 ECMAScript 中位数不多的几个二进制数学操作符之一。

    `);
let num1 = 25;
let num2 = ~num1;
// 11001 -11010
console.log(num1.toString(2), num2.toString(2));

logSpace();

console.log(`
    
        2。按位与
        按位与操作符和号（&）表示，由两个操作数，本质上按位与
    就是将两个数的每一个位对其，然后基于真值表中的规则，对每
    一位执行相应的操作。
    第一个数值的位、第二个数值的位、结果
    1、1、1
    1、0、0
    0、1、0
    0、0、0

    `);
let result = 25 & 3;
console.log(result, result.toString(2));

logSpace();

console.log(`
    
        3。按位或
        按位或操作符用管道符（|）表示，其规则表示：
    第一个数值位、第二个数值的位、结果
    1、1、1
    1、0、1
    0、1、1
    0、0、0
        按位或操作在至少一位是 1 时返回 1，两位都是 0 时返回 0
    `);

result = 25 | 3;
// 27 11011
console.log(result, result.toString(2));

logSpace();

console.log(`
    
        4。按位异或
        按位异或用脱字符（^）表示，其规则表示：
    第一个数的位、第二个数的位、结果
    1、1、0
    1、0、1
    0、1、1
    0、0、0
        按位异或与按位或的区别是，它只在上一位是 1 时返回 1，
    两位都是 1 或 0，则返回 0

    `);

result = 25 ^ 3;
// 26 11010
console.log(result, result.toString(2));

logSpace();

console.log(`
    
        5. 左移
        左移操作符用两个小于号（<<）表示，会按照指定的位数将数值
    的所有位向左移动。比如，如果数值 2 （二进制 10）向左移 5 位
    就会得到 64（二进制 1000 000）

    `);
let oldVlaue = 2;
let newValue = oldVlaue << 5;
// 10 1000000
console.log(oldVlaue.toString(2), newValue.toString(2));

logSpace();

console.log(`
    
        6. 有符号右移
        有符号右移由两个大于号（>>）表示，会将数值的所有 32 位都向右移，
    同时保留符号（正或负），有符号右移实际上是左移的逆运算。
        比如 64 位右移 5 位，那就是 2：

    `);
newValue = 64 >> 5;
// 2 10
console.log(newValue, newValue.toString(2));

logSpace();

console.log(`

        7. 无符号右移
        无符号右移用 3 个大于号表示（>>>），会将数值的所有 32 位都向右移。
    对于正数，无符号右移与右符号右移结果相同。
        64 >>> 5 = 2, 二进制 10

        对于负数，有时候差异会非常大。负数的二进制表示当成正数的二进制表示
    来处理。因为负数是其绝对值的二补数，所以右移之后结果变得非常大。
    `);

oldVlaue = -64;
newValue = oldVlaue >>> 5;
// 134217726 111111111111111111111111110
console.log(newValue, newValue.toString(2));
