import { logSpace } from "../../lib/utils.js";

console.log(`

    8.4.3.5 迭代器与生成器方法

        类定义语法支持在原型上和类本身上定义生成器方法

`);

class Person {
    // 在原型上定义生成器方法
    *createNickNameIterator() {
        yield "Jake";
        yield "Jake";
        yield "J-Dog";
    }

    // 在类上定义生成器方法
    static *createJobIterator() {
        yield "Butcher";
        yield "Baker";
        yield "Candlestick maker";
    }
}

let jobIter = Person.createJobIterator();
// Butcher
console.log(jobIter.next().value);
// Baker
console.log(jobIter.next().value);
// Candlestick maker
console.log(jobIter.next().value);

logSpace();

let p = new Person();
let nicknameIter = p.createNickNameIterator();
// Jake
console.log(nicknameIter.next().value);
// Jake
console.log(nicknameIter.next().value);
// J-Dog
console.log(nicknameIter.next().value);

logSpace();

console.log(`
        通过添加一个默认的迭代器，把类实例编程可迭代对象。
`);
class Person1 {
    constructor() {
        this.nickname = ["Jack", "Jake", "J-Dog"];
    }

    *[Symbol.iterator]() {
        yield* this.nickname.entries();
    }
}
let p1 = new Person1();
for (let [idx, nickname] of p1) {
    /* 0 Jack
    1 Jake
    2 J-Dog */
    console.log(idx, nickname);
}

logSpace();

console.log(`

        也可以只返回迭代器实例

`);
class Person2 {
    constructor() {
        this.nickname = ["Jack", "Jake", "J-Dog"];
    }

    [Symbol.iterator]() {
        return this.nickname.entries();
    }
}
let p2 = new Person2();
for (let [idx, nickname] of p2) {
    /* Jack;
    Jake;
    J - Dog; */
    console.log(nickname);
}
