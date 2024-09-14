console.log(`

    6.5.2 弱键

        WeakMap 中的 weak 表示弱映射的键是“弱弱的拿着”的。意思就是，这些键不属于正式的引用，
    不会阻止垃圾回收。

`);
const weakmap = new WeakMap();

console.log(`
    
        set() 方法初始化了一个新对象并将它用作一个字符串的键。因为没有指向这个对象的其他引用，
    所以当这行代码执行完之后，这个对象键就会被当作垃圾回收。然后，这个键值对就从弱映射中消失了，
    使其成为一个空映射。

    `);
weakmap.set({}, "val");

const wm1 = new WeakMap();
const container = {
    key: {},
};

wm1.set(container.key, "val1");

function removeReference() {
    container.key = null;
}
