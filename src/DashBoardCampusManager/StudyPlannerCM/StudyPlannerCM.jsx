import React, { useState } from "react";
import { Select, Table, DatePicker } from "antd";
import { NavLink } from "react-router-dom";

const url = "/campus-manager/study-planner/detail";

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
    title: "Level",
    dataIndex: "level",
  },
  {
    title: "Total Time (m)",
    dataIndex: "totalTime",
  },
  {
    title: "Assigned",
    dataIndex: "assigned",
  },
  {
    title: "Activate",
    dataIndex: "activate",
  },
  {
    title: "Edit",
    key: "edit",
    render: (_, record) => {
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
    ["no."]: `${i}`,
    id: `something${i + 1}`,
    name: `${i % 2 ? "Woo Hyuck" : "Ji In"}`,
    level: `${i % 2 ? "E8" : "E6"}`,
    totalTime: `${i % 2 ? "300" : "200"}`,
    assigned: `${i % 2 ? "N" : "Y"}`,
    activate: `${i % 2 ? "Y" : "N"}`,
  });
}

const optionLevel = [
  { label: "Level 1", value: "level1" },
  { label: "Level 2", value: "level2" },
  { label: "Level 3", value: "level3" },
  { label: "All", value: "All" },
];

const optionsName = [
  { label: "Name 1", value: "name1" },
  { label: "Name 2", value: "name2" },
  { label: "Name 3", value: "name3" },
  { label: "Name 4", value: "name4" },
  { label: "All", value: "All" },
];

export default function StudyPlannerCM() {
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
    alert(`Handle Onchange ${value}`);
  };

  const handleClickSearch = () => {
    alert("Handle Click Search");
  };

  const handleClickInactivate = () => {
    alert("Hanle Click Inactivate");
  };

  return (
    <div id="StudyPlannerCM" className="mb-1 mr-4">
      <div>
        <div className="flex flex-wrap justify-around items-end my-4">
          <div className="mb-1 mr-4">
            <span className="font-bold inline-block mr-4">Name:</span>
            <Select
              defaultValue="All"
              onChange={handleChange}
              style={{
                width: 160,
              }}
              options={optionsName}
            />
          </div>
          <div className="mb-1 mr-4">
            <span className="font-bold inline-block mr-4">Level:</span>
            <Select
              defaultValue="All"
              onChange={handleChange}
              style={{
                width: 160,
              }}
              options={optionLevel}
            />
          </div>
          <div className="mb-1 mr-4">
            <span className="font-bold inline-block mr-4">Assigned:</span>
            <Select
              defaultValue="All"
              onChange={handleChange}
              style={{
                width: 160,
              }}
              options={[
                { label: "Y", value: "Y" },
                { label: "N", value: "N" },
                { label: "All", value: "All" },
              ]}
            />
          </div>
          <div className="mb-1 mr-4">
            <span className="font-bold inline-block mr-4">Activate:</span>
            <Select
              defaultValue="All"
              onChange={handleChange}
              style={{
                width: 160,
              }}
              options={[
                { label: "Y", value: "Y" },
                { label: "N", value: "N" },
                { label: "All", value: "All" },
              ]}
            />
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
      <div>
        <button
          onClick={() => handleClickInactivate()}
          className="px-3 py-1 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300"
        >
          Inactivate
        </button>
      </div>
    </div>
  );
}
