import { logSpace } from "../../lib/utils.js";

console.log(`
    
    6.7.2 转换方法

        Array 重写了 toString() 方法，返回由数组每个值等数字符粗拼接
    而成的一个逗号分隔开的字符串。

`);
let colors = ["red", "blue", "green"];
// red,blue,green
console.log(colors.toString());
// [ 'red', 'blue', 'green' ]
console.log(colors.valueOf());
// [ 'red', 'blue', 'green' ]
console.log(colors);

logSpace();

let person1 = {
    toLocaleString() {
        return "Nikolaos";
    },

    toString() {
        return "Nicholas";
    },
};

let person2 = {
    toLocaleString() {
        return "Grigorios";
    },
    toString() {
        return "Greg";
    },
};

let peopoles = [person1, person2];
/* 
这里返回的是两个对象，不是书本里的两个字符粗
[
  {
    toLocaleString: [Function: toLocaleString],
    toString: [Function: toString]
  },
  {
    toLocaleString: [Function: toLocaleString],
    toString: [Function: toString]
  }
]
 */
console.log(peopoles);
// Nicholas,Greg
console.log(peopoles.toString());
// Nikolaos,Grigorios
console.log(peopoles.toLocaleString());

logSpace();

console.log(`

        join() 方法可以传入指定分隔字符。
    不传入指定字符则默认使用逗号 , 做分割

    `);
// red,blue,green
console.log(colors.join());
// red-blue-green
console.log(colors.join("-"));
