console.log(`
    4.1.3 传递参数
        ECMAScript 中所有函数的参数都是按值传递的。函数外的值
    会被复制到函数内部的参数中，就像从一个变量复制到另一个变量一样。
    如果是原始值，那么就跟原始值复制一样，如果引用值就按引用值的变量
    的复制一样，
    `);
function addTen(num) {
    num += 10;
    return num;
}
let count = 20;
let result = addTen(20);
// 20 30
console.log(count, result);

function setName(person) {
    person.name = "Greg";
}
let person = new Object();
setName(person);
// Greg
console.log(person.name);

function setName2(person) {
    person.name = "Nicholas";
    person = new Object();
    person.name = "Greg";
}
setName2(person);
// Nicholas
console.log(person.name);
