import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.1.5 可撤销代理

      中断代理对象与目标对象的联系。

      Proxy 也暴露了 revocable() 静态方法，用于创建可撤销代理。

`);

const target = {
  foo: 'bar'
}

const handler = {
  get() {
    return 'intercepted'
  }
}

const { proxy, revoke } = Proxy.revocable(target, handler);
console.log(proxy.foo); // intercepted
revoke();
console.log(proxy.foo); // TypeError: Cannot perform 'get' on a proxy that has been revoked