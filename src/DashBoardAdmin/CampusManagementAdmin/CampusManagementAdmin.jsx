import React, { useState } from "react";
import { Table } from "antd";
import { NavLink } from "react-router-dom";

const data = [];
for (let i = 1; i < 46; i++) {
  data.push({
    key: i,
    id: i + 1,
    "no.": `${i}`,
    campusName: "Yong Ho",
    indicated: `Yong Ho ${i}`,
    contact: "052-261-3399",
    signedDate: "2022-12-22",
  });
}

export default function CampusManagementAdmin() {
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
      title: "Campus Name",
      dataIndex: "campusName",
    },
    {
      title: "Indicated",
      dataIndex: "indicated",
    },
    {
      title: "Contact",
      dataIndex: "contact",
    },
    {
      title: "Signed Date",
      dataIndex: "signedDate",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <NavLink
            to={`/dash-board-admin/campus-management/actions-campus/${record.id}`}
          >
            <i className="fa fa-cog"></i>
          </NavLink>
        );
      },
    },
  ];

  return (
    <div id="CampusManagementAdmin">
      <div className="flex flex-wrap justify-between items-center">
        <div className="action_left">
          <NavLink to={"/dash-board-admin/campus-management/actions-campus/0"}>
            <button className="px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
              Add New Campus
            </button>
          </NavLink>
          <button className="px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3">
            Inactivate
          </button>
          <span>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
}
