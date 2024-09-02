console.log(`
    
        13 Symbol.split
        一个正则表达式方法，该方法在匹配正则表达式的索引位置
    拆分字符串。由 String.prototype.split() 方法调用

    `);
// [Function: [Symbol.split]]
console.log(RegExp.prototype[Symbol.split]);
// [ 'foo', 'baz' ]
console.log("foobarbaz".split(/bar/));

class FooSplitter {
    static [Symbol.split](target) {
        return target.split("foo");
    }
}
console.log("barfoobaz".split(FooSplitter));

class StringSplitter {
    #str;
    constructor(str) {
        this.#str = str;
    }
    [Symbol.split](target) {
        return target.split(this.#str);
    }
}
console.log("barfoobaz".split(new StringSplitter("foo")));
