import { logSpace } from "../../lib/utils.js";

console.log(`
    
    6.2.1 创建数组

`);

// new 关键字
let colors = new Array();

// new 关键字带数组长度
let colors2 = new Array(20);

// 传入要保存的元素
let colors3 = new Array("red", "blue", "green");

let colors4 = Array(3);

let names = Array("Greg");

// 字面量语法
let colors5 = ["red", "blue", "green"];

let names2 = [];

let values = [1, 2];

console.log(`

        新增用于创建数组的静态方法：from() 和 of()
    from() 用于将类数组结构转换为数组实例
    of() 用于将一组参数转换为数组实例

    `);

// [ 'M', 'a', 't', 't' ]
console.log(Array.from("Matt"));

const mapx = new Map().set(1, 2).set(3, 4);
const setx = new Set().add(1).add(2).add(3);
// [ [ 1, 2 ], [ 3, 4 ] ]
console.log(Array.from(mapx));
// [ 1, 2, 3 ]
console.log(Array.from(setx));

logSpace();

// Array.form() 对现有数组执行浅复制
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);
// false
console.log(a1 === a2);

const iter = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    },
};
// [ 1, 2, 3 ]
console.log(Array.from(iter));

function getArgsArray() {
    return Array.from(arguments);
}
// [ 1, 2, 3, 4 ]
console.log(getArgsArray(1, 2, 3, 4));

logSpace();

const arrayLikeObject = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
};
console.log(Array.from(arrayLikeObject));

const a3 = Array.from(a1, (x) => x ** 2);
const a4 = Array.from(
    a1,
    function (x) {
        return x ** this.exponent;
    },
    {
        exponent: 2,
    }
);
// [ 1, 4, 9, 16 ]
console.log(a3);
// [ 1, 4, 9, 16 ]
console.log(a4);

// [ 1, 2, 3, 4 ]
console.log(Array.of(1, 2, 3, 4));
// [undefined]
console.log(Array.of(undefined));
