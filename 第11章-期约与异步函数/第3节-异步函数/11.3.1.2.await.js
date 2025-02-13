import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.3.1.2.await

      await 关键字必须在异步函数中使用，不能在顶级上下文如 script 标签或模块中使用。
    不过，定义并立即调用异步函数是没有问题的。
`);
async function foo() {
  console.log(await Promise.resolve('foo'));
}
// foo
foo();

logSpace();

// 立即调用的异步函数表达式
(async function () {
  // IIFE
  console.log(await Promise.resolve('IIFE'))
})();

logSpace();

// 一些会出错的例子i
// try {
//   function foo(){
//     const syncFn = () => {
// SyntaxError: Unexpected reserved word
//       return await Promise.resolve('foo');
//     };

//     console.log(syncFn())
//   }
// } catch (error) {
  
// }