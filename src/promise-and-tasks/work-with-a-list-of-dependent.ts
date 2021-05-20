import { task } from "fp-ts";
import { pipe } from "fp-ts/function";

export default ~(() => {
  // pipe -> 就像一个管道, 原始数据从第一个参数的运算结果得知, 依次递进到下一个函数参数中去计算。
  const promisePipe = pipe(
    task.of(2),
    task.chain((result) => task.of(result * 3)),
    task.chain((result) => task.of(result + 4))
  );

  promisePipe().then(console.log);
})();
