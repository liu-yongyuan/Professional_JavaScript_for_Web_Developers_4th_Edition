import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.14.2 内存泄漏

      IE9 之前对 JScript 对象和 COM 对象使用了不同的垃圾回收例程。JScript 对象使用标记清除，而 COM 对象使用引用计数。
    因此，如果 JScript 对象保留了对 COM 对象的引用，而 COM 对象又保留了对 JScript 对象的引用，就会导致内存泄漏。

`);