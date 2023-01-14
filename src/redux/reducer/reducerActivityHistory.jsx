import { Alert, Space } from "antd";
import {
  CHECK_IN,
  CHECK_OUT,
  EXCHANGEPOINT,
} from "../constant/constantActivityHistory";

let initalState = {
  arrActivityHistory: [],
};

export const reducerActivityHistory = (state = initalState, action) => {
  // console.log("action: ", action);
  switch (action.type) {
    case CHECK_IN: {
      let cloneArrActivityHistory = [...state.arrActivityHistory];
      cloneArrActivityHistory.push(
        <Alert
          message="You have checked in to class E6-Malachite"
          type="info"
          action={
            <Space>
              <span className="p-1 font-semibold border rounded bg-slate-100">
                <span className="text-green-500">04-05-22</span>
                <span> ~ </span>
                <span className="text-red-500">19:30</span>
              </span>
            </Space>
          }
          className="max-w-2xl w-1/2"
        />
      );
      state.arrActivityHistory = cloneArrActivityHistory;
      return { ...state };
    }
    case CHECK_OUT: {
      let cloneArrActivityHistory = [...state.arrActivityHistory];
      cloneArrActivityHistory.push(
        <Alert
          message="You have checked out to class E6-Malachite"
          type="warning"
          action={
            <Space>
              <span className="p-1 font-semibold border rounded bg-slate-100">
                <span className="text-green-500">04-05-22</span>
                <span> ~ </span>
                <span className="text-red-500">19:30</span>
              </span>
            </Space>
          }
          className="max-w-2xl w-1/2"
        />
      );
      state.arrActivityHistory = cloneArrActivityHistory;
      return { ...state };
    }
    case EXCHANGEPOINT: {
      let cloneArrActivityHistory = [...state.arrActivityHistory];
      cloneArrActivityHistory.push(
        <Alert
          message={`You got ${action.payload}`}
          type="success"
          action={
            <Space>
              <span className="p-1 font-semibold border rounded bg-slate-100">
                <span className="text-green-500">04-05-22</span>
                <span> ~ </span>
                <span className="text-red-500">19:30</span>
              </span>
            </Space>
          }
          className="max-w-2xl w-1/2"
        />
      );
      state.arrActivityHistory = cloneArrActivityHistory;
      return { ...state };
    }

    default:
      return state;
  }
};
