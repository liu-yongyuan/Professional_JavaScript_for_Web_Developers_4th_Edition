console.log(`
    3.5.5 指数操作符
        ECMAScript 7 新增了指数操作符，Math.pow 现在有了自己的操作符 **
    `);
// 9
console.log(Math.pow(3, 2));
// 9
console.log(3 ** 2);

// 4
console.log(Math.pow(16, 0.5));
// 4
console.log(16 ** 0.5);

console.log(`
        指数赋值操作符 **=，该操作符执行指数运算和结果的赋值操作
    `);
let squared = 3;
squared **= 2;
// 9
console.log(squared);
