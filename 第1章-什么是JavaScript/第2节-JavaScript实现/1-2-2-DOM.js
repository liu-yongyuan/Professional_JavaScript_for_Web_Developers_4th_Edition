console.log(`
    1.2.2 DOM

        文档对象模型（DOM，Document　Object　Model）是一个应用编程接口（API），
    用于在 HTML 中使用扩展的 XML。DOM 将整个页面抽象为一组分层节点。HTML 或 XML
    页面的每个组成部分都是一种节点，包含不同的数据。

        DOM 通过创建表示文档的书，让开发者控制网页的内容和结构。DOM API 可以轻松
    地删除、添加、替换、修改节点。

        1、为什么 DOM 是必须的
        为了保持 Web 跨平台的本性。

        2、DOM 级别
        1998 年 10 月，DOM Level 1 成为 W3C 的推荐标准。这个规范由两个模块组成：
    DOM Core 和 DOM HTML。前者提供了一种映射 XML 文档，从而方便访问和操作文档任意
    部分的方式；后者扩展了前者并增加了特定于 HTML 的对象和方法。
    
        DOM Level 2 新增了以下模块，以支持新的接口：
        · DOM 视图：描述追踪文档不同视图的接口。（如应用 CSS 样式前后的文档）
        · DOM 事件：描述事件及事件处理的接口。
        · DOM 样式，描述处理元素 CSS 样式的接口。
        · DOM 遍历和范围：描述遍历和操作 DOM 树的接口。

        DOM Level 3 进一步扩展了 DOM，增加了以统一的方式加载和保存文档的方法，
    还有验证文档的方法（DOM Validation）。在 Level 3 中，DOM Core 经过拓展
    支持了所有 XML 1.0 的特性，包括 XML Infoset、XPath 和 XML Base。

        目前，W3C 不再按照 Level 来维护 DOM 了，而是作为 DOM Living Standard
    来维护，其快照称为 DOM4看。DOM 4新增的内容包括替代 Mutation Events 的
    Mutation Observers。

        3、其他 DOM
            · 可伸缩矢量图（SVG，Scalable Vector Graphics）
            · 数学标记语言（MathML，Mathematical Markup Language）
            · 同步多媒体集成语言（SMIL，Synchronized Multimedia Integration Language）
        
        4、Web 浏览器对 DOM 的支持情况

    `);