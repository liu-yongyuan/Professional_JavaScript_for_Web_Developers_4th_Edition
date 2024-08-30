import { logSpace } from '../../lib/utils.js'

console.log(`
    
    3.3.2 let 声明

        let 跟 var 的作用差不多，但有着非常重要的区别。
    最明显的区别是，let 声明的范围是块作用域，
    而 var 声明的值范围是函数作用域。
    
    `);

if (true) {
    var name = 'Matt';
    console.log(name); // Matt
}
// 函数作用域，被提升，因此 name 在函数中被定义，这里可以访问到
console.log(name); // Matt

if (true) {
    let age = 26;
    console.log(age); // 26
}
// ReferenceError: age is not defined，age 只在 块中被定义
// console.log(age);
logSpace();


console.log(`
    
        在这里 age 变量之所以不能在 if 块外部被引用，是因为它的作用域
    仅限于该块内部。块作用域是函数作用域的自己，因此适用于 var 的作用域
    限制同样也适用于 let。

        let 也不下允许同一个块作用域中出现荣誉声明。

        var name;
        var name;

        let age;
        let age; // SyntaxError： 标识符 age 以及声明过了

        当然 JavaScript 引擎会记录用于变量声明的标识符及其所在的块作用域，
    因此嵌套使用相同的标识符不会报错，而这是因为同一个块中没有重复声明：
    `);

var name1 = 'Nicholas';
console.log(name1);
if (true) {
    var name1 = 'Matt';
    console.log(name1);
}
let age1 = 30;
console.log(age1);
if(true){
    let age1 = 26;
    console.log(age1);
}
logSpace();


console.log(`
    
        1、暂时性死区
        let 于 var 的另一个重要区别，就是 let 声明的变量不会在作用域中被提升。

        // name 被提升
        console.log(name); // undefined
        var name = 'Matt';


        // age 不会被提升
        console.log(age);
        let age = 26;

        在解析代码是，Javascript引擎也会注意出现在块后面的 let 声明，只不过
    再次之前不能以任何方式来引用未声明的变量。在 let 声明之前的执行瞬间被
    成为“暂时性死区”（temporal dead zone），在此阶段引用任何后面才声明的
    变量都会抛出 ReferenceError


        2、全局声明
        与 var 关键字不同，使用 let 在全局作用域中声明的变量不会成为 window 对象的属性。
    var 声明的变量则会。

        不过，let 声明仍然是在全局作用域中发生的，相应变量会在页面的声明周期内存续。
    因此，为了避免 SyntaxError， 必须确保页面不会重复声明同一个变量。


        3、条件声明
        在使用 var 声明变量时，由于声明会被提升，JavaScript 引擎会自动将多余的声明
    在作用域顶部合并为一个声明。因为 let 的作用域是块，所以不可能检查前面是否以及使用
    let 声明过不同名变量，同时也就不可能在没有声明的情况下声明它。

        4、for 循环中的 let 声明
        在 let 出现之前，for 循环定义的迭代遍历会渗透到循环体外部，
    改成 let 之后，这个问题就小时了，因为迭代遍历的作用域仅限于 for 循环块内部。
    之所以会这样，是因为退出循环时，迭代遍历保存的是导致循环退出的值。

    `);