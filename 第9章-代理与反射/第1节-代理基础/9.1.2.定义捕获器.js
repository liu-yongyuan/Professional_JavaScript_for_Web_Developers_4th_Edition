import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.1.2 定义捕获器

        使用代理的主要目的是可以定义捕获器（trap）。捕获器就是在处理程序对中定义的“基本操作的
    拦截器”。每个处理程序对象可以包含零个或多个捕获器，每个捕获器都可对应一种基本操作，可以直接
    或间接在代理对象上调用。每次在代理对象上调用这些基本操作时，代理可以在这些操作传播对目标对象
    之前先吊用捕获器函数，从而拦截并修改相应的行为。

      例如，可以定义一个 get() 捕获器，在 ECMAScript 操作以某种形式吊用 get() 时触发。下面的
    例子定义了一个 get() 捕获器：

`);
const target = {
    foo: "bar",
};

const handler = {
    // 捕获器在处理程序对象中以方法名为键
    get() {
        return "handler override";
    },
};
const proxy = new Proxy(target, handler);

console.log(`
        这样，当通过哦代理对象执行 get() 操作时，就会触发定义的 get() 捕获器，当然 get() 不是
    ECMAScript 对象可以调用的方法。这个操作在 JavaScript 代码中可以通过多种形式出发并被 get() 捕获
    器拦截到。proxy[property]，proxy.property 或 Object.create(proxy)[property]等操作都会
    触发基本的 get 操作以获取属性。因此所有这些操作只要发生在代理对象上，就会触发 get 捕获器。
    注意，只有在代理i对象上执行这些才会触发捕获器。在目标对象上执行这些操作仍然会产生正常的行为。
 `);

console.log(target.foo);
console.log(proxy.foo);

// bar
// handler override

logSpace();

// bar
// handler override
console.log(target['foo']);
console.log(proxy.foo);

logSpace();

// bar
// handler override
console.log(Object.create(target)['foo']);
console.log(Object.create(proxy)['foo']);