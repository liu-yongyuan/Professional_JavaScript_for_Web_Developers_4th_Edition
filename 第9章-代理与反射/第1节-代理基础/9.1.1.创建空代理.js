import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.1.1 创建空代理

        最简单的代理上空代理，即除了作为一个抽象的目标对象，什么也不做。默认情况下，在代理对象
    上的所有操作都会无障碍地传播到目标对象。因此，在任何可以是哟哦那个目标对象的地方，都可以通过
    同样的方式来使用之与关联的代理对象。

        代理是使用 Proxy 构造函数创建的。这个构造函数接收两个参数：目标对象和处理程序对象。缺
    少其中任何一个参数都会抛出 TypeError。要创建空代理，可以传出一个简单的对象字面量作为处理程序
    对象，从而让所有操作畅通无阻地抵达目标对象。

      如下面的代码所示，在代理对象上执行的任何操作实际上都会应用到目标对象。唯一可以感知的不同
    就是代码中操作的是代理对象。
`);

const target = {
    id: "target",
};

const handler = {};

const proxy = new Proxy(target, handler);

// id 属性会访问同一个值
console.log(proxy.id); // target
console.log(target.id); // target

logSpace();

// 给目标属性赋值会反映在两个对象上
// 因为两个对象访问的是同一个值
target.id = "foo";
console.log(proxy.id); // foo
console.log(target.id); // foo

logSpace();

// 给代理属性赋值也会反映在两个对象上
// 因为这个赋值会转移到目标对象
proxy.id = "bar";
console.log(target.id); // bar
console.log(proxy.id); // bar

logSpace();

// hasOwnProperty() 方法在两个地方
// 都会应用到目标对象
console.log(proxy.hasOwnProperty("id")); // true
console.log(target.hasOwnProperty("id")); // true

logSpace();

// Proxy.prototype 是 undefined
// 因此不能使用 instanceof 操作符
try {
    // TypeError: Function has non-object prototype 'undefined' in instanceof check
    console.log(target instanceof Proxy);
} catch (error) {
    console.error(error);
}
try {
    // TypeError: Function has non-object prototype 'undefined' in instanceof check
    console.log(proxy instanceof Proxy);
} catch (error) {
    console.error(error);
}

logSpace();

// false
console.log(target == proxy);

// false
console.log(target === proxy);
