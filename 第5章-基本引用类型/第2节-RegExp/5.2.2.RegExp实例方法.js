import { logSpace } from "../../lib/utils.js";

console.log(`
    
    5.2.2 RegExp 实例方法

        exec() 主要是用于匹配捕获组使用。这个方法只接收一个参数，
    即要应用模式的字符串。如果找到了匹配项，则返回包含第一个匹配信息的数据；
    如果没有找到匹配项，则返回 null。返回的数组是 Array 的实例，包含两个
    额外的属性：index 和 input。index 是字符串中匹配模式的起始位置，inpute 
    是要查找的字符串。这个数组的第一个元素是匹配整个模式的字符串，其他元素
    是与表达式中的捕获组匹配的字符串。如果模式中没有捕获组，则数组值包含一个元素

    `);
let text = "mom and dad and baby";
let pattern = /mom( and dad( and baby)?)?/gi;

let matchs = pattern.exec(text);
// 0
console.log(matchs.index);
// mom and dad and baby
console.log(matchs.input);
// mom and dad and baby
console.log(matchs[0]);
//  and dad and baby
console.log(matchs[1]);
//  and baby
console.log(matchs[2]);

logSpace();

let text2 = "cat, bat, sat, fat";
let pattern2 = /.at/;
let matches2 = pattern2.exec(text2);
// 0
console.log(matches2.index);
// cat, bat, sat, fat
console.log(matches2.input);
// cat
console.log(matches2[0]);
// 0
console.log(matches2.lastIndex);

logSpace();

let text3 = "cat, bat, sat, fat";
let pattern3 = /.at/g;
let matches3 = pattern3.exec(text3);
// 0
console.log(matches3.index);
// cat
console.log(matches3[0]);
// 3
console.log(pattern3.lastIndex);

logSpace();

matches3 = pattern3.exec(text3);
// 5
console.log(matches3.index);
// bat
console.log(matches3[0]);
// 8
console.log(pattern3.lastIndex);

logSpace();

matches3 = pattern3.exec(text3);
// 10
console.log(matches3.index);
// sat
console.log(matches3[0]);
// 13
console.log(pattern3.lastIndex);

logSpace();

console.log(`

        如果设置了黏附标记 y，则每次调用 exec() 就只会在
    lastIndex 的位置上寻找匹配项。黏附标记覆盖全局标记。

`);

let text4 = "cat, bat, sat, fat";
let pattern4 = /.at/y;

let matches4 = pattern4.exec(text4);
// 0
console.log(matches4.index);
// cat
console.log(matches4[0]);
// 3
console.log(pattern4.lastIndex);

logSpace();

matches4 = pattern4.exec(text4);
// 以索引 3 对应的字符开头找不到匹配项，因此 exec() 返回  null
console.log(matches4);
// exec() 没有找到匹配项，于是将 lastIndex 设置为 0
console.log(pattern4.lastIndex);

logSpace();

// 向前设置 lastIndex 可以让黏附的模式通过 exec() 找到下一个匹配项：
pattern4.lastIndex = 5;
matches4 = pattern4.exec(text4);
// 5
console.log(matches4.index);
// bat
console.log(matches4[0]);
// 8
console.log(pattern4.lastIndex);

logSpace();

let text5 = "000-00-0000";
let pattern5 = /\d{3}-\d{2}-\d{4}/;
if (pattern5.test(text5)) {
    // The pattern was matched.
    console.log("The pattern was matched.");
}

let pattern6 = new RegExp("\\[bc\\]at", "gi");
// /\[bc\]at/gi
console.log(pattern6.toString());
// /\[bc\]at/gi
console.log(pattern6.toLocaleString());
