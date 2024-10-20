import { logSpace } from "../../lib/utils.js";

console.log(`

    8.3.5 寄生式继承

        与原型式继承比较接近的一种继承方式是寄生式继承（parasitic inheritance），也是 Crockford 首倡的
    一种模式。寄生式继承背后的思路类似于寄生构造函数和工厂模式：创建一个实现继承的函数，以某种方式增强对象
    然后返回这个对象。基本的寄生式继承模式如下：

`);
function createAnother(original) {
    let clone = Object.create(original);
    clone.sayHi = function () {
        console.log("hi");
    };
    return clone;
}

let person = {
    name: "Nicholast",
    friends: ["Shelby", "Court", "Van"],
};

let anotherPerson = createAnother(person);
// hi
anotherPerson.sayHi();

console.log(`

        寄生式继承同样适合主要关注对象，而不在乎类型和构造函数的常见。Object.create()函数不是寄生式
    继承所必需的，任何返回新对象的函数都可以在这里使用。

        注意：通过寄生式继承给对象添加函数会导致函数难以重用，与构造函数模式类似。

`);
