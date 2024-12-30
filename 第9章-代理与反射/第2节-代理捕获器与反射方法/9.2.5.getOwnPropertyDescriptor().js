import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.2.5 getOwnPropertyDescriptor()

        getOwnPropertyDescriptor()捕获器会在 Object.getOwnPropertyDescriptor() 中被调用。
    对应的反射 API 为 Reflect.getOwnPropertyDescriptor();
`);

const target = {};

const proxy = new Proxy(target, {
  getOwnPropertyDescriptor(target, property){
    console.log('getOwnPropertyDescriptor()');
    return Reflect.getOwnPropertyDescriptor(...arguments);
  }
});

Object.getOwnPropertyDescriptor(proxy, 'foo');

