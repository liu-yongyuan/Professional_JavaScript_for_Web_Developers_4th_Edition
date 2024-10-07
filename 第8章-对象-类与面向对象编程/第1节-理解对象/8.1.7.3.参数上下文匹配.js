import { logSpace } from "../../lib/utils.js";

console.log(`

    8.1.7.3 参数上下文匹配

        在函数参数列表中也可以进行解构赋值。对参数的解构赋值不会影响 arguments 对象，但可以在
    函数签名中声明在函数体内使用局部变量

`);

let person = {
    name: "Matt",
    age: 27,
    job: {
        title: "Software engineer",
    },
};

function printPerson(foo, { name, age }, bar) {
    console.log(arguments);
    console.log(foo, name, age, bar);
}

function printPerson2(foo, { name: personName, age: personAge }, bar) {
    console.log(arguments);
    console.log(foo, personName, personAge, bar);
}
/* 
[Arguments] {
  '0': '1st',
  '1': { name: 'Matt', age: 27, job: { title: 'Software engineer' } },
  '2': '2nd'
}
1st Matt 27 2nd
 */
printPerson("1st", person, "2nd");

logSpace();

/* 
[Arguments] {
  '0': '1st',
  '1': { name: 'Matt', age: 27, job: { title: 'Software engineer' } },
  '2': '2nd'
}
1st Matt 27 2nd
 */
printPerson2("1st", person, "2nd");
