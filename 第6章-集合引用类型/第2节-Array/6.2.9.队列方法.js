import { logSpace } from "../../lib/utils.js";

console.log(`

    6.2.9 队列方法

        队列是先进先出（FIFO，First-In-First-Out）数据接口。
    使用 shift() 和 push() 可以把数组当成队列来使用。

`);

let colors = new Array();
let count = colors.push("red", "green");
// 2
console.log(count);

count = colors.push("black");
// 3
console.log(count);

let item = colors.shift();
// red
console.log(item);
// 2
console.log(colors.length);

logSpace();

console.log(`

        unshift() 执行跟 shift() 相反的操作：在数组开头添加任意多个值，
    然后返回新的数组长度。

`);
colors = [];
count = colors.unshift("red", "green");
// 2
console.log(count);

count = colors.unshift("black");
// 3
console.log(count);
// [ 'black', 'red', 'green' ]
console.log(colors);

item = colors.pop();
// green
console.log(item);
// 2
console.log(colors.length);
