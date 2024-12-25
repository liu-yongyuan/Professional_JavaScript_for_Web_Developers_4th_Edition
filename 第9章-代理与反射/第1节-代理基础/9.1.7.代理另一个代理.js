import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.1.7 代理另一个代理
      在一个目标对象之上构建多层拦截网。

`);
const target = {
  foo: 'bar'
}

const firstProxy = new Proxy(target, {
  get() {
    console.log('firstProxy');
    return Reflect.get(...arguments);
  }
})

const secondProxy = new Proxy(firstProxy, {
  get() {
    console.log('secondProxy');
    return Reflect.get(...arguments);
  }
});

// 会依次打印 firstProxy 、 secondProxy 和 bar
console.log(secondProxy.foo); // secondProxy