import { logSpace } from "../../lib/utils.js";

console.log(`

    6.2.10 排序方法

        数组又两个方法可以用来对元素重新排序：reverse() 和 sort()

`);

let values = [1, 2, 3, 4, 5];
values.reverse();
// [ 5, 4, 3, 2, 1 ]
console.log(values);

logSpace();

values.sort();
// [ 1, 2, 3, 4, 5 ]
console.log(values);

logSpace();

console.log(`

        sort() 函数可以接收一个比较函数。该函数接收两个参数，如果第一个参数应该在排在
    第二个参数前面，就返回负值；如果两个参数相等，就返回 0；如果第一个参数应该排在第二个
    参数后面，就返回正值。

`);

function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}

let values2 = [],
    reset = () => (values2 = [0, 1, 5, 10, 15]);
values2.sort(compare);
// [ 0, 1, 5, 10, 15 ]
console.log(values2);

logSpace();

reset();
values2.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
// [ 15, 10, 5, 1, 0 ]
console.log(values2);
reset();

function compare2(a, b) {
    return a - b;
}
values2.sort(compare2);

// [ 0, 1, 5, 10, 15 ]
console.log(values2);
