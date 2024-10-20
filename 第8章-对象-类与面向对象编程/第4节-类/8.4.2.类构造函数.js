import { logSpace } from "../../lib/utils.js";

console.log(`

    8.4.1 类构造函数

        constructor 关键字用于在类定义块内部创建类的构造函数。方法名 constructor 会告诉解释器
    在使用 new 操作符创建类的新实例时，应该调用这个函数。构造函数的定义不是必需的，不定义构造函数
    相当于将构造函数定义为空函数。

`);

console.log(`

        1. 实例化
        使用 new 操作符实例化 Person 的操作符等于使用 new 调用构造函数。
        使用 new 调用类的构造函数会执行如下操作。
        （1）在内存中创建一个新对象。
        （2）这个新对象内部[[Prototype]]指针被赋值为构造函数的 prototype 属性。
        （3）构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
        （4）执行构造函数内部的代码（给新对象添加属性）
        （5）如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

`);
class Animal {}

class Person {
    constructor() {
        console.log("person ctor");
    }
}

class Vegetable {
    constructor() {
        this.color = "orange";
    }
}

let a = new Animal();

// person ctor
let p = new Person();

let v = new Vegetable();
// orange
console.log(v.color);

logSpace();

console.log(`

        类实例化时传入的参数会用作构造函数的参数。如果不需要参数，则类名后面的括号也是可选的。

`);

class Person1 {
    constructor(name) {
        console.log(arguments.length);
        this.name = name ?? null;
    }
}

let p1 = new Person();
console.log(p1.name);

logSpace();

let p2 = new Person();
console.log(p2.name);

logSpace();

let p3 = new Person("Jake");
console.log(p3.name);

logSpace();

console.log(`

        类构造函数于构造函数的主要区别是，即调用类构造函数必需使用 new 操作符。而普通构造函数如果
    不使用 new 调用，那么就会以全局的 this 作为内部对象。调用类构造函数时如果忘记了使用 new
    则会抛出错误。

`);
try {
    let a1 = Person();
} catch (error) {
    // Class constructor Person cannot be invoked without 'new'
    console.log(error.message);
}

logSpace();

console.log(`

        类构造函数没有什么特殊之处，实例化之后，它会称为普通的实例方法。因此，实例化之后可以在
    实力上引用它

`);

// person ctor
let p5 = new Person();

// person ctor
let p6 = new p5.constructor();