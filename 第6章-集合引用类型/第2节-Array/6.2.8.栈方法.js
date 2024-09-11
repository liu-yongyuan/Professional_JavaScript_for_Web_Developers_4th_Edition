import { logSpace } from "../../lib/utils.js";

console.log(`

    6.2.8 栈方法

        数组对象可以像栈一样。栈是一种后进先出（LIFO，Last-In-First-Out）的结构。
    最近添加的项先被删除。数据项的插入（称为推入，push）和删除（称为弹出 pop）只
    在栈的一个地方发生。push() 和 pop() 以实现栈的行为。

`);

let colors = new Array();
let count = colors.push("red", "gree");
// 2
console.log(count);

count = colors.push("black");
// 3
console.log(count);

let item = colors.pop();
// black
console.log(item);
// 2
console.log(colors.length);

logSpace();

colors = ["red", "blue"];
colors.push("brown");
colors[3] = "black";
// [ 'red', 'blue', 'brown', 'black' ]
console.log(colors);

item = colors.pop();
// black
console.log(item);
