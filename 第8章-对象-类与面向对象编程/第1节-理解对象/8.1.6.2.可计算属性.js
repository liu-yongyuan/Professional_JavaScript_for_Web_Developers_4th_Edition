import { logSpace } from "../../lib/utils.js";

console.log(`

    8.1.6.2 可计算属性

        在引入可计算属性之前，如果想使用变量的值作为属性，那么必须先声明对象，然后使用中括号语法
    来添加属性。换句话说，不能再对象字面量中直接动态命名属性。

`);
const nameKey = "name";
const ageKey = "age";
const jobKey = "job";

let person = {};

person[nameKey] = "Matt";
person[ageKey] = 27;
person[jobKey] = "Software engineer";

console.log(person);

logSpace();

console.log(`
    
        可计算属性，可以再对象字面量中完成动态属性赋值。中括号包围的对象属性键告诉运行时
    将其作为 JavaScript 表达式而不是字符串来求值：

`);

person = {
    [nameKey]: "Matt",
    [ageKey]: 27,
    [jobKey]: "Software engineer",
};

// { name: 'Matt', age: 27, job: 'Software engineer' }
console.log(person);

logSpace();

let uniqueToken = 0;
function getUniqueKey(key) {
    return `${key}_${uniqueToken++}`;
}

person = {
    [getUniqueKey(nameKey)]: "Matt",
    [getUniqueKey(ageKey)]: 27,
    [getUniqueKey(jobKey)]: "Software engineer",
};

// { name_0: 'Matt', age_1: 27, job_2: 'Software engineer' }
console.log(person);
