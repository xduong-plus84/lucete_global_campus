import React from "react";
import { Input, message, Popconfirm, Table, Tag } from "antd";
import { dataStudentReward } from "./dataStudentReward";
import "./studentReward.css";
import { useDispatch } from "react-redux";
import { exchangePoint } from "../../../redux/actions/actionActivityHistory";

const columnWidth = 150;

export default function StudentReward() {
  const dispatch = useDispatch();
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
          dispatch(exchangePoint(e));
        };
        const cancel = (e) => {
          console.log(e);
          message.error(`Cancel get ${e}`);
        };
        return (
          <Popconfirm
            id="popconfirmStudentRewardOn"
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
      key: "oflineClass",
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
            id="popconfirmStudentRewardOn"
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
  const data = dataStudentReward;
  return (
    <div className="w-100 mx-auto flex items-start justify-center">
      <div style={{ width: columnWidth * 3 }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
      <div className="p-4">
        <p className="italic text-red-500 mb-4">
          *You can only receive either offline or online gifts
        </p>
        <p className="mb-4">
          Reward Point: <span>500</span>
        </p>
        <Input placeholder="Enter code here" />
      </div>
    </div>
  );
}
