import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.16 私有变量

      私有变量的概念。任何定义在函数或块中的变量，都可以认为是私有的，因为在这个函数或块外部是无法访问的。
`);
function add(sunmand, addend) {
  let sum = sunmand + addend;
  return sum;
}

logSpace();

console.log(`
      特权方法（privileged method）是能够访问函数私有变量（及私有函数）的公有方法。
    在对象上有两种方法创建特权方法。
  `);

// 第一种是在构造函数中实现
function MyObject() {
  // 私有变量和私有函数
  let privateVariable = 10;
  function privateFunction() {
    return false;
  }

  // 特权方法
  this.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  };
}
let obj = new MyObject();
console.log(obj.publicMethod()); // false

logSpace();

// 第二种是在私有作用域中定义特权方法
function Person(name) {
  this.getName = function () {
    return name;
  };
  this.setName = function (value) {
    name = value;
  };
}
let person = new Person('Nicholas');
console.log(person.getName()); // Nicholas
person.setName('Greg');
console.log(person.getName()); // Greg