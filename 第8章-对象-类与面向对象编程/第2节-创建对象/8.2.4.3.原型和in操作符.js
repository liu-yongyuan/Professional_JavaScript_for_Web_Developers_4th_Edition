import { logSpace } from "../../lib/utils.js";

console.log(`

    8.2.4.3 原型和 in 操作符

        有两种方式使用 in 操作符：单独使用和 for-in 循环中使用。在单独使用时，in操作符会在可
    以通过对象访问指定属性时返回 true，无论该属性时在实例上还是在原型上。

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

// false
console.log(person1.hasOwnProperty("name"));
// true
console.log("name" in person1);

logSpace();

person1.name = "Greg";
// Greg
console.log(person1.name);
// true
console.log(person1.hasOwnProperty("name"));
// true
console.log("name" in person1);

logSpace();

// Nicholas
console.log(person2.name);
// false
console.log(person2.hasOwnProperty("name"));
// true
console.log("name" in person2);

logSpace();

delete person1.name;
// Nicholas
console.log(person1.name);
// false
console.log(person1.hasOwnProperty("name"));
// true
console.log("name" in person1);

logSpace();

console.log(`
        
        要确定某个属性是否存在于原型上，则可以像下面这样同时使用
    hasOwnProperty() 和 in 操作符
`);

/**
 * 确定对象上的原型是否存在指定属性
 * @param {*} object
 * @param {*} name
 * @returns
 */
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && name in object;
}

// true
console.log(hasPrototypeProperty(person1, "name"));

person1.name = "Matt";
// false，实例属性遮蔽了原型属性
console.log(hasPrototypeProperty(person1, "name"));

logSpace();

console.log(`

        在 for-in 循环中使用 in 操作符时，可以通过对象访问且可以被枚举的属性都会返回，包括实例
    属性和原型属性。遮蔽原型中不可枚举（[[Enumerable]]特性被设置为 false）属性的实例属性也会
    在 for-in 循环中返回，因为默认情况下开发者定义的原型的属性都是可枚举的。

        要获取对象上所有可枚举的实力属性，可以使用 Object.keys() 方法。这个方法接收一个对象作为
    参数，返回包含该对象所有可枚举属性名称的字符串数组。
`);

let prototypeKeys = Object.keys(Person.prototype);
// [ 'name', 'age', 'job', 'sayName' ]
console.log(prototypeKeys);

logSpace();

let p1 = new Person();
p1.name = "Matt";
p1.age = 28;
// [ 'name', 'age' ]
console.log(Object.keys(p1));

logSpace();

console.log(`

        如果想要列出所有实例属性，无论是否可以枚举，都可以使用 Object.getOwnPropertyNames()

`);

// [ 'constructor', 'name', 'age', 'job', 'sayName' ]
console.log(Object.getOwnPropertyNames(Person.prototype));

console.log(`

        不可枚举的属性 constructor。Object.keys() 和 Object.getOwnPropertyNames()
    在适当的时候都可以用来代替 for-in 循环。

        在 ECMAScript 6 新增符号类型之后，相应地出现了增加一个 Object.getOwnPropertyNames()
    的兄弟方法的需求，因为以符号为键的属性没有名称的概念。因此 Object.getOwnProperty-Symbols()
    方法就出现了，这个方法与 Object.getOwnPropertyNames() 类似，只是针对符号而已。
`);
let k1 = Symbol("k1");
let k2 = Symbol("k2");
let o = {
    [k1]: "k1",
    [k2]: "k2",
};
// [ Symbol(k1), Symbol(k2) ]
console.log(Object.getOwnPropertySymbols(o));
logSpace();

// []
console.log(Object.getOwnPropertyNames(o));
