import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.2.2.期约基础

      ECMAScript 6 新增的引用类型 Promise，可以通过 new 操作符来创建 Promise 实例。
    创建新期约时需要传入执行器函数，执行器函数会立即执行，接收两个参数：resolve 和 reject。
`);
let p = new Promise(() => { });
setTimeout(console.log, 0, p); // Promise { <pending> }

logSpace();

console.log(`
    1.期约状态机
      期约有三种状态：待定（pending）、兑现（fulfilled）和拒绝（rejected）。
    期约的状态只能从待定转换为兑现或拒绝，且一旦转换就不能再变。
`);

logSpace();

console.log(`
    2.解决值、拒绝理由及期约用例
      期约的状态代表期约是否完成。“待定”表示尚未开始或正在进行中，“兑现”表示表示
    以及成功完成，而 “拒绝” 则表示没有成功。

      为了支持这两种用例，每个期约只要状态变为兑现或拒绝，就会有一个解决值(value)
    或拒绝理由(reason)。
      无论是值还是理由，都是包含原始值或对象的不可修改的引用。二者都是可选的，而且默认值
    为 undefined。在期约到达某个落定状态时执行的异步代码始终会收到这个值或理由。

`);

logSpace();

console.log(`
  3.通过执行函数控制期约状态
    由于期约的状态是私有的，所以只能在内部进行操作。内部操作在期约的执行期函数中完成。
  执行器函数主要有两项职责：初始化期约的异步行为和控制状态的最终转换。其中，控制期约状态的
  转换时通过调用它的两个函数参数实现的。这两个函数参数通常都命名为 resolve 和 reject。
  调用 resolve 会将期约状态转换为兑现，而调用 reject 会将期约状态转换为拒绝。另外
  调用 reject 也会抛出错误。

`);
let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1); // Promise { undefined }

// let p2 = new Promise((resolve, reject) => reject());
// setTimeout(console.log, 0, p2); // Uncaught (in promise) undefined

logSpace();


console.log(`

    4.Promise.resolve()
      Promise.resolve() 方法会返回一个以给定值解决的期约。如果给定值是期约，则直接返回；

  `);
let p3 = Promise.resolve(42);
setTimeout(console.log, 0, p3); // Promise { 42 }
setTimeout(console.log, 0, Promise.resolve(4, 5, 6));  // Promise { 4 }

logSpace();

console.log(`

  5.Promise.reject()
    Promise.reject() 方法会返回一个以给定理由拒绝的期约。

`);
let p4 = Promise.reject(42);
setTimeout(console.log, 0, p4); // Promise { <rejected>: 42 }


console.log(`
  
  6.同步/异步执行的二次性

  `);
try {
  throw new Error('foo');
} catch (error) {
  console.log(error);
}


try{
  Promise.reject(new Error('bar'));
}catch(error){
  console.log(error);
}