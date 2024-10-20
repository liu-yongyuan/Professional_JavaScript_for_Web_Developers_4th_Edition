import { logSpace } from "../../lib/utils.js";

console.log(`

    8.4.3.4 非函数原型和类成员

        虽然类定义并不显示支持在原型或类上添加成员数据，但在类定义外部，可以手动添加

`);
class Person {
    sayName() {
        console.log(`${Person.greeting} ${this.name}`);
    }
}

// 在类上定义数据成员
Person.greeting = "My name is";

Person.prototype.name = "Jake";

let p = new Person();
// My name is Jake
p.sayName();