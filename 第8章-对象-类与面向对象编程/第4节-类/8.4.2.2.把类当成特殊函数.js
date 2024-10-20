import { logSpace } from "../../lib/utils.js";

console.log(`

    8.4.2.2 把类当成特殊函数

        ECMAScript 中没有正式的类这个类型。从各方面来看，ECMAScript 类就是一种特殊函数。声明一个
    类之后，通过 typeof 操作符检测类标识符，表面它是一个函数。

`);
class Person {}

// [class Person]
console.log(Person);
// function
console.log(typeof Person);

logSpace();

console.log(`

        类标签有 prototype 属性，而这个原型也有一个 constructor 属性指向类自身

`);
// true
console.log(Person === Person.prototype.constructor);

logSpace();

let p = new Person();

console.log(`

        可以使用 instanceof 操作符检查构造函数原型是否存在于实例的原型链中

`);
// true
console.log(p instanceof Person);

logSpace();

console.log(`

        类中定义的 constructor 方法不会被当成构造函数，在对它使用 instanceof 操作符
    时会返回 false。但是，如果创建实例时直接将类构造函数当成普通构造函数来使用，
    那么 instanceof 操作符的返回值就会反转。
`);

let p1 = new Person();
// true
console.log(p1.constructor === Person);
// true
console.log(p1 instanceof Person);
// false
console.log(p1 instanceof Person.constructor);

logSpace();

let p2 = new Person.constructor();
// false
console.log(p2.constructor === Person);
// false
console.log(p2 instanceof Person);
// true
console.log(p2 instanceof Person.constructor);

logSpace();

console.log(`

        类是 JavaScript 的一等公民，因此可以像其他对象或函数引用一样把类作为参数传递：

`);

// 类可以像函数一样在任何地方定义，比如在数组中
let classList = [
    class {
        constructor(id) {
            this.id_ = id;
            console.log(`instance ${this.id_}`);
        }
    },
];

function createInstance(classDefinition, id) {
    return new classDefinition(id);
}

let foo = createInstance(classList[0], 3141);
// { id_: 3141 }
console.log(foo);

logSpace();

// 类名是可选的，类有可以立即实例化
let p3 = new (class Foo {
    constructor(x) {
        console.log(x);
    }
})("bar");
// bar
// Foo {}
console.log(p3);
