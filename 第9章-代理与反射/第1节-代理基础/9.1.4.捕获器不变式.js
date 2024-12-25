import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.1.4 捕获器不变式

        “捕获器不变式”（trap invariant）。这是指捕获器的一种约束，即防止捕获器
    出现过于反常的行为。
      比如，如果目标对象有一个不可配置切不可写的数据属性，那么在捕获器返回一个与
    该属性不同的值时，会抛出 TypeError

`);
const target = {};
Object.defineProperty(target, 'foo', {
  configurable: false,
  writable: false,
  value: 'bar'
});

const handler = {
  get() {
    return 'qux'
  }
}

// TypeError: 'get' on proxy: property 'foo' is a read-only and non-configurable data
//  property on the proxy target but the proxy did not return its actual value (expected 'bar' but got 'qux')

const proxy = new Proxy(target, handler);
console.log(proxy.foo)