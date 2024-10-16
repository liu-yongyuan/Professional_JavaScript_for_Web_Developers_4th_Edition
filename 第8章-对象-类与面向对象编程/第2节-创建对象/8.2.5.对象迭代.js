import { logSpace } from "../../lib/utils.js";

console.log(`

    8.2.5 对象迭代

        ECMAScript 2017 新增了两个静态方法，用于将对象内容转换为序列化——更重要的
    是可迭代的——格式。这两个静态方法 Object.values() 和 Object.entries() 接收一个对象，
    返回它们内容的数组。Object.values 返回对象值的数组，Object.entries() 返回键值/对的数组。
`);

const o = {
    foo: "bar",
    baz: 1,
    qux: {},
};

// [ 'bar', 1, {} ]
console.log(Object.values(o));

// [ [ 'foo', 'bar' ], [ 'baz', 1 ], [ 'qux', {} ] ]
console.log(Object.entries(o));

logSpace();

console.log(`

        注意，非字符串属性会被转换为字符串输出。这两个方法执行对象的浅复制：

`);

const o1 = {
    qux: {},
};
// true
console.log(Object.values(o1)[0] === o1.qux);
// true
console.log(Object.entries(o1)[0][1] === o1.qux);

logSpace();