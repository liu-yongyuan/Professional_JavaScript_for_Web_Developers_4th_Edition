console.log(`

    3.6.7 标签语句

        标签语句用于给语句添加标签，语法如下：
        label:statement

        终结至指定标签，可以用于循环的终止

    `);
/* 
outside: 0
inside: 5
inside: 4
inside: 3
inside: 2 */
start: for (let i = 0; i < 5; i++) {
    console.log(`outside: ${i}`);
    end: for (let j = 5; j > 0; j--) {
        console.log(`inside: ${j}`);
        if (j === 2) {
            break start;
        }
    }
}
