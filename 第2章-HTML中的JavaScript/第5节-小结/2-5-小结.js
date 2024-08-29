console.log(`
    
        2.5 小结

        JavaScript 是通过 <script> 元素插入到 HTML 页面中的。
    这个元素可用于把 JavaScript 代码嵌入到 HTML 页面中，跟其他
    标记混合在一起，也可以用于引用外部文件中的 JavaScript。总结：
        · 要包含外部 Javascript 文件，必须将 src 属性设置为要
    包含文件的 URL。文件可以跟网页在同一台服务器上，也可以位于
    完全不同的域。
        · 所有 <script> 元素会依照它们在网页中出现的次序被解释
    在不使用 defer 和 async 属性的情况下，包含在 script 元素中
    的代码必须严格按次序解释。
        · 对不推迟执行的脚本，浏览器必须解释完位于 script 元素中
    的代码，然后才能继续渲染页面的剩余部分。为此，通常应该把 script
    放到页面末尾，介于著内容之后及 body 标签关闭之前。
        · 可以使用defer 属性把脚本推迟到文档渲染完毕后再执行。
    推迟的脚本总是按照它们被列出的次序执行。
        · 可以使用 async 属性表示脚本不需要等待其他脚本，同时
    也不阻塞文档渲染，及异步加载。异步脚本不能保证按照它们再页面出现的次序执行。
        · 通过 noscript 元素，可以指定再浏览器不支持脚本是现实的内容。
    如果浏览器支持并启用脚本，则 noscript 元素中的任何内容都不会被渲染。

    
    `)