import { logSpace } from "../../lib/utils.js";

console.log(`
    
        3.5.3 布尔操作符
        布尔操作符一共有 3 个：逻辑非、逻辑与和逻辑或

    `);
console.log(`
    
        1、逻辑非
        逻辑非操作符由一个叹号（！）表示，可应用给 ECMAScript 中的任何值
    这个操作符始终返回布尔值，无论应用到的是什么数据类型。逻辑非操作符首先
    将操作数转换为布尔值，然后再对其取反。
        逻辑非操作符会遵循如下规则：
        · 对象，则返回 false
        · 空字符串，则返回 false
        · 数值 0，返回 false
        · 非 0 数值，返回 true
        · null，返回 true
        · NaN，返回 true
        · undefined，返回 true

        `);
/* 
true
false
true
true
true
false
 */
console.log(!false);
console.log(!"blue");
console.log(!0);
console.log(!NaN);
console.log(!"");
console.log(!12345);

console.log(`
        逻辑非操作符也可以用于把任意值转换为布尔值。同时使用两个感叹号！！
    第一个感叹号总会返回布尔值，第二个叹号对该布尔值取反。
    `);
/* true
    false
    false
    false
    true */
console.log(!!"blue");
console.log(!!0);
console.log(!!NaN);
console.log(!!"");
console.log(!!12345);

logSpace();

console.log(`
    
        2、逻辑与
        逻辑与操作符由两个和号（&&）表示，应用到两个值。逻辑与操作符是
    以中短路操作，如果第一个操作数决定了结果，那么永远不会对第二个操作数求值。
    第一个操作数是 false，无论第二个操作数是什么值，结果也不可能等于 true。

    `);
// false
console.log(false && someUndeclaredVariable);
// ReferenceError: someUndeclaredVariable is not defined
// console.log(true && someUndeclaredVariable);

console.log(`
    
        3、逻辑或
        逻辑或操作符由两个管道符（||）表示，逻辑或操作符也具有短路的特性。
    只不过对逻辑或而言，第一个操作数值为 true，第二个操作数就不会求值了。
    两者都为 false 返回 false，任一值为 true 则返回 true
    `);
let found = true;
// true
console.log(found || someUndeclaredVariable);
// true
console.log(false || true);
// true
console.log(true || false);
