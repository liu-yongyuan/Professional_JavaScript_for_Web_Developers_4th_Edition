import { logSpace } from "../../lib/utils.js";

console.log(`
    
    3.7 函数
        ECMAScript 中的函数使用 function 关键字声明，后跟一组参数，
    然后是函数体。基本语法：

        function functionName(arg0, arg1, ...argN){
            statement
        }

    `);

function sayHi(name, message) {
    console.log(`Hello ${name}, ${message}`);
}
sayHi("Nicholas", "how are you today?");

logSpace();

console.log(`

        ECMAScript 中的函数不需要指定是否返回值。任何函数在任何时间
    都可以使用 return 语句来返回函数的值，用法是后跟返回的值。

    `);
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 2));

logSpace();

console.log(`

        只要触发 return 语句，函数就会立即停止执行退出。因此，
    return 语句后面的代码不会被执行。

    `);
// test 1...
function test1() {
    console.log("test 1...");
    return;
    console.log("test 1.. sxa");
}
test1();
