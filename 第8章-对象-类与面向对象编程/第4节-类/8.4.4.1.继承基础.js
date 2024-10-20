import { logSpace } from "../../lib/utils.js";

console.log(`

    8.4.4.1 继承基础

        ES6 类支持单继承。使用 extends 关键字，就可以继承任何拥有[[Construct]]和原型的对象。
    很大程度上，这意味着不仅可以继承一个类，也可以继承普通的构造函数。

`);

class Vehic {}

// 继承类
class Bus extends Vehic {}

let bus1 = new Bus();
// true
console.log(bus1 instanceof Bus);
// true
console.log(bus1 instanceof Vehic);

logSpace();

function Person() {}

// 继承普通构造函数
class Engineer extends Person {}

let e = new Engineer();
// true
console.log(e instanceof Engineer);
// true
console.log(e instanceof Person);

logSpace();

console.log(`

        类和原型上定义的方法都会带到派生类上，this 的值会反映调用相应方法的实例或者类

`);
class Vehicle1 {
    identityPrototype(id) {
        console.log(id, this);
    }

    static identityClass(id) {
        console.log(id, this);
    }
}

class Bus1 extends Vehicle1 {}

let v1 = new Vehicle1();
let b1 = new Bus1();

// bus Bus1 {}
b1.identityPrototype("bus");
// vehicle Vehicle1 {}
v1.identityPrototype("vehicle");

logSpace();

// bus [class Bus1 extends Vehicle1]
Bus1.identityClass("bus");
// vehicle [class Vehicle1]
Vehicle1.identityClass("vehicle");

// 也可以在表达式中使用 extends 关键字
let Bar = class extends Vehicle1{}