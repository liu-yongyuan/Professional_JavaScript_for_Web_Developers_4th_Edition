import { logSpace } from "../../lib/utils.js";

console.log(`

    7.2.3 自定义迭代器

        与 Iterable 接口类似，任何实现 Iterator 接口的对象都可以作为迭代器使用。下面例子中
    的 Counter 类只能被迭代一定的次数。

    `);
class Counter {
    constructor(limit) {
        this.count = 1;
        this.limit = limit;
    }

    next() {
        if (this.count <= this.limit) {
            return { done: false, value: this.count++ };
        } else {
            return { done: true, value: undefined };
        }
    }

    [Symbol.iterator]() {
        return this;
    }
}

let counter = new Counter(3);

/* 
1
2
3
 */

for (let i of counter) {
    console.log(i);
}

// 不会由任何输出，因为它的每个实例只能被迭代一次
for (let i of counter) {
    console.log(i);
}
logSpace();

console.log(`

        为了让一个可迭代对象能够创建多个迭代器，必须每创建一个迭代器就对应一个新计数器。为此，
    可以把计数器遍历放到闭包里，然后通过闭包返回迭代器

`);

class Counter1 {
    #limit = 0;

    constructor(limit) {
        this.#limit = limit;
    }

    [Symbol.iterator]() {
        let count = 1,
            limit = this.#limit;
        return {
            next() {
                if (count <= limit) {
                    return { done: false, value: count++ };
                } else {
                    return { done: true, value: undefined };
                }
            },
        };
    }
}

let counter1 = new Counter1(3);
/* 
1
2
3
 */
for (let i of counter1) {
    console.log(i);
}

logSpace();

/* 
1
2
3
 */
for (let i of counter1) {
    console.log(i);
}

logSpace();

let arr = ["foo", "bar", "baz"];
let iter1 = arr[Symbol.iterator]();
let iter2 = iter1[Symbol.iterator]();
// true
console.log(iter1 === iter2);

logSpace();

