import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.2.3.期约的实例方法

      期约实例的方法是连接外部同步代码与内部异步代码之间的桥梁。这些方法可访问异步操作返回的数据，
    处理期约成功和失败的输出，连续对期约求值，或者添加只有期约进入终止状态时才会执行的代码。
`);

logSpace();


console.log(`
    1.实现 Thenable 接口
      在 ECMAScript 暴露的异步结构中，任何对象都有一个 then 方法。这个方法被认为实现了
    Thenable 接口。下面的例子展示了实现这一接口的最简单的类：
  `);
class MyThenable {
  then() { }
}

logSpace();

console.log(`
    2.Promise.prototype.then()
      then 方法是 Promise 构造函数原型上的方法，用于注册解决和拒绝期约时的回调。then 方法接收两个
    参数：一个用于期约成功时的回调，另一个用于期约失败时的回调。
`);
function onResolved(id) {
  setTimeout(console.log, 0, id, 'resolved');
}
function onRejected(id) {
  setTimeout(console.log, 0, id, 'rejected');
}
let p1 = new Promise((resolve, reject) => setTimeout(resolve, 1000));
let p2 = new Promise((resolve, reject) => setTimeout(reject, 1000));

p1.then(() => onResolved('p1'), () => onRejected('p1'));
p2.then(() => onResolved('p2'), () => onRejected('p2'));

// p1 resolved
// p2 rejected

logSpace();

let p3 = new Promise((resolve, reject) => setTimeout(resolve, 1000));
let p4 = new Promise((resolve, reject) => setTimeout(reject, 1000));

p3.then('typoe ook');

p4.then(null, () => onRejected('p4'));