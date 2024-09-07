import { logSpace } from "../../lib/utils.js";

console.log(`

    3. 字符串操作方法    

`);

console.log(`
        3.1 concat() 将一个或多个字符串拼接成一个字符串。
    `);
let stringValue = "hello";
let result = stringValue.concat("world");
// helloworld
console.log(result);
// hello
console.log(stringValue);
// helloworld!
console.log(stringValue.concat("world", "!"));

logSpace();

console.log(`

        3.2 字符串提取子字符串的方法：slicec()、substr()、
    substring()。这 3 个方法都返回调用它们的字符串的一个子
    字符串，而且都接受一或两个参数。第一个参数是子字符串开始
    的位置，第二个参数是子字符串结束的位置。slice（） 和 substring（）
    第二个参数是提取结束的位置。对 substr（）而言，第二个参数表示
    返回的子字符串数量。

`);
let stringValue2 = "hello world";
// lo world
console.log(stringValue2.slice(3));
// lo world
console.log(stringValue2.substring(3));
// lo world
console.log(stringValue2.substr(3));
// lo w
console.log(stringValue2.slice(3, 7));
// lo w
console.log(stringValue2.substring(3, 7));
// lo worl
console.log(stringValue2.substr(3, 7));

console.log(`

        当某个参数是负值时，这 3 个方法的行为又不同。

`);
// rld
console.log(stringValue2.slice(-3));
// hello world
console.log(stringValue2.substring(-3));
// rld
console.log(stringValue2.substr(-3));
// lo w
console.log(stringValue2.slice(3, -4));
// hel
console.log(stringValue2.substring(3, -4));
//  （空字符串）
console.log(stringValue2.substr(3, -4));
