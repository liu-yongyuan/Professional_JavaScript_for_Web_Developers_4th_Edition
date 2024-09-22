import { logSpace } from "../../lib/utils.js";

console.log(`

    7.3.4 提前终止生成器

        与迭代器类似，生成器也支持“可关闭”的概念。一个实现 Iterator 接口的对象一定有 next()
    方法，还有一个可选的 return() 方法用于提前终止迭代器。生成器对象除了有这两个方法，还有第三个
    方法：throw()

`);

function* generatorFn() {}

const g = generatorFn();
// Object [Generator] {}
console.log(g);
// [Function: next]
console.log(g.next);
// [Function: return]
console.log(g.return);
// [Function: throw]
console.log(g.throw);
