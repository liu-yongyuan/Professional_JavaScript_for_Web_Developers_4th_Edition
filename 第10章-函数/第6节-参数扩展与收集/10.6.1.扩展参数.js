import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.6.1 扩展参数

        ECMAScript 6 引入了扩展参数（rest parameters）的概念，这是一种更简洁的表示函数的可变参数的方法。
`);
let values = [25, 50, 75, 100];

function getSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(getSum.apply(null, values)); // 250

logSpace();

console.log(getSum(...values)); // 250

logSpace();

console.log(getSum(...values, 125)); // 375

logSpace();

console.log(getSum(125, ...values)); // 375

logSpace();

function getProduct(a, b, c = 1) {
  return a * b * c;
}

let getSum1 = (a, b, c = 0) => {
  return a + b + c;
}

console.log(getProduct(...[1, 2])); // 2

console.log(getProduct(...[1, 2, 3])); // 6

logSpace();

console.log(getSum1(...[1, 2])); // 3

console.log(getSum1(...[1, 2, 3])); // 6