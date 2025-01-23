import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.14.1 this 对象

      如果在内部函数没有使用箭头函数定义，则 this 对象会在运行时绑定到执行函数的上下文。如果在全局函数中调用，
    则 this 在非严格模式下等于 window，在严格模式下为 undefined。如果在对象方法中调用，则 this 等于调用方法的对象。
    匿名函数在这种情况下不会绑定到某个对象，这意味着 this 会指向全局对象。

`);
window.identity = "The Window";

let object = {
  identity: "My Object",
  getIdentityFunc() {
    return function () {
      return this.identity;
    };
  }
}

console.log(object.getIdentityFunc()()); // "The Window"

logSpace();


console.log(`
      每个函数在被调用时都会自动创建两个特殊变量：this 和 arguments。内部函数永远不能访问外部函数的这两个变量。
    但是，如果把 this 保存到必包可以访问的另一个变量中，则是可以的。
`);

let object2 = {
  identity: "My Object",
  getIdentityFunc() {
    let that = this;
    return function () {
      return that.identity;
    };
  }
}
console.log(object2.getIdentityFunc()()); // "My Object"