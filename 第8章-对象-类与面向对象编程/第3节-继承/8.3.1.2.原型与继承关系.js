import { logSpace } from "../../lib/utils.js";

console.log(`

    8.3.1.2 原型与继承关系

        原型与实例的关系可以通过两种方式来确定。第一种方式是使用 instanceof 操作符，
    如果一个实例的原型中出现过相应的构造函数，则 instanceof 返回 true。

`);
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subproperty;
};

let instance = new SubType();

// true
console.log(instance instanceof Object);
// true
console.log(instance instanceof SuperType);
// true
console.log(instance instanceof SubType);

logSpace();

console.log(`

        从技术上讲，instance 是 Object、SuperType 和 SubType 的实例，因为 instance 的原型链
    中包含这些构造函数的原型。结果就是 instanceof 对所有这些构造函数都返回 true。

        确定这种关系的第二种方式是使用 isPrototypeOf() 方法。原型链中的每个原型都可以调用这个
    方法，如下例所示，只要原型链中包含这个原型，这个方法就返回 true。

`);
// true
console.log(Object.prototype.isPrototypeOf(instance));
// true
console.log(SuperType.prototype.isPrototypeOf(instance));
// true
console.log(SubType.prototype.isPrototypeOf(instance));
