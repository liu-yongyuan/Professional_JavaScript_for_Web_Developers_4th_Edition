import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.2.3.8.拒绝期约与拒绝错误处理

      拒绝期约类似于 throw() 表达式，因为它们都代表一种程序状态，即需要中断或者特殊处理。

`);
let p1 = new Promise((resolve, reject) => reject(Error('foo')));
let p2 = new Promise((resolve, reject) => { throw Error('foo'); });
let p3 = Promise.reject().then(() => { throw Error('foo'); });
let p4 = Promise.reject(Error('foo'));

setTimeout(console.log, 0, p1);
setTimeout(console.log, 0, p2);
setTimeout(console.log, 0, p3);
setTimeout(console.log, 0, p4);