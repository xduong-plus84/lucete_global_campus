import { Tabs } from "antd";
import React from "react";
import ListClass from "./ListClass/ListClass";

export default function StudyPlannerTeacher() {
  const items = [
    {
      label: "Off COA 456",
      key: "item-1",
      children: <ListClass student={["bob 1", "alice 2"]} />,
    },
    {
      label: "Onl LAB 213",
      key: "item-2",
      children: <ListClass student={["bob 3", "alice 4"]} />,
    },
  ];
  return (
    <div>
      <Tabs centered items={items} />
    </div>
  );
}
