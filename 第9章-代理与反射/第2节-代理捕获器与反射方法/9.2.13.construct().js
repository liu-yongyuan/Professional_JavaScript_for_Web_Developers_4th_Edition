import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.13 construct()

        construct()捕获器会在 new 操作符中被调用。对应的反射 API 方法为 
    Reflect.construct()
`);
const myTarget = function () { };

const proxy = new Proxy(myTarget, {
  construct(target, argumentsList, newTarget) {
    console.log('construct()');
    return Reflect.construct(...arguments);
  }
});

new proxy;

logSpace();

const newTarget = function () { };
Reflect.construct(proxy, [], newTarget);