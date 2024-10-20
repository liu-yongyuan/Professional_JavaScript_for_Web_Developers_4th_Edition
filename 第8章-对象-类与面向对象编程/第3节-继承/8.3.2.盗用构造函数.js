import { logSpace } from "../../lib/utils.js";

console.log(`

    8.3.2

        为了解决原型包含引用值导致的继承问题，一种叫做“盗用构造函数”（constructor stealing）的技术
    再开发社区流行起来（这种技术也称作为“对象伪装”或“经典继承”）。基本思路很简单：再子类
    构造函数中调用父类构造函数。因为毕竟函数就是在特定上下文中执行代码的简单对象，所以可以使用
    apply()和call()方法以新创建的对象为上下文执行构造函数。

`);

function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {
    // 继承 SuperType
    // call 盗用了构造函数
    SuperType.call(this);
}

let instance1 = new SubType();
instance1.colors.push("black");
// [ 'red', 'blue', 'green', 'black' ]
console.log(instance1.colors);

logSpace();

let instance2 = new SubType();
// [ 'red', 'blue', 'green' ]
console.log(instance2.colors);

logSpace();

console.log(`

        示例中的代码展示了 盗用构造函数的调用。通过使用 call()（或 apply()）方法，SuperType
    构造函数在为 SubType 的实例创建的新对象的上下文中执行了。这相当于新的 SubType 对象上运行了
    SuperType() 函数中的所有初始化代码。结果就是每个实例都会有 colors 数学。

`);

console.log(`

        1.传递参数
        相比于使用原型链，盗用构造函数的优点就是可以在子类构造函数中向父类构造函数传参。

`);

function SuperType1(name) {
    this.name = name;
}

function SubType1(name) {
    // 继承 SuperType 并传参
    SuperType1.call(this, "Nicholas");

    // 实例数学
    this.age = 29;
}

let instance3 = new SubType1();
// Nicholas
console.log(instance3.name);
// 29
console.log(instance3.age);

logSpace();

console.log(`

        SuperType1 构造函数接收一个参数 name，然后将它赋值给一个属性。在 SubType 构造函数
    中调用 SuperType1 构造函数时传入这个参数，实际上会 SubType 的实例上定义 name 属性。
    为确保 SuperType 构造函数不会覆盖 SubType 定义的属性，可以调用父类构造函数之后再给予
    子类实例添加额外的属性。

`);

logSpace();

console.log(`

        2.盗用构造函数的问题
        盗用构造函数的主要缺点，也是使用构造函数模式自定义类型的问题：必须再构造函数中
    定义方法，因此函数不能重用。此外，子类也不能访问父类原型上定义的方法，因此所有类型
    只能使用构造函数模式。由于存在这些问题，盗用构造函数基本上也不能单独使用。

`);
