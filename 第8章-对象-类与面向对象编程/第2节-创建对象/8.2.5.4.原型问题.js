import { logSpace } from "../../lib/utils.js";

console.log(`

    8.2.5.4 原型的问题

        原型模式也不是没有问题。首先，它弱化了像构造函数传递初始化参数的能力，会导致所有实例默认
    都取得相同的属性值。虽然这会带来不便，但还不是原型的最大问题。原型的主要问题源自它的共享
    特性。

`);

function Person() {}

Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    },
    friends: ["Shelby", "Court"],
};

let person1 = new Person();

let person2 = new Person();

person1.friends.push("Van");

// [ 'Shelby', 'Court', 'Van' ]
console.log(person1.friends);
// [ 'Shelby', 'Court', 'Van' ]
console.log(person2.friends);
// true
console.log(person1.friends === person2.friends);

console.log(`

        这里 Person.prototype 的 friends 属性。当 person1.friends 通过 push
    添加了一个字符串。由于 friends 属性存在于 Person.prototype 而非 person1 上，
    新加的这个字符串也会在 person2.friends 上反映出来。如果是有意在多个实例间共享
    数组，那么没什么问题。但一般来说，不同的实例应该有属于自己的属性副本。
        这就是实际开发中通常不单独使用原型模式的原因。

`);
