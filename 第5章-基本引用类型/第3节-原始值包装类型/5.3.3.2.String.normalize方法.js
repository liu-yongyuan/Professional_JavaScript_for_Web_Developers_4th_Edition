import { logSpace } from "../../lib/utils.js";

console.log(`

    2. normalize() 方法
    
        某些 Unicode 字符可以有多种编码方式。有的字符可以通过
    一个 BMP 字符表示，也可以通过一个代理对表示。比如：

`);
// Å
console.log(String.fromCharCode(0x00c5));
// Å
console.log(String.fromCharCode(0x212b));
// A 778
console.log(String.fromCharCode(0x0041), 0x030a);

console.log(`
    比较操作符不在乎字符看起来是什么样的，因此这 3 个字符互不相等
`);
let a1 = String.fromCharCode(0x00c5),
    a2 = String.fromCharCode(0x212b),
    a3 = String.fromCharCode(0x0041);
// false
console.log(a1 === a2);
// false
console.log(a1 === a3);
// false
console.log(a2 === a3);

console.log(`
    
        Unicode 提供了 4 中规范化形式，可以将类似上面的字符规范化
    为一致的格式，无论底层字符的代码是什么。
        · NFD（Normalization Form D）
        · NFC（Normalization From C）
        · NFKD（Normalization From KD）
        · NFKC（Normalization Form KC）
        可以使用 normalization() 方法对字符串应用上述规范化形式，
    使用时需要传入表示哪种形式的字符串：NFD、NFC、NFKD、NFKC

    `);

(a1 = String.fromCharCode(0x00c5)),
    (a2 = String.fromCharCode(0x212b)),
    (a3 = String.fromCharCode(0x0041, 0x030a));

// U+00C5 是对 0+212B 进行 NFC/NFKC 规范化之后的结果
// false
console.log(a1 === a1.normalize("NFD"));
// true
console.log(a1 === a1.normalize("NFC"));
// false
console.log(a1 === a1.normalize("NFKD"));
// true
console.log(a1 === a1.normalize("NFKC"));

logSpace();

// U+212B 是未规范化的
// false
console.log(a2 === a2.normalize("NFD"));
// false
console.log(a2 === a2.normalize("NFC"));
// false
console.log(a2 === a2.normalize("NFKD"));
// false
console.log(a2 === a2.normalize("NFKC"));

logSpace();

// U+0041/U+030A 是对 0+212B 进行NFD、NFKD 规范化之后的结果
// true
console.log(a3 === a3.normalize("NFD"));
// false
console.log(a3 === a3.normalize("NFC"));
// true
console.log(a3 === a3.normalize("NFKD"));
// false
console.log(a3 === a3.normalize("NFKC"));

logSpace();

console.log(`

    选择同一种规范化形式可以让比较操作符返回正确的结果：

    `);
// true
console.log(a1.normalize("NFD") === a2.normalize("NFD"));
// true
console.log(a1.normalize("NFKC") === a2.normalize("NFKC"));
// true
console.log(a2.normalize("NFC") === a3.normalize("NFC"));
