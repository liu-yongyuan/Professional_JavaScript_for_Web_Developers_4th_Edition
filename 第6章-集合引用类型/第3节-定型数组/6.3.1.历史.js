console.log(`

    6.3.1 历史

        随着浏览器的流行，不难想象人们会满怀期待地通过它来运行复杂的 3D 应用程序。
    早在 2006 年 Mozilla、Opera 等浏览器提供商就实验性地在浏览器中增加了用于
    渲染复杂图形应用程序员的编程平台，无需安装任何插件。其目标是开发一套 JavaScript API
    从而充分利用 3D 图形 API 和 GPU 加速，以便在 canvas 元素上渲染复杂的图形。

        1. WebGL
        最后的 JavaScript API 是基于 OpenGL ES（OpenGL for Emmbedded System）2.0 规范的。
    OpenGL ES 是 OpenGL 专注于 2D 和 3D 计算机图形的自己。这个新 API 被命名为 
    WebGL（Web Grapics Library），于 2011 年发布 1.0 版。有了它，开发者就能够编写涉及复杂
    图形的应用程序，它会被兼容 WebGL 的浏览器原生解释执行。
        在 WebGL 早期版本中，因为 JavaScript 数组于原生数组之间不匹配，所以出现了性能问题。
    图形驱动程序 API 通常不需要以 JavaScript 默认双精度浮点格式传递给它们的数值，而这恰恰
    是 JavaScript 数组在内存中的格式。因此，每当 WebGL 与 JavaScript 运行时之间传递数组时，
    WebGL 绑定都需要在目标环境分配新数组，以其当前格式迭代数组，然后将数值转型为新数组中的
    适当格式，而这些要花费很多时间。

        2. 定型数组
        这当然是难以接受的，Mozilla 为解决这个问题而实现了 CanvasFloatArray。这是一个提供
    JavaScript 接口的、C 语言风格的浮点值数组。JavaScript 运行时使用这个类型可以分配、读取
    和写入数组。这个数组当然可以直接传给底层图形驱动程序 API，也可以直接从底层获取到。最终，
    CanvasFloatArray 编程了 Float32Array，也就是今天定型数组中可用的第一个“类型”。

`);
