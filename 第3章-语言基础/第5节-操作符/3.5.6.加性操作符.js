import { logSpace } from "../../lib/utils.js";

console.log(`
    3.5.6 加性操作符
        有两个操作符，加法操作符（+）和减法操作符（-）
        · 如果两个操作数都是数值，有任意一个是 NaN，则返回 NaN
        · 如果一个操作数是字符串，则将另一个操作数转换为字符串，
    再将两个字符串拼接到一块。转换为字符串。不会执行数值转换
        · 如果任意一操作是对象、数值和布尔值，则调用它们的
    toString() 方法获取字符串，然后再应用前面的关于字符串的规则。
    对于 undefined 和 null，则调用 String() 函数，分别获取
    "undefined" 和  “null”

        减法操作符会执行数值转换，这是和 + 符号不同，因为 + 符号
    有用在字符串的拼接上，减法则没有。
    `);
// 2
console.log(1 + 1);
// 11
console.log("1" + 1);
// 11
console.log(1 + "1");
// NaN, 1
console.log(undefined + 1, null + 1);
// [object Object]1 2 2
console.log({ o: "foo" } + 1, new Number(1) + 1, true + 1);

logSpace();

// 0
console.log(1 - 1);
// 0
console.log("1" - 1);
// 0
console.log(1 - "1");
// NaN, -1
console.log(undefined - 1, null - 1);
// NaN 0 0
console.log({ o: "foo" } - 1, new Number(1) - 1, true - 1);
