import { logSpace } from "../../lib/utils.js";

console.log(`

    8.4.3.1 实例成员

        每个实例都对应一个唯一的成员对象，这意味着所有成员都不会在原型上共享

`);

class Person {
    constructor() {
        this.name = new String("Jake");
        this.sayName = () => console.log(this.name);
        this.nickNames = ["Jake", "J-Dog"];
    }
}

let p1 = new Person();
let p2 = new Person();

// false
console.log(p1.name === p2.name);
// false
console.log(p1.sayName === p2.sayName);
// false
console.log(p1.nickNames === p2.nickNames);

p1.name = p1.nickNames[0];
p2.name = p2.nickNames[1];

logSpace();

// Jake
p1.sayName();
// J-Dog
p2.sayName();
