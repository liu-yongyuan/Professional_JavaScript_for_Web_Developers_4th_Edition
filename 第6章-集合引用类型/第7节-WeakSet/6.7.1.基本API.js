import { logSpace } from "../../lib/utils.js";

console.log(`

    6.7.1 WeakMap 基本API

        可以使用 new 关键字实例化一个空的 WeakSet

        如果想再初始时填充弱集合，则构造函数可以接收一个可迭代对象，其中需要包含有效的值。
    可迭代对象中的每个值都会按照迭代顺序插入到新实例中。

`);

const ws = new WeakSet();

const val1 = { id: 1 },
    val2 = { id: 2 },
    val3 = { id: 3 };
const ws1 = new WeakSet([val1, val2, val3]);

// true
console.log(ws1.has(val1));
// true
console.log(ws1.has(val2));
// true
console.log(ws1.has(val3));

logSpace();

// 初始化是全由或全无的操作
// 只要有一个值无效就会抛出错误，导致整个初始化失败
// TypeError: Invalid value used in weak set
// const ws2 = new WeakSet([val1, "BADVAL", val3])

const stringVal = new String("val1");
const ws3 = new WeakSet([stringVal]);
// true
console.log(ws3.has(stringVal));

logSpace();

const ws4 = new WeakSet();
// false
console.log(ws4.has(val1));

ws4.add(val1).add(val2);

// true
console.log(ws4.has(val1));
// true
console.log(ws4.has(val2));

ws4.delete(val1);

// true
console.log(ws4.has(val1));
// true
console.log(ws4.has(val2));

logSpace();

const ws5 = new WeakSet().add(val1).add(val2);
ws5.add(val3);

// true
console.log(ws1.has(val1));
// true
console.log(ws1.has(val2));
// true
console.log(ws1.has(val3));
