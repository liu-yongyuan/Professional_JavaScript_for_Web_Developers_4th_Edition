import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.16.1 静态私有变量

      私有作用域定义私有变量和函数，这样定义的变量和函数对于实例是不可见的。这种技末称为静态私有变量（static private variables）。
`);
(function () {
  let privateVariable = 10;

  function privateFunction() {
    return false;
  }

  // 构造函数
  function MyObject() { }

  // 公有/特权方法
  MyObject.prototype.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  };
})();

logSpace();

(function () {
  let name = "Nicholas";

  Person = function (value) {
    name = value;
  }

  Person.prototype.getName = function () {
    return name;
  };

  Person.prototype.setName = function (value) {
    name = value;
  };

})();
let person1 = new Person();
console.log(person1.getName()); // "Nicholas"
person1.setName("Greg"); 
console.log(person1.getName()); // "Greg"

let person2 = new Person();
console.log(person1.getName()); // "Greg"
console.log(person2.getName()); // "Greg"