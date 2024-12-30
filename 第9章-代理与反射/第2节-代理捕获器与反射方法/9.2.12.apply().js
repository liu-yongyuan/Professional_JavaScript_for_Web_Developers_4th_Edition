import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.12 apply()

        apply()捕获器会在调用函数中被调用。对应的反射 API 方法为 Reflect.apply()
`);
const myTarget = () => { };

const proxy = new Proxy(myTarget, {
  apply(target, thisArg, argArray) {
    console.log('apply()');
    return Reflect.apply(...arguments);
  }
});

proxy();

logSpace();

Function.prototype.apply(proxy, []);

logSpace();

Function.prototype.call(proxy);

logSpace();

Reflect.apply(proxy, [], []);