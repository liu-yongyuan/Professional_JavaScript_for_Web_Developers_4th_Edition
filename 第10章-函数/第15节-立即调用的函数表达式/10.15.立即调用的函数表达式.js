import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.15 立即调用的函数表达式

      立即调用的函数表达式（IIFE）是一个在定义时立即执行的 JavaScript 函数。
`);
(function () {
  // 块级作用域
  console.log("立即执行的函数表达式");
})();

logSpace();

// IIFE
(function () {
  /*
    模拟块级作用域，变量 i 不会泄露到全局作用域
   */
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
})();
// console.log(i); // ReferenceError: i is not defined

logSpace();

// 使用 IIFE 锁定参数值
let divs = [1, 2, 3, 4, 5];
for (var i = 0; i < divs.length; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  })(i);
}

logSpace();

