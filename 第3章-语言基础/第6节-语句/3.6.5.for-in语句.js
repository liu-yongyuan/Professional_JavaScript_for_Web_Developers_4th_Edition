console.log(`

    3.6.5 for-in 语句
        for-in 语句是一种严格的迭代语句，用于枚举对象中的
    非符号键属性，语法如下：
        for(property in expression) statement

    `);

/* 
    global
clearImmediate
setImmediate
clearInterval
clearTimeout
setInterval
setTimeout
queueMicrotask
structuredClone
atob
btoa
performance
fetch
crypto */
for (const propName in globalThis) {
    // 对象的属性键
    console.log(propName);
}
