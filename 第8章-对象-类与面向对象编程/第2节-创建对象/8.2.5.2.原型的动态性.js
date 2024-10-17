import { logSpace } from "../../lib/utils.js";

console.log(`

    8.2.5.2 原型的动态性

        因为从原型上搜索值的过程是动态的，所以即使实例在修改原型之前已经存在，任何时候对原型对
    象所做的修改也会在实例上反映出来。

`);
function Person() {}

let friend = new Person();

Person.prototype.sayHi = function () {
    console.log("hi");
};

// hi
friend.sayHi();

logSpace();

console.log(`

        以上代码先创建一个 Person 实例并保存在 friend 中。然后一条语句在 Person.prototype 上
    添加了一个名为 sayHi() 的方法。虽然 friend 实例是在添加方法之前创建的，但它仍然可以访问这个
    方法。 之所以会这样，是因为实例于原型之间的松散的联系。首先会从这个实例中搜索名为 sayHi 的属性，
    在没有找到的情况下，运行时会继续搜索原型对象。因为实例和原型之间的链接就是简单的指针，而不是
    保存的副本，所以会在原型上找到 sayHi 属性并返回这个属性保存的函数。

        虽然随时能给原型添加属性和方法，并能立即反映在所有对象实例上，但这跟重写整个原型是两
    回事。实例的 [[Prototype]] 指针是在调用构造函数时自动赋值的，这个指针即使把原型修改为不同的
    对象也不会变。
        
        重写整个原型会切断最初原型与构造函数的联系，但实例引用的仍然是最初的原型。
        记住，实例只有指向原型的指针，没有指向构造函数的指针。

`);

function Person() {}

friend = new Person();

Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    },
};

// 报错
friend.sayName();

console.log(`

        在这个例子中，Person 的新实例是在重写原型对象之前创建的。在调用 friend.sayName() 的时
    侯，会导致报错。这是因为 friend 指向的原型还是最初的原型，而这个原型上没有 sayName 属性。

        重写构造函数上的原型之后再创建的实例才会引用新的原型。而在此之前创建的实例仍然会引用最初的原型。

`);

console.log(`

        重写原型前：
            Person.prototype 和 friend[[Prototype]] => Person.prototype.constructor（指向相同的 prototype ）
        内存中 prototype 的地址为同一个


        重写之后：
            Person.prototype 指向了一个新的内存对象，该原型对象是新的内存地址
            friend[[Prototype]] 指向的还是原来的对象，因此找不到 sayName() 函数


`);
