import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.3.3 属性验证

      因为所有赋值操作都会触发 set() 捕获器, 所以可以根据所赋的值决定是允许还是拒绝赋值：
`);
const target = {
  onlyNumberGoHere: 0
};

const proxy = new Proxy(target, {
  set(target, property, value) {
    if (typeof value !== 'number') {
      return false;
    }
    return Reflect.set(...arguments);
  }
});

proxy.onlyNumberGoHere = 1;
console.log(proxy.onlyNumberGoHere);

logSpace();

proxy.onlyNumberGoHere = '2';
console.log(proxy.onlyNumberGoHere);