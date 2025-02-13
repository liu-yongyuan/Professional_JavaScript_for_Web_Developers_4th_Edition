import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.3.2.停止和恢复执行

      使用 await 关键字后的区别其实比看上去的还要微妙一些。
`);
async function foo1() {
  console.log(await Promise.resolve('foo1'));
}

async function bar() {
  console.log(await 'bar')
}

async function baz() {
  console.log('baz')
}
foo1();
bar();
baz();

// baz
// foo1
// bar

logSpace();


async function foo2() {
  console.log(2);
}

console.log(1);

foo2();

console.log(3);

// 1
// 2
// 3

logSpace();


async function foo3() {
  console.log('foo3-2');
  await null;
  console.log('foo3-4');
}
console.log('foo3-1');
foo3();
console.log('foo3-3');

console.log(`

    // 输出
    foo3-1
    foo3-2
    foo3-3
    foo3-4

    控制台中的输出结果的顺序很好地解释了运行时的工作过程：
    1，打印1
    2，调用异步函数 foo3()
    3，在 foo3 函数中打印2
    4，在 foo3 函数中，await 关键字暂停执行，为立即可用的值 null 向详细队列中添加一个任务
    5，foo3 函数退出
    6，打印3
    7，同步线程的代码执行完毕
    8，JavaScript运行时从消息队列中取出任务，恢复异步函数执行
    9，在 foo3 中恢复执行，await 取得 null 值（这里并没有使用—）
    10，在 foo3 中打印 4
    11，foo3 返回

  `);

logSpace();

async function foo4(){
  console.log('foo4-2');
  console.log(await Promise.resolve('foo4-8'));
  console.log('foo4-9')
}
async function bar1(){
  console.log('foo4-4');
  console.log(await 'foo4-6');
  console.log('foo4-7')
}
console.log('foo4-1');
foo4();
console.log('foo4-3');
bar1();
console.log('foo4-5');
/*
foo4-1
foo4-2
foo4-3
foo4-4
foo4-5
foo4-8
foo4-9
foo4-6
foo4-7
*/