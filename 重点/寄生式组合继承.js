console.log(`

    8.3 继承

        · 原型链
        · 盗用构造函数，call(this, name)，apply(this, [name])
        · 组合继承。原型链+盗用构造函数
        · 原型式继承。Object.create(对象实例)
        · 寄生式继承。在工厂函数内定义需要共享的变量和函数并赋值给 prototype
        · 寄生式组合继承。

`);

/**
 * 寄生式组合继承
 * @param {*} subType 
 * @param {*} superType 
 */
function inheritPrototype(subType, superType) {
    // 原型式继承
    // 创建对象
    let prototype = Object.create(superType.prototype);
    // 增强对象
    prototype.constructor = subType;
    // 赋值对象，原型链继承
    subType.prototype = prototype;
}

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    // 盗用构造函数
    SuperType.call(this, name);

    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
    console.log(this.age);
};

let subType1 = new SubType("Matt", 28);
// 28
subType1.sayAge();
// Matt
subType1.sayName();
