import { logSpace } from "../../lib/utils.js";

console.log(`

    8.2.4.1 理解原型

        无论合适，只要创建一个函数，就会按照特定的规则为这个函数创建一个 prototype 属性（指向
    原型对象）。默认情况下，所有原型对象自动获得一个名为 constructor 的属性，指回与之关联的构
    造函数。对前面的例子而言，Person.prototype.constructor 指向 Person。然后，因构造函数
    而异，可能会给原型对象添加其他属性和方法。

        在自定义构造函数时，原型对象默认只会得到 constructor 属性，其他的所有方法都继承自
    Object。每次调用构造函数创建一个新实例，这个实例的内部[[Prototype]]指针就会被赋值为构造
    函数的原型对象。脚本中没有这个[[Prototype]]特性的标准方式，但是 Firefox，Safari 和 Chrome
    会在每个对象上暴露 __proto__ 属性，通过这个属性可以访问对象的原型。在其他实现中，这个特性
    完全被因此了。关键在于理解这一点：实例与构造函数原型之间有直接的联系，但实例与构造函数之
    间没有。

`);

/**
 * 构造函数可以是函数表达式
 * 也可以是函数声明，因此以下两种形式都可以
 *
 *  function Person(){}
 *  let Person = function() {}
 *
 */
function Person() {}

/**
 * 声明之后，构造函数就有了一个
 * 与之关联的原型对象
 */
console.log(typeof Person.prototype);

console.log(Person.prototype);

logSpace();

/**
 * 如前所述，构造函数有一个 prototype 属性
 * 引用其原型对象，而这个原型对象也有一个
 * constructor 属性，引用这个构造函数
 * 换句话说，两者循环引用
 */
// true
console.log(Person.prototype.constructor === Person);

logSpace();

/**
 * 正常的原型链都会终止于 Object 的原型对象
 * Object 原型的原型是 null
 */
// true
console.log(Person.prototype.__proto__ === Object.prototype);
// true
console.log(Person.prototype.__proto__.constructor === Object);
// true
console.log(Person.prototype.__proto__.__proto__ === null);

logSpace();

// {}
console.log(Person.prototype.__proto__);

logSpace();

let person1 = new Person(),
    person2 = new Person();

/**
 * 构造函数，原型对象和实例
 * 是 3 个完全不同的对象
 */
// true
console.log(person1 !== Person);
// true
console.log(person1 !== Person.prototype);
// true
console.log(Person.prototype !== Person);

logSpace();

/**
 * 实例通过 __proto__ 链接到原型对象，
 * 它实际上指向藏特性 [[Prototype]]
 *
 * 构造函数通过 prototype 属性链接到原型对象
 *
 * 实例与构造函数没有直接联系，与原型对象有直接联系
 */
// true
console.log(person1.__proto__ === Person.prototype);

// true
console.log(person1.__proto__.constructor === Person);

logSpace();

/**
 * 同一个构造函数创建的两个实例
 * 共享同一个原型对象
 */
// true
console.log(person1.__proto__ === person2.__proto__);

logSpace();

/**
 * instanceof 检查实例的原型链中
 * 是否包含指定构造函数的原型
 */
// true
console.log(person1 instanceof Person);
// true
console.log(person1 instanceof Object);
// true
console.log(Person.prototype instanceof Object);

logSpace();

/**
 * 虽然不是所有实现都对外暴露 [[Prototype]]，但可以使用 isPrototypeOf() 方法确定两个对象
 * 之间的这种关系。本质上 isPrototypeOf() 会在传入参数的 [[Prototype]] 指向调用它的对象
 * 时返回 true
 */
// true
console.log(Person.prototype.isPrototypeOf(person1));
// true
console.log(Person.prototype.isPrototypeOf(person2));
// false
console.log(String.prototype.isPrototypeOf(person1));

logSpace();

console.log(`

        对于前面例子中的 Person 构造函数和 Person.prototype 各个对象之间的关系。
    Person.prototype 指向原型对象，而 Person.prototype.constructor 指回 Person 构造函数。
    原型对象包含 constructor 属性和其他后来添加的属性。

        ECMAScript 的 Object 类型有一个方法叫 Object.getPrototypeOf()，返回参数的内部特性
    [[Prototype]]的值

`);

// true
console.log(Object.getPrototypeOf(person1) === Person.prototype);

Person.prototype.name = "Matt";
// Matt
console.log(Object.getPrototypeOf(person1).name);

logSpace();

console.log(`

        Object 类型还有一个 setPrototypeOf() 方法，可以向实例的私有特性[[Protoype]]写入一
    个新值。这样可以重写一个对象的原型继承关系

`);
let biped = {
    numLegs: 2,
};

let person3 = {
    name: "Matt",
};

Object.setPrototypeOf(person3, biped);

// Matt
console.log(person3.name);
// 2
console.log(person3.numLegs);
// true
console.log(Object.getPrototypeOf(person3) === biped);

logSpace();

console.log(`

        Object.setPrototypeOf() 可能会严重影响代码性能。

        为避免使用 Object.setPrototypeOf() 可能造成的性能下降，可以通过 Object.create() 来创
    建一个新的对象，同时为其指明原型

`);

let person4 = Object.create(biped);
person4.name = "Matt";

// Matt
console.log(person4.name);
// 2
console.log(person4.numLegs);
// true
console.log(Object.getPrototypeOf(person4) === biped);
