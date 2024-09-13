import { logSpace } from "../../lib/utils.js";

console.log(`

    6.3.4 定型数组

        定型数组是另一种形式的 ArrayBuffer 视图。虽然概念上与 DataView 接近，但定型数组的区别
    在于，它特定于一种 ElementType 且遵循系统原生的字节序。相应地，定型数组提供了适用面更广的
    API 和更高的性能。设计定型数组的目的就是提高 WebGL 等原生库交换二进制数据的效率。由于定
    型数组的二进制表示对操作系统而言是一种更容易使用的格式，JavaScript 引擎可以重度优化算术运算、
    按位运算和其他对定型数组的常见操作，因此使用它们速度极快。

        创建定型数组的方式包括读取已有的缓冲、使用自有缓冲、填充可迭代结构，以及填充基于任意类
    型的定型数组。另外，通过 ElementType.from() 和 Element.of() 也可以创建定型数组：

    `);
const buf = new ArrayBuffer(12);
const ints = new Int32Array(buf);

// 3
console.log(ints.length);

logSpace();

const ints2 = new Int32Array(6);
// 6
console.log(ints2.length);
// 24
console.log(ints2.buffer.byteLength);

logSpace();

const ints3 = new Int32Array([2, 4, 6, 8]);
// 4
console.log(ints3.length);
// 16
console.log(ints3.buffer.byteLength);
// 6
console.log(ints3[2]);

logSpace();

const ints4 = new Int16Array([ints3]);
// 1
console.log(ints4.length);
// 2
console.log(ints4.buffer.byteLength);
// undefined
console.log(ints4[2]);

logSpace();

const ints5 = Int16Array.from([3, 5, 7, 8]);
// 4
console.log(ints5.length);
// 8
console.log(ints5.buffer.byteLength);
// 7
console.log(ints5[2]);

logSpace();

const floats = Float32Array.of([3.14, 2.718, 1.618]);
// 3
console.log(floats.length);
// 4
console.log(floats.buffer.byteLength);
// undefined
console.log(floats[2]);

logSpace();

// 2
console.log(Int16Array.BYTES_PER_ELEMENT);
// 4
console.log(Int32Array.BYTES_PER_ELEMENT);

const ints6 = new Int32Array(1),
    floats2 = new Float64Array(1);
// 4
console.log(ints6.BYTES_PER_ELEMENT);
// 8
console.log(floats2.BYTES_PER_ELEMENT);

logSpace();

const ints7 = new Int32Array(4);
// 0
console.log(ints7[0]);
// 0
console.log(ints7[1]);
// 0
console.log(ints7[2]);
// 0
console.log(ints7[3]);

console.log(`
    
        1. 定型数组行为
        很多方面看，定型数组与普通数组都很相似。定型数组支持如下操作符、方法和属性：
        > []
        > copyWithin()
        > entries()
        > every()
        > fill()
        > filter()
        > find()
        > findIndex()
        > forEach()
        > indexOf()
        > join()
        > keys()
        > lastIndexOf()
        > length
        > map()
        > reduce()
        > reduceRight()
        > reverse()
        > slice()
        > some()
        > sort()
        > toLocaleString()
        > toString()
        > values

`);

console.log(`

        2. 合并、复制和修改定型数组
        定型数组同样使用数组缓冲来存储数据，而数组缓冲无法调整大小。因此，下列方法不适用于定型数组：
        
        > concat()
        > pop()
        > push()
        > shift()
        > splice()
        > unshift()

        不过，定型数组也提供了两个新方法，可以快速向外或向内复制数据：set() 和 subarray()。

    `);
const container = new Int16Array(8);
container.set(Int8Array.of(1, 2, 3, 4));
/* 
Int16Array(8) [
  1, 2, 3, 4,
  0, 0, 0, 0
]
 */
console.log(container);

container.set([5, 6, 7, 8]);
/* 
Int16Array(8) [
  5, 6, 7, 8,
  0, 0, 0, 0
]
 */
console.log(container);

// RangeError: offset is out of bounds
// container.set([5, 6, 7, 8], 7);

logSpace();

const source = Int16Array.of(2, 4, 6, 8);

const fullCopy = source.subarray();
// Int16Array(4) [ 2, 4, 6, 8 ]
console.log(fullCopy);

const halfCopy = source.subarray(2);
// Int16Array(2) [ 6, 8 ]
console.log(halfCopy);

const partialCopy = source.subarray(1, 3);
// Int16Array(2) [ 4, 6 ]
console.log(partialCopy);

logSpace();

function typedArrayConcat(typedArrayConstructor, ...typedArrays) {
    const numElements = typedArrays.reduce(
        (x, y) => (x.length || x) + y.length
    );

    const resultArray = new typedArrayConstructor(numElements);

    let currentOffset = 0;
    typedArrays.map((x) => {
        resultArray.set(x, currentOffset);
        currentOffset += x.length;
    });

    return resultArray;
}

const concatArray = typedArrayConcat(
    Int32Array,
    Int8Array.of(1, 2, 3),
    Int16Array.of(4, 5, 6),
    Float32Array.of(7, 8, 9)
);
/* 
Int32Array(9) [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
 */
console.log(concatArray);
// true
console.log(concatArray instanceof Int32Array);

console.log(`

        3. 下溢和上溢
        定型数组中值的下溢和上溢不会影响到其他索引，但仍然需要考虑数组的元素应该是什么类型。
    定型数组对于可以存储的每个索引只接受一个相关位，而不考虑它们对实际数值的影响。

    `);
const ints8 = new Int8Array(2);

const unsignedInts = new Uint8Array(2);

unsignedInts[1] = 256;
// Uint8Array(2) [ 0, 0 ]
console.log(unsignedInts);

unsignedInts[1] = 511;
// Uint8Array(2) [ 0, 255 ]
console.log(unsignedInts);

logSpace();

unsignedInts[1] = -1;
// Uint8Array(2) [ 0, 255 ]
console.log(unsignedInts);

ints8[1] = 128;
// Int8Array(2) [ 0, -128 ]
console.log(ints8);

ints8[1] = 255;
// Int8Array(2) [ 0, -1 ]
console.log(ints8);

logSpace();

const clampedInts = new Uint8ClampedArray([-1, 0, 255, 256]);

// Uint8ClampedArray(4) [ 0, 0, 255, 255 ]
console.log(clampedInts);
