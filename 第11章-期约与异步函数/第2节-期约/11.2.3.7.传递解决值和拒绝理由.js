import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.2.3.7.传递解决值和拒绝理由

      到了罗定状态后，期约会提供其解决值（如果兑现）或其拒绝理由（如果拒绝）给相关状态的处理程序
    拿到返回值后，就可以进一步对这个值进行操作。
   
`);
let p1 = new Promise((resolve, reject) => resolve('foo'));
p1.then((value) => console.log(value)); // foo

let p2 = new Promise((resolve, reject) => reject('bar'));
p2.catch((reason) => console.log(reason)); // bar

logSpace();

let p3 = Promise.resolve('p3');
p3.then((value) => console.log(value));

let p4 = Promise.reject('p4');
p4.catch((reason) => console.log(reason));