import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducerActivityHistory } from "./reducer/reducerActivityHistory";
import { reducerModalReviewTeacher } from "./reducer/reducerModalReviewTeacher";
import reduxThunk from "redux-thunk";
import { reducer_DemoTodoList } from "./reducer/reducer_DemoTodoList";
import { reducerComponentsLoading } from "./reducer/reducerComponentsLoading";
import { demoReducerQuanLyNguoiDung } from "./reducer/demoReducerQuanLyNguoiDung";

const rootReducer = combineReducers({
  //reducer khai báo tại đây
  reducerComponentsLoading,
  reducerModalReviewTeacher,
  reducerActivityHistory,
  reducer_DemoTodoList,
  demoReducerQuanLyNguoiDung,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
