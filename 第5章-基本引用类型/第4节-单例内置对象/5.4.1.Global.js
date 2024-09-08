import { getGlobal, logSpace } from "../../lib/utils.js";

console.log(`

    5.4.1 Global
        
        Global 对象是 ECMA-262 规定的兜底对象，它针对的不属于任何对象的属性和方法。
    在全局作用域中定义的变量和函数都会编程 Global 对象的属性。

`);

console.log(`

        1. URL 编码方法
        encodeURI() 和 encodeURIComponent() 方法用于统一资源标识符（URI），
    encodeURI 方法会对整个 URI 进行编码。encodeURIComponent 方法会编码它发现的所有
    非标准字符粗。

        decodeURI() 和 decodeURIComponent() 对应给编码进行解码

`);
const uri = "http:// www.wrox.com/ illegal value.js#start";
const encodeURIStr = encodeURI(uri);
const encodeURIComponentStr = encodeURIComponent(uri);
// http://%20www.wrox.com/%20illegal%20value.js#start
console.log(encodeURIStr);
// http%3A%2F%2F%20www.wrox.com%2F%20illegal%20value.js%23start
console.log(encodeURIComponentStr);

const decodeURIStr = decodeURI(encodeURIStr);
const decodeURIComponentStr = decodeURIComponent(encodeURIComponentStr);
// http:// www.wrox.com/ illegal value.js#start
console.log(decodeURIStr);
// http:// www.wrox.com/ illegal value.js#start
console.log(decodeURIComponentStr);

logSpace();

console.log(`
    
        2. eval() 方法
        eval() 函数是一个完整的 ECMAScript 解释器，它接收一个参数，即一个要执行
    的 ECMAScript（JavaScript）字符粗。

`);
// hi
eval(`console.log('hi')`);

let message = "hello world";
// hello world
eval(`console.log(message)`);

logSpace();

console.log(`

        3. Global 对象属性
        属性、说明
        undefined、特殊值 undefined
        NaN、特殊值NaN
        Infinity、特殊值Infinity
        Object、Object的构造函数
        Array、Array的构造函数
        Function、Function的构造函数
        Boolean、Boolean的构造函数
        String、String的构造函数
        Number、Number的构造函数
        Date、Date的构造函数
        RegExp、RegExp的构造函数
        Symbol、Symbol的构造函数
        Error、Error的构造函数
        EvalError、EvalError的构造函数
        RangeError、RangeError的构造函数
        ReferenceError、ReferenceError的构造函数
        SyntaxError、SyntaxError的构造函数
        TypeError、TypeError的构造函数
        URIError、URIError的构造函数

`);

logSpace();

console.log(`

        4. window 对象
        浏览器中的 window 对象实现为 Global 对象的代理。
    因此，所有全局作用域中什么的变量和函数都变成 window 的属性。
        在最新的特性中 globalThis 也指向 Global 对象。

`);

var color = "red";
function sayColor() {
    console.log(globalThis.color);
}
// red
// globalThis.sayColor();

/* 另一种获取 Global 对象的方式是如下方式： */
let global = (function () {
    return this;
})();

let global1 = getGlobal;
let global2 = getGlobal;

console.log(global1 === global2, getGlobal === global);