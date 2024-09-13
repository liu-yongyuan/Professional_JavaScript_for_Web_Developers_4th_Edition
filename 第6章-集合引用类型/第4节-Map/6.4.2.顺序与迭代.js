import { logSpace } from "../../lib/utils.js";

console.log(`

    6.4.2 顺序与迭代

        与 Object 类型的一个主要差异是，Map 实例会维护键值对的插入顺序，因此可以根据插入顺序执行
    迭代操作。
        映射实例可以提供一个迭代器（Iterator），能以插入顺序生成[key, value] 形式的数组。可以
    通过 entries() 方法（或者 Symbol.iterator 属性，它引用 entries()）取得这个迭代器：

    `);
const m = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"],
]);

// true
console.log(m.entries === m[Symbol.iterator]);

for (let pair of m.entries()) {
    console.log(pair);
}

/* 
[ 'key1', 'val1' ]
[ 'key2', 'val2' ]
[ 'key3', 'val3' ]
 */

logSpace();

for (let pair of m[Symbol.iterator]()) {
    console.log(pair);
}

/* 
[ 'key1', 'val1' ]
[ 'key2', 'val2' ]
[ 'key3', 'val3' ]
 */

logSpace();

// [ [ 'key1', 'val1' ], [ 'key2', 'val2' ], [ 'key3', 'val3' ] ]
console.log([...m]);

console.log(`

        如果不使用迭代器、而是使用回调方式，则可以调用映射的 forEach 方法并传入回调，依次
    迭代每个键值对。传入的回调接收可选的第二个参数，这个参数用于重写回调内部 this 的值

    `);

m.forEach((val, key) => console.log(`${key} -> ${val}`));

/* 
key1 -> val1
key2 -> val2
key3 -> val3
 */

logSpace();

for (let key of m.keys()) {
    console.log(key);
}

/* 
key1
key2
key3
*/

logSpace();

for (let value of m.values()) {
    console.log(value);
}
/* 
val1
val2
val3
 */
logSpace();

console.log(`

        键和值在迭代器遍历时是可以修改的，但映射内部的引用则无法修改。当然，着并不妨碍
    修改作为键或值的对象内部的属性，因为这样并不影响它们在映射实例中的身份：

`);

const m2 = new Map([["key1", "val2"]]);

for (let key of m2.keys()) {
    key = "newKey";
    // newKey
    console.log(key);
    // val2
    console.log(m2.get("key1"));
}

logSpace();

const keyObj = { id: 1 };

const m3 = new Map([[keyObj, "val1"]]);

for (let key of m3.keys()) {
    key.id = "newKey";
    // { id: 'newKey' }
    console.log(key);
    // val1
    console.log(m3.get(keyObj));
}
// { id: 'newKey' }
console.log(keyObj);
