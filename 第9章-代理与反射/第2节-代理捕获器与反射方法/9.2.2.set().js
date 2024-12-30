import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.2 set()

        set()捕获器会在设置属性值的操作中被调用。对应的反射 API 为 Reflect.set()
`);
const myTarget = {};

const proxy = new Proxy(myTarget, {
  set(target, property, newValue, receiver) {
    console.log('set()');
    return Reflect.set(...arguments);
  }
})
proxy.foo = 'bar';

logSpace();

proxy['foo'] = 'bar';

logSpace();

Object.create(proxy)['foo'] = 'bar';

logSpace();

// Reflect.set(proxy, property, value, receiver);
