import { logSpace } from "../../lib/utils.js";

console.log(`

    5.3.2 Number

        Number 是对应数值的引用类型。Number 类型重写了 valueOf、
    toLocaleString、toString 方法。

`);

let num = 10;
// 10
console.log(num.toString());
// 1010
console.log(num.toString(2));
// 12
console.log(num.toString(8));
// 10
console.log(num.toString(10));
// a
console.log(num.toString(16));

logSpace();

console.log(`
        toFixed() 方法返回包含指定小数点位数的数值字符串，
    小数位会进行四舍五入
    `);
// 10.00
console.log(num.toFixed(2));
// 10.24
console.log((10.23598).toFixed(2));

logSpace();

console.log(`

        toExponential() 返回以科学计数法表示的数值字符串。

    `);
// 1.0e+1
console.log(num.toExponential(1));

logSpace();

console.log(`

        toPrecision() 方法会根据情况返回最合理的输出结果，
    也可能是科学计数法，可能是固定的形式。
        本质上，toPrecision 方法会根据数值和精度来决定调用
    toFixed() 还是 toExponential()。为了以正确的小数位
    精确表示数值，这3个方法都会向上或向下舍入。

`);
let num2 = 99;
// 1e+2
console.log(num2.toPrecision(1));
// 99
console.log(num2.toPrecision(2));
// 99.0
console.log(num2.toPrecision(3));
// 1.9e+2
console.log((192.98237).toPrecision(2));

logSpace();

let numberObject = new Number(10);
let numberValue = 10;
// object
console.log(typeof numberObject);
// number
console.log(typeof numberValue);
// true
console.log(numberObject instanceof Number);
// false
console.log(numberValue instanceof Number);

logSpace();

console.log(`
        ES6 新增 Number.isInteger() 方法，判断一个数值是否保存
    为整数。
`);
// true
console.log(Number.isInteger(1));
// true
console.log(Number.isInteger(1.0));
// false
console.log(Number.isInteger(1.01));

logSpace();

console.log(`

        Number.isSafeInteger 判断整数是否在范围内。

    `);
// false
console.log(Number.isSafeInteger(-1 * 2 ** 53));
// true
console.log(Number.isSafeInteger(-1 * 2 ** 53 + 1));
// false
console.log(Number.isSafeInteger(2 ** 53));
// true
console.log(Number.isSafeInteger(2 ** 53 - 1));
