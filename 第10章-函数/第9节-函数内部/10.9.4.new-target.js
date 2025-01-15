import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.9.4 new.target

      检测函数是否使用 new 关键字调用的 new.target 属性。正常调用函数 new.taget 的值是 undefined
    如果是使用 new 关键字，则 new.target 将引用被调用的构造函数
`);

function King() {
  if (!new.target) {
    throw 'King must be instantiated using "new"';
  }
  console.log('King instantiated using "new"');
}

// King instantiated using "new"
new King();

// King must be instantiated using "new"
King();