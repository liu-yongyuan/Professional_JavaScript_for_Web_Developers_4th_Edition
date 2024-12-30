import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.3.1 跟踪属性访问

        通过捕获 get、set 和 has 等曹祖宗，可以知道对象属性什么时候被访问、被查询。把实现相应捕获
    器等某个对象代理放到应用中，可以监控这个对象何时在何处被访问过：
`);
const user = {
  name: 'Jake'
};

const proxy = new Proxy(user, {
  get(target, property, receiver) {
    console.log(`Getting ${property}`);
    return Reflect.get(...arguments)
  },
  set(target, property, value, receiver) {
    console.log(`Setting ${property}=${value}`)
    return Reflect.set(...arguments)
  }
});

proxy.name;

logSpace();

proxy.age = 27;