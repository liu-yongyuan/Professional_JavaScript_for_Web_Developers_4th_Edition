import { logSpace } from "../../lib/utils.js";

console.log(`

    8.4.2.3 原型方法与访问器

        为了在实例间共享方法，类定义语法把类块中定义的方法作为原型方法。

`);
class Person {
    constructor() {
        // 添加到 this 的所有内容都会存在于不同的实例上
        this.locate = () => console.log("instance");
    }

    // 在类块中定义的所有内容都会定义在类的原型上
    locate() {
        console.log("prototype");
    }
}

let p = new Person();
// instance
p.locate();

// prototype
Person.prototype.locate();

logSpace();

console.log(`

        可以把方法定义在类构造函数中或者类块中，但不能在类块中给原型添加原始值或对象
    作为成员数据

`);
/* 
SyntaxError: Unexpected identifier 'name'

class Person1 {
    name: "Jake"
}
 */

logSpace();

console.log(`

        类方法等同于对象属性，因此可以使用字符串、符号或计算的值作为建

`);

const symbolKey = Symbol("symbolKey");

class Person2 {
    stringKey() {
        console.log("invoked stringKey");
    }

    [symbolKey]() {
        console.log("invoked symbolKey");
    }

    ["computed" + "Key"]() {
        console.log("invoked computedKey");
    }
}

let p2 = new Person2();
// invoked stringKey
p2.stringKey();
// invoked symbolKey
p2[symbolKey]();
// invoked computedKey
p2.computedKey();

logSpace();

console.log(`

        类定义也支持获取和设置访问器。语法与行为跟普通对象一样。

`);
class Person3 {
    set name(newName) {
        this.name_ = newName;
    }
    get name() {
        return this.name_;
    }
}
let p3 = new Person3();
p3.name = "Jake";
// Jake
console.log(p3.name);

logSpace();
