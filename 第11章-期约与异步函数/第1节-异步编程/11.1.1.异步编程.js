import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.1.1 同步与异步

    1. 同步编程
        同步编程是指代码按顺序执行，前一个任务执行完毕，才能执行后一个任务。
    
    2. 异步编程
        异步编程是指代码不按顺序执行，而是通过回调函数来处理。
`);

// 1.同步编程 代码按顺序执行
let x = 3;
x = x + 4;
console.log(x); // 7 

logSpace();

// 2.异步编程 代码不按顺序执行
let y = 3;
setTimeout(() => {
    y = y + 4;
    console.log(y); // 7
}, 1000); // 1秒后执行
console.log(y); // 3