import React, { useState } from "react";
import { Select, Table } from "antd";
import { NavLink } from "react-router-dom";

const url = "/campus-manager/role-management/actions-role-management";

const data = [];
for (let i = 1; i < 46; i++) {
  data.push({
    key: i,
    "no.": `${i}`,
    id: i + 1,
    role: `${i % 2 ? "LAB Teacher" : "Coaching Teacher"}`,
    name: `${i % 2 ? "Edward" : "Joy"}`,
    gender: `${i % 2 ? "F" : "M"}`,
    startdate: `${i % 2 ? "2022-03-03" : "2022-05-09"}`,
    resignation: `${i % 2 ? "Y" : "N"}`,
  });
}

// action_filter
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
const optionRoles = [
  { label: "Campus Manager", value: "Campus Manager" },
  { label: "Online Teacher", value: "Online Teacher" },
  { label: "Coaching Teacher", value: "Coaching Teacher" },
  { label: "LAB Teacher", value: "LAB Teacher" },
  { label: "All", value: "All" },
];

const optionCountries = [
  { label: "Vietnam", value: "Vietnam" },
  { label: "Korea", value: "Korea" },
  { label: "Japan", value: "Japan" },
  { label: "Canada", value: "Canada" },
  { label: "Philippines", value: "Philippines" },
  { label: "All", value: "All" },
];

const optionsRegisnation = [
  { label: "Y", value: "Yes" },
  { label: "N", value: "No" },
  { label: "All", value: "All" },
];

export default function RoleManagementCM() {
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
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Start Date",
      dataIndex: "startdate",
    },
    {
      title: "Resignation",
      dataIndex: "resignation",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <NavLink to={`${url}/${record.id}`}>
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
        dataUpdate[foundIndex].resignation = "N";
        dataUpdate[foundIndex].key += new Date().getTime().toString();
      }
    });
    setDataRender(dataUpdate);
    setSelectedRowKeys([]);
  };

  return (
    <div id="RoleManagementCM">
      <div className="flex flex-wrap justify-between items-center">
        <div className="action_left">
          <NavLink to={`${url}/0`}>
            <button className="px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
              Add New Teacher
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
          <span className="font-bold mr-1 ml-4">Role:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionRoles}
          />
          <span className="font-bold mr-1 ml-4">Country:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionCountries}
          />
          <span className="font-bold mr-1 ml-4">Resignation:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionsRegisnation}
          />
          <button
            type="button"
            className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Search
          </button>
        </div>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataRender}
      />
    </div>
  );
}
