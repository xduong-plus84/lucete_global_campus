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
          <Avatar size={50} src="https://picsum.photos/100" />
          <span className="ml-2">{student[0]}</span>
        </div>
      ),
      key: "item-1",
      children: <TodoListTeacherForStudent />,
    },
    {
      label: (
        <div>
          <Avatar size={50} src="https://picsum.photos/200" />
          <span className="ml-2">{student[1]}</span>
        </div>
      ),
      key: "item-2",
      children: <TodoListTeacherForStudent />,
    },
  ];
  return <Tabs tabPosition="left" items={items} />;
}
