console.log(`

    4.3.4 内存管理

        在使用垃圾回收的编程环境中，开发者通常无须关系内存管理。
    不过，JavaScript 运行在一个内存管理与垃圾回收都很特殊的环境。
    分配给浏览器的内存通常比分配给桌面软件的要少的多，分配给移动浏览器
    的就更少了。这更多出于安全考虑而不是别的，就是为了避免运行大量
    JavaScript 的网页耗尽系统内存而导致操作系统崩溃。

        优化内存占用的最佳手段就是保证在执行代码时只保存必要的数据。
    如果数据不再必要，那么把它设置 null，从而释放其引用。这也可以叫作
    “解除引用”。这个建议最适合全局变量和全局对象的属性。局部变量
    在超出作用域后会自动解除引用，例子：

    `);

function createPerson(name) {
    let localPerson = new Object();
    localPerson.name = name;
    return localPerson;
}

let globalPerson = createPerson("nicholas");

// 解除 globalPerson 对值的引用
globalPerson = null;

console.log(`
        虽然设置为 null，解除了该值的引用并不会自动导致相关内存被回收。
    解除引用的关键在于确保相关的值已经不在上下文里了，因此它在下次垃圾回收
    时被回收。
`);

console.log(`

        1、通过 const 和 let 声明提升性能
        相比起 var，使用者两个新关键字可能会更早地让垃圾回收程序介入，
    尽早回收应该回收的内存。块作用域比函数作用域更早终止的情况下，有可能
    会发生。

`);

console.log(`
        2、因此类和删除操作

            相同的类内容会减少内存占用，因为 V8 引用的会是同一个隐藏类，
        属性细节变化时才会产生新的内存占用。这是一种优化

        3、内存泄漏

            let outer = function(){
                let name = 'Jake';
                return function(){
                    return name;
                }
            }

        这会导致分配给 name 的内存被泄漏。以上代码创建了一个内部闭包，
    只要 outer 函数存在就不能清理 name，因为闭包一直在引用它。


        4、静态分配与对象池
        如果能够合理使用分配的内存，同时避免多余的垃圾回收，那就可以
    保住因释放内存而损失的性能。
`);


