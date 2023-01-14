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
      <div className="flex items-end">
        <div className="flex flex-col justify-end min-w-fit h-20">
          <div className="flex items-end">
            <span className="inline-block w-20">Preparation</span>
            <Rate defaultValue={5} tooltips={desc} className="min-w-fit mx-2" />
          </div>
          <div className="flex items-end">
            <span className="inline-block w-20">Attitude</span>
            <Rate defaultValue={5} tooltips={desc} className="min-w-fit mx-2" />
          </div>
          <div className="flex items-end">
            <span className="inline-block w-20">Participation</span>
            <Rate defaultValue={5} tooltips={desc} className="min-w-fit mx-2" />
          </div>
        </div>
        <TextArea onChange={onChange} style={{ height: "6rem" }} />
        <button className="px-3 py-1 ml-2 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
          Submit
        </button>
      </div>
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
