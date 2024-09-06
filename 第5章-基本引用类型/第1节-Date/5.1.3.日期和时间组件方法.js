console.log(`

    5.1.3 日期、时间组件方法

        Date 类型剩下的方法直接涉及取得或设置日期值的特定部分。
    注意表中“UTC 日期”，指的是没有时区偏移（将日期转换为 GMT）时的日期。

    getTime() 返回日期的毫秒值表示；与 valueOf 相同
    setTime(millseconds) 设置日期的毫秒值表示，从而修改整个日期
    getFullYear() 返回 4 位数年
    getUTCFullYear() 返回 UTC 日期的 4 位数年
    setFullYear(year)  设置日期的年（必须是 4 位数）
    setUTCFullYear(year) 设置 UTC 日期的年（必须是 4 位数）
    getMonth() 返回日期的月（0 表示1月，11表示12月）
    getUTCMonth() 返回 UTC 的月（0 表示 1月，11 表示 12月）
    setMonth(month) 设置日期的月（0表示1月，11表示12月）
    setUTCMonth(month) 设置 UTC 日期的月（0表示1月，11 表示 12月）
    getDate() 返回日期中的日（1-31）
    setDate(date) 设置日期中的日（1-31）
    setUTCDate(date) 设置 UTC 日期中的日（1-31）
    getDay() 返回日期中表示周几的数值（0 表示周日，6 表示周六）
    getUTCDay() 返回UTC日期中表示周几的数值（0表示周日，6表示周六）
    getHours() 返回日期中的时（0-23）
    getUTCHours() 返回 UTC 日期中的时（0-23）
    setHours(hours) 设置日期中的时（如果 hours 大于 23，则加日）
    setUTCHours(hours) 设置 UTC 日期中的时（如过 hourse 大于 23，则加日）
    getMinutes() 返回日期中的分（0-59）
    getUTCMinutes() 返回UTC日期中的分（0-59）
    setMinutes(minutes) 设置日期中的分（如果 minutes 大于 59，则加时）
    setUTCMinutes(minutes) 设置UTC日期中的分（如果 minutes 大于 59，则加时）
    getSeconds() 返回日期中的秒（0-59）
    getUTCSeconds()  返回 UTC 日期中的分（0-59）
    setUTCSeconds(seconds) 设置 UTC 日期中的秒（如果 seconds 大于 59，则加分）
    setSeconds(seconds) 设置日期中的秒（如果秒 大于 59，则加分）
    getMilliseconds() 返回日期中的毫秒
    getUTCMilliseconds() 返回 UTC 日期中的毫秒
    setMilliseconds(milliseconds) 设置日期中的毫秒
    setUTCMilliseconds(milliseconds) 设置UTC 日期中的毫秒值
    getTimezoneOffset() 返回以分钟计的 UTC 与本地时区的偏移量（如 美国 EST 即
                        “东部标准时间” 返回 300，进入夏令时的地区可能有所差异）



    UTC 方法：
    getUTCFullYear() 返回 UTC 日期的 4 位数年
    setUTCFullYear(year) 设置 UTC 日期的年（必须是 4 位数）
    getUTCMonth() 返回 UTC 的月（0 表示 1月，11 表示 12月）
    setUTCMonth(month) 设置 UTC 日期的月（0表示1月，11 表示 12月）
    getUTCDate() 返回 UTC 日期中的日（1-31）
    setUTCDate(date) 设置 UTC 日期中的日（1-31）
    getUTCDay() 返回UTC日期中表示周几的数值（0表示周日，6表示周六）
    getUTCHours() 返回 UTC 日期中的时（0-23）
    setUTCHours(hours) 设置 UTC 日期中的时（如过 hourse 大于 23，则加日）
    getUTCMinutes() 返回UTC日期中的分（0-59）
    setUTCMinutes(minutes) 设置UTC日期中的分（如果 minutes 大于 59，则加时）
    getUTCSeconds()  返回 UTC 日期中的分（0-59）
    setUTCSeconds(seconds) 设置 UTC 日期中的秒（如果 seconds 大于 59，则加分）
    getUTCMilliseconds() 返回 UTC 日期中的毫秒
    setUTCMilliseconds(milliseconds) 设置UTC 日期中的毫秒值
    getTimezoneOffset() 返回以分钟计的 UTC 与本地时区的偏移量（如 美国 EST 即
                        “东部标准时间” 返回 300，进入夏令时的地区可能有所差异）

    `)