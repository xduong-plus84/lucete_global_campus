import React, { useState } from "react";
import { Input, Select, Table } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

const url = "/dash-board-admin/teacher-management/management/management-detail";

const data = [];
for (let i = 1; i < 5; i++) {
  data.push({
    key: i,
    no: `${i}`,
    role: "Online",
    name: `${i % 2 ? "Simon" : "Robyn"}`,
    id: `${i % 2 ? "gcteacher2" : "gcteacher5"}`,
    contry: "South Africa",
    campus: "-",
    assign: `${i % 2 ? "Y" : "N"}`,
    active: `${i % 2 ? "Y" : "N"}`,
  });
}

// action_filter
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
const optionSorts = [
  { label: "Online", value: "online" },
  { label: "Offline", value: "offline" },
  { label: "Coordinator", value: "coordinator" },
  { label: "All", value: "All" },
];

const optionContries = [
  { label: "Việt Nam", value: "vietnam" },
  { label: "한꿕", value: "korea" },
  { label: "All", value: "All" },
];

const optionCampus = [
  { label: "Campus 1", value: "campus1" },
  { label: "Campus 2", value: "campus2" },
  { label: "Campus 3", value: "campus3" },
  { label: "Campus 4", value: "campus4" },
  { label: "All", value: "All" },
];

export default function TeacherManagementList() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  let [dataRender, setDataRender] = useState(data);
  const navigate = useNavigate();

  const handleClickEdit = (teacherID) => {
    console.log("bam edit");
    navigate(`${url}/${teacherID}`);
  };

  const handleClickInactive = () => {
    let dataUpdate = [...dataRender];
    selectedRowKeys.map((key) => {
      console.log("key: ", key);
      console.log("dataUpdate: ", dataUpdate);
      let foundIndex = dataUpdate.findIndex((data) => data.key == key);

      console.log("foundIndex: ", foundIndex);

      if (foundIndex != -1) {
        dataUpdate[foundIndex].active = "N";
        dataUpdate[foundIndex].key += new Date().getTime().toString();
      }
    });
    console.log("dataUpdate: ", dataUpdate);

    setDataRender(dataUpdate);
    setSelectedRowKeys([]);
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
      dataIndex: "no",
      width: "5%",
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
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Country",
      dataIndex: "contry",
    },
    {
      title: "Campus",
      dataIndex: "campus",
    },
    {
      title: "Assign",
      dataIndex: "assign",
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
        return (
          <button onClick={() => handleClickEdit(record.no)}>
            <i className="fa fa-cog"></i>
          </button>
        );
      },
    },
  ];

  return (
    <div id="TeacherManagementList">
      <div className="flex flex-wrap justify-between items-center">
        <div className="action_left">
          <NavLink to={`${url}/0`}>
            <button className="px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
              Register
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
          <span className="font-bold mr-1 ml-4">Sort:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionSorts}
          />
          <span className="font-bold mr-1 ml-4">Country:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionContries}
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
          <button className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
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
