import { task } from "fp-ts";

// 总是成功的任务
export default ~(() => {
  const deepThought: task.Task<number> = () => Promise.resolve(41);

  deepThought().then((res: any) => {
    console.log(`the answer is ${res}`);
  });
})();
