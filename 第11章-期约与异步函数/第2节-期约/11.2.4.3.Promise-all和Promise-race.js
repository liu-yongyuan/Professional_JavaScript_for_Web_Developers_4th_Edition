import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.2.4.3.Promise.all() 和 Promise.race()

      Promise.all() 静态方法创建的期约会在一组期约全部解决之后再解决。
`);
let p1 = Promise.all([
  Promise.resolve(),
  Promise.resolve()
]);

// 可迭代对象中的元素会通过 Promise.resolve() 转换为期约
let p2 = Promise.all([3, 4]);

// 空的可迭代对象等价于 Promise.resolve()
let p3 = Promise.all([]);

// 无效的语句
// let p4 = Promise.all();
// TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))

logSpace();

let p5 = Promise.all([
  Promise.resolve(),
  new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);
// Promise { <pending> }
setTimeout(console.log, 0, p5);
// p5 all() resolved!
p5.then(() => setTimeout(console.log, 0, 'p5 all() resolved!'));

logSpace();

// 永远待定
let p6 = Promise.all([new Promise(() => { })]);
setTimeout(console.log, 0, p6);

// 一次拒绝会导致最终期约拒绝
let p7 = Promise.all([
  Promise.resolve('p7-resolve'),
  Promise.reject('p7-reject'),
  Promise.resolve('p7-resolve-1')
]).catch((reason) => console.log(reason));
// p7-reject
setTimeout(console.log, 0, p7);

logSpace();

// 所有期约都成功解决，则合成期约的解决值就是包含所有期约解决值的数组，按照迭代器顺序：
let p8 = Promise.all([
  Promise.resolve(3),
  Promise.resolve(),
  Promise.resolve(4)
]);
// [ 3, undefined, 4 ]
p8.then((values) => setTimeout(console.log, 0, values));

// 如果有期约拒绝，第一个拒绝的期约会将自己的理由作为合成期约的拒绝理由。

logSpace();

console.log(`

    · Promise.race()
    Promise.race() 静态方法返回一个包装期约，是一组集合中最先解决或拒绝的期约的镜像。这个
  方法接受一个可迭代对象，返回一个新期约：
`);

let p9 = Promise.race([
  Promise.resolve(),
  Promise.resolve(),
]);

// 可迭代对象中的元素会通过 Promise.resolve() 转换为期约
let p10 = Promise.race([3, 4]);

// 空的可迭代对象等价于 new Promise(() => {})
let p11 = Promise.race([]);

// 无效的语法
// let p12 = Promise.race();
// TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))

logSpace();

console.log(`

    Promise.race() 不会对解决或拒绝的期约区别对待。无论是解决还是拒绝，只要是第一个落定的期约，
  Promise.race() 就会包装其解决值或拒绝理由并返回新期约。

    如果有一个期约拒绝，只要它是第一个落定的，就会成为拒绝合成期约的理由，之后在拒绝的期约
  不会影响最终期约的拒绝理由。不过，这并不影响所有包含期约正常的拒绝操作。

`)