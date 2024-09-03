import { logSpace } from "../../lib/utils.js";

console.log(`

    3.6.10 switch 语句
        switch 语句是与 if 语句紧密相关的一种流控制语句，从其他语言借鉴而来。
    ECMAScript 中 switch 语句跟 C 语言中 switch 语句的语法非常相似。

        switch (expression) {
            case value:
                statement;
                break;
            case value2:
                statement;
                break;
            case value3:
                statement;
                break;
            default:
                statement;
        }


    `);
let i = 25;
/* 25 is now */
switch (i) {
    case 25:
        console.log("25 is now");
        break;
    case 35:
        console.log(i.toString());
        break;
    default:
        console.log("other");
}

logSpace();

// Greating was found.
switch ("hello world") {
    case "hello" + " world":
        console.log("Greating was found.");
        break;
    case "goodby":
        console.log("Closing was found.");
        break;
    default:
        console.log("Unexpected message was found.");
}
logSpace();

// More than 20.
let num = 30;
switch (true) {
    case num < 0:
        console.log("Less than 0");
        break;
    case num >= 0 && num <= 20:
        console.log("Between 0 and 20");
        break;
    default:
        console.log("More than 20.");
}
