import { logSpace } from "../../lib/utils.js";

console.log(`

    6.2.5 迭代器方法

        在 ES6 中，Array暴露了 3 个用于检索数组内容的方法：
    keys()、values() 和 entries()

`);
const a = ["foo", "bar", "baz", "qux"];
const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());

// [ 0, 1, 2, 3 ]
console.log(aKeys);
// [ 'foo', 'bar', 'baz', 'qux' ]
console.log(aValues);
// [ [ 0, 'foo' ], [ 1, 'bar' ], [ 2, 'baz' ], [ 3, 'qux' ] ]
console.log(aEntries);

logSpace();

/* 
idx:0, element:foo
idx:1, element:bar
idx:2, element:baz
idx:3, element:qux
 */
for (const [idx, element] of a.entries()) {
    console.log(`idx:${idx}, element:${element}`);
}
