import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.8 函数作为值

        JavaScript 中的函数是一种特殊的对象，因此函数可以被赋值给变量，也可以作为参数传递给其他函数，还可以作为其他函数的返回值。
`);
function callSomeFunction(someFunction, someArgument) {
  return someFunction(someArgument);
}

function add10(num) {
  return num + 10;
}

let result1 = callSomeFunction(add10, 10);
console.log(result1); // 20

function getGreeting(name) {
  return "Hello, " + name;
}

let result2 = callSomeFunction(getGreeting, "Nicholas");
console.log(result2); // Hello, Nicholas

logSpace();

function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    let value1 = object1[propertyName];
    let value2 = object2[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return -2;
    } else {
      return 0
    }
  }
}

let data = [
  { name: 'Zachary', age: 28 },
  { name: 'Nicholas', age: 29 }
];
data.sort(createComparisonFunction('name'));
console.log(data[0].name); // Nicholas

data.sort(createComparisonFunction('age'));
console.log(data[0].name); //Zachary