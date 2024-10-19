import { logSpace } from "../../lib/utils.js";

console.log(`

    8.3.1.3 关于方法

        子类有时候需要覆盖父类的方法，或者增加费雷没有的方法。为此，这些方法必须在原型赋值之后
    再添加到原型上。

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

// 继承 SuperType
SubType.prototype = new SuperType();

// 新方法
SubType.prototype.getSubValue = function () {
    return this.subproperty;
};

// 覆盖已有的方法
SubType.prototype.getSuperValue = function () {
    return false;
};

let instance = new SubType();
// false
console.log(instance.getSuperValue());

logSpace();

console.log(`

        在上面的代码中，加粗的部分涉及两个方法。第一个方法 getSubValue() 是 SubType 的新方法，
    而第二个方法 getSuperValue() 是原型链上已经存在但在这里被遮蔽的方法。后面再 SubType 实例
    上调用 getSuperValue() 时调用的时这个方法。而 SuperType 的实例仍然会调用最初的方法。
    重点在于上述两个方法都是把原型赋值为 SuperType 的实例之后定义的。

        另一个重点是，以对象字面量方式创建原型方法会破坏之前的原型链，因为这相当于重写了原型链。

`);

SubType.prototype = {
    getSubValue() {
        return this.subproperty;
    },
};

instance = new SubType();
// TypeError: instance.getSuperValue is not a function
console.log(instance.getSuperValue());

console.log(`

        子类的原型在被赋值为 SuperType 的实例后，又被一个对象字面量覆盖了。
    覆盖后的原型是一个 Object 的实例，而不再是 SuperType 的实例。因此之前的原型链就断了。
    SubType 和 SuperType 之间也没有关系了。

`);
