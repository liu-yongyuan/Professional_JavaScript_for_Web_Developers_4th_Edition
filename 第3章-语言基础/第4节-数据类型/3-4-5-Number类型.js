import { logSpace } from "../../lib/utils.js";

console.log(`
    
    3.4.5 Number 类型
        ECMAS次日平台的 Number 类型使用 IEEE 754 格式表示整数和浮点数。
        最基本的数值字面量格式是十进制整数，也可以用八进制，十六精致。

        1、浮点值
        要定义浮点值，数值中必须要包含小数点，而且小数点后面必须至少有一个数字。
    虽然小数点前面鄙视必须有整数，但推荐加上。
    `);
let floatNum1 = 1.1;
let floatNum2 = 0.1;
// .1 有效但不推荐，推荐还是 0.1
let floatNum3 = 0.1;

/* 科学计数法
格式要求是一个数值（整数或浮点数）后跟一个大写
或小写的字母 e，再加上一个要乘 10  的多少次幂
 */
let floatNum4 = 3.125e7; // 31250000
let floatNum5 = 3e-7; // 0.000 000 3

/* 浮点数的精确度最高可达 17 位小数，但在算术计算中远不如整数精确。 */
let floatNumA = 0.1,
    floatNumB = 0.2;
console.log(floatNumA + floatNumB); // 0.30000000000000004
if (floatNumA + floatNumB == 0.3) {
    // false, nevery don`t true
    console.log("You got 0.3.");
}

logSpace();

console.log(`
    
        2、值的范围
        由于内存的限制，ECMAScript 并不支持表示这个世界上的所有数值。
    ECMAScript 可以表示的最小数值保存在 Number.MIN_VALUE 中，这个值
    在多数浏览器中是 5e-324；可以表示的最大数值保存在Number.MAX_VALUE 中
    1.797 693 134 862 315 7e+308。如果某个计算得到的数值结果超出了可以表示
    的范围，这个值会被转换为一个特殊的 Infinity（正穷）值。任何无法表示的
    复数以 -Infinity（负无穷大）表示。

    `);
// Infinity -Infinity Infinity
console.log(Infinity, -Infinity, Number.MAX_VALUE + Number.MAX_VALUE);

// -Infinity Infinity
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);

logSpace();

console.log(`
    
        3、NaN
        有一个特殊的数值叫 NaN，意思是不是数值（Not a Number），用于表示
    本来要返回数值的操作失败了。

    `);
console.log(0 / 0);
console.log(-0 / +0);
console.log(5 / 0);
console.log(5 / -0);
/* NaN
NaN
Infinity
-Infinity */

console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN("10"));
console.log(isNaN("blue"));
console.log(isNaN(true));
/* true
false
false
true
false */

logSpace();

console.log(`
    
        4、数值转换
        有 3 个函数可以将非数值转换为数值：Number()、parseInt 和 parseFloat()。
    Number 是转型函数，可用于任何数据类型。后两个函数主要用于将字符串转换为数值。
    对于同样的参数，这 3 个函数执行的操作也不同。
        Number() 函数基于如下规则执行转换。
        · 布尔值，true 转换为 1，false 转换为 0
        · 整数，直接返回
        · null，返回 0 
        · undefined，返回 NaN
        · 字符串，应用以下规则。
            · 如果字符串包含数值字符，包括数值字符前面带加、减号的情况，则转换为一个
            十进制数值。Number("1")
            · 如果字符穿包含有效的浮点值格式如：“1.1”，则会转换为浮点值
            · 如果字符串包含有效的十六进制格式如：0xf，则会转换为该十六进制值的十进制
            · 如果是空字符串，则返回0 
            · 如果字符穿包含出上述情况之外的其他字符，则返回 NaN
        · 对象，调用 valueOf 方法，并按照上述规则转换返回的值。如果转换结果是 NaN，则
        调用 toString() 方法，再按照转换字符串的规则转换。

    `);
console.log(Number("Hello world"));
console.log(Number(""));
console.log(Number("000011"));
console.log(Number(true));
/* NaN
0
11
1 */

