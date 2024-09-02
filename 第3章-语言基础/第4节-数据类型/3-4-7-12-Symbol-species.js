console.log(`
    
        12、Symbol.species
        一个函数值，该函数作为创建派生对象的构造函数。
    这个属性在内置属性类型中最常用，用于对内置类型实例方法
    的返回值暴露实例化派生对象的方法。用 Symbol.species 定义
    静态的获取器（getter）方法，可以覆盖新创建实例的原型定义

    `);
class Bar extends Array {}
class Baz extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}
let bar = new Bar();
// true
console.log(bar instanceof Array);
// true
console.log(bar instanceof Bar);
bar = bar.concat("bar");
// false
console.log(bar in Array);
// true
console.log(bar instanceof Bar);
