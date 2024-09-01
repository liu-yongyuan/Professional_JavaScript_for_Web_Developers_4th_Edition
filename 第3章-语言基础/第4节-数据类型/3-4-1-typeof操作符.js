console.log(typeof undefined);
console.log(typeof null);
console.log(typeof true);
console.log(typeof Number(1));
console.log(typeof String("X"));
console.log(typeof Symbol("symbol"));
console.log(typeof BigInt(100));
console.log(typeof new Object());
/* Output:
undefined
object
boolean
number
string
symbol
bigint
object
 */
console.log(`

    3.4.1 typeof 操作符

        因为 ECMAScript 的类型是松散的，所以需要一种手段来确定
    任意变量的数据类型。typeof操作符就是为此而生的。
        · undefined 表示值未定义的
        · boolean 表示值为 布尔值
        · number 表示值为数值
        · string 表示值为字符串
        · symbol 表示值为符号
        · bigint 表示值为大整数
        · object 表示值为对象，null 是用来给对象的，因此 typeof null 也会返回 object

    `);