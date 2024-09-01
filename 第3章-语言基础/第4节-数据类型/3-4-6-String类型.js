import { logSpace } from "../../lib/utils.js";

console.log(`
    
    3.4.6 String 类型
        String（字符串）数据类型表示零或多个 16 位 Unicode 字符序列。
    字符穿可以使用双引号（"）、单引号（'）或反引号（\`）标识

    `);
let string1 = "John";
let string2 = "Jacob";
let string3 = `Jingleheimerschmidt`;

console.log(`
    
        1、字符字面量
        字符串数据类型包含一些字符字面量，用于表示非大于字符或
    其他用途的字符，如下表示：
        \\n、换行
        \\t、制表
        \\b、退格
        \\r、回车
        \\f、换页
        \\、反斜杠
        \\'、单引号
        \\"、双引号
        \\\`、反引号
        \\xnn、十六进制编码的字符
        \\unnn、十六进制编码的 Unicode 字符

    `);

logSpace();

console.log(`
    
        2、字符串的特点
        ECMAScript 中的字符串是不可变的（immutable），要修改某个变量中的字符串值，
    必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量。

        let lang = "Java";
        lang = lang + "Script";

    会先销毁 lang 存储的 Java，然后创建 JavaScript 字符串。

    `);

logSpace();

console.log(`
    
        3、转换为字符串
        有两种方法转换为字符串，第一种是通过 toString() 方法，另一种是通过 +""
    给一个值加上一个空白符，使其变为字符串，这种方式等同于 String() 函数。

    `);
let num = 10;
/*输出：
10
1010
12
10
a */
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));

logSpace();

console.log(`
    
        4、模板字面量
        ECMAScript 6 新增了使用模板字面量定义字符串的能力。与使用单引号或双引号不同，
    模板字面量保留换行符，可以跨行定义字符串。

    `);

let myMultiLineString = "first line\n second line";
let myMultiLineTemplateLiteral = `first line
 second line`;
/* 输出：
first line
 second line
first line
second line
 */
console.log(myMultiLineString);
console.log(myMultiLineTemplateLiteral);

// true
console.log(myMultiLineString === myMultiLineTemplateLiteral);

logSpace();

console.log(`
    
        5、字符串插值
        模板字面量最常用的一个特性是支持字符串插值，也就是可以再一个连续定义中
    插入一个或多个值。技术上将，模板字面量不是字符串，而是一种特殊 JavaScript
    句法表达式，只不过求值后得到的是字符串。模板字面量再定义时立即求值并转换为
    字符串实例，任何插入的变量也会从它们最接近的作用域中取值。
    
    `);
let value = 5;
let exponent = "second";
// 以前的字符串插入值
let interpolatedString =
    value + " to the " + exponent + " power is " + value * value;

// 现在，可以用模板字面量这样实现
let interpolatedTemplateLiteral = `${value} to the ${exponent} power is ${
    value * value
}`;
/* 输出：
5 to the second power is 25
5 to the second power is 25
 */
console.log(interpolatedString);
console.log(interpolatedTemplateLiteral);

// Hello, World
console.log(`Hello, ${`World`}`);

// Hello, World
let foo = { toString: () => "world" };
console.log(`Hello, ${foo}`);

// 在插值表达式中可以调用函数和方法
function capitalize(word) {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
}
// Hello, World!
console.log(`${capitalize("hello")}, ${capitalize("world")}!`);

logSpace();

console.log(`
    
        6、模板字面量标签函数
        目标字面量也支持定义标签函数（tag function），而通过标签函数可以自定义
    插值行为。标签函数会接收被插值几号分隔后的模板和对每个表达式求值的结果。

    `);
let a = 6;
let b = 9;
function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
    /* 输出：
    [ '', '+', ' = ', '' ] 4
    6
    9
    15
     */
    console.log(strings, strings.length);
    console.log(aValExpression);
    console.log(bValExpression);
    console.log(sumExpression);
    return "foobar";
}

let untaggedResult = `${a}+${b} = ${a + b}`;
let taggedResult = simpleTag`${a}+${b} = ${a + b}`;
// 6+9 = 15
console.log(untaggedResult);
// foobar
console.log(taggedResult);

logSpace();

function tagPrint(strings, ...expressions) {
    console.log(strings);
    for (const expression of expressions) {
        console.log(expression);
    }
    return "foobar";
}
taggedResult = tagPrint`${a}+${b} = ${a + b}`;
console.log(taggedResult);

console.log(`
    
        对于有 n 个插值的模板字面量，传给标签函数的表达式参数的个数始终是 n，
    而传给标签函数的第一俄国参数所包含的字符串个数则始终是 n+1。因此，想把这些
    字符串和对表达式求值的结果拼接起来作默认返回的字符串，可以这么做：

    `);

function zipTag(strings, ...expressions) {
    return expressions.map((e, i) => `${e}${strings[i + 1]}`).join("");
}
taggedResult = zipTag`${a}+${b} = ${a + b}`;
// 6+9 = 15
console.log(taggedResult);

logSpace();

console.log(`

        7、原始字符串
        使用模板字面量也可以直接获取原始的模板字面量内容
    而不是被转移后的字符表示。为此，可以使用默认的 String.raw 标签函数：
    
    `);

// ©
console.log(`\u00A9`);
// \u00A9
console.log(String.raw`\u00A9`);

let string6 = `first line \nsecond line`;
console.log(string6);
// first line \nsecond line
console.log(String.raw`first line \nsecond line`);
// zhey hui baocuo 
// console.log(String.raw(string6));