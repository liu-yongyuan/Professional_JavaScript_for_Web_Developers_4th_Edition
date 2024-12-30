import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.10 isExtensible()

        isExtensible()捕获器会在 Object.isExtensible() 方法中被调用。对应的反射 API 方法为
    Reflect.isExtensible()
`);
const myTarget = {};

const proxy = new Proxy(myTarget, {
  isExtensible(target) {
    console.log('isExtensible()');
    return Reflect.ownKeys(...arguments);
  }
});

Object.isExtensible(proxy);

logSpace();

Reflect.isExtensible(proxy)