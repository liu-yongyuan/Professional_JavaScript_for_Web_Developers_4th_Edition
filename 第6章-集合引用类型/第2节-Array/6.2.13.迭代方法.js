import { logSpace } from "../../lib/utils.js";

console.log(`

    6.2.13 迭代方法

        ECMAScript 为数组定义了 5 个迭代方法。每个方法接收两个参数：以每一项为参数运行的函数，
    以及可选的作为函数运行上下文的作用域对象（影响函数中 this 的值）。传给每个方法的函数接收
    3 个参数：数组元素、元素索引和数组本身。

        · every()：对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true
        · filter()：对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回。
        · forEach()：对数组每一项都运行传入的函数，没有返回值
        · map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。
        · some()：对数组每一项都运行传入的函数，如果由一项函数返回 true，则这个方法返回 true。
    
        这些方法都不改变调用它们的数组。
        在这些方法中，every 和 some 是最相似的，都是从数组中搜索符合某个条件的元素。every 是
    每个都返回 true 菜返回 true。some 是有一个返回 true 就返回 true

`);

let numbers = Array.of(1, 2, 3, 4, 5, 4, 3, 2, 1);

let everyResult = numbers.every((item, index, array) => item > 2);
// false
console.log(everyResult);

let someResult = numbers.some((item, index, array) => item > 2);
// true
console.log(someResult);

logSpace();

console.log(`
    
        filter() 方法基于给定的函数来决定某一项是否应该包含在它返回的数组中。

`);
let filterResult = numbers.filter((value, index, array) => value > 2);
// [ 3, 4, 5, 4, 3 ]
console.log(filterResult);

logSpace();

console.log(`

        map() 方法也返回一个数组。这个数组的每一项都是对原始数组中同样位置的
    元素运行传入函数而返回的结果。例如，可以将一个数组中的每一项乘以 2，并返回包含
    所有结果的数组。
    
`);
let mapResult = numbers.map((item, index, array) => item * 2);
console.log(mapResult);

logSpace();

console.log(`

        forEach() 这个方法只会对每一项运行传入的函数，没有返回值。本质上
    forEach 方法只是相当于使用 for 循环遍历数组。

`);
/* 
foreach, 1, 0
foreach, 2, 1
foreach, 3, 2
foreach, 4, 3
foreach, 5, 4
foreach, 4, 5
foreach, 3, 6
foreach, 2, 7
foreach, 1, 8
 */
numbers.forEach((value, index, array) => {
    console.log(`foreach, ${value}, ${index}`);
});
