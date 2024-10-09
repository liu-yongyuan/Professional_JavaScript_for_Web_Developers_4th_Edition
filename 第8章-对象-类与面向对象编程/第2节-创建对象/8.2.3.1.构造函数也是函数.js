import { logSpace } from "../../lib/utils.js";

console.log(`

    8.2.3.1 构造函数也是函数

        构造函数与普通函数唯一的区别就是调用方式不同。除此之外，构造函数也是函数，并没有把某个
    函数定义为构造函数的特殊语法。任何函数只要使用 new 操作符调用就是构造函数，而不使用 new 操
    作符调用的函数就是普通函数。

`);

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}

// 作为构造函数
let person = new Person("Nicholas", 29, "Software Engineer");
// Nicholas
person.sayName();

logSpace();

// Person("Greg", 27, "Doctor");
// Greg
// window.sayName();

logSpace();

let o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
// Kristen
o.sayName();

logSpace();

console.log(`

        没有使用 new 操作符调用 Person() 结果会将属性和方法添加到 window 对象。

        在调用一个函数而没有明确设置 this 值的情况下（即没有作为对象的方法调用，或者
    没有使用 call()/apply()），this 始终指向 Global 对象（在浏览器中就是 window 对象）。

`);
