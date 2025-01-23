import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.14 必包

      必包(Closure)是指有权访问另一个函数作用域中的变量的函数。创建必包的常见方式是在一个函数内部创建另一个函数。

`);
function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    // 匿名函数引用了外部函数的 propertyName 参数
    // 在这个内部函数呗返回并在其他地方使用后，它仍然引用着那个变量
    let value1 = object1[propertyName];
    let value2 = object2[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
}
// 创建比较函数
let compareName = createComparisonFunction('name');
// 调用函数
let result = compareName({ name: 'Nicholas' }, { name: 'Matt' });

console.log(result);

// 解除对函数的有引用，这样就可以释放内存了
compareName = null;