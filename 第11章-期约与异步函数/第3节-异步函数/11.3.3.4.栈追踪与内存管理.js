import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.3.3.4.栈追踪与内存管理


`);

function fooPromiseExecutor(resolve, reject){
  setTimeout(reject, 1000, 'bar');
}

async function foo(){
  await new Promise(fooPromiseExecutor);
}

foo();