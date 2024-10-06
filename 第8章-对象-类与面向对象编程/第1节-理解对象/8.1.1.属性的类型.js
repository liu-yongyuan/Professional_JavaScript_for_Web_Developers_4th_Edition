import { logSpace } from "../../lib/utils.js";

console.log(`
    
    8.1.1 属性的类型

        ECMA-262 使用一些内部特性来描述属性的特征。这些特性是由为 JavaScript 实现引起的规范定义
    的。因此，开发者不能在 JavaScript 中直接访问这些特性。为了将某个特性标志识为内部特性，规范会用
    两个中括号吧特性的名称括起来，比如 [[Enumerable]]。

        属性分为两种：数据属性和访问器属性。

        1.数据属性
        数据属性包含一个保存数据的位置。值会从这个位置读取，也会写入到这个位置。数据属性有 4 个
    特性描述它们的行为。
        ·[[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，
        以及是否可以把它改为访问器属性。默认情况下，所有直接定义在对象上的属性的这个特性
        都是 true，如前面的例子所示。
        ·[[Enumberable]]：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在
        对象上的属性的这个特性都是 true，如前面的例子所示。
        ·[[Writable]]：表示属性的值是否可以呗修改。默认情况下，所有直接定义在对象上的属性的
        这个特性都是 true，如前面的例子所示。
        ·[[Value]]：包含属性实际的值。这就是前面提到的那个读取和写入属性值的设置。这个特性
        的默认值为 undefined。
        在前面例子中将属性显式的添加到对象之后，[[Configurable]]、[[Enumerable]] 和 
    [[Writable]] 都会被设置为 true，而 [[Value]] 特性会被设置为指定的值。比如：

        let person = {
            name: 'Nicholas'
        }

        要修改属性的默认特性，就必须使用 Object.defineProperty() 方法。这个方法接收 3 个参数，
    要给其添加属性的对象、属性的名称和一个描述符对象。最后一个参数，即描述对象上的属性可以包含：
    configurable、enumerable、writable 和 value，跟相关特性的名称一一对应。根据要修改的特性，
    可以设置其中一个或多个值。比如：
`);
let person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas",
});
console.log(person.name);
/* 
1.在宿主环境 Chrome 浏览器下，变更无效果

2.在宿主环境 Node.js 环境下，变更会报错TypeError: Cannot assign to read only property 'name' of object '#<Object>'
 */
// person.name = "Mat";
console.log(person.name);

logSpace();

let person2 = {};
Object.defineProperty(person2, "name", {
    configurable: false,
    value: "Nicholas",
});
// Nicholas
console.log(person2.name);

console.log(`

    configurable 设置为 false，意味着这个属性不能从对象上删除。非严格模式下
对这个属性调用 delete 没有效果，严格模式下会抛出错误。此外，一个属性被定义为不可配置
之后，就不能在变回可配置的了。再次调用 Object.defineProperty() 并修改任何非 writable 属性
会导致错误

`);
/* 
1.在宿主环境 Chrome 浏览器下，删除无效果

2.在宿主环境 Node.js 环境下，删除会报错
TypeError: Cannot delete property 'name' of #<Object>
 */
// delete person2.name;
console.log(person2.name);

logSpace();

console.log(`

        虽然可以对同一个属性多次调用 Object.defineProperty(), 但在把 configuraable 
    设置为 false 之后就会受限制了。
        在调用 Object.defineProperty() 时，configurable、enumerable 和 writable 的值
    如果不指定，则默认为 false。多数情况下，可能都不需要 Object.defineProperty() 提供的
    这些强大的设置，但要理解 JavaScript 对象，就要理解这些概念。

`);
/* TypeError: Cannot redefine property: name
Object.defineProperty(person2, "name", {
    configurable: true,
    value: "Mat",
});
 */