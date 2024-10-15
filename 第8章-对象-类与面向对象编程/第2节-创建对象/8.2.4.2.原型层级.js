import { logSpace } from "../../lib/utils.js";

console.log(`

    8.2.4.2 原型层级

        在通过对象访问属性时，会按照这个属性的名称开始搜索。搜索开始于对象实例本身。如果在这个
    实例上发现了给定的名称，则返回该名称对应的值。如果没有找到这个属性，则搜索会沿着指针进入原
    型对象，然后再原型对象上找到属性后，再返回对应的值。

        虽然可以通过实例读取原型对象上的值，但不能通过实例重写这些值。如果再实例上添加了一个
    与原型对象中同名的属性，那就会再实例上创建这个属性，这个属性会遮住原型对象上的属性。

`);

function Person() {}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    console.log(this.name);
};

let person1 = new Person();
let person2 = new Person();

person1.name = "Greg";
// Greg 来自实例
console.log(person1.name);
// Nicholas 来自原型
console.log(person2.name);

logSpace();

console.log(`

        只要给对象实例添加一个属性，这个属性就会遮蔽（shadow）原型对象上的同名属性，也就是虽然
    不会修改它，但会屏蔽对它的访问。

        使用 delete 操作符可以完全删除实例上的这个属性，从而让标识符解析过程能够继续搜索
    原型对象。

`);

delete person1.name;

// Nicholas
console.log(person1.name);

logSpace();

console.log(`

        hasOwnProperty() 方法用于确定某个属性是再实例上还是再原型对象上。这个方法是继承自 Object
    的，会在属性存在于调用它的对象实例上时返回 true

`);

// false
console.log(person1.hasOwnProperty("name"));

person1.name = "Greg";
// Greg
console.log(person1.name);
// true
console.log(person1.hasOwnProperty("name"));

logSpace();

// Nicholas
console.log(person2.name);
// false
console.log(person2.hasOwnProperty("name"));

logSpace();

delete person1.name;
// Nicholas
console.log(person1.name);
// false
console.log(person1.hasOwnProperty("name"));

logSpace();
