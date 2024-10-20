import { logSpace } from "../../lib/utils.js";

console.log(`

    8.4.3.3 静态类方法

        可以在类上定义静态方法。这些方法通常用于执行不特定于实例的操作，也不要求存在类的实例。
    与原型成员类似，每个类上只能有一个静态成员。

        静态类成员在类定义中使用 static 关键字作为前缀。在静态成员中，this 引用类自身。
    其他所有约定跟原型成员一样。

`);
class Person {
    constructor() {
        // 添加到 this 的所有内容都会存在于不同的实例上
        this.locate = () => console.log("instance", this);
    }

    // 定义在类的原型对象上
    locate() {
        console.log("prototype", this);
    }

    // 定义在类本身上
    static locate() {
        console.log("class", this);
    }
}
let p = new Person();

// instance Person { locate: [Function (anonymous)] }
p.locate();

// prototype {}
Person.prototype.locate();

// class [class Person]
Person.locate();

logSpace();

console.log(`

        静态类方法非常适合作为实例工厂：

`);

class Person1 {
    constructor(age) {
        this.age_ = age;
    }

    sayAge() {
        console.log(this.age_);
    }

    static create() {
        // 使用随机年龄创建并返回一个 Person 实例
        return new Person1(Math.floor(Math.random() * 100));
    }
}

// Person1 { age_: 76 }
console.log(Person1.create());
