import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.4 没有重载

        ECMAScript 的函数没有重载。
        定义相同名称的函数，后定义的会覆盖先定义的。
`);
let foo = function () {
  console.log('foo');
}

foo = function () {
  console.log('bar');
}

foo();