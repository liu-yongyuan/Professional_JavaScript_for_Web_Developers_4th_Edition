import { logSpace } from "../../lib/utils.js";

console.log(`
    
    9.1.3 捕获器参数和反射API

        所有捕获器都可以访问相应的参数，基于这些参数可以重建被捕获方法的原始行为。比如，get
    捕获器会接收到目标对象、要查询的属性和代理对象的三个参数。

`);
const target = {
  foo: 'bar'
};

const handler = {
  get(trapTarget, property, receiver) {
    console.log(trapTarget === target);
    console.log(property);
    console.log(receiver === proxy);
  }
}

const proxy = new Proxy(target, handler);

proxy.foo;
// true
// foo
// true

logSpace();

console.log(`

    有了这些参数，就可以重建被捕获方法的原始行为：

`);
const target1 = {
  foo: 'bar'
}
const handler1 = {
  get(trapTarget, property, receiver) {
    return trapTarget[property];
  }
}
const proxy1 = new Proxy(target1, handler1);
/* 
bar
bar */
console.log(proxy1.foo);
console.log(target1.foo)

logSpace();

console.log(`

      处理程序对象中所有可捕获的方法都有对应的反射（Reflect）API方法。这些方法与捕获器拦截
    的方法具有相同的名称和函数签名，而且也具有与被拦截方法相同的行为。因此，使用反射 API 也可以
    像下面这样定义出空代理对象：

`);

const target2 = {
  foo: 'bar'
};

const handler2 = {
  get() {
    return Reflect.get(...arguments);
  }
};
const proxy2 = new Proxy(target2, handler2);
console.log(proxy2.foo);

logSpace();

console.log(`

    更简洁一些的写法
`);
const target3 = {
  foo: 'bar'
}
const handler3 = {
  get: Reflect.get
}
const proxy3 = new Proxy(target3, handler3);
// bar
console.log(proxy3.foo);

logSpace();

console.log(` 捕获所有方法，然后将每个方法转发给对应反射 API 的空代理示例：`)
const target4 = {
  foo: 'bar'
}
const proxy4 = new Proxy(target4, Reflect);
// bar
console.log(proxy4.foo)

logSpace();

console.log(`

    反射 API 代理属性样板代码，在属性被访问前进行修饰示例，

`);
const target5 = {
  foo: 'bar',
  baz: 'qux'
};
const handler5 = {
  get(trapTarget, property, receiver){
    let decoration = '';
    if(property === 'foo'){
      decoration = '！！！';
    }
    return Reflect.get(...arguments) + decoration;
  }
}
const proxy5 = new Proxy(target5, handler5);
// bar！！！
// bar
console.log(proxy5.foo);
console.log(target5.foo);

// qux
// qux
console.log(proxy5.baz);
console.log(target5.baz);
