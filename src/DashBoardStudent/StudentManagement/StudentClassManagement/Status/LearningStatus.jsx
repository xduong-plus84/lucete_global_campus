import { Progress, Space, Tooltip } from "antd";
import React from "react";

export default function LearningStatus() {
  return (
    <Space wrap>
      <Tooltip title="Cố lên. Sắp hoàn thành lộ trình rồi">
        <Progress percent={60} type="circle" />
      </Tooltip>
    </Space>
  );
}
