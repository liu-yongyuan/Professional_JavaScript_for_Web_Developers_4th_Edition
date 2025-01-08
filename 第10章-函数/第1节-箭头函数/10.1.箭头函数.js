import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.1 箭头函数

        ECMAScript 6 新增了使用胖箭头（=>）语法定义函数表达式的能力。
        任何可以使用函数表达式的地方，东欧可以使用箭头函数。
`);

let arrowSum = (a, b) => {
  return a + b;
}
console.log(arrowSum(1, 2)); // 3

let functionExpressionSum = function (a, b) {
  return a + b;
}
console.log(functionExpressionSum(1, 2)); // 3

logSpace();

let ints = [1, 2, 3, 4, 5];
console.log(ints.map(function (i) { return i + 1; })); // [2, 3, 4, 5, 6]
console.log(ints.map((i) => { return i + 1 })); // [2, 3, 4, 5, 6]

logSpace();

let doubleIt = (x) => { return x * 2 };
let triple = x => { return x * 3 };

logSpace();

// no parameters
let getRandom = () => Math.random();

// multiple parameters
let sum = (a, b) => a + b;

logSpace();

console.log(`
    箭头函数不能使用 arguments、super 和 new.target，也不能用作构造函数。
    此外，箭头函数页没有 prototype 属性。
  `)