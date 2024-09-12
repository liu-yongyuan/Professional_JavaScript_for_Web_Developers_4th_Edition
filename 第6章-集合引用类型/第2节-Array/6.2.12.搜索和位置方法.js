import { logSpace } from "../../lib/utils.js";

console.log(`

    6.2.12 搜索和位置方法
        
        ECMAScript 分为两类搜索：按严格相等搜索和按断言函数搜索。

    `);

console.log(`

        1. 严格相等
        ECMAScript 提供了 3 个严格相等的搜索方法：indexOf(), lastIndexOf()
    includes()。 前两个从数组前头开始向后搜索，lastIndexOf 则是从数组末尾开始向前
    搜索。

    `);
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// 3
console.log(numbers.indexOf(4));
// 5
console.log(numbers.lastIndexOf(4));
// true
console.log(numbers.includes(4));

logSpace();

// 5
console.log(numbers.indexOf(4, 4));
// 3
console.log(numbers.lastIndexOf(4, 4));
// false
console.log(numbers.includes(4, 7));

logSpace();

let person = { name: "Nicholas" };
let peopole = [{ name: "Nicholas" }];
let morePeople = [person];
// -1
console.log(peopole.indexOf(person));
// 0
console.log(morePeople.indexOf(person));
// false
console.log(peopole.includes(person));
// true
console.log(morePeople.includes(person));

console.log(`
    
        2. 断言函数
        断言函数接收 3 个参数：元素、索引和数组本身。
        find() 和 findIndex() 方法使用了断言函数。这两个方法都从数组的最小索引
    开始。find 返回第一个匹配的元素，findIndex 返回第一个匹配元素的索引。
`);

peopole = [
    {
        name: "Matt",
        age: 27,
    },
    {
        name: "Nicholas",
        age: 29,
    },
];
// { name: 'Matt', age: 27 }
console.log(peopole.find((element, index, array) => element.age < 28));
// 0
console.log(peopole.findIndex((element, index, array) => element.age < 28));

console.log(`
            找到匹配项后，这两个方法都不再继续搜索。
    `);
const evens = [2, 4, 6];
/* 
2
0
[ 2, 4, 6 ]
4
1
[ 2, 4, 6 ]
 */
evens.find((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
    return element === 4;
});
