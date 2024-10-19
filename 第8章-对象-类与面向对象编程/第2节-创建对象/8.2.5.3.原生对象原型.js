import { logSpace } from "../../lib/utils.js";

console.log(`

    8.2.5.3 原生对象原型

        原生模式之所以重要，不仅体现在自定义类型上，而且还因为它也是实现所有原生引用类型的模式。
    所有原生引用类型的构造函数（包括 Object、Array、String等）都在原型上定义了实例方法。比如，
    数组实例的 sort() 方法就是在 Array.prototype 上定义的，而字符串包装对象的 substring() 方法
    也是在 String.prototype 上定义的。

`);

// function
console.log(typeof Array.prototype.sort);

// function
console.log(typeof String.prototype.substring);

logSpace();

console.log(`

        通过原生对象的原型可以取得所有默认方法的引用，也可以给原生类型的实例定义新的方法。可以
    修改自定义对象原型一样修改原生对象原型，因此随时可以添加方法。

`);

String.prototype.startsWith = function (text) {
    return this.indexOf(text) === 0;
};

let mess = "hello world!";
// true
console.log(mess.startsWith("hello"));

logSpace();

// false
console.log(String.prototype.endsWith.apply(mess, ["world"]));

// 6
console.log(String.prototype.lastIndexOf.apply(mess, ["world"]));

// true
console.log(String.prototype.endsWith.apply(mess, ["world!"]));

