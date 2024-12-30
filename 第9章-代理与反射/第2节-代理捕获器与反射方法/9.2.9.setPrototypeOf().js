import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.9 setPrototypeOf()

        setPrototypeOf()捕获器会在 Object.setPrototypeOf() 方法中被调用。对应的反射 API 方法为
    Reflect.setPrototypeOf()
`);
const myTarget = {};

const proxy = new Proxy(myTarget, {
  setPrototypeOf(target) {
    console.log('setPrototypeOf()');
    return Reflect.ownKeys(...arguments);
  }
});

Object.setPrototypeOf(proxy, {});

logSpace();

Reflect.setPrototypeOf(proxy, {})