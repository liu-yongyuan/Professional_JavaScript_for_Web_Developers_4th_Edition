console.log(`

    3.5.8 相等操作符

        ECMAScript 提供了两组操作符。第一组是等于和不等于，它们在比较之前执行转换。
    第二组是全等和全不等，它们在比较之前不执行转换。

    `);

console.log(`
        1、等于 和 不等于
        ECMAScript 中等于操作符用两个等于号（==）表示，如果操作数相等，返回 true
    不等于操作符用叹号和等于号（!=）表示，如果两个操作数不相等，返回 true。
    这两个操作符都会进行类型转换再确定操作数是否相等。
        表达式、结果
        null == undefined、true
        “NaN” == NaN、false
        5 == NaN、false
        NaN == NaN、false
        NaN != NaN、true
        false == 0、true
        true == 1、true
        true == 2、false
        undefined == 0、false
        null == 0、false
        "5" == 5、true

    `);

console.log(`
        2、全等和不全等
        全等和不全等操作符与相等和不相等操作符类似，只不过它们在比较相等时不转换操作数。
    全等操作符由 3 个不等于号（===）表示，只有两个操作数在不转换的前提下相等才返回 true
        `);
// true
console.log("55" == 55);
// false
console.log("55" === 55);
// false
console.log("55" != 55);
// true
console.log("55" !== 55);
