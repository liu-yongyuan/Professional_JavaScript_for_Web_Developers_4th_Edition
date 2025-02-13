import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.3.3.2.利用平行执行
`);

async function randomDelay(id) {
  // 延迟 0~1000 毫秒
  const delay = Math.random() * 1000;
  return new Promise((resolve) => setTimeout(() => {
    console.log(`${id} finished`);
    resolve();
  }, delay));
}

async function foo() {
  const t0 = Date.now();
  await randomDelay(0);
  await randomDelay(1);
  await randomDelay(2);
  await randomDelay(3);
  await randomDelay(4);
  console.log(`${Date.now() - t0}ms elapsed`);

  logSpace();
}
foo();
/*
  0 finished
1 finished
2 finished
3 finished
4 finished
2185ms elapsed
*/

logSpace();

async function foo2() {
  console.log('foo2-- start--')
  const t0 = Date.now();
  for (let i = 0; i < 5; ++i) {
    await randomDelay(i);
  }
  console.log(`${Date.now() - t0}ms elapsed`);
  console.log('foo2-- end--')
  logSpace();
}
foo2();


logSpace();

async function randomDelay1(id){
  const delay = Math.random() * 1000;
  return new Promise((resolve) => setTimeout(() => {
    console.log(`${id} finished`);
    resolve();
  }, delay));
}

async function foo3(){
  const t0 = Date.now();

  const promises = Array(5).fill(null).map((_, i) => randomDelay1(i));

  for(const p of promises){
    await p;
  }

  console.log(`foo3--${Date.now() - t0}ms elapsed`);
  console.log('foo3-- end--')
}