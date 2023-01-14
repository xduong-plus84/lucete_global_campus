import React from "react";
import { Input, message, Popconfirm, Space, Table, Tag } from "antd";
import { dataTeacherReward } from "./dataTeacherReward";
import "./teacherReward.css";

const columnWidth = 150;

const columns = [
  {
    title: "Point",
    width: columnWidth,
    dataIndex: "point",
    key: "point",
    render: (point) => {
      let color = null;
      if (point < 1000) {
        color = "red";
      } else if (1000 <= point && point < 200000) {
        color = "yellow";
      } else if (5000 <= point) {
        color = "green";
      }
      return (
        <Tag color={color} key={point}>
          {point.toLocaleString("en-US")}
        </Tag>
      );
    },
  },
  {
    title: "Online Class",
    width: columnWidth,
    key: "onlineClass",
    dataIndex: "onlineClass",
    render: (_, record) => {
      const confirm = (e) => {
        console.log(e);
        message.success(`Successful get ${e}`);
      };
      const cancel = (e) => {
        console.log(e);
        message.error(`Cancel get ${e}`);
      };
      return (
        <Popconfirm
          id="popconfirmTeacherRewardOn"
          title={`Are you sure to exchange ${record.onlineClass}?`}
          onConfirm={() => confirm(record.onlineClass)}
          onCancel={() => cancel(record.onlineClass)}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">
            <i className="fa fa-marker mx-2" />
            <span className="mr-1">x</span>
            {record.onlineClass}
          </a>
        </Popconfirm>
      );
    },
  },
  {
    title: "Offline Class",
    width: columnWidth,
    key: "offlineClass",
    dataIndex: "offlineClass",
    render: (_, record) => {
      const confirm = (e) => {
        console.log(e);
        message.success(`Successful get ${e}`);
      };
      const cancel = (e) => {
        console.log(e);
        message.error(`Cancel get ${e}`);
      };
      return (
        <Popconfirm
          id="popconfirmTeacherRewardOff"
          title={`Are you sure to exchange ${record.offlineClass}?`}
          onConfirm={() => confirm(record.offlineClass)}
          onCancel={() => cancel(record.offlineClass)}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">
            <i className="fa fa-marker mx-2" />
            <span className="mr-1">x</span>
            {record.offlineClass}
          </a>
        </Popconfirm>
      );
    },
  },
];
const data = dataTeacherReward;

export default function TeacherReward() {
  return (
    <div className="w-100 mx-auto flex items-start justify-center">
      <div style={{ width: columnWidth * 3 }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
      <div className="p-4">
        <p className="italic text-red-500 mb-4">
          *You can only receive either offline or online gifts
        </p>
        <Input placeholder="Enter code here" />
      </div>
    </div>
  );
}
