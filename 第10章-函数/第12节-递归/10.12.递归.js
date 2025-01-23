import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.12 递归

      递归函数通常的形式是一个函数通过名称调用自己。递归函数有两个条件：基线条件和递归条件。

`);
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

try {
  let anotherFactorial = factorial;
  factorial = null;
  console.log(anotherFactorial(5)); // TypeError: factorial is not a function
} catch (error) {
  console.error(error);
}

try {
  function factorial(num) {
    if (num <= 1) {
      return 1;
    }
    // 严格模式下 arugments.callee 会报错
    return num * arguments.callee(num - 1);
  }
  let anotherFactorial = factorial;
  factorial = null;
  console.log(anotherFactorial(5)); // TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
} catch (error) {
  console.error(error);
}

// 递归函数的最佳实践是使用命名函数表达式
let factorial2 = (function f(num) {
  if (num <= 1) {
    return 1;
  }
  return num * f(num - 1);
});
try {
  let anotherFactorial = factorial2;
  factorial2 = null;
  // 120
  console.log(anotherFactorial(5));
} catch (error) {
  console.error(error);
}