import { logSpace } from "../../lib/utils.js";

console.log(`

    6.2.6 复制和填充方法

        批量复制方法：fill()
        填充数组方法：copyWithin()

`);
const zeroes = [0, 0, 0, 0, 0];

// 用 5 填充整个数值
zeroes.fill(5);
// [ 5, 5, 5, 5, 5 ]
console.log(zeroes);

logSpace();

// 用 6 填充所有大于等于 3 的元素
zeroes.fill(6, 3);
// [ 5, 5, 5, 6, 6 ]
console.log(zeroes);

logSpace();

zeroes.fill(7, 1, 3);
// [ 5, 7, 7, 6, 6 ]
console.log(zeroes);
// 重置
zeroes.fill(0);
logSpace();

// 用 8 填充索引大于等于 1 且小于 4 的元素
// (-4 + zeroes.length = 1)
// (-1 +zeroes.length = 4)
zeroes.fill(8, -4, -1);
// [ 0, 8, 8, 8, 0 ]
console.log(zeroes);
zeroes.fill(0);
logSpace();

zeroes.fill(1, -10, -6);
// [ 0, 0, 0, 0, 0 ]
console.log(zeroes);
zeroes.fill(0);
logSpace();

zeroes.fill(1, 10, 15);
// [ 0, 0, 0, 0, 0 ]
console.log(zeroes);
zeroes.fill(0);
logSpace();

zeroes.fill(2, 4, 2);
// [ 0, 0, 0, 0, 0 ]
console.log(zeroes);
zeroes.fill(0);
logSpace();

zeroes.fill(4, 3, 10);
// [ 0, 0, 0, 4, 4 ]
console.log(zeroes);
zeroes.fill(0);
logSpace();

console.log(`

        copyWithin() 会按照指定范围浅复制数组中的部分内容，然后
    将它们插入到指定索引开始的位置。

`);
let ints,
    reset = () => (ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
reset();

// 从 ints 中复制索引 0 开始的内容，插入到索引 5 的开始位置
// 在源索引或目标索引达到数组边界时停止
ints.copyWithin(5);
/* 
[
  0, 1, 2, 3, 4,
  0, 1, 2, 3, 4
]
 */
console.log(ints);
reset();

// 从 ints 中复制索引 5 开始的内容，插入到索引 0 开始的位置
ints.copyWithin(0, 5);
/* [
  5, 6, 7, 8, 9,
  5, 6, 7, 8, 9
] */
console.log(ints);
reset();

ints.copyWithin(4, 0, 3);
/* [
  0, 1, 2, 3, 0,
  1, 2, 7, 8, 9
] */
console.log(ints);
reset();

ints.copyWithin(2, 0, 6);
/* [
  0, 1, 0, 1, 2,
  3, 4, 5, 8, 9
] */
console.log(ints);
reset();

ints.copyWithin(-4, -7, -3);
/* 
[
  0, 1, 2, 3, 4,
  5, 3, 4, 5, 6
]
 */
console.log(ints);
reset();

ints.copyWithin(1, -15, -12);
/* [
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
 */
console.log(ints);
reset();

ints.copyWithin(1, 12, 15);
/* 
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
 */
console.log(ints);
reset();

ints.copyWithin(2, 4, 2);
/* 
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
 */
console.log(ints);
reset();

ints.copyWithin(4, 7, 10);
/* 
[
  0, 1, 2, 3, 7,
  8, 9, 7, 8, 9
]
 */
console.log(ints);
reset();
