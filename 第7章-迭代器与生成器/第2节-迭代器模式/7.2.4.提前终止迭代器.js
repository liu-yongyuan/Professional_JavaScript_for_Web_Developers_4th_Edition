import { logSpace } from "../../lib/utils.js";

console.log(`

    7.2.4 提前终止迭代器

        可选的 return() 方法用于指定在迭代器提前关闭时执行的逻辑。执行迭代的结构在想让迭代器
    知道它不想遍历到可迭代对象耗尽时，就可以“关闭”迭代器。可能情况包括：
        · for-of 循环通过 break、continue、return 或 throw 提前退出；
        · 解构操作并消费所有值。

        return() 方法必须返回一个有效的 IteratorResult 对象。简单情况下，可以只返回 {done:true}。
    因为这个返回值只会用在生成器的上下文中，所以本章后面再讨论这种情况。
        如下面的代码所示，内置语言解构在发现还有更多值可以迭代，单不会消费这些值是，会自动调用
    return() 方法。

    
`);

class Counter {
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
                    return { done: true };
                }
            },
            return() {
                console.log(`Exiting early`);
                return { done: true };
            },
        };
    }
}

let counter1 = new Counter(5);

/* 
1
2
Exiting early
 */
for (let i of counter1) {
    if (i > 2) {
        break;
    }
    console.log(i);
}

logSpace();

let counter2 = new Counter(5);

try {
    /* 
    1
    2
    Exiting early
     */
    for (let i of counter2) {
        if (i > 2) {
            throw "err";
        }
        console.log(i);
    }
} catch (e) {}

logSpace();

let counter3 = new Counter(5);

let [a, b] = counter3;
// Exiting early
// 1 2
console.log(a, b);

logSpace();

console.log(`
    
        如果迭代器没有关闭，则还可以继续从上次离开的地方继续迭代。比如，数组的迭代器就是
    不能关闭的：

`);
let a1 = [1, 2, 3, 4, 5];
let iter = a1[Symbol.iterator]();
/* 
1
2
3
 */
for (let i of iter) {
    console.log(i);
    if (i > 2) {
        break;
    }
}
/* 
4
5
 */
for (let i of iter) {
    console.log(i);
}
logSpace();

console.log(`
    
        因为 return() 方法是可选的，所以并非所有迭代器都是可关闭的。要知道某个迭代器是否可关闭，
    可以测试这个迭代器实例的 return 熟悉是不是函数对象。不过，仅仅给一个不可关闭的迭代器增加
    这个方法并不能让他变成可关闭的。因为调用 return 不会强制迭代器进入关闭状态。即便如此，
    return() 方法还是会调用。
    
`);

let a2 = [1, 2, 3, 4, 5];
let iter2 = a2[Symbol.iterator]();
iter2.return = function () {
    console.log(`Exiting early`);
    return { done: true };
};
/* 
1
2
3
Exiting early
 */
for (let i of iter2) {
    console.log(i);
    if (i > 2) {
        break;
    }
}
/* 
4
5
 */
for (let i of iter2) {
    console.log(i);
}
