import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.3 has()

        has()捕获器会在 in 操作中被调用。对应的反射 API 为 Reflect.has()
`);
const myTarget = {};

const proxy = new Proxy(myTarget, {
  has(target, property) {
    console.log('has()');
    return Reflect.has(...arguments);
  }
});

'foo' in proxy;

logSpace();

'foo' in Object.create(proxy);

logSpace();

// with(proxy){('foo');} // foo

logSpace();

// Reflect.has(proxy, property)