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
