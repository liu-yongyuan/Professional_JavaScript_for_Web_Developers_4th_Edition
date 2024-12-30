import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.1 get()

        get()捕获器会在获取属性值的操作中被调用。对应的反射 API 为 Reflect.get()
`);
const myTarget = {};
const proxy = new Proxy(myTarget, {
  get(target, property, receiver){
    console.log('get()');
    return Reflect.get(...arguments);
  }
});
proxy.foo;

logSpace();

proxy['foo'];

logSpace();

Object.create(proxy).foo;

logSpace();

// Reflect.get(proxy, property, receiver);