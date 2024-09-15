import { logSpace } from "../../lib/utils.js";

console.log(`

    6.7.2 弱值

        WeakSet 中的 Weak 表示弱集合的值是 弱弱地拿着 的。意思就是，这些值不属于正式的引用，
    不会阻止垃圾回收。
    
`);
const ws = new WeakSet();
ws.add({});

console.log(`

        add 了一个空对象，因为没有指向这个对象的其他引用，所以当这行代码执行完成后，
    这个对象值就会被当作垃圾回收。然后，这个值就从弱集合中消失了，使其成为一个空集合。

`);

const ws1 = new WeakSet();

const container = {
    val: {},
};

ws1.add(container.val);

function removeReference() {
    container.val = null;
}

// true
console.log(ws1.has(container.val));

removeReference();

// false
console.log(ws1.has(container.val));

logSpace();

