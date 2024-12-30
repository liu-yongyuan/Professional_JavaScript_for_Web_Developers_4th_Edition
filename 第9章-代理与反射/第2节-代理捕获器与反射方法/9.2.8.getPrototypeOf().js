import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.8 getPrototypeOf()

        getPrototypeOf()捕获器会在 Object.getPrototypeOf() 及类似方法中被调用。对应的反射 API 方法为
    Reflect.getPrototypeOf()
`);
const myTarget = {};

const proxy = new Proxy(myTarget, {
  getPrototypeOf(target) {
    console.log('getPrototypeOf()');
    return Reflect.ownKeys(...arguments);
  }
});

Object.getPrototypeOf(proxy);

logSpace();

Reflect.getPrototypeOf(proxy);

logSpace();

proxy.__proto__;

logSpace();

Object.prototype.isPrototypeOf(proxy);

logSpace();

Object.prototype.isPrototypeOf.apply(proxy);

logSpace();

proxy instanceof Object;

logSpace();

console.log(String.prototype.includes.apply("bAc", ['A']));
