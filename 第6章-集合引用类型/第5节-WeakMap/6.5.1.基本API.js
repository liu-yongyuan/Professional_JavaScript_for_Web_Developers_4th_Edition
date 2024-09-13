import { logSpace } from "../../lib/utils.js";

console.log(`

    6.5.1 基本 API

        可以使用 new 关键字实例化一个空的 WeakMap

        弱映射中的键只是 Object 或者继承自 Object 的类型，尝试使用非对象设置键会
    抛出 TypeError。值的类型没有限制。
        如果想在初始化时填充弱映射，则构造函数可以接收一个可迭代对象，其中需要包含
    键值对数组，可迭代对象中的每个键值对都会按照迭代顺序插入新实例中

    `);
const key1 = { id: 1 },
    key2 = { id: 2 },
    key3 = { id: 3 };

const wm1 = new WeakMap([
    [key1, "val1"],
    [key2, "val2"],
    [key3, "val3"],
]);

// val1
console.log(wm1.get(key1));
// val2
console.log(wm1.get(key2));
// val3
console.log(wm1.get(key3));

logSpace();

/* TypeError: Invalid value used as weak map key */
const wm2 = new WeakMap([
    [key1, "val1"],
    // ["BADKEY", "val2"],
    [key3, "val3"],
]);
// object
console.log(typeof wm2);

const stringKey = new String("key1");
const wm3 = new WeakMap([[stringKey, "value1"]]);
// value1
console.log(wm3.get(stringKey));

logSpace();

console.log(`

        初始化之后可以使用 set() 再添加键值对，可以使用 get() 和 has() 查询，还可以使用
    delete() 删除

`);
const wm4 = new WeakMap();
// false
console.log(wm4.has(key1));
// undefined
console.log(wm4.get(key1));

wm4.set(key1, "Matt").set(key2, "Frisble");

wm4.delete(key1);

// false
console.log(wm4.has(key1));
// true
console.log(wm4.has(key2));

logSpace();

console.log(`

        set() 方式返回弱映射实例，因此可以把多个操作连缀起来，包括初始化声明：
        
    `);
const wm5 = new WeakMap().set(key1, "val1");
wm5.set(key2, "val2").set(key3, "val3");

// val1
console.log(wm5.get(key1));
// val2
console.log(wm5.get(key2));
// val3
console.log(wm5.get(key3));
