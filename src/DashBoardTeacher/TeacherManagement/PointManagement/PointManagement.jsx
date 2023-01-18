import { Tabs } from "antd";
import React from "react";
import PointManagementClass from "./PointManagementClass";

export default function PointManagement() {
  const items = [
    {
      label: "Off COA 456",
      key: "item-1",
      children: <PointManagementClass idClass={"Off COA 456"} />,
    },
    {
      label: "Onl LAB 213",
      key: "item-2",
      children: <PointManagementClass idClass={"Onl LAB 213"} />,
    },
  ];
  return (
    <div>
      <Tabs centered items={items} />
    </div>
  );
}
