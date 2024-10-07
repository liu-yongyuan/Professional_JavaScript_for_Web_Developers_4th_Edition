import { logSpace } from "../../lib/utils.js";

console.log(`

    8.1.6.7 对象解构

        ECMAScript 6 新增了对象解构语法，可以在一条语句中使用嵌套数据实现一个或多个赋值操作。
    简单地说，对象解构就是使用与对象匹配的结构来实现对象属性赋值。

`);

// 不使用对象解构
let person = {
    name: "Matt",
    age: 27,
};
let personName = person.name,
    personAge = person.age;
// Matt 27
console.log(personName, personAge);

logSpace();

let { name: personName1, age: personAge1 } = person;
// Matt 27
console.log(personName1, personAge1);

logSpace();

console.log(`

        使用解构，可以在一个类似对象字面量的结构中，声明多个变量，同时执行多个赋值操作。

`);

let { name, age } = person;

// Matt 27
console.log(name, age);

logSpace();

console.log(`

        解构赋值不一定与对象的属性匹配。赋值的时候可以忽略某些属性，而如果引用的属性不存在，
    则该变量的值就是 undefined

`);
let { name: name1, job } = person;
// Matt undefined
console.log(name1, job);

logSpace();

console.log(`

        也可以在解构赋值的同时定义默认值，这适用于前面刚提到的引用的属性不存在与源对象中情况

`);

let { name: name2, job1 = "Software engineer" } = person;
// Matt Software engineer
console.log(name2, job1);

logSpace();

console.log(`

        解构在内部使用函数 ToObject()把源数据解构转换成对象。这意味着在对象解构的上下文中，
    原始值会被当成对象。这意味着 null 和 undefined 不能被解构，否则会抛出错误。

`);

let { length } = "foobar";
// 6
console.log(length);

logSpace();

let { constructor: c } = 4;
// [Function: Number]
console.log(c);

logSpace();

try {
    let { _ } = null;
    console.log(_);
} catch (e) {}

try {
    let { _ } = undefined;
    console.log(_);
} catch (e) {}

logSpace();

console.log(`

        解构并不要求变量必须在解构表达式中声明。不过，如果是给事先声明的变量赋值，则赋值表达式
    必须包含在一堆括号中。

`);

let personName2, personAge2;

({ name: personName2, age: personAge2 } = person);
// Matt 27
console.log(personName2, personAge2);

logSpace();


