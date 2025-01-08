import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.2 函数名

        函数名是指向函数的指针。一个函数可以有多个名称。
`);
function sum(a, b) {
  return a + b;
}

let sum2 = sum;
sum = null;

console.log(sum2(10, 10)); // 20

logSpace();

console.log(`

    ECMAScript 6 的所有函数对象都会暴露一个只读的 name 属性。

  `);
function foo() { };
let bar = function () { };
let baz = () => { };
console.log(foo.name); // foo
console.log(bar.name);  // bar
console.log(baz.name); // baz
console.log((function () { }).name); // 空字符串
console.log((() => { }).name); // 空字符串
console.log((new Function()).name); // anonymous
logSpace();

console.log(`
  获取函数、设置函数或者使用 bind() 实例化，那么标志符签名会加上一个前缀
  `);

console.log(foo.bind().name); // bound foo
console.log((function () { }).bind().name); // bound <anonymous>

let dog = {
  years: 1,
  get age() {
    return this.years;
  },
  set age(value) {
    this.years = value;
  }
}

let propertyDescriptor = Object.getOwnPropertyDescriptor(dog, 'age');
console.log(propertyDescriptor.get.name); // get age
console.log(propertyDescriptor.set.name); // set age

logSpace();