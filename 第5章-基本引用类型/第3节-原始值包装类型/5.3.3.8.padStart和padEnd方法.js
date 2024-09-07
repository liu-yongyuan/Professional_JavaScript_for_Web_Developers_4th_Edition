import { logSpace } from "../../lib/utils.js";

console.log(`

    8. padStart() 和 padEnd() 方法

        padStart() 和 padEnd() 方法会复制字符串，如果小于指定长度，
    则在相应的一边填充字符，直至满足长度条件。这两个方法的第一个参数
    是长度，第二个参数是可选的填充字符串，默认为空格。

`);

let stringValue = "foo";
//    foo
console.log(stringValue.padStart(6));
// ......foo
console.log(stringValue.padStart(9, "."));

// foo
console.log(stringValue.padEnd(6));
// foo......
console.log(stringValue.padEnd(9, "."));

logSpace();

console.log(`

        可选的第二个参数并不限于一个字符。如果提供了多个字符的字符串，
    则会将其拼接并阶段以匹配指定长度。此外，如果长度小于或等于字符串长度，
    则会返回原始字符串。

`);
// barbafoo
console.log(stringValue.padStart(8, "bar"));
// foo
console.log(stringValue.padStart(2));

// foobarba
console.log(stringValue.padEnd(8, "bar"));
// foo
console.log(stringValue.padEnd(2));
