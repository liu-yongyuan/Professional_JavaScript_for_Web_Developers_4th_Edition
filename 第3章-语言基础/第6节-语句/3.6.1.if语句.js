console.log(`
    
    3.6.1 if 语句
        if 语句语法：
        if(condition) statement1 else statement2
        这里的条件（condition）可以是任何表达式，并且求值结果不一定
    是布尔值。ECMAScript 会自动调用 Boolean() 函数将这个表达式的值
    转换为布尔值。

    `);
let i = 30;
if (i > 25) {
    console.log("Greater than 25.");
} else {
    console.log("Less than or equal to 25.");
}

/* 连续多个 if 语句 */
if (i >= 30) {
    console.log("Greater than 30");
} else if (i >= 25) {
    console.log("Greater than 25");
} else {
    console.log("Less than or equal to 25.");
}
