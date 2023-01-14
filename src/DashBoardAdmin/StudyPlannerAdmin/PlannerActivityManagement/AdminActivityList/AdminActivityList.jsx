import React, { useState } from "react";
import { Select, Table } from "antd";
import { NavLink } from "react-router-dom";

const data = [];
for (let i = 0; i < 15; i++) {
  data.push({
    key: i,
    id: i + 1,
    "no.": `${i}`,
    activityName: `${i % 2 ? "Background Discussion" : "Word Check"}`,
    product: `${i % 2 ? "Sprout-E8 Reading" : "Sprout-E8 Writing"}`,
    class: "Coaching",
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
const optionProducts = [
  { label: "Product 1", value: "Product 1" },
  { label: "Product 2", value: "Product 2" },
  { label: "Product 3", value: "Product 3" },
  { label: "Product 4", value: "Product 4" },
  { label: "All", value: "All" },
];
const optionClasses = [
  { label: "Coaching", value: "Coaching" },
  { label: "LAB", value: "LAB" },
  { label: "Online Class", value: "Online Class" },
  { label: "All", value: "All" },
];

export default function AdminActivityList() {
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
  const columns = [
    {
      title: "No.",
      dataIndex: "no.",
      width: "5%",
    },
    {
      title: "Activity Name",
      dataIndex: "activityName",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Class",
      dataIndex: "class",
    },
    {
      title: "Time",
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
          <NavLink
            to={`/dash-board-admin/study-planner/activity-management/actions-activity-management/${record.id}`}
          >
            <i className="fa fa-cog"></i>
          </NavLink>
        );
      },
    },
  ];

  return (
    <div id="AdminActivityList">
      <div className="flex flex-wrap justify-between items-center">
        {/* <Button
              type="primary"
              onClick={start}
              disabled={!hasSelected}
              loading={loading}
            >
              Reload
            </Button> */}
        <div className="action_left">
          <NavLink
            to={
              "/dash-board-admin/study-planner/activity-management/actions-activity-management/0"
            }
          >
            <button className="px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
              Add New Avtivity
            </button>
          </NavLink>
          <button className="px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3">
            Inactivate
          </button>
          <span>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <div className="action_right">
          <span className="font-bold mr-1 ml-4">Product:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 200,
            }}
            options={optionProducts}
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
