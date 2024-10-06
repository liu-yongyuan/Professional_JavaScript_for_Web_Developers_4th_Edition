import { logSpace } from "../../lib/utils.js";

console.log(`
    
    8.1.1.2 访问器属性

      访问器属性不包含数值。相反，它们包含一个获取（getter）函数和一个设置（setter）函数，不
    过这两个函数不是必需的。在读取访问器属性时，会调用获取函数，这个函数的责任就是返回一个有效
    的值。在写入访问器属性时，会调用设置函数并传入新值，这个函数必须决定对数据做出什么修改。访问
    器属性有 4 个特性描述它们的行为。

        ·[[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特
        性，以及是否可以把它改为数据属性。默认情况下，所有直接定义在对象上的属性的这个特性
        都是 true。
        ·[[Enumerable]]：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在
        对象上的属性的这个特性都是 true。
        ·[[Get]]：获取函数，在读取属性时调用。默认值为 undefined。
        ·[[Set]]：设置函数，在写入属性时调用，默认值为 undefined。

        访问器属性是不能直接定义的，必须使用 Object.defineProperty()。下面是一个例子：
`);
let book = {
    year_: 2017,
    edition: 1,
};

Object.defineProperty(book, "year", {
    get() {
        return this.year_;
    },
    set(newValue) {
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition += newValue - 2017;
        }
    },
});
book.year = 2018;
// 2
console.log(book.edition);
