import { logSpace } from "../../lib/utils.js";

console.log(`
    
    6.2.11 操作方法

        对于数组中的元素，我们有很多操作方法。

`);
console.log(`
    
        concat() 方法会把数组的每一项都添加到结果数组。
    如果参数不是数组，则直接把它们添加到

    `);
let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]);
// [ 'red', 'green', 'blue' ]
console.log(colors);
// [ 'red', 'green', 'blue', 'yellow', 'black', 'brown' ]
console.log(colors2);

console.log(`

        打平数组的行为可以重写，实现一个特殊的符号：Symbol.isConcatSpreadable
    能够阻止 concat() 打平参数数组。

    `);
let colors3 = ["black", "brown"];
let moreNewColors = {
    [Symbol.isConcatSpreadable]: false,
    length: 2,
    0: "pink",
    1: "cyan",
};

let colors4 = colors3.concat(moreNewColors);
/* [
  'black',
  'brown',
  {
    '0': 'pink',
    '1': 'cyan',
    length: 2,
    [Symbol(Symbol.isConcatSpreadable)]: false
  }
] */
console.log(colors4);

colors[Symbol.isConcatSpreadable] = false;
/* [
  [
    'red',
    'green',
    'blue',
    [Symbol(Symbol.isConcatSpreadable)]: false
  ],
  'black',
  'brown'
] */
console.log(colors.concat(colors3));

logSpace();

console.log(`

        slice() 方法用于创建一个包含原有数组中一个或多个
    元素的新数组。

    `);
colors = ["red", "green", "blue", "yellow", "purple"];
colors2 = colors.slice(1);
colors3 = colors.slice(1, 4);

// [ 'green', 'blue', 'yellow', 'purple' ]
console.log(colors2);
// [ 'green', 'blue', 'yellow' ]
console.log(colors3);

logSpace();

console.log(`

        splice() 方法的使用方式有很多种，splice() 的主要目的是
    在数组中间插入元素，但有 3 中不同的方式使用这个方法。
        · 删除。需要给 splice() 传入 2 个参数：要删除的第一个元素的位置
    和要删除的元素数量。可以从数组中删除任意多个元素，比如 splice(0, 2)
    会删除前两个元素。
        · 插入。需要给 splice() 传入 3 个参数，：开始位置，0（要删除的元素数量）
    和要插入的元素。可以在数组中指定的位置插入元素。第三个参数之后还可以传入第四个
    第五个参数，乃至任意多个要插入的元素。比如: splice(2, 0, "red", "green") 会从
    数组位置2 开始插入字符粗 red 和 green
        · 替换。splice() 在删除元素的同时可以在指定位置插入元素，同样要传 3 个参数
    开始位置、要删除的元素和要插入的任意多个元素。要插入的元素数量不一定跟删除的元素数量
    一致。比如，splice(2, 1, "red", "green") 会在 2 的位置删除一个元素，然后从该位置
    开始向数组中插入 red 和 green

`);

colors = ["red", "green", "blue"];
let removed = colors.splice(0, 1);
// [ 'red' ]
console.log(removed);
// [ 'green', 'blue' ]
console.log(colors);

removed = colors.splice(1, 0, "yellow", "orange");
// []
console.log(removed);
// [ 'green', 'yellow', 'orange', 'blue' ]
console.log(colors);

removed = colors.splice(1, 1, "red", "purple");
// [ 'yellow' ]
console.log(removed);
// [ 'green', 'red', 'purple', 'orange', 'blue' ]
console.log(colors);
