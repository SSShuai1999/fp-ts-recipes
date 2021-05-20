import { task, apply } from "fp-ts";
// import { array } from "fp-ts";

export default ~(() => {
  // 如果我们想用不同的类型怎么办？
  // const tasks = [task.of(1), task.of("hello")];
  // array.array.sequence(task.task)(tasks);

  // 我们可以使用 sequenceT 或者 sequenceS 来代替
  const t1 = apply.sequenceT(task.task)(task.of(1), task.of("hello")); // ok, type is task.Task<[number, string]>
  const t2 = apply.sequenceS(task.task)({ a: task.of(1), b: task.of("hello") }); // type is task.Task<{ a: number, b: string; }>

  t1().then(console.log);
  t2().then(console.log);
})();
