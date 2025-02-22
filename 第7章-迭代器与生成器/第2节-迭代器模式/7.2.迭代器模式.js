console.log(`

    7.2 迭代器模式

        迭代器模式描述了一个方案，即可以把有些结构称为“可选迭代对象”（iterable），
    因为它们实现了正式的 Iterable 接口，而且可以通过迭代器 Iterator 消费。

        可迭代对象是一种抽象的说法。基本上，可以把可迭代对象理解成数组或集合这样的集合类型的对
    象。它们包含的元素都是有限的，而且都具有无歧义的遍历顺序。

        不过，可迭代对象不一定是集合对象，也可以是仅仅具有类似数组行为的其他数据结构，比如本章
    开头提到的计数循环。该循环中生成的值是暂时性的，但循环本身是在执行迭代。计数循环和数组都具
    有可迭代对象的行为。


        任何实现 Iterable 接口的数据结构都可以被实现 Iterator 接口的结构“消费”（consume）。迭
    代器（iterator）是按需创建的一次性对象。每个迭代器都会关联一个可迭代对象，而迭代器会暴露迭代
    其关联可迭代对象的 API。迭代器无须了解其关联的可迭代对象的结构，只需要知道如何取得连续的值。
    这种概念上的分离正是 Iterable 和 Iterator 的强大之处。

`);
