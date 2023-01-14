import { CHECK_TASK, ERROR, GET_TASK } from "../constant/constant_DemoTodoList";

const initialState = {
  taskList: [],
};

export let reducer_DemoTodoList = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK: {
      console.log("action: ", action.payload);
      // let taskList_Update = [...state.taskList];
      // taskList_Update;

      return { ...state, taskList: action.payload };
    }
    case CHECK_TASK: {
      console.log("action: ", action.payload);
      // let taskList_Update = [...state.taskList];
      // taskList_Update;

      return { ...state, taskList: action.payload };
    }
    case ERROR: {
      // console.log("action: ", action.payload);
      // let taskList_Update = [...state.taskList];
      // taskList_Update;

      return { ...state };
    }

    default:
      return { ...state };
  }
};
