import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.2.3.5.非重入期约方法

      当期约进入落定状态时，与该状态相关的处理程序仅仅会被排期，而非立即执行。跟在天津这个
    处理程序的代码之后的同步代码一定会在处理程序之前线执行。即使期约一开始就是与附加处理程序
    关联的状态，执行顺序也是这样的。这个特性由 JavaScript 允许时包粽子，被称为“非重入”（non-reentrancy）特性。
`);
let p = Promise.resolve();

p.then(() => console.log('onResolved handler'));

console.log('then method has been called');

// then method has been called
// onResolved handler

logSpace();

console.log(`

    then 会把 onResolved 处理程序推进消息队列。但这个处理程序在当前线程上的同步代码完成前不会不会执行。
  因此，跟在 then 后面的同步代码一定先于处理程序执行。
    先添加处理程序后解决期约也丝毫一样的。

  `);

let synchroneousResolve;

let p1 = new Promise((resolve, reject) => {
  synchroneousResolve = function(){
    console.log('1: invoking resolve()');
    // resolve() 会把 onResolved 处理程序推进消息队列
    resolve();
    console.log('2: resolve() returns');
  }
});
// 期约解决时，onResolved 处理程序会被排期
p1.then(() => console.log('4: then() handler executes'));

synchroneousResolve();

console.log('3: synchroneousResolve() returns');

// 实际输出
// 1: invoking resolve()
// 2: resolve() returns
// 3: synchroneousResolve() returns
// 4: then() handler executes


logSpace();

let p2 = Promise.resolve();
p2.then(() => console.log('p2.then() onResolved'));
console.log('p2.then() returns');

let p3 = Promise.reject();
p3.then(null, () => console.log('p3.then() onRejected'));
console.log('p3.then() returns');

let p4 = Promise.reject();
p4.catch(() => console.log('p4.catch() onRejected'));
console.log('p4.catch() returns');

let p5 = Promise.reject();
p5.finally(() => console.log('p5.finally() onRejected'));
console.log('p5.finally() returns');

logSpace();
