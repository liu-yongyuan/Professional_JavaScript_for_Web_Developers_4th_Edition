import { logSpace } from "../../lib/utils.js";

console.log(`

    8.4.4.3 抽象基类

        抽象类的实现方式。通过 new.target 保存通过 new 关键字调用
    的类或函数。通过在实例化时检测 new.target 是不是抽象基类，可以阻止对抽象基类的实例化

`);

class Vehicle {
    constructor() {
        console.log(new.target);

        if (new.target === Vehicle) {
            throw new Error(`Vehicle cannot be directly instantiated`);
        }
    }
}

class Bus extends Vehicle {}

try {
    // 这里先输出了 new.target 于是会输出被初始化的对象实例
    // [class Bus extends Vehicle]
    // Bus {}
    console.log(new Bus());

    // [class Vehicle]
    console.log(new Vehicle());
} catch (error) {
    // Vehicle cannot be directly instantiated
    console.log(error.message);
}

logSpace();

console.log(`

        另外，通过在抽象基类构造函数中进行检查，可以要求派生类必须定义某个方法。因为原型方法
    在调用类构造函数之前就以及存在了，所以可以通过 this 关键字来检查相应的方法。

`);
// 抽象基类
class Vehicle1 {
    constructor() {
        if (new.target === Vehicle1) {
            throw new Error(`Vehicle cannot be directly instantiated`);
        }
        if (!this.foo) {
            throw new Error(`Inheriting class must define foo()`);
        }

        console.log("success");
    }
}

// 派生类
class Bus1 extends Vehicle1 {
    foo() {}
}

// 派生类
class Van extends Vehicle1 {}

try {
    // success
    new Bus1();

    new Van();
} catch (error) {
    // Inheriting class must define foo()
    console.log(error.message);
}
