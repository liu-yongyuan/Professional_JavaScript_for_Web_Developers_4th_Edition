import { logSpace } from "../../lib/utils.js";

console.log(`
    
        15、Symbol.toStringTag
        一个字符串，该字符串用于创建对象的默认字符串描述。
    由内置的 Object.prototype.toString() 使用。
        通过 toString() 获取对象标识时，会检索由 Symbol.toStringTag
    指定的实例标识符，默认为 Object。内置类型已经指定了这个值，但
    自定义类实例还需要明确定义。

    `);
let s = new Set();
// Set(0) {}
console.log(s);
// [object Set]
console.log(s.toString());
// Set
console.log(s[Symbol.toStringTag]);

logSpace();

class Foo {}
let foo = new Foo();
// Foo {}
console.log(foo);
// [object Object]
console.log(foo.toString());
// undefined
console.log(foo[Symbol.toStringTag]);

logSpace();

class Bar {
    constructor() {
        this[Symbol.toStringTag] = "Bar";
    }
}
let bar = new Bar();
// Bar { [Symbol(Symbol.toStringTag)]: 'Bar' }
console.log(bar);
// [object Bar]
console.log(bar.toString());
// Bar
console.log(bar[Symbol.toStringTag]);
