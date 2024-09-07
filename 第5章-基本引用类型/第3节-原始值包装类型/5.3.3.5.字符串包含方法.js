import { logSpace } from "../../lib/utils.js";

console.log(`

    5. 字符串包含方法

        ECMAScript 6 增加了 3 个用于判断字符串中是否包含另一个字符串的方法：
    startsWith（）、endsWith（）和includes（）。这些方法都会从字符串中搜索传入
    的字符串，并返回一个表示是否包含的布尔值。区别在于，startsWith（）检查开始于
    索引 0 的匹配项，ends（）检查开始于索引（string.length -substring.length）
    的匹配项，而 includes（）检查整个字符串：

    `);

let message = "foobarbaz";
// true
console.log(message.startsWith("foo"));
// false
console.log(message.startsWith("bar"));

logSpace();

// true
console.log(message.endsWith("baz"));
// false
console.log(message.endsWith("bar"));

logSpace();

// true
console.log(message.includes("bar"));
// false
console.log(message.includes("qux"));

console.log(`

        startsWith() 和 includes() 方法接收可选的第二个参数，表示开始搜索的位置。
    如果传入第二个参数，则意味着这两个方法会从指定位置向着字符串末尾搜索。

`);

// true
console.log(message.startsWith("foo"));
// false
console.log(message.startsWith("foo", 1));
// true
console.log(message.includes("bar"));
// false
console.log(message.includes("bar", 4));

console.log(`

        endsWith() 方法接收可选的第二个参数，表示应该当作字符串末尾的位置。
    默认为字符串的长度。
    `);
// false
console.log(message.endsWith("bar"));
// true
console.log(message.endsWith("bar", 6));
