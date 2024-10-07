import { logSpace } from "../../lib/utils.js";

console.log(`

    8.1.6.3 简写方法名

        在给对象定义方法时，通常都要写一个方法名、冒号、然后再引用一个匿名函数表达式

`);
let person = {
    sayName: function (name) {
        console.log(`My name is ${name}`);
    },
};
// My name is Matt
person.sayName("Matt");

logSpace();

console.log(`
    
        新的简写方法的语法遵循同样的模式，但开发者要放弃给函数表达式命名
    
`);
person = {
    sayName(name) {
        console.log(`My name is ${name}`);
    },
};

// My name is Matt
person.sayName("Matt");

logSpace();

person = {
    name_: "",
    get name() {
        return this.name_;
    },
    set name(name) {
        this.name_ = name;
    },
    sayName() {
        console.log(`My name is ${this.name_}`);
    },
};

person.name = "Matt";

// My name is Matt
person.sayName();

logSpace();

console.log(`

        简写方法名和可计算属性键相互兼容

`);
const methodKey = "sayName";

person = {
    [methodKey](name) {
        console.log(`My name is ${name}`);
    },
};

// My name is Matt
person.sayName('Matt');
