import { logSpace } from "../../lib/utils.js";

console.log(`

    6.2.2 数组空位
        创建数组时，可以通过一串逗号来创建空位（hole），
    默认创建的空位值是 undefined

`);

const options = [, , , ,];
// [ <4 empty items> ]
console.log(options);

logSpace();

const options2 = [1, , , , 5];
// [ 1, <3 empty items>, 5 ] 5
console.log(options2, options2.length);
/* false
true
true
true
false */
for (const option of options2) {
    console.log(option === undefined);
}

logSpace();

// 使用 from 创建 包含 3 个空位的数组
const a = Array.from([, , ,]);
for (const val of a) {
    console.log(val === undefined);
}

logSpace();

// [ undefined, undefined, undefined ]
console.log(Array.of(...[, , ,]));

logSpace();

/* 0 1
1 undefined
2 undefined
3 undefined
4 5 */
for (const [index, value] of options2.entries()) {
    console.log(index, value);
}

logSpace();

/* map() 会跳过空位
[ 6, <3 empty items>, 6 ]
 */
console.log(options2.map(() => 6));

/* 1----5 */
console.log(options2.join("-"));
