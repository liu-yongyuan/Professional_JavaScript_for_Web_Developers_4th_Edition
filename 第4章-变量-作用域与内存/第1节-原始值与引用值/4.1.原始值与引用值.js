console.log(`
    4.1 原始值与引用值
        ECMAScript 变量可以包含两种不同类型的数据：原始值与引用值。
    原始值（primitive value）就是最简单的数据，引用值（reference value）
    则是由多个值构成的对象。
        在把一个值赋给变量时，JavaScript 引擎必须确定这个值是原始值还是
    引用值。原始值：Undefined、Null、Boolean、Number、String、Symbol
    和 BigInt。保存原始值的变量是按值（by value）访问的，因为我们操作的
    就是存储在变量中的实际值。
        引用值是保存在内存中的对象。JavaScript 不允许直接访问内存位置，
    因此也就不能直接操作对象所在内存空间。在操作对象时，实际上操作的是
    对该对象的引用（reference）而非时机的对象本身。为此，保存引用值
    的变量是按引用（by reference）访问的。
    `)