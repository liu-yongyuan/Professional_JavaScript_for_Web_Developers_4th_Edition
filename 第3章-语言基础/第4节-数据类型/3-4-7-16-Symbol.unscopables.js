import { logSpace } from "../../lib/utils.js";

console.log(`
    
        16、Symbol.unscopables
        一个对象，该对象所有的以及继承的属性都会从关联对象的
    with 环境绑定中排除。设置符号为 true 就可以阻止该属性
    出现在 with 环境绑定中

    `);
let o = { foo: "bar" };
with (o) {
    // bar
    console.log(foo);
}

logSpace();

o[Symbol.unscopables] = {
    foo: true,
};

with (o) {
    // Uncaught ReferenceError: foo is not defined
    console.log(foo);
}
