import React from "react";
import { Table } from "antd";
import { NavLink } from "react-router-dom";

const url = "/campus-manager/class-management/register/detail";

const data = [];
for (let i = 1; i < 15; i++) {
  data.push({
    key: i,
    ["no."]: `${i}`,
    id: i + 1,
    level: `${i % 2 ? "E Level" : "E4-1A"}`,
    className: `${i % 2 ? "E4-1A" : "Stephen"}`,
    classTime: `${i % 2 ? "14:50 ~ 16:00" : "16:05 ~ 17:15"}`,
    teacher: `${i % 2 ? "Linda" : "Stephen"}`,
    availability: `${i % 2 ? "Y" : "N"}`,
  });
}
const columns = [
  {
    title: "No",
    dataIndex: "no.",
    key: "no.",
  },
  {
    title: "Level",
    dataIndex: "level",
    key: "level",
  },
  {
    title: "Class Name",
    dataIndex: "className",
    key: "className",
  },
  {
    title: "Class Time",
    dataIndex: "classTime",
    key: "classTime",
  },
  {
    title: "Teacher",
    dataIndex: "teacher",
    key: "teacher",
  },
  {
    title: "Availability",
    dataIndex: "availability",
    key: "availability",
  },
  {
    title: "Edit",
    key: "edit",
    dataIndex: "edit",
    render: (_, record) => {
      return (
        <NavLink to={`${url}/${record.id}`}>
          <i className="fa fa-cog"></i>
        </NavLink>
      );
    },
  },
];

export default function ClassRegisterList() {
  return (
    <div id="ClassRegisterList" className="mt-8">
      <p className="font-bold my-4">ClassRegisterList</p>
      <div className="flex flex-wrap items-center">
        <NavLink to={`${url}/0`}>
          <button className="px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
            Add New Teacher
          </button>
        </NavLink>
        <button className="px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3">
          Inactivate
        </button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
