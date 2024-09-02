console.log(`
    
        9、Symbol.match
        根据 ECMAScript 规范，这个符号作为一个属性表示“一个正则表达式方法，
    该方法用正则表达式去匹配字符串。由 String.prototype.match() 方法使用”。
    String.prototype.match() 方法会使用 Symbol.match 为键的函数来对正则
    表达式求值。

    `);
// [Function: [Symbol.match]]
console.log(RegExp.prototype[Symbol.match]);
// [ 'bar', index: 3, input: 'foobar', groups: undefined ]
console.log("foobar".match(/bar/));

class FooMatcher {
    static [Symbol.match](target) {
        return target.includes("foo");
    }
}
// true
console.log("foobar".match(FooMatcher));
// false
console.log("barbaz".match(FooMatcher));

class StringMatcher {
    #str;
    constructor(str) {
        this.#str = str;
    }
    [Symbol.match](target) {
        return target.includes(this.#str);
    }
}
// true
console.log("foobar".match(new StringMatcher("foo")));
// false
console.log("barbaz".match(new StringMatcher("qux")));
