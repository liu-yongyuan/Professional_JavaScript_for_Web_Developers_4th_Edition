import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.6 deleteProperty()

        deleteProperty()捕获器会在 delete 操作符中被调用。返回非布尔值会被转型为布尔值。
`);
const myTarget = {};

const proxy = new Proxy(myTarget, {
  deleteProperty(target, property) {
    console.log('deleteProperty()');
    return Reflect.deleteProperty(...arguments);
  }
});

delete proxy.foo;

logSpace();

delete proxy['foo']