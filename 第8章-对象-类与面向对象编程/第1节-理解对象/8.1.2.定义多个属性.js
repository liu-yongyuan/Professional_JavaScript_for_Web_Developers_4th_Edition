console.log(`

    8.1.2 定义多个属性

        在一个对象上同时定义多个属性的可能性是非常大的。为此，ECMAScript 提供了 
    Object.define-Properties() 方法。这个方法可以通过多个描述符一次性定义多个属性。它接收
    两个参数：要为之添加或修改属性的对象和另一个描述对象，其属性与要添加或修改的属性一一对应。

`);
let book = {};
Object.defineProperties(book, {
    year_: {
        value: 2017,
        /* 
        要主动设置为 true，否则报错
        enumerable: true,
        writable: true,
        configurable: true, */
    },
    edition: {
        value: 1,
        /* 
        要主动设置为 true，否则报错
        enumerable: true,
        writable: true,
        configurable: true, */
    },
    year: {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        },
    },
});
/* 
Chrome:
{year_: 2017, edition: 1}

Node.js:
{}
 */
console.log(book);

book.year = 2018;
/* 
Chrome:
1

Node.js:
TypeError: Cannot assign to read only property 'year_' of object '#<Object>'
 */
console.log(book.edition);
