console.log(`
    
    7. repeat() 方法

        ECMAScript 在所有自从上都提供了 repeat() 方法。
    这个方法接收一个整数参数，表示要将字符串复制多少次，然后
    返回拼接所有副本后的结果。

`);
let stringValue = "na  ";
// na  na  na  na  na  na  na  na  na  na  na  na  na  na  na  na  batman
console.log(stringValue.repeat(16) + "batman");
