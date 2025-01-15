import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.10 函数属性与方法

      函数的对象，有属性和方法。每个函数都有两个属性：length 和 prototype。其中，
    length 属性保存函数定义的命名参数的个数，而 prototype 属性保存一个对象的引用。
`);
function sayName(name) {
  console.log(name);
}

function sum(num1, num2) {
  return num1 + num2;
}

function sayHi() {
  console.log("hi");
}

console.log(sayName.length); // 1
console.log(sum.length); // 2
console.log(sayHi.length); // 0

logSpace();

console.log(`
  
    函数还有两个方法：apply() 和 call()。这两个方法的用途都是在特定的作用域中调用函数

  `);
function callSum1(num1, num2) {
  return sum.apply(this, arguments);
}

function callSum2(num1, num2) {
  return sum.call(this, num1, num2);
}

console.log(callSum1(10, 10)); // 20
console.log(callSum2(10, 10)); // 20

logSpace();

console.log(`

    bind()。会创建一个新的函数实例，其 this 值会被绑定到传给 bind() 函数的值。

  `);
window.color = "red";
let o = { color: "blue" };
function sayColor() {
  console.log(this.color);
}

let objectSayColor = sayColor.bind(o);
objectSayColor(); // blue