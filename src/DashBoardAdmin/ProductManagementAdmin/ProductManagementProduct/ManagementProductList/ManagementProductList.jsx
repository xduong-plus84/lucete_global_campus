import React, { useState } from "react";
import { Select, Table } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const data = [];
for (let i = 1; i < 15; i++) {
  data.push({
    key: i,
    "no.": `${i}`,
    id: i + 1,
    package: `${i % 2 ? "Y" : "N"}`,
    name: "Edward",
    startLevel: "Level 1",
    endLevel: `Level ${i + 3}`,
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
];

export default function ManagementProductList() {
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
    },
    {
      title: "Package",
      dataIndex: "package",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Start Level",
      dataIndex: "startLevel",
    },
    {
      title: "End Level",
      dataIndex: "endLevel",
    },
    {
      title: "Active",
      dataIndex: "active",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <NavLink
            to={`/dash-board-admin/product-management/product/actions-product/${record.id}`}
          >
            <i className="fa fa-cog"></i>
          </NavLink>
        );
      },
    },
  ];

  return (
    <div id="ManagementProductList">
      <div className="flex flex-wrap justify-between items-center">
        <div className="action_left">
          <NavLink
            to={
              "/dash-board-admin/product-management/product/actions-product/0"
            }
          >
            <button className="px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
              Add New Product
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
          <span className="font-bold mr-1 ml-4">Package:</span>
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
          <span className="font-bold mr-1 ml-4">Start Level:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionLevels}
          />
          <span className="font-bold mr-1 ml-4">EndLevel:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionLevels}
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
          <button className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
            Search
          </button>
        </div>
      </div>
      <Outlet />
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
}
