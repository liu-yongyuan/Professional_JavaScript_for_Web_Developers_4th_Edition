import { logSpace } from "../../lib/utils.js";

console.log(`

    8.1.6.1 属性值简写

        在给对象添加变量的时候，开发者经常会发现属性名和变量名是一样的。

`);
let name = "Matt";

let person = {
    name: name,
};

// { name: 'Matt' }
console.log(person);

logSpace();

console.log(`
        简写属性名只要使用变量名（不用再写冒号）就会自动被解释为同
    名的属性键。如果没有找到同名的变量，则会抛出 ReferenceError
`);

person = {
    name,
};

// { name: 'Matt' }
console.log(person);

logSpace();

console.log(`

        代码压缩程序会在不同作用域间保留属性名，以防止找不到引用。

`);

function makePerson(name) {
    return {
        name,
    };
}

person = makePerson("Matt");

// Matt
console.log(person.name);

logSpace();

console.log(`

        在这里，即使参数标识符只限定于函数作用域，编译器也会保留初始的 name 标识符。如果使用
    Google Closure 编译器压缩，那么函数参数会被缩短，而属性名不变

`);

function makePerson2(a) {
    return {
        name: a,
    };
}

person = makePerson2("Matt");
// Matt
console.log(person.name);
