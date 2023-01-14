import { Input, Select, DatePicker, Table } from "antd";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const { RangePicker } = DatePicker;

const url = "/campus-manager/order-management/history/detail";

const data = [];
for (let i = 1; i < 46; i++) {
  data.push({
    key: i,
    "no.": `${i}`,
    id: i + 1,
    sort: "Campus Manager",
    name: "Edward",
    gender: "F",
    country: "Viet Nam",
    timezone: `GMT +${i}`,
    startdate: "2022-12-22",
    resignation: "N",
  });
}

const optionsSort = [
  { label: "Product", value: "name1" },
  { label: "Package", value: "name2" },
  { label: "Textbook", value: "name3" },
  { label: "All", value: "All" },
];

const optionStandard = [
  { label: "Campus", value: "campus" },
  { label: "Fixed", value: "fixed" },
  { label: "All", value: "All" },
];

const optionStatus = [
  { label: "Order", value: "order" },
  { label: "Paid", value: "paid" },
  { label: "Complete", value: "complete" },
  { label: "Processing", value: "processing" },
  { label: "Shipped", value: "shipped" },
  { label: "Cleared customs", value: "clearedCustoms" },
  { label: "Delivery", value: "delivery" },
  { label: "Delivered", value: "delivered" },
  { label: "Canceled/Refunded", value: "canceledRefunded" },
  { label: "Return", value: "return" },
  { label: "Error", value: "error" },
  { label: "All", value: "All" },
];

const optionDate = [
  { label: "Order date", value: "orderDate" },
  { label: "Paid date", value: "paidDate" },
  { label: "All", value: "All" },
];

const columns = [
  {
    title: "No.",
    dataIndex: "no.",
  },
  {
    title: "Sort",
    dataIndex: "sort",
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
    title: "Country",
    dataIndex: "country",
  },
  {
    title: "Timezone",
    dataIndex: "timezone",
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
      console.log(record);
      return (
        <NavLink to={`${url}/${record.id}`}>
          <i className="fa fa-cog"></i>
        </NavLink>
      );
    },
  },
];

export default function ManagementHistory() {
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

  // action_filter
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
    alert(`Handle Onchange ${value}`);
  };

  const handleClickSearch = () => {
    alert("Handle Click Search");
  };

  const handleClickPrint = () => {
    alert("Handle Click Print");
  };

  const handleClickDownload = () => {
    alert("Handle Click Download");
  };

  return (
    <div id="ManagementHistory">
      <div className="flex flex-wrap items-end my-4">
        <div className="mb-1 mr-4">
          <span className="font-bold inline-block mr-4 w-16">Sort:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionsSort}
          />
        </div>
        <div className="mb-1 mr-4">
          <span className="font-bold inline-block mr-4 w-16">Standard:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionStandard}
          />
        </div>
        <div className="mb-1 mr-4">
          <span className="font-bold inline-block mr-4 w-16">Status:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionStatus}
          />
        </div>
        <div className="mb-1 mr-4">
          <span className="font-bold inline-block mr-4 w-16">Activate:</span>
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
      </div>

      <div className="flex flex-wrap items-end my-4">
        <div className="flex">
          <div className="mb-1 mr-4">
            <span className="font-bold inline-block mr-4 w-16">Search:</span>
            <Input
              placeholder="Keyword"
              style={{
                width: 420,
              }}
            />
          </div>
          <div className="mb-1 mr-4">
            <span className="font-bold inline-block mr-4 w-16">Date:</span>
            <Select
              defaultValue="All"
              onChange={handleChange}
              style={{
                width: 120,
              }}
              options={optionDate}
            />
            <RangePicker className="ml-2" />
          </div>
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
      <div className="mb-4">
        <button
          onClick={handleClickPrint}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 mr-4"
        >
          Print
        </button>
        <button
          onClick={handleClickDownload}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300"
        >
          Download
        </button>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
}
