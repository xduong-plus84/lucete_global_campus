import React from "react";
import { Space } from "antd";
import { useSelector } from "react-redux";

export default function StudentActivityHistory() {
  let { arrActivityHistory } = useSelector(
    (state) => state.reducerActivityHistory
  );
  return (
    <div className="py-5">
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        {arrActivityHistory}
      </Space>
    </div>
  );
}
