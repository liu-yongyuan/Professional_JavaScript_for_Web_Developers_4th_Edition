console.log(`

    6.3.2 ArrayBuffer

        Float32Array 实际上是一种“视图”，可允许 JavaScript 运行时访问一块名为 ArrayBuffer
    的预分配内存。ArrayBuffer 是所有定型数组及视图引用的基本单位。

    `);

console.log(`
        ArrayBuffer() 是一个普通的 JavaScript 构造函数，可用于在内存中分配特定数量
    的字节空间。

        ArrayBuffer 某种程度上类似于 C++ 的 malloc()，但也有几个明显的区别。
        · malloc 在分配失败时会返回一个 null 执政。ArrayBuffer 在分配失败时会抛出错误。
        · malloc 可以利用虚拟内存，因此最大可分配尺寸只受可寻址系统内存限制。ArrayBuffer
    分配的内存不能超过 Number.MAX_SAFE_INTEGER 字节。
        · molloc 调用成功不会初始化实际的地址。声明 ArrayBuffer 则会将所有二进制位
    初始化位 0。
        · 通过 molloc 分配的堆内存除非调用 free 或程序退出，否则系统不能再使用。
    而通过声明 ArrayBuffer 分配的堆内存可以被当成垃圾回收，不用手动释放。

        不能仅通过对 ArrayBuffer 的引用就读取或写入其内容。要读取或写入 ArrayBuffer，
    就必须通过视图。视图有不同的类型，但引用的都是 ArrayBuffer 中存储的二进制数据。

    `)