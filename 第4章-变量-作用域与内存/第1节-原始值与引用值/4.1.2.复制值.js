console.log(`
    4.1.2 复制值

        原始值和引用值在通过变量复制时也有所不同。在通过变量把一个
    原始值复制给到另一个变量时，原始值会被复制到新变量的位置。

    `);
// 5
let num1 = 5;
// 5
let num2 = num1;
num2 = 10;
// 5 10
console.log(num1, num2);

console.log(`
        在把引用值从一个变量赋给另一个变量时，存储在变量中的值
    也会被赋值到新变量所在的区域，区别在于，这里复制的值实际上
    是一个指针，它指向存储在堆内存中的对象。操作完成后，两个变量
    实际上指向同一个对象，因此一个对象上面的变化会在另一个对象上
    反映出来。
    `);
let obj1 = new Object();
let obj2 = obj1;
obj1.name = "Nicholas";
// Nicholas
console.log(obj2.name);
