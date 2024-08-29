console.log(`
    
        第 2 章
            HTML 中的 JavaScript 

        2.1 <script> 元素

            将 JavaScript 插入 HTML 的主要方式是使用 <script> 元素。
        <script> 元素有下列 8 个属性：
            · async： 可选。表示应该立刻开始下载脚本，但是不能阻止页面其他动作，
        例如下载资源或等待其他脚本加载。只对外部脚本有效。
            · charset：可选，使用 src 属性指定的代码字符集。少用，大多数浏览器
        不在乎他的值。
            · crossorigin：可选。配置相关请求的 CORS（跨资源共享）设置。默认不适用
        CORS。crossorigin=“anonymous”配置文件请求不必设置凭据标志。
        crossorigin=“use-credentials”设置凭据标志，意味着出站请求会包含凭据。
            · defer：可选。表示文档解析和显示完成后再执行脚本是没有问题的。只对外部
        脚本文件有效。
            · integrity：可选。允许比对接受到的资源和指定的加密签名以验证子资源完整性
        （SRI，Subresource Intergrity）。如果接收到的资源的签名与这个属性指定的签名
        不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN，
        Content Delivery Network）不会提供恶意内容。
            · language：废弃。最初用于表示代码块中的脚本语言。 大多数浏览器都会
        忽略这个属性
            · src：可选。表示包含要执行的代码的外部文件。

    `);