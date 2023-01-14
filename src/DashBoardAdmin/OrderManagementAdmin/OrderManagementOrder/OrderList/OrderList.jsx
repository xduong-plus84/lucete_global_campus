import React, { useState } from "react";
import { Input, Select, Table } from "antd";
import { useNavigate } from "react-router-dom";

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    id: i,
    no: `${i}`,
    name: `${i % 2 ? "E Basic" : "E8-1"}`,
    sort: `${i % 2 ? "Product" : "Textbook"}`,
    contents: `${i % 2 ? "E8-1 Reading" : "Reading, Writing, LAB"}`,
    price: `${i % 2 ? "-" : "17,000"}`,
    active: `${i % 2 ? "Y" : "N"}`,
  });
}

// action_filter
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};

const optionRegisters = [
  { label: "Campus Standard", value: "register-campus-standard" },
  { label: "Fixed Standard", value: "register-fixed-standard" },
  { label: "New Product", value: "register-new-product" },
];

const optionSorts = [
  { label: "Product", value: "product" },
  { label: "textbook", value: "Textbook" },
  { label: "All", value: "All" },
];

const optionLevels = [
  { label: "Level 1", value: "level1" },
  { label: "Level 2", value: "level2" },
  { label: "Level 3", value: "level3" },
  { label: "Level 4", value: "level4" },
  { label: "All", value: "All" },
];
const optionCampus = [
  { label: "Campus 1", value: "campus1" },
  { label: "Campus 2", value: "campus2" },
  { label: "Campus 3", value: "campus3" },
  { label: "All", value: "All" },
];
export default function OrderList() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate = useNavigate();

  const handleChangeRegister = (value) => {
    navigate(`/dash-board-admin/order-management/order/${value}/0`);
  };

  const handleClickEdit = (maHocSinh) => {
    console.log("bam edit");
    navigate(
      `/dash-board-admin/study-planner/planner-arrangement/actions-activity-managemen/${maHocSinh}`
    );
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
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
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Sort",
      dataIndex: "sort",
    },
    {
      title: "Contents",
      dataIndex: "contents",
    },
    {
      title: "Price (won)",
      dataIndex: "price",
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
    <div id="OrderList">
      <div className="flex flex-wrap justify-between items-center my-8">
        <div className="action_left">
          <Select
            defaultValue="Register"
            onChange={handleChangeRegister}
            style={{
              width: 150,
            }}
            options={optionRegisters}
          />
          <button className="px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3">
            Inactivate
          </button>
        </div>
        <div className="action_right">
          <span className="font-bold mr-1 ml-4">Sort:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionSorts}
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
          <span className="font-bold mr-1 ml-4">Campus:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionCampus}
          />
          <span className="font-bold mr-1 ml-4">Search:</span>
          <Input
            style={{
              width: 200,
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
