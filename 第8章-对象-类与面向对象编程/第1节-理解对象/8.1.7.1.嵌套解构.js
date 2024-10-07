import { logSpace } from "../../lib/utils.js";

console.log(`

    8.1.7.1 嵌套解构

        解构对于引用嵌套的属性或赋值目标没有限制。为此，可以通过解构来复制对象属性

`);

let person = {
    name: "Matt",
    age: 27,
    job: {
        title: "Software engineer",
    },
};
let personCopy = {};

({ name: personCopy.name, age: personCopy.age, job: personCopy.job } = person);

// { name: 'Matt', age: 27, job: { title: 'Software engineer' } }
console.log(personCopy);

logSpace();

// 因为一个对象的引用被赋值给 personCopy，所以修改
// person.job 对象的属性也会影响 personCopy
person.job.title = "Hacker";

// { name: 'Matt', age: 27, job: { title: 'Hacker' } }
console.log(person);
// { name: 'Matt', age: 27, job: { title: 'Hacker' } }
console.log(personCopy);

logSpace();

console.log(`

        解构赋值可以使用嵌套结构，以匹配嵌套的属性

`);

person = {
    name: "Matt",
    age: 27,
    job: {
        title: "Software engineer",
    },
};

let {
    job: { title },
} = person;

// Software engineer
console.log(title);

logSpace();

console.log(`
    
        在外层属性没有定义的情况下不能使用嵌套解构。无论源对象还是目标对象都一样
    
`);

person = {
    job: {
        title: "Software engineer",
    },
};

personCopy = {};

try {
    ({
        foo: { bar: personCopy.bar },
    } = person);
} catch (e) {
    // {}
    console.log(personCopy);
}

logSpace();

try {
    ({
        foo: { title: personCopy.job.title },
    } = person);
} catch (e) {
    // {}
    console.log(personCopy);
}

logSpace();
