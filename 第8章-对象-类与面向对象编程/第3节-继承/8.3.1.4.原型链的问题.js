import { logSpace } from "../../lib/utils.js";

console.log(`

    8.3.1.4 原型链的问题

        原型链虽然是实现继承的强大工具，但它也有问题。
        主要问题出现在原型中包含引用值的时候。

`);
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {}

SubType.prototype = new SuperType();

let instance1 = new SubType();
instance1.colors.push("black");
// [ 'red', 'blue', 'green', 'black' ]
console.log(instance1.colors);

logSpace();

let instance2 = new SubType();
// [ 'red', 'blue', 'green', 'black' ]
console.log(instance2.colors);

logSpace();

console.log(`

        原型链的第二个问题是，子类型在实例化时不能给父类型的构造函数传参。事实上，我们无法在不
    影响所有对象实例的情况下把参数传进父类的构造函数。再加上之前的原型中包含引用值的问题，
    就导致原型链基本不会被单独使用。

`);
