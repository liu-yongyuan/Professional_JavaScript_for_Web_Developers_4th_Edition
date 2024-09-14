import { logSpace } from "../../lib/utils.js";

console.log(`

    6.6.1 基本 API

        使用 new 关键字和 set 构造函数可以创建一个空集合

        想在创建的同时初始化实例，可以给 Set 构造函数传入一个可迭代对象，
    其中需要包含插入到新集合实例中的元素.

`);

const s = new Set();

const s1 = new Set(["val1", "val2", "val3"]);
// 3
console.log(s1.size);

logSpace();

const s2 = new Set({
    [Symbol.iterator]: function* () {
        yield "val1";
        yield "val2";
        yield "val3";
    },
});

// 3
console.log(s2.size);
logSpace();

// false
console.log(s.has("Matt"));
// 0
console.log(s.size);

s.add("Matt").add("Frisbie");
// 2
console.log(s.size);

s.delete("Matt");

// false
console.log(s.has("Matt"));
// true
console.log(s.has("Frisbie"));
// 1
console.log(s.size);

s.clear();

logSpace();

// false
console.log(s.has("Matt"));
// false
console.log(s.has("Frisbie"));
// 0
console.log(s.size);

logSpace();

const s3 = new Set();

const functionVal = function () {};
const symbolVal = Symbol();
const objectVal = new Object();

s3.add(functionVal).add(symbolVal).add(objectVal);

// true
console.log(s3.has(functionVal));
// true
console.log(s3.has(symbolVal));
// true
console.log(s3.has(objectVal));
// false
console.log(s.has(function () {}));

logSpace();

const s4 = new Set();

const objVal = {},
    arrVal = [];

s4.add(objVal).add(arrVal);

objVal.bar = "bar";
arrVal.push("bar");

// true
console.log(s4.has(objVal));
// true
console.log(s4.has(arrVal));

logSpace();

const s5 = new Set();
s5.add("foo").add("foo");
/* 
Set(1) { 'foo' }
 */
console.log(s5);

// true
console.log(s5.delete("foo"));
// false
console.log(s5.delete("foo"));
