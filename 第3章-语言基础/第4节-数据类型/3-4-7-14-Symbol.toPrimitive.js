import { logSpace } from "../../lib/utils.js";

console.log(`
    
        14、Symbol.toPrimitive
        一个方法，该方法将对象转换为响应的原始值，
    由 ToPrimitive 抽象操作使用。很多内置擦送做都会尝试强制
    将对象转换为原始值，包括字符串、数值和未指定的原始类型。

    `);
class Foo {}
let foo = new Foo();
console.log(3 + foo);
console.log(3 - foo);
console.log(String(foo));
logSpace();

class Bar {
    constructor() {
        this[Symbol.toPrimitive] = function (hint) {
            switch (hint) {
                case "number":
                    return 3;
                case "string":
                    return "string bar";
                case "default":
                default:
                    return "default bar";
            }
        };
    }
}
let bar = new Bar();
// 3default bar
console.log(3 + bar);
// 0
console.log(3 - bar);
// string bar
console.log(String(bar));
