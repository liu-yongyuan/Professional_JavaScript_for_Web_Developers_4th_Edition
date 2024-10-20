import { logSpace } from "../../lib/utils.js";

console.log(`

    8.3.3

        组合继承（有时候也叫伪经典继承）综合了原型链和盗用构造函数，将两者的优点集中了起来。
    基本的思路时使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。这样既可以
    把方法定义在原型上以实现重用，又可以让每个实例都有自己属性。

`);
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    // 继承属性
    SuperType.call(this, name);

    this.age = age;
}

// 继承方法
SubType.prototype = new SuperType();

SubType.prototype.sayAge = function () {
    console.log(this.age);
};

let instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
// [ 'red', 'blue', 'green', 'black' ]
console.log(instance1.colors);
// Nicholas
instance1.sayName();
// 29
instance1.sayAge();

logSpace();

let instance2 = new SubType("Greg", 29);
// [ 'red', 'blue', 'green' ]
console.log(instance2.colors);
// Greg
instance2.sayName();
// 29
instance2.sayAge();

logSpace();

console.log(`

        组合继承弥补了原型链和盗用构造函数的不足，是 JavaScript 中使用最多的继承模式。而且
    组合继承也保留了 instanceof 操作符和 isPrototypeOf() 方法识别合成对象的能力。

`);
