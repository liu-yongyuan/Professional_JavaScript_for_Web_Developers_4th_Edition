console.log(`
    
    6、Symbol.hasInstance
    根据 ECMAScript 规范，这个符号作为一个属性表示“一个方法，
该方法决定构造器对象是否认可一个对象是它的实例。由 instanceof
操作符使用”。instanceof 操作符可以用来确定一个对象实例的原型链
上是否有原型。
    在 ES6 中，instanceof 操作符会使用 Symbol.hasInstance
函数来确定关系。
`);
function Foo() {}
let f = new Foo();
// true
console.log(f instanceof Foo);

class Bar {}
let b = new Bar();
// true
console.log(b instanceof Bar);

// true
console.log(Foo[Symbol.hasInstance](f));
// true
console.log(Bar[Symbol.hasInstance](b));

console.log(`
    
        这个属性定义在 Function 的原型上，因此默认在
    所有函数和类上都可以调用。由于 instanceof 操作符
    会在原型链上个寻找这个属性定义，就跟在原型链上寻找
    其他属性一样，因此可以在继承的类上通过静态方法
    重写定义这个函数：
    `);
class Baz extends Bar {
    static [Symbol.hasInstance](obj) {
        return false;
    }
}

let baz = new Baz();
// true
console.log(Bar[Symbol.hasInstance](baz));
// true
console.log(baz instanceof Bar);

// false
console.log(Baz[Symbol.hasInstance](baz));
// false
console.log(baz instanceof Baz);
