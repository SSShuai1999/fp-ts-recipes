import { array, task } from "fp-ts";

export default ~(() => {
  // js 提供了 Promise.all Api
  Promise.all([Promise.resolve(1), Promise.resolve(2)]).then(console.log); // [1, 2]

  // fp-ts 也提供了相关 APi，（注：array.array 2.0.0+ 已经被弃用）
  const tasks = [task.of(1), task.of(2)];
  array.array.sequence(task.task)(tasks)().then(console.log); // [ 1, 2 ]
})();
