import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.2.4.4.串行期约合成

      基于后续期约使用之前期约的返回值来串联期约上期约的基本功能。这很像
    函数合成，将多个函数合成一个函数。
`);

function addTwo(x) { return x + 2; };
function addThree(x) { return x + 3; };
function addFive(x) { return x + 5; };

function addTen(x) {
  return Promise.resolve(x)
    .then(addTwo)
    .then(addThree)
    .then(addFive)
}
// 18
addTen(8).then(console.log);

logSpace();

// 使用 Array.prototype.reduce() 可以写成更简洁的形式：
function addTen1(x) {
  return [addTwo, addThree, addFive].reduce((promise, fn) => promise.then(fn), Promise.resolve(x));
}
// 18
addTen1(8).then(console.log);

logSpace();

// 通用函数，把任意多个函数作为处理程序合成一个连续值的期约连锁
function compose(...fns) {
  return (x) => fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x));
}
let addTen2 = compose(addTwo, addThree, addFive);
// 18
addTen2(8).then(console.log)