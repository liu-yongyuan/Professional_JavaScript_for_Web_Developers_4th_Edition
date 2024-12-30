import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.3.4 函数与构造函数参数验证

      跟保护和验证对象属性类似，也可以对函数和构造函数参数进行审查。比如，可以让函数只接收某种
    类型的值：
`);
function median(...nums) {
  return nums.sort()[Math.floor(nums.length / 2)];
}

const proxy = new Proxy(median, {
  apply(target, thisArg, argArray) {
    for (const arg of argArray) {
      if (typeof arg !== 'number') {
        throw 'Non-number argument provided';
      }
    }
    return Reflect.apply(...arguments);
  }
});

try {
  console.log(proxy(4, 7, 1));
} catch (error) {
  console.error(error)
}

logSpace();

try {
  console.log(proxy(4, '7', 1))
} catch (error) {
  console.error(error)
}

logSpace();

class User {
  constructor(id) {
    this._id = id;
  }
}
const UserProxy = new Proxy(User, {
  construct(target, argumentsList, newTarget) {
    if (argumentsList[0] === undefined) {
      throw 'User cannot be instantiated without id';
    }
    return Reflect.construct(...arguments)
  }
});

try {
  new UserProxy(1);
} catch (error) {
  console.error(error)
}

logSpace();

try {
  new UserProxy();
} catch (error) {
  console.error(error)
}