import { task } from "fp-ts";

export default ~(() => {
  const deepThought: task.Task<number> = () => Promise.resolve(42);

  deepThought().then((res: any) => {
    console.log(`the answer is ${res}`);
  });
})();
