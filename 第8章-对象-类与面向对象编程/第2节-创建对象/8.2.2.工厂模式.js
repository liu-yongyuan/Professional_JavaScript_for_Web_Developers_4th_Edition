import { logSpace } from "../../lib/utils.js";

console.log(`

    8.2.2 工厂模式

        工厂模式是一种众所周知的涉及模式，广泛应用于软件工程领域，用于抽象创建特定对象的过程。
    下面的例子展示了一种按照特定接口创建对象的方式

`);

function createPerson(name, age, job) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}

let person1 = createPerson("Nicholas", 29, "Software Engineer");
console.log(person1);

logSpace();

let person2 = createPerson("Greg", 27, "Doctor");
console.log(person2);

logSpace();

console.log(`

        通过工厂模式虽然可以创建多个类似对象的问题，但没有解决对象标识问题（即创建
    的对象是什么类型）。

`);
