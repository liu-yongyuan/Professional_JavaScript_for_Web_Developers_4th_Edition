import { logSpace } from "../../lib/utils.js";

console.log(`

    6.4.1 基本 API

        使用 new 关键字和 Map 构造函数可以创建一个空映射。
    
        如果想要在创建的同时初始化实例，可以给 Map 构造函数传入一个可迭代对象，需要包含键、值对数
    组。可迭代对象中的每个键、值对都会按照迭代顺序插入到新映射实例中。

    `);
const m = new Map();

const m1 = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"],
]);
// 3
console.log(m1.size);
/* 
Map(3) { 'key1' => 'val1', 'key2' => 'val2', 'key3' => 'val3' }
 */
console.log(m1);
logSpace();

const m2 = new Map({
    [Symbol.iterator]: function* () {
        yield ["key1", "val1"];
        yield ["key2", "val2"];
        yield ["key3", "val3"];
    },
});
console.log(m2.size);
logSpace();

const m3 = new Map([[]]);
// true
console.log(m3.has(undefined));
// undefined
console.log(m3.get(undefined));

logSpace();

console.log(`

        初始化之后，可以使用 set() 方法再添加键、值对。另外，可以使用 get() 和 has() 进行查询，可
    以通过 size 属性获取映射中的键值对的数量，还可以使用 delete() 和 clear() 删除值。

`);

const m4 = new Map();
// false
console.log(m4.has("firstName"));
// undefined
console.log(m4.get("firstName"));
// 0
console.log(m4.size);

m4.set("firstName", "Matt").set("lastName", "Frisbie");

// true
console.log(m4.has("firstName"));
// Matt
console.log(m4.get("firstName"));
// 2
console.log(m4.size);

m4.delete("firstName");
// false
console.log(m4.has("firstName"));
// undefined
console.log(m4.has("lastName"));
// 1
console.log(m4.size);

// clear 方法会清除这个映射实例中的所有键、值对
m4.clear();

// false
console.log(m4.has("firstName"));
// undefined
console.log(m4.get("firstName"));
// 0
console.log(m4.size);

logSpace();

console.log(`

        set() 方法返回映射实例，因此可以把多个操作连缀起来，包括初始化声明：

`);
const m5 = new Map().set("key1", "val1");
m5.set("key2", "val2").set("key3", "val3");
// 3
console.log(m5.size);

logSpace();

const m6 = new Map();
const objKey = {},
    objVal = {},
    arrKey = [],
    arrVal = [];

m6.set(objKey, objVal);
m6.set(arrKey, arrVal);

objKey.foo = "foo";
objVal.bar = "bar";
arrKey.push("foo");
arrVal.push("bar");

// { bar: 'bar' }
console.log(m6.get(objKey));
// [ 'bar' ]
console.log(m6.get(arrKey));

logSpace();

const m7 = new Map();
const a = 0 / "",
    b = 0 / "",
    pz = +0,
    nz = -0;

// false
console.log(a === b);
// true
console.log(pz === nz);

m7.set(a, "foo").set(pz, "bar");

// foo
console.log(m7.get(b));
// bar
console.log(m7.get(nz));
