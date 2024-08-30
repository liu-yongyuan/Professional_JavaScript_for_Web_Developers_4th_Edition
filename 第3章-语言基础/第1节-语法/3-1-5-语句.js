console.log(`
    
    3.1.5 语句

        ECMAScript 中的语句以分号结尾。省略分号意味着由解析器确定语句在哪里结尾，
    如下例子所示：

        let sum = a + b  // 不加分号有效，不推荐
        let diff = a -b; // 加分号有效，推荐

        即使语句末尾的分号不是必须的，也应该加上。记者分号有助于防止省略造成的问题，
    比如避免输入内容不完整。此外加分号也便于开发者通过删除空行来压缩代码。

        多条语句可以合并到一个 从 C 语言风格的代码块中。代码块由一个左花括号 { 开始
    一个右 } 结束：

        if(test){
            test = false;
            console.log(test);
        }

        尽管可以这样 if(test) console.log(test); 但仍然推荐带上花括号 {} 有助于
    增加代码的可读性。if(test){ console.log(test) } 
    
    `);