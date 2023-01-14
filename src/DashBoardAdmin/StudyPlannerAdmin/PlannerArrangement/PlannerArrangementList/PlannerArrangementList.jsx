import React, { useState } from "react";
import { Input, Select, Table } from "antd";
import { useNavigate } from "react-router-dom";

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    id: i,
    "no.": `${i}`,
    name: `${i % 2 ? "Ji in" : "Woo Hyuck"}`,
    campus: `${i % 2 ? "Nohyung" : "Magok"}`,
    level: "E8",
    time: `${i + 10} mins`,
    active: `${i % 2 ? "Y" : "N"}`,
  });
}

// action_filter
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
const optionLevels = [
  { label: "Level 1", value: "Level 1" },
  { label: "Level 2", value: "Level 2" },
  { label: "Level 3", value: "Level 3" },
  { label: "Level 4", value: "Level 4" },
  { label: "All", value: "All" },
];

const optionClasses = [
  { label: "Coaching", value: "Coaching" },
  { label: "LAB", value: "LAB" },
  { label: "Online Class", value: "Online Class" },
  { label: "All", value: "All" },
];

export default function PlannerArrangementList() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate = useNavigate();

  const handleClickEdit = (maHocSinh) => {
    console.log("bam edit");
    navigate(
      `/dash-board-admin/study-planner/planner-arrangement/actions-activity-managemen/${maHocSinh}`
    );
    // setRegister(true);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const columns = [
    {
      title: "No.",
      dataIndex: "no.",
      width: "5%",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Campus",
      dataIndex: "campus",
    },
    {
      title: "Level",
      dataIndex: "level",
    },
    {
      title: "Time (m)",
      dataIndex: "time",
    },
    {
      title: "Active",
      dataIndex: "active",
      width: "5%",
    },
    {
      title: "Edit",
      key: "edit",
      render: (_, record) => {
        console.log(record);
        return (
          <button onClick={() => handleClickEdit(record.id)}>
            <i className="fa fa-cog"></i>
          </button>
        );
      },
    },
  ];

  return (
    <div id="PlannerArrangementList">
      <div className="flex flex-wrap justify-between items-center">
        <div className="action_left">
          <button className="px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300">
            Inactivate
          </button>
          <span>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <div className="action_right">
          <span className="font-bold mr-1 ml-4">Product:</span>
          <Input
            style={{
              width: 160,
            }}
          />
          <span className="font-bold mr-1 ml-4">Level:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionLevels}
          />
          <span className="font-bold mr-1 ml-4">Class:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionClasses}
          />
          <span className="font-bold mr-1 ml-4">Activate:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 70,
            }}
            options={[
              { label: "Y", value: "Yes" },
              { label: "N", value: "No" },
              { label: "All", value: "All" },
            ]}
          />
          <button
            type="button"
            className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Search
          </button>
        </div>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
}
