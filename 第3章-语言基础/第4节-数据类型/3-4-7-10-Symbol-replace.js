console.log(`
    
        10、Symbol.replace
        根据 ECMAScript 规范，这个符号作为一个属性表示“一个正则表达式方法，
    该方法替换一个字符穿中匹配的子串。由 String.prototype.replace() 方法调用”。
    String.prototype.replace() 方法会使用以 Symbol.replace 为键的函数来
    对正则表达式求值。
    `);
// [Function: [Symbol.replace]]
console.log(RegExp.prototype[Symbol.replace]);

// fooquxbaz
console.log("foobarbaz".replace(/bar/, "qux"));

class FooReplacer {
    static [Symbol.replace](target, replacement) {
        return target.split("foo").join(replacement);
    }
}
console.log("barfoobaz".replace(FooReplacer, "qux"));

class StringReplacer {
    #str;
    constructor(str) {
        this.#str = str;
    }
    [Symbol.replace](target, replacement) {
        return target.split(this.#str).join(replacement);
    }
}
console.log("barfoobaz".replace(new StringReplacer("foo"), "qux"));
