import { https } from "./configURL";
// import { serviceLocalStorageUser } from "./serviceLocalStorageUser";

export const service_DemoTodoList = {
  getAll: () => {
    let uri = `/todos`;
    return https.get(uri);
  },
  doneTask: (task) => {
    let uri = `/todos/${task.id}`;
    return https.put(uri, task);
  },
  incompleteTask: (task) => {
    let uri = `/todos/${task.id}`;
    return https.put(uri, task);
  },
};
