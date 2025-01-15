import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.6.2 收集参数

        ECMAScript 6 还引入了收集参数（gather parameters）的概念，这是一种更简洁的表示函数的可变参数的方法。
`);
function getSum(...values) {
  return values.reduce((acc, cur) => acc + cur, 0);
}

console.log(getSum(1, 2, 3)); //6

logSpace();

function ignoreFirst(first, ...rest) {
  console.log(rest);
}

ignoreFirst(); // []
ignoreFirst(1); // []
ignoreFirst(1, 2); // [2]
ignoreFirst(1, 2, 3); // [2, 3]

logSpace();

let getSum1 = (...rest) => {
  return rest.reduce((acc, cur) => acc + cur, 0);
}
console.log(getSum1(1, 2, 3)); // 6