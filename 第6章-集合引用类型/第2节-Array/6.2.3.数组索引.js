import { logSpace } from "../../lib/utils.js";

console.log(`

    6.2.3 数组索引

        length 属性是数组索引，它并不是一个只读的属性，对 length 属性
    进行设置可以扩展数组，也可以删除数组的元素。
    
`);

let colors = ["red", "blue", "green"];
// red
console.log(colors[0]);
colors[2] = "black";
colors[3] = "brown";
// [ 'red', 'blue', 'black', 'brown' ]
console.log(colors);

logSpace();

let colors2 = ["red", "blue", "green"];
let names = [];

// 3
console.log(colors2.length);
// 0
console.log(names.length);

logSpace();

colors2.length = 2;
// [ 'red', 'blue' ]
console.log(colors2);

logSpace();

colors2[colors2.length] = "black";
colors2[colors2.length] = "yellow";
// [ 'red', 'blue', 'black', 'yellow' ]
console.log(colors2);

logSpace();

colors2[99] = "X";
// 100
console.log(colors2.length);
