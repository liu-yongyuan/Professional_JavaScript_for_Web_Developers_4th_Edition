import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.7 ownKeys()

        ownKyes()捕获器会在 Object.keys() 及类似方法中被调用。对应的反射 API 方法为
    Reflect.ownKeys()
`);
const myTarget = {};

const proxy = new Proxy(myTarget, {
  ownKeys(target) {
    console.log('ownKeys()');
    return Reflect.ownKeys(...arguments);
  }
});
Object.getOwnPropertyNames(proxy);

logSpace();

Object.getOwnPropertySymbols(proxy);

logSpace();

Object.keys(proxy);

logSpace();

Reflect.ownKeys(proxy)