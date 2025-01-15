import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.9.3 caller

      该属性引用的是调用当前函数的函数，如果是在全局作用域中调用的则为 null
`);
function outer() {
  inner();
}
function inner() {
  // ƒ outer() {
  //   inner();
  // }
  console.log(inner.caller);
}

outer();


