import React, { useState } from "react";
import { Select, Table } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const data = [];
for (let i = 0; i < 15; i++) {
  data.push({
    key: i,
    id: i + 1,
    "no.": `${i}`,
    name: `${i % 2 ? "Combo A-1 ~ E3-1" : "Combo E5-1 ~ E8-2"}`,
    startLevel: `${i % 2 ? "Ekong" : "E Level"}`,
    endLevel: `${i % 2 ? "E Level" : "E Level"}`,
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

export default function ManagementPackageList() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  let [dataRender, setDataRender] = useState(data);

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
            to={`/dash-board-admin/product-management/package/actions-package/${record.id}`}
          >
            <i className="fa fa-cog"></i>
          </NavLink>
        );
      },
    },
  ];

  const handleClickInactive = () => {
    let dataUpdate = [...dataRender];
    selectedRowKeys.map((key) => {
      let foundIndex = dataUpdate.findIndex((data) => data.key == key);

      if (foundIndex != -1) {
        dataUpdate[foundIndex].active = "N";
        dataUpdate[foundIndex].key += new Date().getTime().toString();
      }
    });
    setDataRender(dataUpdate);
    setSelectedRowKeys([]);
  };

  return (
    <div id="ManagementPackageList">
      <div className="flex flex-wrap justify-between items-center">
        <div className="action_left">
          <NavLink
            to={
              "/dash-board-admin/product-management/package/actions-package/0"
            }
          >
            <button className="px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
              Add New Package
            </button>
          </NavLink>

          <button
            onClick={() => handleClickInactive()}
            className="px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3"
          >
            Inactivate
          </button>
          <span className="ml-2">
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <div className="action_right">
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
          <button
            type="button"
            className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Search
          </button>
        </div>
      </div>
      <Outlet />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataRender}
      />
    </div>
  );
}
