import React, { useState } from "react";
import { Select, Table, DatePicker } from "antd";
import { NavLink } from "react-router-dom";
const { RangePicker } = DatePicker;

const url = "/campus-manager/learning-management/detail";

const columns = [
  {
    title: "No.",
    dataIndex: "no.",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Level",
    dataIndex: "level",
  },
  {
    title: "Offline Class",
    dataIndex: "offlineClass",
  },
  {
    title: "Edit",
    key: "edit",
    render: (_, record) => {
      console.log(record);
      return (
        <NavLink to={`${url}/${record.id}`}>
          <i className="fa fa-cog"></i>
        </NavLink>
      );
    },
  },
];

const data = [];
for (let i = 1; i < 46; i++) {
  data.push({
    key: i,
    "no.": `${i}`,
    name: `${i % 2 ? "Woo Hyuck" : "Ji In"}`,
    id: `student${i + 1}`,
    level: `${i % 2 ? "E8" : "E61"}`,
    offlineClass: `${i % 2 ? "E8-MW1A" : "E8-TT2A"}`,
  });
}

const optionsLevels = [
  { label: "Level 1", value: "Level1" },
  { label: "Level 2", value: "Level2" },
  { label: "Level 3", value: "Level3" },
  { label: "All", value: "All" },
];

const optionOfflineClasses = [
  { label: "Offline Class 1", value: "offClass1" },
  { label: "Offline Class 2", value: "offClass2" },
  { label: "Offline Class 3", value: "offClass3" },
  { label: "Offline Class 4", value: "offClass4" },
  { label: "All", value: "All" },
];

export default function LearningManagementCM() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // action_filter
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const handleClickSearch = () => {
    alert("Handle Click Search");
  };

  return (
    <div id="LearningManagementCM" className="mb-1 mr-4">
      <div>
        <div className="flex flex-wrap justify-around items-end my-4">
          <div className="mb-1 mr-4">
            <span className="font-bold inline-block mr-4">Level:</span>
            <Select
              defaultValue="All"
              onChange={handleChange}
              style={{
                width: 160,
              }}
              options={optionsLevels}
            />
          </div>
          <div className="mb-1 mr-4">
            <span className="font-bold inline-block mr-4">Offline Class:</span>
            <Select
              defaultValue="All"
              onChange={handleChange}
              style={{
                width: 160,
              }}
              options={optionOfflineClasses}
            />
          </div>
          <div className="mb-1 mr-4">
            <span className="font-bold inline-block mr-4">Date:</span>
            <RangePicker />
          </div>
          <div className="mb-1 mr-4">
            <button
              onClick={() => handleClickSearch()}
              className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
}
