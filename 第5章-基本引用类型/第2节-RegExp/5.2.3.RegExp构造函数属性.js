import { logSpace } from "../../lib/utils.js";

console.log(`

    5.2.3 RegExp 构造函数属性

        全名、简写、说明
        input、$_、最后搜索的字符串
        lastMatch、$&、最后匹配的文本
        lastParen、$+、最后匹配的捕获组
        leftContext、$\`、input字符串中出现在 lastMatch 前面的文本
        rightContext、$'、input字符串中出现在 lastMatch 后面的文本

`);

let text = "this has been a short summer";
let pattern = /(.)hort/g;

if (pattern.test(text)) {
    // this has been a short summer
    console.log(RegExp.input);
    // short
    console.log(RegExp.lastMatch);
    // s
    console.log(RegExp.lastParen);
    // this has been a
    console.log(RegExp.leftContext);
    //  summer
    console.log(RegExp.rightContext);
}

logSpace();

if (pattern.test(text)) {
    console.log(RegExp.$_);
    console.log(RegExp["$`"]);
    console.log(RegExp["$'"]);
    console.log(RegExp["$&"]);
    console.log(RegExp["$+"]);
    console.log(RegExp["$*"]);
}

logSpace();

let text2 = "this has been a short summer";
let pattern2 = /(..)or(.)/g;
if (pattern2.test(text2)) {
    // sh
    console.log(RegExp.$1);
    // t
    console.log(RegExp.$2);
}
