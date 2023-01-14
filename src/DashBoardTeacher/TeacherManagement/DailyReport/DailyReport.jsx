import React from "react";
import { Input, Rate, Space, Table, Tabs, Tag } from "antd";
import TextArea from "antd/es/input/TextArea";
import DailyReportTabClass from "./DailyReportTabClass/DailyReportTabClass";

export default function DailyReport() {
  const items = [
    {
      label: "E4-Citrine MON",
      key: "item-1",
      // children: <TodoList maCumRap={maCumRap} maHeThongRap={maHeThongRap} />,
      children: <DailyReportTabClass />,
    },
    {
      label: "E8-Labradorite SAT",
      key: "item-2",
      children: <DailyReportTabClass />,
    },
  ];
  return (
    <div>
      <Tabs centered items={items} />
    </div>
  );
}
