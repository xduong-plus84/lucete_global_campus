import React, { useState } from "react";
import { DatePicker, Select, Table } from "antd";
import { NavLink } from "react-router-dom";

const data = [];
for (let i = 0; i < 15; i++) {
  data.push({
    key: i,
    no: `${i}`,
    campus: `${i % 2 ? "Background Discussion" : "Word Check"}`,
    name: `${i % 2 ? "Sprout-E8 Reading" : "Sprout-E8 Writing"}`,
    id: `${i}`,
    level: `E8`,
    submitteDate: `2022-10-31`,
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

export default function EnrollmentHistory() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      width: "5%",
    },
    {
      title: "Campus",
      dataIndex: "campus",
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
      dataIndex: "submitteDate",
      width: "10%",
    },
    {
      title: "Edit",
      key: "edit",
      render: (_, record) => {
        console.log(record);
        return (
          <NavLink
            to={`/dash-board-admin/enrollment/history/actions-history/${record.no}`}
          >
            <i className="fa fa-cog"></i>
          </NavLink>
        );
      },
    },
  ];

  return (
    <div id="EnrollmentHistory" className="mt-4">
      <div className="flex flex-wrap justify-end items-center mb-4">
        <div className="action_right">
          <span className="font-bold mr-1 ml-4">Campus:</span>
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
          <span className="font-bold mr-1 ml-4">Submitted Date:</span>
          <DatePicker
            onChange={onChangeDate}
            style={{
              width: 120,
            }}
          />
          <span className="mx-4">~</span>
          <DatePicker
            onChange={onChangeDate}
            style={{
              width: 120,
            }}
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
