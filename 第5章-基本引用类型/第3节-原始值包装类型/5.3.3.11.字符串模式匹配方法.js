import { logSpace } from "../../lib/utils.js";

console.log(`

    11. 字符串模式匹配方法

        match() 方法，接收一个参数，可以是一个正则表达式字符串，
    也可以是一个 RegExp 对线。

`);
let text = "cat, bat, sat, fat";
let pattern = /.at/;

// 等价于 pattern.exec(text)
let matches = text.match(pattern);
// 0
console.log(matches.index);
// cat
console.log(matches[0]);
// 0
console.log(pattern.lastIndex);

logSpace();

console.log(`
    
        search() 方法，始终从字符字符串开头向后匹配模式

`);
let pos = text.search(/at/);
// 1 ，第一个字符在字符串中的位置
console.log(pos);

logSpace();

console.log(`

        replace() 方法，这个方法接收两个参数，第一个是参数
    可以是一个 RegExp 对线或一个字符串，第二个参数是一个字符串
    或一个函数。如果第一个参数是字符串，那么只会替换第一个子字符串。
    想要替换所有子字符串，第一个参数必须为正则表达式并且带全局标记。

`);
let result = text.replace("at", "ond");
// cond, bat, sat, fat
console.log(result);

result = text.replace(/at/g, "ond");
// cond, bond, sond, fond
console.log(result);

logSpace();

console.log(`
        replace()的第二个参数可以是一个函数。在只有一个匹配项时，
    这个函数会收到 3 个参数：与整个模式匹配的字符串、匹配项在字符串中的
    开始位置，以及真个字符串。在有多个捕获组的情况下，每个匹配捕获组的字符串也会
    作为参数传给这个参数，但最后两个参数还是与整个模式匹配的开始位置和原始字符串。
    这个函数应该返回一个字符串，表示应该把匹配项替换成什么。使用函数作为第二个参数
    可更细致地替换这个歌过程。
    `);

function htmlEscape(text) {
    return text.replace(/[<>"&"]/g, function (match, pos, originalText) {
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case '"':
                return "&quot;";
        }
    });
}

// &lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;
console.log(htmlEscape(`<p class="greeting">Hello world!</p>`));

logSpace();

console.log(`

        split() 方法会根据传入的分隔符将字符串拆分成数组。作为分隔符的参数
    可以是字符串，也可以是 RegExp 对线。还可以传入第二个参数，即数组大小，
    确保返回的数组不会超过指定大小。

`);
let colorText = "red, blue, green, yellow";
let colors1 = colorText.split(",");
let colors2 = colorText.split(",", 2);
let colors3 = colorText.split(/[^,]}/);
// [ 'red', ' blue', ' green', ' yellow' ]
console.log(colors1);
// [ 'red', ' blue' ]
console.log(colors2);
// [ 'red, blue, green, yellow' ]
console.log(colors3);
