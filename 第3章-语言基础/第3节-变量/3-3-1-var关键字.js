// 定义变量 message
var ariab;


// 声明变量 message 其值为 字符串的 hi
var message = "hi";
message = 100; // 合法，但不推荐


function test() {
    console.log(`
        
            1、var 声明作用域
            关键的问题在于，使用 var 操作符定义的变量会成为包含
        它的函数的局部变量。比如，使用 var 在一个函数内部定义一个变量，
        就意味着该变量将在函数退出时被销毁。

        `);

    var message1 = "message 1";
}
test();
// ReferenceError: message1 is not defined
// console.log(message1);

function test2() {
    console.log(`

            在函数内定义变量时省略 var 操作符，可以创建一个全局变量：

        `);
    message2 = "Message2";
}
test2();
console.log(message2); // => Message2


console.log(`
    
        2、var 声明提升
        使用 var 关键字声明的变量会自动提升到函数作用域顶部

    `);
function foo(){
    console.log(age); // undefined
    var age = 26;

    console.log(`
        
        之所以不会报错，因为 ECMAScript 运行时把它看成等价
    于如下的代码：

        var age;
        console.log(age);
        age = 26;

        `);
}
foo();