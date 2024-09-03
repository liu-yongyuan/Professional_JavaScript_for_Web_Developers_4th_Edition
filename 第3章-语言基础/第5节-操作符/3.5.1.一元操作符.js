import { logSpace } from "../../lib/utils.js";

console.log(`
    
    3.5.1 一元操作符
        只操作一个值的操作符叫一元操作符（unary operator）。一元操作符是 ECMAScript
    中最简单的操作符。

    `);
console.log(`
    
        1。递增、递减操作符
        前缀版和后缀版，前缀版就是位于要操作的变量牵头，后缀版就是位于操作的变量后头。

    `);
let age = 29;
// 30
console.log(++age);
// 29
console.log(--age);
// 29
console.log(age);

logSpace();

console.log(
    `无论使用前缀递增还是前缀递减操作符，变量的值都会在语句被求值之前改变。`
);

age = 29;
let anotherAge = --age + 2;
// 28
console.log(age);
// 30
console.log(anotherAge);

let num1 = 2,
    num2 = 20,
    num3 = --num1 + num2,
    num4 = num1 - num2;
// 1 20 21 -19
console.log(num1, num2, num3, num4);

logSpace();

console.log(`
        后缀版与前缀版的主要区别在于，后缀版递增和递减在语句被求值后才发生。
    `);
(num1 = 2), (num2 = 20), (num3 = num1-- + num2), (num4 = num1 + num2);
// 1 20 22 21
console.log(num1, num2, num3, num4);
logSpace();

console.log(`

        这 4 个操作符可以作用于任何值，意思是不限于整数————字符串、布尔值、
    浮点数，甚至对象都可以。递增和递减操作符遵循如下规则：

        · 对于字符串，如果是有效的数值形式，则转换为数值再应用改变。
    变量类型从字符串变成数值。
        · 对于字符串，如果不是有效的数值形式，则将变量的值设置为 NaN。
    变量类型从字符串编程数值。
        · 对于布尔值，如果是 false，则转换为 0 再应用改变。
    变量类型从布尔值变成数值。
        · 对于 布尔值，如果是 true，则转换为 1 再应用改变。
        · 对于浮点值，加 1 或 减 1。
        · 如果是对象，valueOf 方法取得可以操作的值。对得到的值应用
    上述规则。弱国是 NaN，则调用 toString 并再次应用其他规则。
    变量类型从对象变成数值。

    `);
let s1 = "2";
let s2 = "z";
let b = false;
let f = 1.1;
let o = {
    valueOf() {
        return -1;
    },
};
// 2, 3
console.log(s1++, s1);
// NaN NaN
console.log(s2++, s2);
// 0 1
console.log(b++, b);
// 1.1 0.10000000000000009
console.log(f--, f);
// -1 -2
console.log(o--, o.valueOf());

logSpace();

console.log(`
    
        2。一元加和减
        一元加由一个加号（+）表示，放在变量前头，对数值没有任何影响。
    `);
let num5 = 25;
num5 = +num5;
// 25
console.log(num5);
s1 = "0.1";
s2 = "1.1";
let s3 = "z";
b = false;
f = 1.1;
o = {
    valueOf() {
        return -1;
    },
};
s1 = +s1;
s2 = +s2;
s3 = +s3;
b = +b;
f = +f;
o = +o;
// 0.1 1.1 NaN 0 1.1 -1
console.log(s1, s2, s3, b, f, o);

logSpace();

let num6 = 25;
num6 = -num6;
console.log(num6);

s1 = "0.1";
s2 = "1.1";
s3 = "z";
b = false;
f = 1.1;
o = {
    valueOf() {
        return -1;
    },
};

s1 = -s1;
s2 = -s2;
s3 = -s3;
b = -b;
f = -f;
o = -o;
// -0.1 -1.1 NaN -0 -1.1 1
console.log(s1, s2, s3, b, f, o);