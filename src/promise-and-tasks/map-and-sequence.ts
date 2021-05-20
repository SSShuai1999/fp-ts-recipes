import { array, task } from "fp-ts";
import { access, constants } from "fs";

export default ~(() => {
  const checkPathExists = (path: string) => () =>
    new Promise((resolve) => {
      access(path, constants.F_OK, (err: unknown) =>
        resolve({ path, exists: !err })
      );
    });

  const items = ["/bin"];

  array.array.traverse(task.task)(items, checkPathExists)().then(console.log); // [ { path: '/bin', exists: true }, { path: '/no/real/path', exists: false } ]
})();
