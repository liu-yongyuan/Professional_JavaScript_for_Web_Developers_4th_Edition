console.log(`
    
    3.5.4 乘性操作符
        ECMAScript定义了 3 个乘性操作符：乘法、出发和取模。处理非数值
    时，它们会包含一些自动的类型转换。如果乘性操作符由不是数值的操作数，
    则该操作数会在后台被使用 Number() 转型函数转换为数值。

    `);

console.log(`
        1、乘法操作数
        乘法操作数由一个星号（*）表示，计算两个数值的乘积。
        `);
// 1904
console.log(34 * 56);

console.log(`
        2、除法操作数
        除法操作数由一个斜杠(/)表示，用于计算第一个操作数
    除以第二个操作数的商。
    `);
// 6
console.log(66 / 11);

console.log(`
        3、取模操作数
        取模（余数）操作符由一个百分比符号（%）表示
    `);
// 1
console.log(26 % 5);
