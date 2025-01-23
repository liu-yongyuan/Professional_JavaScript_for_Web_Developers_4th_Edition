import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.11 函数表达式

    使用 function 声明函数会提升函数声明，而使用函数表达式则不会提升函数声明。

`);
let functionName = function() {
  console.log("functionName");
}