import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.2.4.1.期约连锁

      把期约逐个地串联起来上一种非常有用的编程模式。之所以可以这样做，式因为每个期约实例的方法
    把（then(), catch(), finally()）都会返回一个新的期约对象，这个期约又有自己的实例方法。
    这样连缀方法调用就可以构成所谓的“期约连锁”
`);
let p = new Promise((resolve, reject) => {
  console.log('promise-first');
  resolve();
});

p.then(() => console.log('promise-second'))
  .then(() => console.log('promise-third'))
  .then(() => console.log('promise-fourth'));

// first
// second
// third
// fourth

console.log(`

    这个实现最终执行了一连串同步任务。正因为如此，这种方式执行的任务没有那么有用，毕竟分别
  使用 4 个同步函数也可以做到：

  `);
(() => console.log('first'))();
(() => console.log('second'))();
(() => console.log('third'))();
(() => console.log('fourth'))();

logSpace();

console.log(`

    真正执行异步任务，可以改写签名的例子，让每个执行期都返回一个期约实例。这样就可以让
  每个后续期约都等待之前的期约，也就是串形化异步任务。下面这样每个期约在一定时间后解决：

  `);
let p1 = new Promise((resolve, reject) => {
  console.log('p1 executor');
  resolve();
});

p1.then(() => new Promise((resolve, reject) => {
  console.log('p2 executor');
  setTimeout(resolve, 1000);
}))
  .then(() => new Promise((resolve, reject) => {
    console.log('p3 executor');
    setTimeout(resolve, 1000);
  }))
  .then(() => new Promise((resolve, reject) => {
    console.log('p4 executor');
    setTimeout(resolve, 1000);
  }));

console.log(`把生成期约的代码提取到一个工厂函数中，就可以写成这样：`);
function delayedResolve(str){
  return new Promise((resolve, reject) => {
    console.log(str);
    setTimeout(resolve, 1000);
  });
}

logSpace();

delayedResolve('p5 executor')
.then(() => delayedResolve('p6 executor'))
.then(() => delayedResolve('p7 executor'))
.then(() => delayedResolve('p8 executor'));