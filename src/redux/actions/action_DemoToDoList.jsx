import { message } from "antd";
import { service_DemoTodoList } from "../../services/service_DemoTodoList";
import { GET_TASK } from "../constant/constant_DemoTodoList";

const getTaskList_Reducer = (res) => {
  return {
    type: GET_TASK,
    payload: res.data,
  };
};

export const getAllTaskList_API = () => {
  return (dispatch) => {
    service_DemoTodoList
      .getAll()
      .then((res) => {
        dispatch(getTaskList_Reducer(res));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

let onSuccess = (data) => {
  message.success(`Checked ${data.title} done`);
};
let onFail = () => {
  message.error("Error");
};

export const doneTask_API = (task) => {
  return (dispatch) => {
    service_DemoTodoList
      .doneTask(task)
      .then((res) => {
        console.log(res);
        onSuccess(res.data);
        dispatch(getAllTaskList_API());
      })
      .catch((err) => {
        console.log(err);
        onFail();
      });
  };
};

// export const addTask_API = (taskName) => {
//   return (dispatch) => {
//     service_DemoTodoList
//       .addTask(taskName)
//       .then((res) => {
//         console.log(res);
//         dispatch(getAllTaskList_API());
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// export const deleteTask_API = (taskName) => {
//   return (dispatch) => {
//     service_DemoTodoList
//       .deleteTask(taskName)
//       .then((res) => {
//         console.log(res);
//         dispatch(getAllTaskList_API());
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// export const rejectTask_API = (taskName) => {
//   return (dispatch) => {
//     service_DemoTodoList
//       .rejectTask(taskName)
//       .then((res) => {
//         console.log(res);
//         dispatch(getAllTaskList_API());
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
