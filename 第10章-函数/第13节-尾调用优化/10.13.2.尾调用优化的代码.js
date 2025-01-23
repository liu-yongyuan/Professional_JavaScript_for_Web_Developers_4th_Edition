import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.13.2 尾调用优化的代码

`);
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
// console.log(fib(1000)); // RangeError: Maximum call stack size exceeded

/*
上面代码不符合为尾调用优化的条件，因为返回语句中有一个相加的操作，所以不会进行尾调用优化。

解决方法可以把递归改写成迭代循环形式。
 */
function fib2(n) {
  return fibIter(0, 1, n);
}
function fibIter(a, b, n) {
  if (n === 0) {
    return a;
  }
  return fibIter(b, a + b, n - 1);
}
console.log(fib2(100)); // 354224848179262000000
console.log(fib2(1000)); // 4.346655768693743e+208