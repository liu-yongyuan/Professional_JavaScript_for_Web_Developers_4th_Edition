console.log(`

    12. localeCompare() 方法
        这个方法比较两个字符串，返回如下 3 个值中的一个：
        · 如果按照字母表顺序，字符串应该排在字符串参数牵头，否则返回负值。（通常为-1）
        · 如果字符串与字符串参数相等，返回 0。
        · 如果按照字母表顺序，字符串应该排在字符串参数后头，则返回正值。（通常为 1）

    `);

let stringValue = "yellow";
// 1
console.log(stringValue.localeCompare("brick"));
// 0
console.log(stringValue.localeCompare("yellow"));
// -1
console.log(stringValue.localeCompare("zoo"));

function determineOrder(value) {
    let result = stringValue.localeCompare(value);
    if (result < 0) {
        console.log(`The string 'yellow comes before the string ${value}.`);
    } else if (result > 0) {
        console.log(`The string 'yellow comes after the string ${value}.`);
    } else {
        console.log(`The string 'yellow equal to the string ${value}.`);
    }
}

// The string 'yellow comes after the string brick.
determineOrder("brick");
// The string 'yellow equal to the string yellow.
determineOrder("yellow");
// The string 'yellow comes before the string zoo.
determineOrder("zoo");
