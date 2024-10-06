import { logSpace } from "../../lib/utils.js";

console.log(`
    
    8.1.3 读取属性的特性

      使用 Object.getOwnPropertyDescriptor() 方法可以取得指定属性的描述符。这个方法
    接收两个参数：属性所在的对象和要取得其描述符的属性名。返回值是一个对象，对于访问器属性
    包含 configurable、enumerable、get 和 set 属性，对于数据属性包含 configurable、
    enumerable、writable 和 value 属性。比如：
`);
let book = {};
Object.defineProperties(book, {
    year_: {
        value: 2017,
        enumerable: true,
        writable: true,
        configurable: true,
    },
    edition: {
        value: 1,
        enumerable: true,
        writable: true,
        configurable: true,
    },
    year: {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        },
    },
});
let descriptor = Object.getOwnPropertyDescriptor(book, "year_");
// 2017
console.log(descriptor.value);
// true
console.log(descriptor.configurable);
// undefined
console.log(typeof descriptor.get);

logSpace();

descriptor = Object.getOwnPropertyDescriptor(book, "year");
// undefined
console.log(descriptor.value);
// false
console.log(descriptor.enumerable);
// function
console.log(typeof descriptor.get);

logSpace();

console.log(`

        对于数据属性 year_，value 等原来的值，configurable 是 false，get 是 undefined。
    对于访问器属性 year，value 是 undefined，enumerable 是 false，get 是一个指向获取函数的指针。

        ECMAScript 2017 新增了 Object.getOwnPropertyDescriptors() 静态方法。这个方法实际上
    会在每个自有属性上调用 Object.defineProperties() 并在一个新对象中返回它们。对于前面的例子，
    使用这个静态方法会返回如下对象：

`);
/* 
{
  year_: { value: 2017, writable: true, enumerable: true, configurable: true },
  edition: { value: 1, writable: true, enumerable: true, configurable: true },
  year: {
    get: [Function: get],
    set: [Function: set],
    enumerable: false,
    configurable: false
  }
}
 */
console.log(Object.getOwnPropertyDescriptors(book));
