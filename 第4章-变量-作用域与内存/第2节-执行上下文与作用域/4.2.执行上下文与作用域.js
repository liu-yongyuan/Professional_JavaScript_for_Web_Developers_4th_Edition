import { logSpace } from "../../lib/utils.js";
console.log(`
    4.2 执行上下文与作用域
    
        变量或函数的上下文决定了它们可以访问那些数据，以及它们的行文。
    每个上下文都有一个关联的变量对象（variable object），而这个
    上下文中定义的所有变量和函数都存在与这个对象上。虽然无法通过
    代码访问变量对象，但后台处理数据会用到它。
        全局上下文的最外层是上下文。根据 ECMAScript 实现的宿主环境，
    表示全局上下文的对象可能不一样。在浏览器中，全局上下文就是我们
    常说的 window 对象，通过 var 定义的的全局变量和函数都会成为
    window 的属性，而 let、const 不会成为 window 的属性。上下文
    在其所有代码都执行完毕后被销毁，包括定义在它上面的所有变量和函数。

        每个函数调用都有自己的上下文。当代码执行流进入函数时，函数的
    上下文被推倒一个上下文栈上。在函数执行完之后，上下文栈会弹出
    该函数上下文。将控制权返还给之前的上下文。 ECMAScript 程序
    的执行流就是通过这个上下文栈进行控制。

        上下文中的代码在执行的时候，会创建变量对象的一个作用域链
    （scope chain）。这个作用域链决定了各级上下文中的代码在访问变量
    和函数时的顺序。代码正在执行的上下文的变量对象始终位于作用域链
    的最前端。如果上下文是函数，则其活动对象（activation object）
    用作变量对象，活动对象最初只有一个定义变量：arguments。作用域链
    中的下一个变量对象来自包含上下文，再下一个对象来自下一个包含上下文。
    一次类推直至全局上下文；全局上下文的变量对象始终是作用域链的最后
    一个变量对象。

        代码执行时的标识符解析是通过沿作用域链主机搜索标识符名称完成的。
    搜索过程始终从作用域链的最前端开始，然后逐级往后，知道找到标识符。

    `);

console.log(`

        这个例子，函数 changeColor 的作用域包含两个对象：一个是它自己
    另一个是全局上下文的变量对象。这个函数内部之所以能够访问变量 color，
    就是因为可以在作用域链中找到它。

        `);
var color = "blue";
function changeColor() {
    if (color === "blue") {
        color = "red";
    } else {
        color = "blue";
    }
    // red
    console.log(color);
}
changeColor();

logSpace();

console.log(`
        此外，局部作用域中定义的变量可用于在局部上下文中替换全局变量。
    `);
color = "blue";
function changeColor2() {
    let anotherColor = "red";

    function swapColors() {
        let tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;

        // tempColor: red、anotherColor: blue、color: red
        console.log(
            `tempColor: ${tempColor}、anotherColor: ${anotherColor}、color: ${color}`
        );
    }
    swapColors();

    // anotherColor: blue、color: red
    console.log(`anotherColor: ${anotherColor}、color: ${color}`);
}
changeColor2();

console.log(`

        上面代码涉及 3 个上下文：全局上下文、changeColor2() 的局部上下文和
    swapColors() 的局部上下文。全局上下文中有一个变量 color 和一个函数
    changeColor()。changeColor() 的局部上下文中有一个变量 anotherColor 和
    一个函数 swapColors。但在这里可以访问全局上下文中的变量 color。
    swapColors 的局部上下文中有个变量 tempColor，只能在这个上下文中访问到。
    全局上下文和 changeColor 的局部上下文都无法访问到 template。而在
    swapColors 中可以访问到另外两个上下文中的变量。


    函数是一个上下文。在上下文中定义的函数，变量，允许被当前上下文和内部上下文访问。
    遵循：全局上下文 -> 子上下文 -> 子上下文的原则。从内到外访问，形成一个链条
    因此，被称为上下文作用域链。函数内部的函数才可以被称为子上下文。


    `)