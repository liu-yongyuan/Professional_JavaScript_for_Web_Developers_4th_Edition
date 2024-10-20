import { logSpace } from "../../lib/utils.js";

console.log(`

    8.4.4.2 构造函数、HomeObject 和 Super

        派生类的方法可以通过 super 关键字引用它们的原型。这个关键字只能在派生类中使用，而且仅
    限于类构造函数、实例方法和静态方法内部。在类构造函数中使用 super 可以调用父类构造函数。

`);

class Vehicle {
    constructor() {
        this.hasEngine = true;
    }
}

class Bus extends Vehicle {
    constructor() {
        // 不要在 super() 之前引用 this，否则会抛出 ReferenceError

        // 相当于 super.constructor()
        super();

        // true
        console.log(this instanceof Vehicle);
        // Bus { hasEngine: true }
        console.log(this);
    }
}

new Bus();

logSpace();

console.log(`

        在静态方法中通过 super 调用继承的类上定义的静态方法：

`);
class Vehicle1 {
    static identity() {
        console.log(`Vehicle1`);
    }
}

class Bus1 extends Vehicle1 {
    static identity() {
        super.identity();
    }
}

// Vehicle1
Bus1.identity();

console.log(`
    
        ES6 给类构造函数和静态方法添加了内部特性[[HomeObject]]，这个特性是一个
    指针，指向定义该方法的对象。这个指针是自动赋值的，而且只能在 JavaScript 引擎内部
    访问。super 始终会定义为 [[HomeObject]] 的原型。
    
`);

logSpace();

try {
    console.log(`
        super 只能在派生类构造函数和静态方法中使用。    
    `);
    class Vehicle3 {
        constructor() {
            // SyntaxError: 'super' keyword unexpected here
            // super();
        }
    }
} catch (error) {
    console.log(error.message);
}

logSpace();


console.log(`

        · 不能单独引用 super 关键字，要么用它调用构造函数，要么用它引用静态方法。
        · 调用 super() 会调用父类构造函数，并将返回的实例赋值给 this
        · super() 的行为如同调用构造函数，如果需要给父类构造函数传参，则需要手动传入。
        · 如果没有定义类构造函数，在实例化派生类时会调用 super() 而且会传入所有传给
    派生类的参数。
        · 在类构造函数中，不能调用 super() 之前引用 this
        · 如果派生类中显示定义了构造函数，则要么必须在其中调用 super()，要么必须
    返回一个对象。

`)