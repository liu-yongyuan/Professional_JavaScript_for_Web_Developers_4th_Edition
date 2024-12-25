import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.1.8 代理的不足

`);

logSpace();

console.log(`
    1.代理中的 this
    代理潜在的问题之一是 this 的处理。在代理中，this 的值是由调用代码决定的，而不是由代理决定的。
`);
const target = {
  thisValEqualsProxy() {
    return this === proxy;
  }
}
const proxy = new Proxy(target, {});
console.log(target.thisValEqualsProxy()); // false
console.log(proxy.thisValEqualsProxy()); // true

logSpace();

const wm = new WeakMap();
class User {
  constructor(userId) {
    wm.set(this, userId);
  }
  get id() {
    return wm.get(this);
  }
}
const user = new User(123);
console.log(user.id); // 123

const userInstanceProxy = new Proxy(user, {});
console.log(userInstanceProxy.id); // undefined

logSpace();

console.log(`

    这是因为 User 实例的 id 访问器属性的 get 方法中的 this 值是 userInstanceProxy，而不是 user。
  要解决这个问题，就需要重新分配代理设置。把代理 User 实例改为代理 User 类本身，之后再创建代理的实例
  就会以代理实例作为 WeakMap 的键，而不是代理本身。

`);
const UserClassProxy = new Proxy(User, {});
const userProxy = new UserClassProxy(123);
console.log(userProxy.id); // 123

logSpace();

console.log(`
    2.代理与内部槽位
    代理无法访问对象的内部槽位，因此无法代理内置对象的行为。
    例如 Date 类型。Date 类型的实例有一个内部槽位 [[NumberDate]]，存储了日期的时间戳。
  代理对象上不存在这个内部槽位，而且这个内部槽位的值也不能通过普通的 get() 和 set() 操作访问到，
  于是代理拦截后本应转发给目标对象的方法会抛出 TypeError 错误。
`);

const targetDate = new Date();
const dateProxy = new Proxy(targetDate, {});
console.log(proxy instanceof Date); // true
try {
  console.log(dateProxy.getDate()); // TypeError: this is not a Date object.
} catch (error) {
  console.log(error);
}
try {
  console.log(dateProxy.getTime()); // TypeError: this is not a Date object.
} catch (error) {
  console.log(error);
}