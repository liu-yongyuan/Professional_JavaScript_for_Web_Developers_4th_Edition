import { logSpace } from "../../lib/utils.js";

console.log(`

    5.2.1 RegExp 实例属性
        
        每个 RegExp 实例都有下列属性，提供有关模式的各方面信息
        · global：布尔值，表示是否设置了 g 标记
        · ignoreCase：布尔值，表示是否设置了 i 标记
        · unicode：布尔值，表示是否设置了 u 标记
        · sticky：布尔值，表示是否设置了 y 标记
        · lastIndex：整数，表示在源字符串中下一次搜索的开始位置，始终从 0 开始
        · multiline：布尔值，表示是否设置了 m 标记
        · dotAll：布尔值，表示是否设置了 s 标记
        · source：正则表达式的字面量字符串（不是传给构造函数的模式字符串），没有
    开头和结尾的斜杠。
        · flags：正则表达式的标记字符串。始终以字面量而非传入构造函数的字符串模式
    形式返回（没有前后斜杠）。

`);

let pattern1 = /\[bc\]at/i;
/*
下列的输出：
false
true
false
0
\[bc\]at
i  
*/
console.log(pattern1.global);
console.log(pattern1.ignoreCase);
console.log(pattern1.multiline);
console.log(pattern1.lastIndex);
console.log(pattern1.source);
console.log(pattern1.flags);

logSpace();

let pattern2 = new RegExp("\\[bc\\]at", "i");
/* log输出：
false
true
false
0
\[bc\]at
i
 */
console.log(pattern2.global);
console.log(pattern2.ignoreCase);
console.log(pattern2.multiline);
console.log(pattern2.lastIndex);
console.log(pattern2.source);
console.log(pattern2.flags);

logSpace();

console.log(pattern2.test("bat"), pattern2.test("BAT"));
console.log(pattern2.test("cat"), pattern2.test("cAT"));
