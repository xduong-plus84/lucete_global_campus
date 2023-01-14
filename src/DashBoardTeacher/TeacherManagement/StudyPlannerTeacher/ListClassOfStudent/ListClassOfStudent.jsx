import { Tabs } from "antd";
import React from "react";
import TodoListTeacherForStudent from "../TodoListTeacherForStudent/TodoListTeacherForStudent";

export default function ListClassOfStudent() {
  const items = [
    {
      label: "E4-Citrine MON",
      key: "item-1",
      children: <TodoListTeacherForStudent />,
    },
    {
      label: "E8-Labradorite SAT",
      key: "item-2",
      children: <TodoListTeacherForStudent />,
    },
  ];
  return <Tabs centered items={items} />;
}
