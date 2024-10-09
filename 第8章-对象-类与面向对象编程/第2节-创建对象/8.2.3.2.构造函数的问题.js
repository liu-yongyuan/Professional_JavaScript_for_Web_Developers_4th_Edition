import { logSpace } from "../../lib/utils.js";

console.log(`

    8.2.3.2 构造函数的问题

        构造函数的主要问题在于，其定义的方法会在每个实例上都会创建一遍。
    因此对前面的例子而言，person1 和 person2 都有名为 sayName（） 的方法，但这两个方法
    不是同一个 Function 实例。我们知道，ECMAScript 中的函数是对象，因此每次定义函数时，
    都会初始化一个对象。

`);

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    // 逻辑等价
    this.sayName = new Function("console.log(this.name)");
}

let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Matt", 28, "Software Engineer");

// false
console.log(person1.sayName === person2.sayName);

logSpace();

console.log(`

        因为都是做一样的事，所以没必要定义两个不同的 Function 实例。况且，this 对象可以把函数
    与对象的绑定推迟到运行时。
        要解决这个问题，可以把函数定义转移到构造函数外部

`);

function Person1(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName() {
    console.log(this.name);
}

person1 = new Person1("Nicholas", 29, "Software Engineer");
person2 = new Person1("Matt", 28, "Software Engineer");

// Nicholas
person1.sayName();
// Matt
person2.sayName();

logSpace();

console.log(`
        sayName() 被定义在了构造函数外部。在构造函数内部，sayName 属性等于全局 sayName()
    函数。因为这一次 sayName 属性中包含的只是一个指向外部函数的指针，所以 person1 和 person2
    共享了定义在全局作用域上的 sayName()  函数。这样虽然解决了相同逻辑的函数重复定义的问题，但
    全局作用域也因此被搞乱了，因为哪个函数实际上只能在一个对象上调用。如果这个对象需要多个方法，
    那么就要在全局作用域中定义多个函数。会导致自定义类型引用的代码不能很好地聚集一起。这个问题
    可以通过原型模式来解决。
`)