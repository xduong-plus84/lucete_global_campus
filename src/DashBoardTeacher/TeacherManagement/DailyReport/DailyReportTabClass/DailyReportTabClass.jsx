import React from "react";
import { Input, Rate, Space, Table, Tag } from "antd";
import TextArea from "antd/es/input/TextArea";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const onChange = (e) => {
  console.log("Change:", e.target.value);
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Level",
    dataIndex: "level",
    key: "level",
  },
  {
    title: "Attendance",
    key: "attendance",
    dataIndex: "attendance",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "Checked in") {
            color = "green";
          }
          if (tag === "Checked out") {
            color = "geekblue";
          }
          if (tag === "absent") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Review",
    key: "review",
    render: (_, record) => (
      <Space size="middle" className="flex items-center">
        <Rate defaultValue={5} tooltips={desc} />
        <TextArea
          style={{
            height: 20,
          }}
          onChange={onChange}
        />
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    class: "E5-Tiger eye",
    tags: ["Checked in", "Checked out"],
  },
  {
    key: "2",
    name: "Jim Green",
    class: "E5-Tiger eye",
    tags: ["absent"],
  },
  {
    key: "3",
    name: "Joe Black",
    class: "E5-Tiger eye",
    tags: ["Checked in", "Checked out"],
  },
];
export default function DailyReportTabClass() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
