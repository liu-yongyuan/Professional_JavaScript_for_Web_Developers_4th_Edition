import { logSpace } from "../../lib/utils.js";

console.log(`
    
    7.3.2 通过 yield 中执行

        yield 关键字可以让生成器停止和开始执行，也是生成器最有用的地方。生成器函数在遇到 yield 
    关键字之前会正常执行。遇到这个关键字后，执行会停止，函数作用域的状态会被保留。停止执行的生成
    器函数只能通过在生成器对象上调用 next() 方法来恢复执行：
    
`);
function* generatorFn() {
    yield;
}
let generatorObject = generatorFn();
// { value: undefined, done: false }
console.log(generatorObject.next());
// { value: undefined, done: true }
console.log(generatorObject.next());
// { value: undefined, done: true }
console.log(generatorObject.next());

logSpace();

console.log(`

        生成器函数内部的执行流程会正对每个生成器对象区分作用域。在一个生成器对象调用 next()
    不会影响其他生成器：

`);

function* generatorFn1() {
    yield "foo";
    yield "bar";
    yield "baz";
}
let generatorObject1 = generatorFn1();
let generatorObject2 = generatorFn1();

// { value: 'foo', done: false }
console.log(generatorObject1.next());
// { value: 'foo', done: false }
console.log(generatorObject2.next());
// { value: 'bar', done: false }
console.log(generatorObject2.next());
// { value: 'bar', done: false }
console.log(generatorObject1.next());

logSpace();

console.log(`
    
        yield 关键字只能在生成器函数内部使用，用在其他地方会抛出错误。类似函数的 return 关键字，
    yield 关键字必须直接位于生成器函数定义中，出现在嵌套的非生成器函数中抛出语法错误
    
`);
// 有效
function* validGeneratorFn() {
    yield;
}

// 无效
function* invalidGeneratorFnA() {
    function a() {
        // SyntaxError: Unexpected strict mode reserved word
        // yield;
    }
}

// 无效
function* invalidGeneratorFnB() {
    const b = () => {
        // SyntaxError: Unexpected strict mode reserved word
        // yield;
    };
}

// 无效
function* invalidGeneratorFnC() {
    (() => {
        // SyntaxError: Unexpected strict mode reserved word
        // yield;
    })();
}

logSpace();