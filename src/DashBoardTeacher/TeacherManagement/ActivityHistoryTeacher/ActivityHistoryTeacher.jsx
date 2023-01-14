import { Alert, Space } from "antd";
import React from "react";

export default function ActivityHistoryTeacher() {
  return (
    <div className="py-5">
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        {/* {arrActivityHistory} */}
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
      </Space>
    </div>
  );
}
