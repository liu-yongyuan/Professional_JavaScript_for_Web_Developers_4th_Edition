import { logSpace } from "../../lib/utils.js";

console.log(`

    3.6.4 for 语句

        for 语句也是先测试语句，只不过增加了进入循环之前的
    初始化代码，以及循环执行后要执行的表达式，语法：
        for(initialization; expression; post-loop-expression) statement

    `);
let count = 10;
for (let i = 0; i < count; i++) {
    console.log(i);
}

logSpace();

console.log(`
    
        这样会变成无穷循环
        
        for(;;){
            doSomething()
        }

    `);
