import { either, taskEither } from "fp-ts";
import { pipe } from "fp-ts/function";

// 可能失败的任务
export default ~(() => {
  const fetchGreeting = taskEither.tryCatch<Error, { name: string }>(
    () =>
      new Promise((resolve) => resolve(JSON.parse('{ "name": "帅神orz" }'))),
    (reason) => new Error(String(reason))
  );

  fetchGreeting()
    .then((e) =>
      pipe(
        e,
        either.fold(
          (err) => `对不起，抱歉。我不知道你是谁。${err.message}`,
          (x) => `Hello, ${x.name}`
        )
      )
    )
    .then(console.log);
})();
