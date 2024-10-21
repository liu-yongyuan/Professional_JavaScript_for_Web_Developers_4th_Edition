import { logSpace } from "../../lib/utils.js";

console.log(`

    8.4.4.5 类混入

        把不同类的行为集中到一个类。 Object.assign() 方法是为了混入对象行为设计的。
    只有在需要混入类的行为时，才有必要自己实现混入表达式。如果只需要混入多个对象的属性，
    那么使用 Object.assign() 就可以了。

`);

console.log(`

        混入模式可以通过在一个表达式中连缀多个混入元素来实现，这个表达式最终会解析为一个
    可以被继承的类。Person 类组合 A、B、C，则需要某种机制实现 B 继承 A，C 继承 B，而
    Person 再继承 C，从而把 A、B、C组合到这个超类中。实现这种模式有不同的策略。

        一个策略是定义一组“可嵌套”的函数，每个函数分别接收一个超类作为参数，而将混入类定义为
    这个参数的子类，并返回这个类。这些组合函数可以连缀调用，最终组合成超类表达式

`);

class Vehicle {}

let FooMixin = (SuperClass) =>
    class extends SuperClass {
        foo() {
            console.log("foo");
        }
    };

let BarMixin = (SuperClass) =>
    class extends SuperClass {
        bar() {
            console.log("bar");
        }
    };

let BazMixin = (SuperClass) =>
    class extends SuperClass {
        baz() {
            console.log("baz");
        }
    };

class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))) {}

let b = new Bus();
// foo
b.foo();
// bar
b.bar();
// baz
b.baz();

logSpace();

console.log(`

        通过写一个辅助函数，可以把嵌套调用展开。

`);

function mix(BaseClass, ...Mixins) {
    return Mixins.reduce(
        (accumulator, current) => current(accumulator),
        BaseClass
    );
}

class Bus1 extends mix(Vehicle, FooMixin, BarMixin, BarMixin) {}

let b1 = new Bus();
// foo
b1.foo();
// bar
b1.bar();
// baz
b1.baz();

logSpace();

console.log(`

        很多 JavaScript 框架（特别是 React）已经抛弃混入模式，转向了复合模式（
    把方法提取到独立的类和辅助对象中，然后把它们组合起来，但不使用继承）。这反映了
    那个众所周知的软件设计原则：“复合胜过继承（composition over inheritancec）”
    这个设计原则被很多人遵循，再代码设计中能提供极大的灵活性。

`);
