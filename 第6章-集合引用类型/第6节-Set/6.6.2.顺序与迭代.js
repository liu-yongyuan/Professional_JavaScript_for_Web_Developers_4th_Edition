import { logSpace } from "../../lib/utils.js";

console.log(`

    6.6.2 顺序与迭代

        Set 会维护值插入时的顺序，因此支持按顺序迭代。
        集合实例可以提供一个迭代器（Iterator），能以插入顺序生成集合内容。
    可以通过 values() 方法及其别名 keys() 取得这个这个迭代器。

`);

const s = new Set(["val1", "val2", "val3"]);
// true
console.log(s.values === s[Symbol.iterator]);
// true
console.log(s.keys === s[Symbol.iterator]);

logSpace();

/* 
val1
val2
val3
 */
for (let value of s.values()) {
    console.log(value);
}

logSpace();

/* 
val1
val2
val3
 */
for (let value of s[Symbol.iterator]()) {
    console.log(value);
}

logSpace();

console.log(`

        因为 values 是默认迭代器，所以可以直接对集合实例使用扩展操作，把集合转换为数组。

`);
const s1 = new Set(["val1", "val2", "val3"]);
// [ 'val1', 'val2', 'val3' ]
console.log([...s1]);

logSpace();

const s2 = new Set(["val1", "val2", "val3"]);
/* 
[ 'val1', 'val1' ]
[ 'val2', 'val2' ]
[ 'val3', 'val3' ]
 */
for (let pair of s2.entries()) {
    console.log(pair);
}

console.log(`

        如果不使用迭代器，而是使用回调方式，则可以调用集合的 forEach() 方法并传入回调，
    依次迭代每个键值对。传入的回调参数接收可选的第二个参数，这个参数用于重写回调内部 this 的值。

    `);

const s3 = new Set(["val1", "val2", "val3"]);
/* 
val1 -> val1
val2 -> val2
val3 -> val3
 */
s3.forEach((val, dupValue) => console.log(`${val} -> ${dupValue}`));

logSpace();

const s4 = new Set(["val1", "val2", "val3"]);
for (let value of s4.values()) {
    value = "newValue";
}
// false
console.log(s4.has("newValue"));

logSpace();

let valObject = {
    id: 1,
};
const s5 = new Set([valObject]);
for (let value of s5.values()) {
    value.id = "newValue";
}
// true
console.log(s5.has(valObject));
// { id: 'newValue' }
console.log(valObject);
