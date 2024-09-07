import { indexOfAllPosition, logSpace } from "../../lib/utils.js";

console.log(`

    4.字符串位置方法

        indexOf（）和lastIndexOf（）定位字符串中的子字符串。
        从头开始和从尾部开始搜索并返回位置

`);
let stringValue = "hello world";
// 4
console.log(stringValue.indexOf("o"));
// 7
console.log(stringValue.lastIndexOf("o"));

logSpace();

console.log(`

        这两个方法都可以接收第二个参数，表示开始搜索的位置。
    会忽略该位置之前的字符。

`);
// 7
console.log(stringValue.indexOf("o", 6));
// 4
console.log(stringValue.lastIndexOf("o", 6));

logSpace();

console.log(`

        通过 indexOf（）或 lastIndexOf（）查询出子字符串
    在字符串中的所有位置。

`);
let stringValue2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
let postion = new Array();
let pos = stringValue2.indexOf("e");
while (pos > -1) {
    postion.push(pos);
    pos = stringValue2.indexOf("e", pos + 1);
}

// [ 3, 24, 32, 35, 52 ]
console.log(postion);
// [ 3, 24, 32, 35, 52 ]
console.log(indexOfAllPosition(stringValue2, "e"));
