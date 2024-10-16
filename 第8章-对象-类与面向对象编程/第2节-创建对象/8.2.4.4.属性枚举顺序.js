import { logSpace } from "../../lib/utils.js";

console.log(`

    8.2.4.4 属性枚举顺序

        for-in 循环、Object.keys()、Object.getOwnPropertyNames()、Object.getOwnProperty-Symbols()
    以及 Object.assign() 在数学枚举顺序方面有很大区别。for-in 循环和 Object.keys()
    的枚举顺序是不确定的，屈居于 JavaScript 引擎，可能因浏览器而已。

        Object.getOwnPropertyNames()、Object.getOwnPropertySymbols() 和 Object.assign()
    的枚举顺序是确定的。先以升序枚举数值键，然后以插入顺序枚举字符串和符号键。在对象字面量中
    定义的键以它们逗号分隔的顺序插入。

`);
let k1 = Symbol("k1");
let k2 = Symbol("k2");

let o = {
    1: 1,
    first: "first",
    [k2]: "sym2",
    second: "second",
    0: 0,
};

o[k1] = "sym1";
o[3] = 3;
o.third = "third";
o[2] = 2;

// [ '0', '1', '2', '3', 'first', 'second', 'third' ]
console.log(Object.getOwnPropertyNames(o));

logSpace();

// [ Symbol(k2), Symbol(k1) ]
console.log(Object.getOwnPropertySymbols(o));
