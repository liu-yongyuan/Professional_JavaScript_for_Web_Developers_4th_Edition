import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.3.1.1.async

      async 关键字用于声明异步函数。这个关键字可以用在函数声明、函数表达式、箭头函数和方法上
`);
async function foo() { }

let bar = async function () { };

let baz = async () => { };

class Qux {
  async qux() { }
}

async function foo1(){
  console.log(1);
}
foo1();
console.log(2);
// 1
// 2

logSpace();

console.log(`

    异步函数的返回值会被 Promise.resolve() 包装成一个期约对象。异步函数始终返回期约对象。
  在函数外部调用这个函数可以得到它返回的期约
`);
async function foo2(){
  console.log(`foo2 - 1`);
  return 'foo2 - 3';
}
foo2().then(console.log);
console.log('foo2 - 2');
// foo2 - 1
// foo2 - 2
// foo2 - 3

logSpace();

console.log(`

    异步函数的返回期待一个实现 thenable 接口的对象，但常规的值也可以。
  如果返回的是实现 thenable 接口的对象，则这个对象可以由提供给 then() 的处理程序“解包”。
  如果不是，则返回值就被当作已经解决的期约。
`);

async function foo3(){
  return 'foo3';
}
// foo3
foo3().then(console.log);

async function foo4(){
  return ['foo4']
}
// [ 'foo4' ]
foo4().then(console.log);

async function foo5(){
  const thenable = {
    then(callback){
      callback('foo5');
    }
  }
  return thenable;
}
// foo5
foo5().then(console.log)

logSpace();

async function foo6(){
  return Promise.resolve('foo6');
}
// foo6
foo6().then(console.log);

// 异步函数抛出错误
async function foo7(){
  console.log('foo7');
  throw 'foo7-Error';
}
// foo7
// foo7-Error
foo7().catch(console.log);

// 拒绝期约的错误不会被异步函数捕获
async function foo8(){
  console.log('foo8');
  Promise.reject('foo8-reject');
}
// foo8
// UnhandledPromiseRejection
foo8().catch(console.log)