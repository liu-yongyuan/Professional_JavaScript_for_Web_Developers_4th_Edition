import { logSpace } from "../../lib/utils.js";

console.log(`

    6.5.4 使用弱映射

        WeakMap 实例与现有 JavaScript 对象有着很大不同，使用的相关策略。

`);

console.log(`
    
        1. 私有变量
        弱映射造就了 JavaScript 中实现真正私有变量的一种新方式。前提很明确；
    私有变量会存储再弱映射中，以对象实例为键，以私有成员的字典为值。

`);
const wm = new WeakMap();

class User {
    constructor(id) {
        this.idProperty = Symbol("id");
        this.setId(id);
    }

    setPrivate(property, value) {
        const privateMembers = wm.get(this) || {};
        privateMembers[property] = value;
        wm.set(this, privateMembers);
    }

    getPrivate(property) {
        return wm.get(this)[property];
    }

    setId(id) {
        this.setPrivate(this.idProperty, id);
    }

    getId() {
        return this.getPrivate(this.idProperty);
    }
}

const user = new User(123);
// 123
console.log(user.getId());
user.setId(456);
// 456
console.log(user.getId());

// 并不是真正私有的，还是能访问到属性
console.log(wm.get(user)[user.idProperty]);

logSpace();

console.log(`

        用一个闭包把 WeakMap 包装起来，就可以把弱映射与外界完全隔离开了。

    `);

const UserData = (() => {
    const wm = new WeakMap();

    class User {
        constructor(id) {
            this.idProperty = Symbol("id");
            this.setId(id);
        }

        setPrivate(property, value) {
            const privateMembers = wm.get(this) || {};
            privateMembers[property] = value;
            wm.set(this, privateMembers);
        }

        getPrivate(property) {
            return wm.get(this)[property];
        }

        setId(id) {
            this.setPrivate(this.idProperty, id);
        }

        getId() {
            return this.getPrivate(this.idProperty);
        }
    }

    return User;
})();

const user1 = new UserData(123);
// 123
console.log(user1.getId());
user1.setId(456);
// 456
console.log(user1.getId());

// TypeError: Cannot read properties of undefined (reading 'Symbol(id)')
// console.log(wm.get(user1)[user1.idProperty]);
console.log(user1.idProperty);


console.log(`

        2. DOM 节点元数据

        WeakMap 实例不会妨碍垃圾回收，所以非常适合存储关联元数据。

    `)