import { logSpace } from "../../lib/utils.js";

console.log(`
    
    8.1 理解对象

        创建自定义对象的通常方式是创建 Object 的一个新实例，然后再给它添加属性和方法，如下例
    所示：
    
`);
let person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
person.sayName = function () {
    console.log(this.name);
};
// Nicholas
person.sayName();

let namex = person.sayName;
/* 
在浏览器中为兜底对象 window
this.name => this 由于没有 name 属性，因此 undefined

在 Chrome V8 中为兜底对象 globalThis
this.name => this 为 globalThis，会报错 TypeError: Cannot read properties of undefined (reading 'name')
 */
// namex();

logSpace();

let person2 = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    },
};
// Nicholas
person2.sayName();