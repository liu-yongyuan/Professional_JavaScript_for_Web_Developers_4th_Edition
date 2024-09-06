console.log(`

    5.1.1 继承的方法

        Date 类型重写了 toLocaleString()、toString() 和 valueOf() 方法。
    Date 类型的 tolocalString() 方法返回与浏览器运行的本地环境一致的日期和时间。
    通常意味着格式中包含针对时间的 AM 或 PM。
    toString() 方法通常返回带时区信息的日期和时间，而时间也是以 24 小时制（0-23）。
    
`);
// 2024/9/6 17:06:39
console.log(new Date().toLocaleString());
// Fri Sep 06 2024 17:06:39 GMT+0800 (中国标准时间)
console.log(new Date().toString());

console.log(`

        Date 类型的 valueOf 方法不返回字符串，这个方法被重写后返回的是
    日期的毫秒表示。因此，操作符（如小于号和大于号）可以直接使用它返回的值。

    `);

let date1 = new Date(2019, 0, 1);
let date2 = new Date(2019, 1, 1);

// 1546272000000 1548950400000
console.log(date1.valueOf(), date2.valueOf());
// true
console.log(date1 < date2);
// false
console.log(date1 > date2);
