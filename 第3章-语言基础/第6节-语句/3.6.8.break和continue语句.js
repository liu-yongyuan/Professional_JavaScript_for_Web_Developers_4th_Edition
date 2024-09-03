import { logSpace } from "../../lib/utils.js";

console.log(`

    3.6.8 break 和 continue 语句
        
        break 和 continue 语句为执行循环代码提供了更严格的的控制手段。
    其中，break 语句用于立即退出循环，强制执行循环后的吓一跳语句。
    而 continue 语句也用于立即退出循环，但不会再次从循环顶部开始执行。

    `);

let num = 0;
for (let i = 1; i < 10; i++) {
    if (i % 5 === 0) {
        break;
    }
    num++;
}
// 4
console.log(num);

logSpace();

num = 0;
for (let i = 1; i < 10; i++) {
    if (i % 5 === 0) {
        continue;
    }
    num++;
}
// 8
console.log(num);

logSpace();

num = 0;
outermost: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i === 5 && j === 5) {
            break outermost;
        }
        num++;
    }
}
// 55
console.log(num);

logSpace();

num = 0;
outermost: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i === 5 && j === 5) {
            continue outermost;
        }
        num++;
    }
}
// 95
console.log(num);
