import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.3 理解参数

        ECMAScript 函数的参数在内部表现为一个数组。

        arguments 对象上一个类数组对象（但不是 Array 的实例）。
`);
function sayHi() {
  console.log(`Hello, ${arguments[0]}`);
}

sayHi('Tom'); // Hello, Tom

logSpace();

function howMaynArgs() {
  console.log(arguments.length);
}
howMaynArgs(1, 2, 3); // 3
howMaynArgs();
howMaynArgs(12); // 1

logSpace();