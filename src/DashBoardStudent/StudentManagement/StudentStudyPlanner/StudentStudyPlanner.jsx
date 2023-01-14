import { Tabs } from "antd";
import React from "react";
import StudentTodoList from "./StudentTodoList/StudentTodoList";

export default function StudentStudyPlanner() {
  const items = [
    {
      label: "E4-Citrine MON",
      key: "item-1",
      children: <StudentTodoList />,
    },
    {
      label: "E8-Labradorite SAT",
      key: "item-2",
      children: <StudentTodoList />,
    },
  ];
  return (
    <div>
      <Tabs tabPosition={"left"} items={items} />
    </div>
  );
}
