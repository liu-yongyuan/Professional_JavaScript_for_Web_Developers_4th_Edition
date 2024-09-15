import { logSpace } from "../../lib/utils.js";

console.log(`

    6.8 迭代与扩展操作

        ECMAScript 6 新增的迭代器和扩展操作符对集合引用类型特别有用。这些新特性让集合类型之间
    相互操作、复制和修改变得异常方便。

        例如本章前面所示，有 4 种原生集合类型定义了默认迭代器：
        · Array
        · 所有定型数组
        · Map
        · Set
        很简单，这意味着上述所有类型都支持顺序迭代，都可以传入 for-of 循环：

`);
let typedArr;

let iterableThings = [
    Array.of(1, 2),
    (typedArr = Int16Array.of(3, 4)),
    new Map([
        [5, 6],
        [7, 8],
    ]),
    new Set([9, 10]),
];

/* 
1
2
3
4
[ 5, 6 ]
[ 7, 8 ]
9
10
 */
for (const iterableThing of iterableThings) {
    for (const x of iterableThing) {
        console.log(x);
    }
}

logSpace();

let arr1 = [1, 2, 3];
let arr2 = [...arr1];

// [ 1, 2, 3 ]
console.log(arr1);
// [ 1, 2, 3 ]
console.log(arr2);
// false
console.log(arr1 === arr2);

logSpace();

let map1 = new Map([
    [1, 2],
    [3, 4],
]);
let map2 = new Map(map1);

// Map(2) { 1 => 2, 3 => 4 }
console.log(map1);
// Map(2) { 1 => 2, 3 => 4 }
console.log(map2);

logSpace();

let arr3 = [0, ...arr1, 4, 5];
// [ 0, 1, 2, 3, 4, 5 ]
console.log(arr3);

logSpace();

let arr4 = [{}];
let arr5 = [...arr4];

arr4[0].foo = "bar";

// 浅复制
// bar
console.log(arr5[0].foo);

logSpace();

let typedArr1 = Int16Array.of([...arr1]);
let typedArr2 = Int16Array.from(arr1);

// Int16Array(1) [ 0 ]
console.log(typedArr1);
// Int16Array(3) [ 1, 2, 3 ]
console.log(typedArr2);

logSpace();

let map = new Map(arr1.map((x) => [x, "val" + x]));
// Map(3) { 1 => 'val1', 2 => 'val2', 3 => 'val3' }
console.log(map);

let set = new Set(typedArr2);
// Set(3) { 1, 2, 3 }
console.log(set);

logSpace();

let arr6 = [...set];
// [ 1, 2, 3 ]
console.log(arr6);
