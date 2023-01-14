import { DatePicker, Select, Table } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const data = [];
for (let i = 1; i < 4; i++) {
  data.push({
    key: i,
    id: i,
    no: `${i}`,
    sort: `${i % 2 ? "Class Board" : "Announcement"}`,
    writer: `${i % 2 ? "Simone" : "Soo"}`,
    class: `${i % 2 ? "E8-MW1A" : "M14-T1B"}`,
    title: `${i % 2 ? "Best Speaker of Semester" : "[Unit 3&4] Homework"}`,
    view: `${i % 2 ? i * 25 : i * 35}`,
    date: `${i % 2 ? "2022.12.06 14:15:09" : "2022.12.01 13:10:00"}`,
  });
}

const optionSorts = [
  { label: "Class Board", value: "Class Board" },
  { label: "Announcement", value: "Announcement" },
];

const optionLevels = [
  { label: "Level 1", value: "Level1" },
  { label: "Level 2", value: "Level2" },
  { label: "Level 3", value: "Level3" },
  { label: "Level 4", value: "Class4" },
  { label: "All", value: "All" },
];

export default function ArchiveClassMaterialList() {
  const navigate = useNavigate();

  const handleClickEdit = (somethingID) => {
    alert(`Click Edit ID: ${somethingID}`);
    navigate(
      `/dash-board-admin/archive/class-material/class-material-detail/${somethingID}`
    );
  };

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleClickPrint = () => {
    alert("Click Print");
  };

  const handleClickWrite = () => {
    alert("Click Write");
  };

  const handleClickSearch = () => {
    alert("Click Search");
  };
  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      width: "5%",
    },
    {
      title: "Sort",
      dataIndex: "sort",
    },
    {
      title: "Writer",
      dataIndex: "writer",
    },
    {
      title: "Class",
      dataIndex: "class",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "View",
      dataIndex: "view",
    },
    {
      title: "Date",
      dataIndex: "date",
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
    <div id="ArchiveClassMaterialList">
      <div className="flex justify-around items-center my-8 w-full">
        <div>
          <span className="font-bold mr-1">Sort:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionSorts}
          />
        </div>
        <div>
          <span className="font-bold mr-1 ml-4">Level:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionLevels}
          />
        </div>
        <div>
          <span className="font-bold mr-1">Date:</span>
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
        <div>
          <button
            onClick={() => handleClickSearch()}
            className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Search
          </button>
        </div>
      </div>

      <div>
        <Table columns={columns} dataSource={data} />
        <button
          onClick={() => handleClickPrint()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          Print
        </button>
        <button
          onClick={() => handleClickWrite()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          Write
        </button>
      </div>
    </div>
  );
}
