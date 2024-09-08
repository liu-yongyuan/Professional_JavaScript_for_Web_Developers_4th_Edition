import { logSpace } from "../../lib/utils.js";

console.log(`

    5.4.2 Math

        ECMAScript 提供了对象作为保存数学公式、信息和计算的地方。
    Math 辅助计算的属性和方法。

`);

console.log(`

        1.  Math 对象属性
        属性、说明
        E、自然对数的基数e的值
        LN10、10为底数的自然对数
        LN2、2为底数的自然对数
        log2E、以2为底e的对数
        LOG10E、以 10 为底 e 的对数
        PI、派的值
        SQRT1_2、1/2 的平方根
        SQRT2、2的平方根

`);

console.log(`

        2. min() 和 max() 方法
        
`);
let max = Math.max(3, 54, 32, 16);
// 54
console.log(max);

let min = Math.min(3, 54, 32, 1);
// 1
console.log(min);

let values = [1, 2, 3, 4, 5, 6, 7, 8];
// 8
console.log(Math.max(...values));

logSpace();

console.log(`

        3. 舍入方法
        · Math.ceil() 方法始终向上舍入为最接近的整数。
        · Math.floor() 方法始终向下舍入为最接近的整数。
        · Math.round() 方法执行四舍五入
        · Math.fround() 方法返回最接近单精度（32）浮点值表示。

`);
// 26
console.log(Math.ceil(25.9));
// 26
console.log(Math.ceil(25.5));
// 26
console.log(Math.ceil(25.1));

logSpace();

// 26
console.log(Math.round(25.9));
// 26
console.log(Math.round(25.5));
// 25
console.log(Math.round(25.1));

logSpace();

// 0.4000000059604645
console.log(Math.fround(0.4));
// 0.5
console.log(Math.fround(0.5));
// 25.899999618530273
console.log(Math.fround(25.9));

logSpace();

// 25
console.log(Math.floor(25.9));
// 25
console.log(Math.floor(25.5));
// 25
console.log(Math.floor(25.1));

logSpace();

console.log(`

        4. random() 方法
        Math.random() 方法返回一个 0~1 范围内的随机数，其中包含 0 但不包含 1。

        生成随机数：number = Math.floor(Math.random() * total_number_of_choices + first_possible_value)
`);
let number = Math.floor(Math.random() * 10 + 1);
// 1~10 范围内的值
console.log(number);

// 2~10 范围内的值
number = Math.floor(Math.random() * 9 + 2);
console.log(number);

function selectForm(lowerValue, upperValue) {
    let choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

console.log(selectForm(2, 10));
console.log(selectForm(1, 5));

logSpace();

console.log(`

        5. 其他方法
        方法、说明
        abs（x）、返回 x 的绝对值
        exo（x）、返回 Math.E 的 x 次幂
        expml（x）、等于 Math.exp(x) - 1
        log（x）、返回 x 的自然对数
        loglp（x）、返回 1 + Math.log(x)
        pow(x, power)、返回 x 的 power 次幂
        pow(...nums)、返回 nums 中每个平方和的平方根
        clz32(x)、返回 32 位整数 x 的前置零的数量
        sign(x)、返回表示 x 符号的1、0、-0 或 -1
        trunc(x)、返回 x 的整数部分，删除所有小数
        sqrt(x)、返回 x 的平方根
        acosh(x)、返回 x 的反双曲余弦
        asin(x)、返回 x 的反正弦
        asinh(x)、返回 x 的反双曲正弦
        atan(x)、返回 x 的反正切
        atan2(y, x)、返回 y/x 的的反正切
        cos(x)、返回 x 的余弦
        sin(x)、返回 x 的正弦
        tan(x)、返回 x 的正切

    `);
