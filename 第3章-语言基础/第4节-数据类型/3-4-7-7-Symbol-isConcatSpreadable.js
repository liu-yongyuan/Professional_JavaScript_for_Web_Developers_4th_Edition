import { logSpace } from "../../lib/utils.js";

console.log(`
    
        7、根据 ECMAScript 规范，这个符号作为一个属性表示“一个布尔值，
    如果为 true，则意味着对象应该用 Array.prototype.concat() 打平
    其数组元素”。ES6 中的 Array.prototype.concat() 方法会根据
    接收到的对象类型选择如何将一个类数组对象拼接成数组实例。覆盖
    Symbol.isConcatSpreadable 的值可以修改这个行为。

    `);
let initial = ["foo"];
let array = ["bar"];

// undefined
console.log(array[Symbol.isConcatSpreadable]);

// [ 'foo', 'bar' ]
console.log(initial.concat(array));

array[Symbol.isConcatSpreadable] = false;
// [ 'foo', [ 'bar', [Symbol(Symbol.isConcatSpreadable)]: false ] ]
console.log(initial.concat(array));

logSpace();

let arrayLikeObject = { length: 1, 0: "bar" };
// undefined
console.log(arrayLikeObject[Symbol.isConcatSpreadable]);
// [ 'foo', { '0': 'bar', length: 1 } ]
console.log(initial.concat(arrayLikeObject));

arrayLikeObject[Symbol.isConcatSpreadable] = true;
// [ 'foo', 'bar' ]
console.log(initial.concat(arrayLikeObject));
