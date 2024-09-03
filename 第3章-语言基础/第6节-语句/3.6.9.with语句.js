console.log(`

    3.6.10 with 语句

        with 语句的用途是将代码作用域设置为特定的对象，其语法：
        with(expression) statement;

    `);
with (location) {
    let qs = search.substring(1);
    let hostName = hostname;
    let url = href;
    console.log(qs, hostName, url);
}
