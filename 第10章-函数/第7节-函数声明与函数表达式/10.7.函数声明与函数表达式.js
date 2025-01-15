import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.7 函数声明与函数表达式

        函数声明和函数表达式之间的主要区别在于它们的名称标识符将如何被解析。
    函数声明的名称标识符将会被添加到当前作用域中，而函数表达式的名称标识符将会被添加到函数所在的作用域中。

    JavaScript 引擎在解析代码时会进行函数声明提升，这意味着在执行代码之前会先读取函数声明。
    函数表达式不会进行函数声明提升，因此必须先定义后使用。
`);

console.log(sum(10, 10)); // 20
function sum(num1, num2) {
  return num1 + num2;
}

logSpace();

try {
  console.log(sum1(10, 10)); // ReferenceError: Cannot access 'sum1' before initialization
  let sum1 = function (num1, num2) {
    return num1 + num2;
  }
} catch (error) {
  console.log(error);
}