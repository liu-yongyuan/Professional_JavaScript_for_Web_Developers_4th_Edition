import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.9.1 arguments

      arguments 是类数组对象，包含调用函数时传入的所有参数。arguments 对象还有个 callee 属性，是一个指向
    arugments 对象所在函数的指针。
`);
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * arguments.callee(num - 1);
}

console.log(factorial(10)); //3628800
console.log(factorial(5)); //120

logSpace();

let trueFactorial = factorial;

factorial = function () {
  return 0;
}

console.log(trueFactorial(5)); // 120
console.log(factorial(5)); // 0