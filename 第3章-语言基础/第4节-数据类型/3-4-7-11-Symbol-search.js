console.log(`
    
        11、Search
        一个正则表达式方法，该方法返回字符串中匹配
    正则表达式的索引。由 Spring.prototype.search()
    方法使用。

    `);
// [Function: [Symbol.search]]
console.log(RegExp.prototype[Symbol.search]);
// 3
console.log("foobar".search(/bar/));

class FooSearcher {
    static [Symbol.search](target) {
        return target.indexOf("foo");
    }
}
// 0
console.log("foobar".search(FooSearcher));
// 3
console.log("barfoo".search(FooSearcher));
// -1
console.log("barbaz".search(FooSearcher));

class StringSearcher {
    #str;
    constructor(str) {
        this.#str = str;
    }
    [Symbol.search](target) {
        return target.indexOf(this.#str);
    }
}
// 0
console.log("foobar".search(new StringSearcher("foo")));
// 3
console.log("barfoo".search(new StringSearcher("foo")));
// -1
console.log("barbaz".search(new StringSearcher("qux")));
