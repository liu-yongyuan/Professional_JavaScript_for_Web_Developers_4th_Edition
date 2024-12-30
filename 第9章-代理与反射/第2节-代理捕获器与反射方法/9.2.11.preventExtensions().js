import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.11 preventExtensions()

        preventExtensions()捕获器会在 Object.preventExtensions() 方法中被调用。对应的反射 API 方法为
    Reflect.preventExtensions()
`);
const myTarget = {};

const proxy = new Proxy(myTarget, {
  preventExtensions(target) {
    console.log('preventExtensions()');
    return Reflect.preventExtensions(...arguments);
  }
});

Object.preventExtensions(proxy);

logSpace();

Reflect.preventExtensions(proxy);