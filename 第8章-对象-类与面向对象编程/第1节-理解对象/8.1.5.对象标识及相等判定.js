import { logSpace } from "../../lib/utils.js";

console.log(`

    8.1.5 对象标识及相等判定

        在 ECMAScript 6 之前，有些特殊情况即便是 === 操作符也无能为力

`);
// 这是 === 符合预期的情况
// false
console.log(true === 1);
// false
console.log({} === {});
// false
console.log("2" === 2);

logSpace();

// 这些情况在不同 JavaScript 引擎中表现不同，但仍被认为相等
// true
console.log(+0 === -0);
// true
console.log(+0 === 0);
// true
console.log(0 === -0);

logSpace();

// 要确定 NaN 的相等性，必须使用极为讨厌的 isNaN()
// false
console.log(NaN === NaN);
// true
console.log(isNaN(NaN));
// number
console.log(typeof NaN);

logSpace();

// 要检查超过两个值，递归地利用相等性传递即可
function recursivelyCheckEqual(x, ...rest) {
    return (
        Object.is(x, rest[0]) &&
        (rest.length < 2 || recursivelyCheckEqual(...rest))
    );
}
