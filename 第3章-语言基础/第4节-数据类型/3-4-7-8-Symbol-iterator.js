import { logSpace } from "../../lib/utils.js";

console.log(`
    
        8、Symbol.iterator
        根据 ECMAScript 规范，符号作为一个属性表示“一个方法，该方法
    返回对象默认的迭代器。由 for-of 语句使用”。话句话说，这个符号表示
    实现迭代器 API 的函数。

    `);
class Foo {
    *[Symbol.iterator]() {}
}
let f = new Foo();
console.log(f[Symbol.iterator]());

class Emitter {
    #max = 0;
    #idx = 0;
    constructor(max) {
        this.#max = max;
    }
    *[Symbol.iterator]() {
        while (this.#idx < this.#max) {
            yield this.#idx++;
        }
    }
}
function count() {
    let emitter = new Emitter(5);
    console.log(emitter);
    for (const x of emitter) {
        console.log(x);
    }
}
count();
