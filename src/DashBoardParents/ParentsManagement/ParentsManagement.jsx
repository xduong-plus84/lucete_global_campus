import { Tabs } from "antd";
import React from "react";
import WorldChat from "../../Pages/WorldChat/WorldChat";
import ParentsChildren from "./ParentsChildren/ParentsChildren";
import ParentsMemo from "./ParentsMemo/ParentsMemo";
import ParentsReward from "./ParentsReward/ParentsReward";
import ParentsTeacher from "./ParentsTeacher/ParentsTeacher";

export default function ParentsManagement() {
  const items = [
    {
      label: "Children",
      key: "children",
      children: <ParentsChildren />,
    },
    {
      label: "Teacher",
      key: "teacher",
      children: <ParentsTeacher />,
    },
    {
      label: "Memo",
      key: "memo",
      children: <ParentsMemo />,
    },
    {
      label: "Reward",
      key: "reward",
      children: <ParentsReward />,
    },
    {
      label: "World Chat",
      key: "world-chat",
      children: <WorldChat />,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="w-full">
      {/* <div> */}
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={items}
        className="w-full"
      />
    </div>
  );
}
