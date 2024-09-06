import { logSpace } from "../../lib/utils.js";

console.log(`

    5.1 Date

        ECMAScript 的 Date 类型参考了 Java 早期版本中的 java.util.Date。为此
    Date 类型将日期保存为自协调世界时（UTC，Universal Time Coordinated）时间
    1970 年 1 月 1日至今所经历过的毫秒数。使用这种存储格式，Date类型可以精确
    表示日期。

`);

let now = new Date();
console.log(now);

logSpace();

console.log(`

        在不给 Date 构造函数传参的情况下，创建的对象将保存当前日期和时间。
        
    要基于其他日期和时间创建日期对象，必须传入其毫秒表示。ECMAScript 提供了
    两个辅助方法：Date.parse(), Date.UTC()

        Date.parse() 接受一个表示日期的字符串，尝试将这个字符串转换为表示
    该日期的毫秒数，日期格式：
        · 月/日/年，如 9/6/2024
        · 月名，日，年，如 May 23, 2019
        · 周几 月名 日 年 时：分：秒：时区，如 Tue May 23 2019 00:00:00 GMT-0700
        · ISO 8601 扩展格式 YYYY-MM-DDTHH:mm:ss:sssZ，如 2019-05023T00:00:00


        Date.UTC 方法也返回日期的毫秒表示，但使用的是 Date.parse 不同的信息
    来生成这个值。传给 Date.UTC() 的参数是年、零点其约束（1月是0，2月是1）、日（1-31）
    时（0-23）、分、秒和毫秒。这些参数中，只有前两个（年和约）是必须的。如果不提供
    日，那么默认为 1 日，其他参数的默认值都是 0.

`);

logSpace();

console.log(` Date.parse() 示例：`);
let someDate = new Date(Date.parse("May 23, 2019"));
// 2019-05-22T16:00:00.000Z
console.log(someDate);

let someDate2 = new Date("May 23, 2024");
// 2019-05-22T16:00:00.000Z
console.log(someDate2);

logSpace();

console.log(` Date.UTC() 示例： `);

let y2k = new Date(Date.UTC(2000, 0));
console.log(y2k);

let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
console.log(allFives);

logSpace();

console.log(` 通过 Date.now 方法，返回表示方法执行时日期和时间的毫秒数`);

let start = Date.now();

let stop = Date.now(),
    result = stop - start;
console.log(start, stop, result)