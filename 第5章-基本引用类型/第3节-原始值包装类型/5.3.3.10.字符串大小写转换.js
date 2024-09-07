console.log(`

    10.字符串大小写转换

        涉及大小写转换，包括 4 个方法：toLowerCase()、toLocaleLowerCase()、
    toUpperCase() 和 toLocaleUpperCse（）。

        toLowerCase（）和 toUpperCase（）是原本就有的方法。
        toLocaleLowerCase（）和 toLocaleUpperCase（）是用于特定地区实现，
    例如土耳其语。

    `);
let stringValue = "hello world";
// HELLO WORLD
console.log(stringValue.toLocaleUpperCase());
// HELLO WORLD
console.log(stringValue.toUpperCase());
// hello world
console.log(stringValue.toLocaleLowerCase());
// hello world
console.log(stringValue.toLowerCase());
