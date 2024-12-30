import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.4 defineProperty()

        defineProperty()捕获器会在 Object.defineProperty 中被调用。对应的反射 API 为 
    Reflect.defineProperty()
`);
const myTarget = {};

const proxy = new Proxy(myTarget, {
  defineProperty(target, property, descriptor) {
    console.log('defineProperty()');
    return Reflect.defineProperty(...arguments);
  }
});

Object.defineProperty(proxy, 'foo', { value: 'bar' });

logSpace();

