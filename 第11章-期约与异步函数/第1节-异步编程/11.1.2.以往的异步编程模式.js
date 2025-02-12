import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.2.1 以往的异步编程模式

    1. 回调函数
        回调函数是异步编程最基本的方法。
        一个函数接受另一个函数作为参数，这就是回调函数。
    2. 事件监听
        事件监听是一种更高级的异步编程方法。
        事件监听是通过监听事件触发回调函数。
`);

// 1.回调函数，在早起的 JavaScript 中，只支持定义回调函数来表明异步操作完成。
// 串联多个异步操作上一个常见的问题，通常需要深度嵌套的回调函数，这种情况被称为回调地狱。

function double(value) {
  setTimeout(() => {
    setTimeout(console.log, 0, value * 2);
  }, 1000);
}
double(3); // 6

logSpace();

console.log(`

    1.异步返回值
    假设 setTimeout 是一个异步操作，我们希望 double 函数返回一个值，而不是在回调函数中打印出来。
`);
function double1(value, callback) {
  setTimeout(() => {
    callback(value * 2);
  }, 1000);
}
double1(3, console.log); // 6

logSpace();

console.log(`

    2.失败处理
    异步操作可能失败，我们需要处理失败情况。

`);
function double2(value, success, failure){
  setTimeout(() => {
    try{
      if(typeof value !== 'number'){
        throw 'Must provide number as first argument';
      }
      success(2 * value)
    }catch(e){
      failure(e)
    }
  }, 1000)
};
const successCallback = (x) => console.log(`Success: ${x}`);
const fialureCallback = (e) => console.log(`Failure: ${e}`);

double2(3, successCallback, fialureCallback); // Success: 6
double2('b', successCallback, fialureCallback); // Failure: Must provide number as first argument

logSpace();

console.log(`

  3.嵌套异步回调
  异步值又依赖另一个异步返回值，那么回调的情况还会进一步变复杂。在实际的代码中，
  这种情况会导致回调地狱，代码难以维护。

`);
const successCallback1 = (x) => {
  double1(x, (y) => console.log(`Success: ${y}`));
};

double2(3, successCallback1, fialureCallback); // Success: 12