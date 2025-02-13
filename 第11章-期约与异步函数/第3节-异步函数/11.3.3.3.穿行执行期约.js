import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.3.3.3.串行执行期约
`);
async function addTwo(x) { return x + 2; };
async function addThree(x) { return x + 3; };
async function addFive(x) { return x + 5; };

async function addTen(x) {
  for (const fn of [addTwo, addThree, addFive]) {
    x = await fn(x);
  }
  return x;
}
// 19
addTen(9).then(console.log);