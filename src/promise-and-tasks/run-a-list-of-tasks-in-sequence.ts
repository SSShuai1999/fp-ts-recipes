import { array, task } from "fp-ts";
import { pipe } from "fp-ts/function";

export default ~(() => {
  /**
   * 如果您需要按顺序运行一个任务列表，
   * 也就是说，在运行第二个任务之前，
   * 您必须等待一个任务完成，那么您可以使用 taskSeq 实例。
   */
  const log = <A>(x: A) => {
    console.log(x);
    return x;
  };

  const tasks = [
    pipe(task.delay(200)(task.of("first")), task.map(log)),
    pipe(task.delay(100)(task.of("second")), task.map(log)),
  ];

  // Parallel: 先打印出 `second`, 再打印出 `first`
  array.array.sequence(task.task)(tasks)();

  // Sequential: 先打印出 `first`, 再打印出 `second`
  array.array.sequence(task.taskSeq)(tasks)();
})();
