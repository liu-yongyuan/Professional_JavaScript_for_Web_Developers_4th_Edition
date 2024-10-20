import { logSpace } from "../../lib/utils.js";

console.log(`

    8.3.4 原型式继承

        即使不自定义类型也可以通过原型实例对象之间的信息共享。

`);

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

let person = {
    name: "Nicholast",
    friends: ["Shelby", "Court", "Van"],
};

let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barble");

// Greg
console.log(anotherPerson.name);
// Linda
console.log(yetAnotherPerson.name);
// [ 'Shelby', 'Court', 'Van', 'Rob', 'Barble' ]
console.log(person.friends);

logSpace();

console.log(`

        ECMAScript 5 通过增加 Object.create() 方法将原型式继承的概念规范化了。这个方法接收两个参数：
    作为新对象原型的对象，以及给新对象定义额外属性的对象（第二个可选）。在只有一个参数时，
    Object.create() 与 object() 方法效果相同

`);

person = {
    name: "Nicholast",
    friends: ["Shelby", "Court", "Van"],
};

anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barble");

// Greg
console.log(anotherPerson.name);
// Linda
console.log(yetAnotherPerson.name);
// [ 'Shelby', 'Court', 'Van', 'Rob', 'Barble' ]
console.log(person.friends);

logSpace();

console.log(`

        Object.create() 的第二个参数与 Object.defineProperties() 的第二个参数一样：每个新增
    属性都通过鸽子的描述符来描述。以这种方式添加的属性会遮蔽原型对象上的同名属性

`);

person = {
    name: "Nicholast",
    friends: ["Shelby", "Court", "Van"],
};
anotherPerson = Object.create(person, {
    name: {
        value: "Greg",
    },
});
// Greg
console.log(anotherPerson.name);


console.log(`

        原型式继承非常适合不需要单独创建构造函数，但仍然需要在对象间共享信息的场合。但要记住，
    属性中包含的引用值始终会在相关对象间共享，跟使用原型模式是一样的。

`)