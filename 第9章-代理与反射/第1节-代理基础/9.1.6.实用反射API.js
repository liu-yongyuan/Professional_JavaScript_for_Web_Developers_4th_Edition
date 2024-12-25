import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.1.6 实用反射API

`);

logSpace();

console.log(`

    1.反射 API 与对象 API
      在使用反射 API 时，要记住：
      - 反射 API 并部限于捕获处理程序。
      - 大多数反射 API 方法在 Object 类型上有对应的方法。
      通常，Object 上的方法适用于通用程序，而反射方法适用于细粒度的对象控制欲操作。

  `);


logSpace();

console.log(`
    2.状态标记
      很多反射方法返回称作“状态标记”的不二之，表示意图执行的操作是否成功。
      以下反射方法都会提供状态标记：
      - Reflect.defineProperty()
      - Reflect.preventExtensions()
      - Reflect.set()
      - Reflect.deleteProperty()
`);

logSpace();

console.log(`
    3.用一等函数替代操作符
      以下反射方法提供只有通过操作符才能完成的操作。
      - Reflect.get()：可以替代对象属性访问操作符。
      - Reflect.set()：可以替代 = 赋值操作符。
      - Reflect.has()：可以替代 in 操作符或 with
      - Reflect.deleteProperty()：可以替代 delete 操作符
      - Reflect.construct()：可以替代 new 操作符

`);

logSpace();

console.log(`
    4.安全地调用方法
      在通过 apply 方法调用函数时，被调用的函数可能也定义了自己的 apply 属性。
    为绕过这个问题，可以使用定义在 Function 原型上的 apply 方法，比如：
      Function.prototype.apply.call(Math.floor, undefined, [1.75]);
      这种可怕的代码完全可以使用 Reflect.apply 来避免：
      Reflect.apply(Math.floor, undefined, [1.75]);
`);