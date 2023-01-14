import React, { useState } from "react";
import { Select, Table, DatePicker } from "antd";
import { NavLink } from "react-router-dom";
const { RangePicker } = DatePicker;

const url = "/campus-manager/enrollment/apply";

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
    title: "Submitted Date",
    dataIndex: "submittedDate",
  },
  {
    title: "Status",
    dataIndex: "status",
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
    id: `student ${i + 1}`,
    level: `${i % 2 ? "E8" : "E61"}`,
    submittedDate: `${i % 2 ? "2022-03-01" : "2023-11-1"}`,
    status: `${i % 2 ? "Applied" : "Approved"}`,
  });
}

// action_filter
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
const optionsLevels = [
  { label: "Level 1", value: "Level1" },
  { label: "Level 2", value: "Level2" },
  { label: "Level 3", value: "Level3" },
  { label: "All", value: "All" },
];

const optionOnlineClasses = [
  { label: "Online Class 1", value: "onClass1" },
  { label: "Online Class 2", value: "onClass2" },
  { label: "Online Class 3", value: "onClass3" },
  { label: "Online Class 4", value: "onClass4" },
  { label: "All", value: "All" },
];

export default function ErrollmentCM() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const handleClickInactivate = () => {
    alert("Handle Click Inactivate");
  };

  const handleClickSearch = () => {
    alert("Handle Click Search");
  };

  return (
    <div id="ErrollmentCM" className="mb-1 mr-4">
      <p className="font-semibold">List</p>
      <div>
        <NavLink to={`${url}/0`}>
          <button className="px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
            Apply
          </button>
        </NavLink>
        <button
          onClick={() => handleClickInactivate()}
          className="px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3"
        >
          Inactivate
        </button>
        <span className="ml-4 font-semibold text-red-500">
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
        <div className="flex flex-wrap items-end my-4">
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
            <span className="font-bold inline-block mr-4">Status:</span>
            <Select
              defaultValue="All"
              onChange={handleChange}
              style={{
                width: 160,
              }}
              options={optionOnlineClasses}
            />
          </div>
          <div className="mb-1 mr-4">
            <span className="font-bold inline-block mr-4">Submitted:</span>
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
