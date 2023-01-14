import React, { useState } from "react";
import { DatePicker, Input, Select, Table } from "antd";
import { useNavigate } from "react-router-dom";

const data = [];
for (let i = 1; i < 5; i++) {
  data.push({
    key: i,
    id: i,
    no: `${i}`,
    orderNo: `${i % 2 ? "256798" : "256790"}`,
    orderDate: `${i % 2 ? "2022.12.05" : "2022.11.30"}`,
    sort: `${i % 2 ? "Product" : "Textbook"}`,
    standard: `${i % 2 ? "Campus" : "Fixed"}`,
    campus: `${i % 2 ? "-" : "Yonho"}`,
    product: `${i % 2 ? "E Level Basic" : "E8-1 Reading"}`,
    amount: `${i % 2 ? "1" : "2"}`,
    price: `${i % 2 ? "396,000" : "17,000"}`,
    method: `${i % 2 ? "Card" : "Transfer"}`,
    paidDate: `${i % 2 ? "2022.12.06" : "2022.12.01"}`,
    status: `${i % 2 ? "Complete" : "Processing"}`,
  });
}

// action_filter

const optionSorts = [
  { label: "Product", value: "product" },
  { label: "Package", value: "package" },
  { label: "Textbook", value: "textbook" },
  { label: "All", value: "All" },
];

const optionStandard = [
  { label: "Campus Standard", value: "register-campus-standard" },
  { label: "Fixed Standard", value: "register-fixed-standard" },
];

const optionCampus = [
  { label: "Campus 1", value: "campus1" },
  { label: "Campus 2", value: "campus2" },
  { label: "Campus 3", value: "campus3" },
  { label: "Campus 4", value: "campus4" },
  { label: "All", value: "All" },
];
const optionStatus = [
  { label: "Order", value: "order" },
  { label: "Paid", value: "paid" },
  { label: "Complete", value: "complete" },
  { label: "Processing", value: "processing" },
  { label: "Shipped", value: "shipped" },
  { label: "Cleared Customs", value: "clearedCustoms" },
  { label: "Delivery", value: "delivery" },
  { label: "Delivered", value: "delivered" },
  { label: "Canceled", value: "canceled" },
  { label: "Refunded", value: "refunded" },
  { label: "Return", value: "return" },
  { label: "Error", value: "error" },
  { label: "All", value: "All" },
];
const optionLevel = [
  { label: "Level 1", value: "level1" },
  { label: "Level 2", value: "level2" },
  { label: "Level 3", value: "level3" },
  { label: "All", value: "All" },
];

const optionDate = [
  { label: "Order date", value: "orderDate" },
  { label: "Paid date", value: "paidDate" },
  { label: "All", value: "All" },
];

export default function OrderManagementHistory() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate = useNavigate();

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const handleClickEdit = (maHocSinh) => {
    console.log("bam edit");
    navigate(
      `/dash-board-admin/order-management/history/order-detail/${maHocSinh}`
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

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      width: "5%",
    },
    {
      title: "Order No",
      dataIndex: "orderNo",
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
    },
    {
      title: "Sort",
      dataIndex: "sort",
    },
    {
      title: "Standard",
      dataIndex: "standard",
    },
    {
      title: "Campus",
      dataIndex: "campus",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Price (won)",
      dataIndex: "price",
    },
    {
      title: "Method",
      dataIndex: "method",
    },
    {
      title: "Paid Date",
      dataIndex: "paidDate",
    },
    {
      title: "Status",
      dataIndex: "status",
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
    <div id="OrderManagementHistory">
      <div className="flex flex-wrap justify-between items-center my-4">
        <div className="action_top my-4 flex justify-around items-center w-full">
          <span className="font-bold mr-1">Sort:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionSorts}
          />
          <span className="font-bold mr-1 ml-4">Standard:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionStandard}
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
          <span className="font-bold mr-1 ml-4">Status:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionStatus}
          />
          <span className="font-bold mr-1 ml-4">Level:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionLevel}
          />
        </div>
        <div className="action_bottom flex justify-around items-center w-full">
          <div>
            <span className="font-bold mr-1 ml-4">Search:</span>
            <Input
              style={{
                width: 200,
              }}
            />
          </div>
          <div>
            <span className="font-bold mr-1">Date:</span>
            <Select
              defaultValue="All"
              onChange={handleChange}
              style={{
                width: 100,
              }}
              options={optionDate}
              className="mx-2"
            />
            <DatePicker
              onChange={onChangeDate}
              style={{
                width: 120,
              }}
              className="mx-2"
            />
            <span>~</span>
            <DatePicker
              onChange={onChangeDate}
              style={{
                width: 120,
              }}
              className="mx-2"
            />
          </div>
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
