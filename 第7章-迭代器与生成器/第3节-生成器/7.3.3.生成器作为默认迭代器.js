console.log(`

        因为生成器对象实现了 Iterable 接口，而且生成器函数和默认迭代器被调用之后都产生迭代器，
    所以生成器格外适合作为默认迭代器。下面是一个简单的例子，这个类的默认迭代器可以用一行代码产
    出类的内容：

`);

class Foo {
    constructor() {
        this.values = [1, 2, 3];
    }

    *[Symbol.iterator]() {
        yield* this.values;
    }
}

const f = new Foo();
for (const x of f) {
    console.log(x);
}

/* 
1
2
3
 */
