import { logSpace } from "../../lib/utils.js";

console.log(`

    6.3.3 DataView

        第一种允许你些 ArrayBuffer 的视图是 DataView。这个视图专为文件 I/O 和 网络 I/O 设计，
    其 API 支持对缓冲数据的高度控制，但相比于其他类型的视图性能也差一些。DataView 对缓冲内容
    没有任何预设，也不能迭代。

        必须在对已有的 ArrayBuffer 读取或写入时菜能创建 DataView 实例。这个实例可以使用
    全部或部分 ArrayBuffer，且维护着对该缓冲实例的引用，以及视图在缓冲中开始的位置。

    `);
const buf = new ArrayBuffer(16);

// DataView 默认使用整个 ArrayBuffer
const fullDataView = new DataView(buf);
// 0
console.log(fullDataView.byteOffset);
// 16
console.log(fullDataView.byteLength);
// true
console.log(fullDataView.buffer === buf);

logSpace();

const secondHalfDataView = new DataView(buf, 8);
// 8
console.log(secondHalfDataView.byteOffset);
// 8
console.log(secondHalfDataView.byteLength);
// true
console.log(secondHalfDataView.buffer === buf);

logSpace();

console.log(`
    
        1. ElementType
        DataView 对存储在缓冲内的数据类型没有预设。它暴露的 API 强制开发者在读、写时指定一个
    ElementType，然后 DataView 就会忠实地为读、写而完成相应的转换。
        ECMAScript 6 支持 8 种不同的 ElementType。
        
        Element、字节、说明、等价的 C 类型、值的范围
        Int8、1、8位有符号整数、signed char、-128~127
        Uint8、1、8位无符号整数、unsigned char、0-255
        Int16、2、16位有符号整数、short、-32 768-32 767
        Uint16、2、16位无符号整数、unsigned short、0-65 535
        Int32、4、32位有符号整数、int、-2 147 483 648-2 147 483 647
        Uint32、4、32位无符号整数、unsigned int、0-4 294 967 295
        Float32、4、32位 IEEE-754 浮点数、float、-3.4e+38~+3.4e+38
        Float64、8、64位 IEEE-754 浮点数、double、-1.7e+308~+1.7e+308

        DateView 为上表种的每种类型都暴露了 get 和 set 方法，这些方法使用 byteOffset（字节偏移量）
    定位要读取或写入值的位置。类型是可以互相使用的，示例：

    `);

// 在内存种分配两个字节并声明一个 DataView
const buf2 = new ArrayBuffer(2);
const view = new DataView(buf2);

// 说明整个缓冲确实所有二进制位都是 0
// 检查第一个和第二个字符
console.log(view.getInt8(0));
console.log(view.getInt8(1));
// 检查整个缓冲
console.log(view.getInt16(0));

logSpace();

// 将整个缓冲都设置为1
// 255 的二进制表示是 1111111
view.setUint8(1, 255);

// DataView 会自动将数据转换为特定的 ElementType
// 255 的十六进制表示是 0xFF
view.setUint8(1, 0xff);

// 限制，缓冲里都是 1 了
// 如果把它当成二补数的有符号整数，则应该是-1
// 255
console.log(view.getInt16(0));

/* 
DataView {
  byteLength: 2,
  byteOffset: 0,
  buffer: ArrayBuffer { [Uint8Contents]: <00 ff>, byteLength: 2 }
}
 */
console.log(view);

console.log(`

        2. 字节序
        前面例子中的缓冲有意回避了字节序的问题。“字节序”指的是计算机系统维护的一种字节顺序的约定。
    DataView 只支持两种约定：大端字节序和小段字节序。大端字节序也称为“网络字节序”，意思的最高有效
    位保存在第一个字节，而最低有效位保存在最后一个字节。小端字节序正好相反，即最低有效位保存在第一个
    字节，最高有效位保存在最后一个字节。

        JavaScript 运行时所在系统的原生字节序决定了如何读取或写入字节，但 DataView 并不遵守这个
    约定。对一段内存而言，DataView 是一个中立接口，它会遵循你指定的字节序。DataView 的所有 API
    方法都以大端字节序作为默认值，但接收一个可选的布尔值参数，设置为 true 即可启用小端字节序。

    `);
const buf3 = new ArrayBuffer(2);
const view3 = new DataView(buf3);

view3.setUint8(0, 0x80);
view3.setUint8(1, 0x01);

// 32769
console.log(view3.getUint16(0));
// 384
console.log(view3.getUint16(0, true));

logSpace();

view3.setUint16(0, 0x0004);

// 0
console.log(view3.getUint8(0));
// 4
console.log(view3.getUint8(1));

logSpace();

view3.setUint16(0, 0x0002, true);
// 2
console.log(view3.getUint8(0));
// 0
console.log(view3.getUint8(1));

console.log(`

        3.边界情形
        DataView 完成读、写操作的前提是必须有充足的缓冲区，否则就会抛出 RangeError：

`);

const buf4 = new ArrayBuffer(6);
const view4 = new DataView(buf4);

/* 
RangeError: Offset is outside the bounds of the DataView
view4.getInt32(4);

view4.getInt32(8);

view4.getInt32(-1);

view.getInt32(4, 123);
 */

const buf5 = new ArrayBuffer(1);
const view5 = new DataView(buf5);

view5.setInt8(0, 1.5);
// 3
console.log(view5.getInt8(0));

view5.setInt8(0, [4]);
// 4
console.log(view5.getInt8(0));

// view5.setInt8(8, "f");
// RangeError: Offset is outside the bounds of the DataView
// console.log(view5.getInt8(0));


// TypeError: Cannot convert a Symbol value to a number
// view5.setInt8(0, Symbol())
