import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.2.4.2.期约图

      因为一个期约可以有任意多个处理程序，所以期约连锁可以构建有向非循环图到结构。这样，每个
    期约都是图中的一个节点，而使用实例方法添加的处理程序则是有向定点。因为图中的每个节点都会
    等待前一个节点罗定，所以图的方向就是期约的解决或拒绝顺序。
`);

let A = new Promise((resolve, reject) => {
  console.log('A');
  resolve();
})

let B = A.then(() => console.log('B'));
let C = A.then(() => console.log('C'));

B.then(() => console.log('D'));
B.then(() => console.log('E'));

C.then(() => console.log('F'));
C.then(() => console.log('G'));

console.log(`

    树只是期约图的一种形式。考虑到根节点不一定唯一，且多个期约也可以组合成一个期约，所以
  有向双循环是体现期约连锁可以能性的最准确表达。

  `);