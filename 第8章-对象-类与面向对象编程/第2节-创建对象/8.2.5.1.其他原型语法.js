import { logSpace } from "../../lib/utils.js";

console.log(`

    8.2.5.1 其他原型语法

        通过一个包含所有属性和方法的对象字面量来重写原型是一种常见的作法。

        
`);

function Person() {}

/* 
等价于：

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    console.log(this.name);
};

 */
Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    },
};

let person = new Person();
// true
console.log(person instanceof Object);
// true
console.log(person instanceof Person);

logSpace();

console.log(`

        Person.prototype 被设置为等于一个通过对象字面量创建的新对象。最终结果
    是一样的，只有一个问题：重写之后 Person.prototype 的 constructor 属性就不指向 Person 了。
    在创建函数时，也会创建它的 prototype 对象，同时会自动给这个原型的 construct 属性赋
    值。而上面的写法完全重写了默认的 prototype 对象，因此 constructor 属性也指向了完全不同
    的新对象（Object 构造函数），不再指向原来的构造函数。虽然 instanceof 操作符还能可靠的返回
    值，但不能依靠 constructor 属性来识别类型了。

`);

// true
console.log(person.constructor === Object);
// false
console.log(person.constructor === Person);

console.log(`

        constructor 属性现在等于 Object 而不是 Person 了。如果 constructor 的值很重要，可以
    在重写 prototype 属性时专门设置一下它的值。

`);
Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    },
};

let person2 = new Person();

// true
console.log(person2.constructor === Person);

// 定义的 constructor 会被迭代出来
// [ 'constructor', 'name', 'age', 'job', 'sayName' ]
console.log(Object.keys(Person.prototype));

logSpace();

console.log(`

        注意，以这种方式恢复 constructor 属性会创建一个 [[Enumerable]] 为 true 的属性。
    而原生 constructor 属性默认是不可枚举的。因此，应该使用 Object.defineProperty() 来
    定义 constructor 属性

`);

Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    },
};

Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person,
});

// [ 'name', 'age', 'job', 'sayName' ]
console.log(Object.keys(Person.prototype));
