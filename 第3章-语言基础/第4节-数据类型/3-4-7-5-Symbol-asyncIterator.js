console.log(`
    
    5、Symbol.asyncIterator
    根据 ECMAScript 规范，这个符号作为一个属性表示“一个方法，
该方法返回对象默认的 AsyncIterator。由 for-await-of 语句使用”。
换句话说，这个符号表示实现异步迭代器 API 函数。

`);
class Foo {
async *[Symbol.asyncIterator]() {}
}

let f = new Foo();
console.log(f[Symbol.asyncIterator]);

class Emitter {
constructor(max) {
    this.max = max;
    this.asyncIdx = 0;
}

async *[Symbol.asyncIterator]() {
    while (this.asyncIdx < this.max) {
        yield new Promise((resolve) => resolve(this.asyncIdx++));
    }
}
}

async function asyncCount() {
let emitter = new Emitter(5);
for await (const x of emitter) {
    console.log(x);
}
}
/* 
0
1
2
3
4 */
asyncCount();