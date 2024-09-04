import { logSpace } from "../../lib/utils.js";

console.log(`
    4.1.4 确定类型

        typeof 对所有对象都返回 object
        instanceof 给定的引用类型

    `);
let s = "Nicholas";
let b = true;
let i = 22;
let u = undefined;
let n = null;
let o = new Object();
let bi = 12n;
/* string
boolean
number
undefined
object
object
bigint */
console.log(typeof s);
console.log(typeof b);
console.log(typeof i);
console.log(typeof u);
console.log(typeof n);
console.log(typeof o);
console.log(typeof bi);

logSpace();

console.log(`
        instanceof 表达式：
        result = variable instanceof constructor
    `);
function Person() {
    /* 
    这里如果创建 Object，constructor 会指向到 Object，
    就不再是 Person 了
    let o = new Object();
    o.name = "Nicholas";
    return o; */
}
let nicholas = new Person();
let colors = ["#fff", "#000"];
let patterb = RegExp("foo");
/* true
true
true */
console.log(nicholas instanceof Person);
console.log(colors instanceof Array);
console.log(patterb instanceof RegExp);
