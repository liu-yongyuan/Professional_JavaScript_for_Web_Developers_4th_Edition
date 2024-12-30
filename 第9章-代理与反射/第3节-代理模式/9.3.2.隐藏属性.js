import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.3.2 隐藏属性

        代理的内部实现对外部代码说不可见，因此要隐藏目标对象上的属性也轻而易举。比如：
`);
const hiddenProperties = ['foo', 'bar'];

const targetObject = {
  foo: 1,
  bar: 2,
  baz: 3,
};

const proxy = new Proxy(targetObject, {
  get(target, property) {
    if (hiddenProperties.includes(property)) {
      return undefined;
    }
    return Reflect.get(...arguments);
  },
  has(target, property) {
    if (hiddenProperties.includes(property)) {
      return false;
    }
    return Reflect.has(...arguments)
  }
});

// get();
console.log(proxy.foo);
console.log(proxy.bar);
console.log(proxy.baz);

logSpace();

console.log('foo' in proxy);
console.log('bar' in proxy);
console.log('baz' in proxy);