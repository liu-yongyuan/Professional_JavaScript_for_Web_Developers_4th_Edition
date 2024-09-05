console.log(`

    4.2.1 作用域链增强
        虽然执行上下文主要有全局上下文和函数上下文两种，但
    其他方式来增强作用域链。某些语句会导致在作用域链前端
    临时添加一个上下文，这个上下文在代码执行后会被删除。
    通常在两种情况下会出现这个现象，即代码执行到下面任意一种情况时：
        · try、catch 语句的 catch 块
        · with 语句
        这两种情况下，都会在作用域链前端添加一个变量对象。对
    with 语句来说，会向作用域链前端添加指定的对象；对 catch 语句
    而言，则会创建一个新的变量对象，这个变量对象会包含要抛出
    的错误对象的声明。例子：

    `);
function buildUrl() {
    let qs = "?debug=true";
    with (location) {
        // 使用 var 关键字，进行 hosit 提升到函数，所以 url 声明了
        // 使用 let 关键字，因为是块作用域，因此无法 url 只在当前的作用域下
        var url = href + qs;
    }
    // let 下 url 会报错，url 变量未被定义
    return url;
}
buildUrl();

console.log(`
        这里，with 语句将 location 对象作为上下文，因此 location
    会被添加到作用域链前端。 buildUrl 函数钟定义了一个变量 qs。
    当 with 语句中的代码引用变量 href 时，实际上引用的是
    location.href 也就是自己变量对象的属性。在引用 qs 时，引用的规则
    是定义在 buildUrl 函数中的那个变量，它定义在函数上下文的变量对象上。
    而在 with 语句中使用 var 声明的变量 url 会称为函数上下文的一部分，
    可以视作为函数的值返回；但像这里使用 let 声明的变量 url，
    因为被限制在块级作用域，所以在 with 块之外没有定义
    `);
