import { logSpace } from "../../lib/utils.js";

console.log(`

    8.1.7.2 部分解构

        涉及多个属性的解构赋值是一个输出无关的顺序化操作。如果一个解构表达式涉及
    多个赋值，开始的赋值成功而后面的赋值出错，则整个解构赋值只会完成一部分。

`);

let person = {
    name: "Matt",
    age: 27,
    job: {
        title: "Software engineer",
    },
};

let personName, personBar, personAge;

try {
    ({
        name: personName,
        foo: { bar: personBar },
        age: personAge,
    } = person);
} catch (e) {}

// Matt undefined undefined
console.log(personName, personBar, personAge);

logSpace();


