import { logSpace, selectForm } from "../../lib/utils.js";

console.log(`

    8.4.4.4 继承内置类型

        ES6 类为继承内置引用类型提供了顺畅的机制，开发者可以方便地扩展内置类型

`);

class SuperArray extends Array {
    shuffle() {
        const maxValue = this.length - 1;
        // 洗牌算法
        shuffleEach: for (let i = maxValue - 1; i > 0; i--) {
            let j = selectForm(0, maxValue);
            [this[i], this[j]] = [this[j], this[i]];
        }
    }
}

let a = new SuperArray(1, 2, 3, 4, 5);
// true
console.log(a instanceof Array);
// true
console.log(a instanceof SuperArray);

logSpace();

// SuperArray(5) [ 1, 2, 3, 4, 5 ]
console.log(a);

logSpace();

a.shuffle();
// SuperArray(5) [ 2, 4, 5, 1, 3 ]
console.log(a);

logSpace();

console.log(`

        有些内置类型会返回新实例。默认情况下，返回实例的类型与原始实例的类型是一致的

`);

let a1 = new SuperArray(1, 2, 3, 4, 5);
let a2 = a1.filter((x) => !!(x % 2));

// SuperArray(5) [ 1, 2, 3, 4, 5 ]
console.log(a1);
// SuperArray(3) [ 1, 3, 5 ]
console.log(a2);

// true
console.log(a1 instanceof SuperArray);
// true
console.log(a2 instanceof SuperArray);

console.log(`

        如果想覆盖这个默认行为，则可以覆盖 Symbol.species 访问器，这个访问器决定在创建返回的
    实例时使用的类

`);
class SuperArray1 extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

let a3 = new SuperArray1(1, 2, 3, 4, 5);
let a4 = a3.filter((x) => !!(x % 2));

// SuperArray1(5) [ 1, 2, 3, 4, 5 ]
console.log(a3);
// [ 1, 3, 5 ]
console.log(a4);

// true
console.log(a3 instanceof SuperArray1);
// true
console.log(a4 instanceof SuperArray1);
