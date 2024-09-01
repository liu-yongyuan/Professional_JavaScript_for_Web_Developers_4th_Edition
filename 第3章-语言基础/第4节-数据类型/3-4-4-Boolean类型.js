console.log(`
    
    3.4.4 Boolean 类型
        Boolean（布尔值）类型有两个字面值：true 和 false。
    这两个布尔值不同于数值，因此 true 不等于 1，false 不等于 0

        虽然布尔值只有两个，但所有其他 ECMAScript 类型的值都有相应
    布尔值的等价形式。要将一个其他类型的值转换为布尔值，可以调用
    特定的 Boolean() 转型函数。

    `);
let found = true;
let lost = false;
console.log(found, lost);

let message = "Hello World";
const messageAsBoolean = Boolean(message);
console.log(message, messageAsBoolean);
/* 输出：

true false
Hello World true
*/

const b1 = BigInt(0);
console.log(Boolean(b1), b1, typeof 11n); // false 0n bigint


console.log(`
    
    不同类型与布尔值之间的转换规则。

    数据类型、转换为 true 的值、转换为 false 的值
    Boolean、true、false
    String、非空字符串、“”（空字符串）
    Number、非零数值（包括无穷值）、0，NaN（参见后面的相关内容）
    Object、任意对象、null
    Undefined、N/A(不存在)、undefined

    if 等流控制语句会自动执行其他类型值到布尔值的转换。

    `)