import { logSpace } from "../../lib/utils.js";

console.log(`

    8.3.1.1 默认原型

        默认情况下，所有引用类型都继承自 Object，这也是通过原型链实现的。
    任何函数的默认原型都是一个 Object 的实例，这意味着这个实例又一个内部
    指针指向 Object.prototype。这也是为什么自定义类型能够继承包括 toString()、
    valueOf() 在内的所有默认方法的原型。

        SubType 继承 SuperType，而 SuperType 继承 Object。在调用 instance.toString()
    时，实际上调用的是保存在 Object.prototype 上的方法。

`);