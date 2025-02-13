import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.2.3.6.邻近处理程序的执行顺序
   
`);

let p1 = Promise.resolve();
let p2 = Promise.reject("reason");

p1.then(() => setTimeout(console.log, 0, 1));
p2.then(() => setTimeout(console.log, 0, 2));
// 1
// 2

p1.then(null, () => setTimeout(console.log, 0, 3));
p2.then(null, () => setTimeout(console.log, 0, 4));
// 3
// 4

p1.catch(() => setTimeout(console.log, 0, 5));
p2.catch(() => setTimeout(console.log, 0, 6));
// 5
// 6

p1.finally(() => setTimeout(console.log, 0, 7));
p2.finally(() => setTimeout(console.log, 0, 8));
// 7
// 8

