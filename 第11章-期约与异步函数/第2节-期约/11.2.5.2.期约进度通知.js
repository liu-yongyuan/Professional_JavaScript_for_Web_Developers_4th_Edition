import { logSpace } from "../../lib/utils.js";

console.log(`
    
    11.2.5.2.期约进度通知

      执行中的期约可能会有不少离散的“阶段”，在最终解决之前必须依次经过。某些情况下，监控期约
    的执行进度会很有用。ECMAScript 6 期约并不支持进度追踪，但是可以通过扩展来实现。
      一种实现方法就是扩展 Promise 类，为它添加 notify() 方法。
`);
class TrackablePromise extends Promise {
  constructor(executor) {
    const notifyHandles = [];

    super((resolve, reject) => {
      return executor(resolve, reject, (status) => {
        notifyHandles.map((handler) => handler(status))
      });
    });

    this.notifyHandles = notifyHandles;
  }

  notify(notifyHandler) {
    this.notifyHandles.push(notifyHandler);
    return this;
  }
}
// let p = new TrackablePromise((resolve, reject, notify) => {
//   function countdown(x) {
//     if (x > 0) {
//       notify(`${20 * x}% remaining`);
//       setTimeout(() => countdown(x - 1), 1000)
//     } else {
//       resolve();
//     }
//   }

//   countdown(5);
// });

// p.notify((x) => setTimeout(console.log, 0, 'progress: ', x));

// p.then(() => setTimeout(console.log, 0, 'completed'));

// progress:  80% remaining
// progress:  60% remaining
// progress:  40% remaining
// progress:  20% remaining
// completed

logSpace();


let p1 = new TrackablePromise((resolve, reject, notify) => {
  function countdown(x) {
    if (x > 0) {
      notify(`${20 * x}% remaining`);
      setTimeout(() => countdown(x - 1), 1000)
    } else {
      resolve();
    }
  }

  countdown(5);
});

p1.notify((x) => setTimeout(console.log, 0, 'a: ', x))
  .notify((x) => setTimeout(console.log, 0, 'b: ', x));

p1.then(() => setTimeout(console.log, 0, 'completed'));

// a:  80% remaining
// b:  80% remaining
// a:  60% remaining
// b:  60% remaining
// a:  40% remaining
// b:  40% remaining
// a:  20% remaining
// b:  20% remaining
// completed