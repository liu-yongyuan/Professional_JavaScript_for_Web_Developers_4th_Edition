import { logSpace } from "../../lib/utils.js";

console.log(`

    8.4.1 类定义

        定义类的主要方式：
            类声明
            类表达式
        这两种方式都使用 class 关键字加大括号

`);
// 类声明
class Person {}

// 类表达式
const Animal = class {};

console.log(`
    
        与函数表达式类似，类表达式在它们被求值前也不能引用。不过，与函数定义不同的是，虽然函数
    声明可以，但类定义不能、
    
`);
// undefined
console.log(FunctionExpression);
var FunctionExpression = function () {};
// [Function: FunctionExpression]
console.log(FunctionExpression);

logSpace();

// [Function: FunctionDeclaration]
console.log(FunctionDeclaration);
function FunctionDeclaration() {}
// [Function: FunctionDeclaration]
console.log(FunctionDeclaration);

logSpace();

// undefined
console.log(ClassExpression);
var ClassExpression = class {};
// [class ClassExpression]
console.log(ClassExpression);

logSpace();

try {
    console.log(ClassDeclaration);
    class ClassDeclaration {}
    console.log(ClassDeclaration);
} catch (e) {
    // Cannot access 'ClassDeclaration' before initialization
    console.log(e.message);
}

logSpace();

console.log(`

        另一个跟函数声明不同的地方是，函数受函数作用域限制，而类受块级作用域限制。

`);

try {
    {
        function FunctionDeclaration1() {}
        class ClassDeclaration1 {}
    }

    console.log(FunctionDeclaration1);
    console.log(ClassDeclaration1);
} catch (e) {
    // FunctionDeclaration1 is not defined
    console.log(e.message);
}

logSpace();

console.log(`
    
        类的构成

        类可以包含构造函数、实例方法、获取函数、设置方法和静态方法，但这些都不是必需的。
    空的类定义照样有效。默认情况下，类定义中的代码都在严格模式下执行。
        与函数构造函数一样，多数编程风格都建议类名的首字母要大写，以区别于通过它创建的实例。
    
`);
// 空类定义，有效
class Foo {}

// 有构造函数的类，有效
class Bar {
    constructor() {}
}

// 有获取函数的类，有效
class Baz {
    get myBar() {}
}

// 有静态方法的类，有效
class Qux {
    static myQux() {}
}

logSpace();

console.log(`

        类表达式的名称是可选的。在把类表达式赋值给变量后，可以通过 name 属性获取得到类表达式的名称
    字符串。但不能在类表达式作用域外部访问这个标识符。

`);
let Person1 = class PersonName {
    identity() {
        // Person PersonName
        console.log(Person.name, PersonName.name);
    }
};

let p = new Person1();
p.identity();

// PersonName
console.log(Person1.name);

try {
    // PersonName is not defined
    console.log(PersonName);
} catch (error) {
    console.log(error.message);
}
