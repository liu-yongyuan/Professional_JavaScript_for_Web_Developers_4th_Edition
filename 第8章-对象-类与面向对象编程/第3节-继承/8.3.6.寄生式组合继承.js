import { logSpace } from "../../lib/utils.js";

console.log(`

    8.3.6 寄生式组合继承

        组合继承其实也存在效率问题。最主要的效率问题就是父类构造函数始终会被调用两次：一次是在
    创建子类原型时调用，另一次是在子类构造函数中调用。本质上，子类原型最终是要包含超累对象的所
    有实例属性，子类构造函数只要在执行时重写自己的原型就行了。

`);
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    // 第二次调用 SuperType
    SuperType.call(this, name);
    this.age = age;
}

// 第一次调用 SuperType()
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    console.log(this.age);
};

let subType = new SubType("Matt", 28);
// Matt
subType.sayName();
// 28
subType.sayAge();

logSpace();

console.log(`

        有两组 name 和 colors 属性：一组在实例上，另一组在 SubType 的原型上。这是
    调用两次 SuperType 构造函数的结果。

        寄生式组合继承通过盗用构造函数继承属性，但使用混合式原型链继承方法。基本思路是不通过调
    用父类构造函数给予子类原型赋值，而是取得父类原型的一个副本。说到底就是使用寄生式继承来继承父类
    原型，然后将返回的新对象赋值给子类原型，寄生式组合继承的基本模式如下所示：

`);

function inheritPrototype(subType, superType) {
    // 创建对象
    let prototype = Object.create(superType.prototype);
    // 增强对象
    prototype.constructor = subType;
    // 赋值对象
    subType.prototype = prototype;
}

function SuperType1(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType1.prototype.sayName = function () {
    console.log(this.name);
};

function SubType1(name, age) {
    SuperType1.call(this, name);

    this.age = age;
}

inheritPrototype(SubType1, SuperType1);

SubType1.prototype.sayAge = function () {
    console.log(this.age);
};

let subType1 = new SubType1("Matt", 28);
// 28
subType1.sayAge();
// Matt
subType1.sayName();
