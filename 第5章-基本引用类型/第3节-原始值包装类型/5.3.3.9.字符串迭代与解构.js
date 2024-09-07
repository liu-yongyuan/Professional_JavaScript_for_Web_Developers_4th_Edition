console.log(`

    9. 字符串迭代与结构

        字符串的原型上暴露了一个 @@iterator 方法，表示可以迭代字符串
    的每个字符。可以像下面这样手东使用迭代器：

`);
let message = "abc";
let stringIterator = message[Symbol.iterator]();

// { value: 'a', done: false }
console.log(stringIterator.next());
// { value: 'b', done: false }
console.log(stringIterator.next());
// { value: 'c', done: false }
console.log(stringIterator.next());
// { value: undefined, done: true }
console.log(stringIterator.next());

console.log(`

        在 for-of 循环中可以通过这个迭代器按序访问每个字符：

    `);
for (const c of "abcde") {
    console.log(c);
}

console.log(`

        有了这个迭代器之后，字符串就可以通过结构操作符来解构了。
    比如，更方便地把字符串分割为字符数组：

`);
let message2 = "abcde";
// [ 'a', 'b', 'c', 'd', 'e' ]
console.log([...message2]);
