import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.9.2 this

      标准函数中，this 引用的是把函数当成方法调用的上下文对象，这时候通常称为 this 值。
    在箭头函数中，this 引用的是定义箭头函数的上下文。
`);
window.color = 'red';
let o = {
  color: 'blue'
};

function sayColor() {
  console.log(this.color)
}

sayColor(); // red

o.sayColor = sayColor;
o.sayColor(); // blue

logSpace();

let sayColor1 = () => console.log(this.color);
sayColor1(); //red
o.sayColor1 = sayColor1;
o.sayColor1(); // red

logSpace();

function King() {
  this.royaltyName = 'Henry';
  setTimeout(() => console.log(this.royaltyName), 1000);
}

function Queen() {
  this.royaltyName = 'Elizabeth';
  setTimeout(function () {
    console.log(this.royaltyName)
  }, 1000);
}

new King(); // Henry
new Queen(); // undefined