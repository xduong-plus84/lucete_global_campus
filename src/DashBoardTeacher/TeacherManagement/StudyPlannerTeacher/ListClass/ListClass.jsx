import { Avatar, Tabs } from "antd";
import React from "react";
import TodoListTeacherForStudent from "../TodoListTeacherForStudent/TodoListTeacherForStudent";

export default function ListClass(props) {
  console.log("props: ", props);
  const { student } = props;
  console.log("student: ", student);

  const items = [
    {
      label: (
        <div>
          <Avatar size={50} src="https://joeschmoe.io/api/v1/random" />
          <span>{student[0]}</span>
        </div>
      ),
      key: "item-1",
      children: <TodoListTeacherForStudent />,
    },
    {
      label: (
        <div>
          <Avatar size={50} src="https://joeschmoe.io/api/v1/random" />
          <span>{student[1]}</span>
        </div>
      ),
      key: "item-2",
      children: <TodoListTeacherForStudent />,
    },
  ];
  return <Tabs tabPosition="left" items={items} />;
}
