console.log(`
    
    3.4.3 Null 类型

        Null 类型同样只有一个值 null，从逻辑上讲 null 是一个空对象指针
    typeof null 时返回 object。

        undefined 是 null 派生来的，用来区分是否为对象。null 表示为对象
    只是暂未赋值，undefined 则表明声明了一个变量，将来可以为任何数据类型。
    undefined == null // true

    `);

console.log(typeof null);

console.log(undefined == null);

let user = null;
console.log(user);

console.log(null ? true : false);
/* output:

object
true
null
false

 */