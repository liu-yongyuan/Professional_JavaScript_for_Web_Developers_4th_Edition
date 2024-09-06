console.log(`

    5.2 RegExp

        ECMAScript 通过 RegExp 类型支持正则表达式。正则表达式使用类似 Perl 的简洁语法来创建：
        let expression = /pattern/flags;

        这个正则表达式的 pattern（模式）可以是任何简单或复杂的正则表达式，包括字符类、
    限定符、分组、向前查找和反向引用。每个正则表达式可以带零个或多个 flags（标记），
    用于控制正则表达式的行为。匹配模式的标记：
        · g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。
        · i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写
        · m：多行模式，表示查找到一行文本末时会继续查找。
        · y：黏附模式，表示只从 lastIndex 开始及之后的字符串。
        · u：Unicode 模式，启用 Unicode 匹配。
        · s：dotAll 模式，表示元字符 . 匹配任何字符（包括\\n 或 \\r)

`);

// 匹配字符串中的所有 at
let pattern = /at/g;

// 匹配第一个 bat 或 cat 忽略大小写
let pattern2 = /[bc]at/i;

// 匹配所有 at 结尾的三字符组合，忽略大小写
let pattern3 = /.at/gi;

console.log(`
        需要转义的元字符：
        ({ [ \\ ^ $ |  ]}) ? * + .
`);

let pattern4 = /[bc]at/i;

let pattern5 = /\[bc\]at/i;

let pattern6 = /.at/gi;

let pattern7 = /\.at/gi;

const re1 = /cat/g;
console.log(re1);

const re2 = new RegExp(re1);
console.log(re2);

const re3 = new RegExp(re1, "i");
console.log(re3);
