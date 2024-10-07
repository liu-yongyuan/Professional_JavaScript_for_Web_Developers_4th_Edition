import { logSpace } from "../../lib/utils.js";

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}

console.log(`

    8.2.3 构造函数模式

    Person() 构造函数代替了 createPerson() 工厂函数。实际上，Person() 内部
的代码跟 createPerson() 基本是一样的，只是有如下区别。

    · 没有显式地创建对象。
    · 属性和方法直接赋值给了 this。
    · 没有 return。

    另外，要注意函数名 Person 的首字母大写了。按照管理，构造函数名称的首字母都是要大写的，
非构造函数则以小写字母开头。这是从面向对象编程语言哪里借鉴的，有助于在 ECMAScript 中区分构造
函数和普通函数。毕竟 ECMAScript 的构造函数就是能创建对象的函数。

    要创建 Person 的实例，应使用 new 操作符。以这种方式调用构造函数会执行如下操作。
    （1）在内存中创建一个新对象。
    （2）这个新对象内部的[[Prototype]]特性被赋值为构造函数的 prototype 属性。
    （3）构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
    （4）执行构造函数内部的代码（给新对象添加属性）
    （5）如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

    person1 和 person2 都有一个 constructor 属性指向 Perosn

`);
/* 
Person {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: [Function (anonymous)]
}
 */
let person1 = new Person("Nicholas", 29, "Software Engineer");
console.log(person1);

logSpace();

/* 
Person {
  name: 'Greg',
  age: 27,
  job: 'Doctor',
  sayName: [Function (anonymous)]
}
 */
let person2 = new Person("Greg", 27, "Doctor");
console.log(person2);
// Greg
person2.sayName();

logSpace();

// true
console.log(person1.constructor == Person);
// true
console.log(person2.constructor == Person);


// true
console.log(person1 instanceof Person);
// true
console.log(person1 instanceof Object);

logSpace();

// true
console.log(person2 instanceof Person);
// true
console.log(person2 instanceof Object);
