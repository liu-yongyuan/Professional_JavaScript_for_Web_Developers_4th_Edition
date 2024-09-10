console.log(`

    6.1 Object

        显示的创建 Object 的实例有两种方式
        · new Object() Object 构造函数
        · { name: "Nicholas" }  对象字面量

`);

/* 构造函数  */
let person = new Object();
person.name = "Nicholas";
person.age = 29;

/* 对象字面量（object literal） */
let person2 = {
    name: "Nicholas",
    age: 29,
};

console.log(`

        表达式上下文(expression context)。表达式上下文指的是期待
    返回值的上下文。赋值操作符表示后面要期待一个值。


        语句上下文(statement context)。if 语句的条件后面，则表示
    一个语句块的开始。

`);

function displayInfo(args) {
    let output = "";
    if (typeof args.name === "string") {
        output += `Name: ${args.name} \n`;
    }
    if (typeof args.age === "number") {
        output += `Age: ${args.age} \n`;
    }

    console.log(output);
}

/*Name: Nicholas 
Age: 29 
*/
displayInfo({
    name: "Nicholas",
    age: 29,
});

/*Name: Greg   */
displayInfo({
    name: "Greg",
});

// Nicholas
console.log(person["name"]);

// Nicholas
console.log(person.name);
