console.log(`
    
    3.3.4 声明风格及最佳实践

        ECMAScript6 增加 let 和 const 从客观上为这门语言更精确的声明作用域和语义提供了
    更好的支持，新的有助于提升代码质量的最佳实践也逐渐显现。

        1.不使用 var
        有了 let 和 const，大多数开发者会发现自己不再需要 var 了。
    限制自己只使用 let 和const 有助于提升代码质量，因为变量有了明确的作用域、
    声明位置，以及不变的值。

        2、const 优先，let 次之
        使用 const 声明可以让浏览器允许是强制保持变量不变，也可以让静态代码分析工具
    提前发现不合法的赋值操作。因此，优先使用 const 来声明变量，只在提前知道未来会有修改时，
    再使用 let，可以让开发着更有信心地推断某些变量的值不会变，也能迅速发现因为意外赋值导致的非预期行为。
    
    `);