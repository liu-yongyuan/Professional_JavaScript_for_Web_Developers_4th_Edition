import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.3.3.异步函数策略

      1.实现 sleep()
`);

async function sleep(delay){
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function foo(){
  const t0 = Date.now();
  // 暂停约 1500 毫秒
  await sleep(1500);
  console.log(Date.now() - t0)
}
foo();

logSpace();