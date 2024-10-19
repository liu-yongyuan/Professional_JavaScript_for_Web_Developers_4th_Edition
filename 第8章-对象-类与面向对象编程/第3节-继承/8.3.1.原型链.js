import { logSpace } from "../../lib/utils.js";

console.log(`

    8.3.1 原型链

        ECMA-262 把原型链定义为 ECMAScript 的主要继承方式。其基本思想就是通过原型继承多个引用
    类型的属性和方法。

        每个构造函数都有一个原型对象，原型有一个属性指回构造函数，而实例有一个内部指针指向原型。
    如果原型是零一俄国类型的实例呢？那就意味着这个原型本身有一个内部指针指向另一个原型，相应
    地另一个原型页游一个指针指向另一个构造函数。这样就在实例和原型之间构造了一条原型链。这就是
    原型链的基本构想。

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
// false
console.log(instance.getSubValue());

console.log(`
    
        SubType 通过创建 SuperType 的实例并将其赋值给自己的原型 SubType.prototype
    实现了对 SuperType 的继承。这个赋值重写了 SubType 最初的原型，将其替换为 SuperType
    的实例。这意味着 SuperType 实例可以访问的所有属性和方法也会存在于 SubType.prototype

`);

logSpace();

console.log(`

        这个例子中实现继承的关键，是 SubType 没有使用默认原型，而是将其替换成了一个新的对象。
    这个新的对象恰好是 SuperType 的实例。这样一来，SubType 的实例不仅能从 SuperType 的实列
    中继承属性和方法，而且还与 SuperType 的原型挂上了钩，于是 instance（通过内部的[[Prototype]]）
    指向 SubType.prototype，而Subtype.prototype （作为 SuperType 的实例又通过内部的 [[Prototype]]）
    指向 SuperType.prototype。注意，getSuperValue()方法还在 SuperType.prototype 对象上，
    而 prototype 属性则在 SubType.prototype 上。这是因为 getSuperValue() 是一个原型方法，
    而 prototype 是一个实例属性。SubType.prototype 现在是 SuperType 的一个实例，因此 property
    才会存储在它上面。还要注意，由于 SubType.prototype 的 construct 属性被重写为指向
    SuperType，所以 instance.constructor 也指向 SuperType。

        在通过原型链实现继续之后，搜索就可以继承向上，搜索原型的原型。对于前面的例子而言，调用
    instance.getSuperValue() 经过 3 步搜索：instance、SubType.prototype 和 SuperType.prototype
    最后一步才找到这个方法。对数学和方法的搜索回一直持续到原型链的末端。

`);
