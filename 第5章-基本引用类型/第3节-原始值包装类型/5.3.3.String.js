import { logSpace } from "../../lib/utils.js";

console.log(`

    5.3.3 String

        String 是对应字符串的引用类型。要创建一个 String 对线，使用 String 构造函数
    并传入一个数值。

    `);
let stringObject = new String("hello world");

console.log(`
        每个 String 对线都有一个 length 属性，表示字符串中字符的数量。
    `);
let stringValue = "hello world";
console.log(stringValue.length);

logSpace();

console.log(`

        1、JavaScript 字符
        JavaScript 字符串由 16 位码元（code unit）组成。对多数字符来说，每 16 位码元
    对应一个字符。length 属性表示包含多少 16 位码元。
`);
let message = "abcde";
console.log(message.length);

console.log(`
        charAt() 方法返回给定索引位置的字符。
    `);
// c
console.log(message.charAt(2));

console.log(`

        charCodeAt() 方法可以查看指定码元的字符编码。这个方法返回索引位置的码元值

    `);
// 99
console.log(message.charCodeAt(2));
// true
console.log(99 === 0x63);

console.log(`

        fromCharCode() 方法用于根据给顶的 UTF-16 码元创建字符串中的字符。这个
    方法可以接受任意多个数值，并返回将所有数值对应的字符拼接起来的字符串：

    `);
// abcde
console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65));

console.log(`

        length、charAt()、charCodeAt() 和 fromCharCode() 返回的结果
    跟预期是一样的。

    `);

console.log(`
    
        fromCharCodePoint() 接受任意数量的码点，返回对应字符串拼接
    起来的字符串。
        笑脸也会有自己的码点
`);
// ab😊des
console.log(String.fromCodePoint(97, 98, 128522, 100, 101));

logSpace();
