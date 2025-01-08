import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.5 默认参数值

        ECMAScript 6 支持显式定义默认参数了。只要在函数定义中的参数后面用 = 就可以为参数赋一个默认值。
`);

function makeKing(name = 'Henry', age = 0) {
    console.log(`King ${name} is ${age} years old`);
} 
makeKing('Richard', 32); // King Richard is 32 years old

makeKing(); // King Henry is 0 years old

logSpace();

console.log(`
  默认参数作用域与暂时性死区
    定义默认值实际上跟使用 let 关键字顺序声明变了一样。
    `);

function makeCity(name = 'London', country = 'England') {
    console.log(`City ${name}`);
    console.log(`Country ${country}`);
}