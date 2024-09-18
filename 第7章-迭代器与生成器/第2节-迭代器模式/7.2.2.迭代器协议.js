import { logSpace } from "../../lib/utils.js";

console.log(`

    7.2.2 迭代器协议

        迭代器是一种一次性使用的对象，用于迭代与其关联的可迭代对象。迭代器 API 使用 next() 方法
    在可迭代对象中遍历数据。每次成功调用 next()，都会返回一个 IteratorResult 对象，其中包含迭代
    器返回的下一个值。若不调用 next()，则无法知道迭代器的当前位置。

        next() 方法返回的迭代器对象 IteratorResult 包含两个属性：done 和 value。done 是一个布尔值，
    表示是否还可以再次调用 next() 取得下一个值：value 包含可迭代对象的下一个值（done 为false）或者
    undefined（done 为 true）。done：true 状态称为“耗尽”。可以通过以下简单的数组来演示
    
`);

let arr = ["foo", "bar"];

// [Function: values]
console.log(arr[Symbol.iterator]);

logSpace();

let iter = arr[Symbol.iterator]();
// Object [Array Iterator] {}
console.log(iter);

// { value: 'foo', done: false }
console.log(iter.next());
// { value: 'bar', done: false }
console.log(iter.next());
// { value: undefined, done: true }
console.log(iter.next());

logSpace();

let arr1 = ["foo"];
let iter1 = arr1[Symbol.iterator]();
// { value: 'foo', done: false }
console.log(iter1.next());
// { value: undefined, done: true }
console.log(iter1.next());
// { value: undefined, done: true }
console.log(iter1.next());
// { value: undefined, done: true }
console.log(iter1.next());

logSpace();

let arr2 = arr.concat();
let iter2 = arr2[Symbol.iterator]();
let iter3 = arr2[Symbol.iterator]();

// { value: 'foo', done: false }
console.log(iter2.next());
// { value: 'foo', done: false }
console.log(iter3.next());
// { value: 'bar', done: false }
console.log(iter3.next());
// { value: 'bar', done: false }
console.log(iter2.next());

logSpace();

let arr3 = arr.concat();
let iter4 = arr3[Symbol.iterator]();

// { value: 'foo', done: false }
console.log(iter4.next());

arr3.splice(1, 0, "baz");

// { value: 'baz', done: false }
console.log(iter4.next());
// { value: 'bar', done: false }
console.log(iter4.next());
// { value: undefined, done: true }
console.log(iter4.next());