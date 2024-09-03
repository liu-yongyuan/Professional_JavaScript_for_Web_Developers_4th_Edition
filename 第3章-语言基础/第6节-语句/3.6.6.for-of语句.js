import { logSpace } from "../../lib/utils.js";

console.log(`
    
    3.6.6 for-of 语句

        for-of 语句用于遍历可迭代对象的元素，语法如下：
        for(property of expression) statement

    `);
for (const el of [2, 4, 6, 8]) {
    console.log(el);
}

logSpace()

let o = {
    a: "1",
    b: {
        name: "mat",
        age: 26,
    },
};
/* TypeError: o is not iterable
对象默认没有实现可迭代器，所以不能 of 迭代出值
for (const el of o) {
    console.log(el);
}
 */


logSpace()

let nameSets = new Set();
nameSets.add("mat").add("john");
/* mat
john */
for (const el of nameSets) {
    console.log(el);
}
