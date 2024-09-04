import { logSpace } from "../../lib/utils.js";

console.log(`
    4.1.1 动态属性

        对引用值而言，可以随时添加、修改和删除其属性
    和方法。

    `);
let person = new Object();
person.name = "Nicholas";
// Nicholas
console.log(person.name);

logSpace();

console.log(`
        原始值不能有属性，给原始值添加属性不会报错，但是也不能访问到。
    `);
let name = "Nicholas";
// TypeError: Cannot create property 'age' on string 'Nicholas'
// name.age = 26;
// undefined
console.log(name.age);
