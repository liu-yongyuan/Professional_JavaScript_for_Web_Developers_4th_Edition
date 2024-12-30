import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.3.5 数据绑定与可观察对象

      通过代理可以把运行时中原本不相关的部分联系到一起。这样就可以实现各种模式，从而让不同的
    代码互操作。
      比如，可以将被代理的类绑定到一个全局实例集合，让所有创建的实例都添加到这个集合中：
`);
const userList = [];

class User {
  constructor(name) {
    this.name_ = name;
  }
}

const proxy = new Proxy(User, {
  construct() {
    const newUser = Reflect.construct(...arguments);
    userList.push(newUser);
    return newUser;
  }
});

new proxy('John');
new proxy('Jacob');
new proxy('Jingleheimerschmidt');

console.log(userList);

logSpace();


const userList1 = [];

function emit(newValue) {
  console.log(newValue);
}
const userListProxy = new Proxy(userList1, {
  set(target, property, value, receiver) {
    const result = Reflect.set(...arguments);
    if (result) {
      emit(Reflect.get(target, property, receiver))
    }
    return result;
  }
});
userListProxy.push('John');

userListProxy.push('Jacob');