import { DatePicker, Select, Table } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const url = "/campus-manager/point-management/detail";

const data = [];
for (let i = 1; i < 4; i++) {
  data.push({
    key: i,
    id: i,
    no: `${i}`,
    name: `${i % 2 ? "Ji In Kim" : "Jule"}`,
    sort: `${i % 2 ? "Online Class" : "LAB"}`,
    teacher: `${i % 2 ? "Simone" : "Soo"}`,
    class: `${i % 2 ? "E8-MW1A" : "M14-T1B"}`,
    detail: `${i % 2 ? "Best Speaker" : "Dication 100"}`,
    point: `${i % 2 ? i + 5 : i}`,
    date: `${i % 2 ? "2022.12.06 14:15:09" : "2022.12.01 13:10:00"}`,
  });
}

const optionSorts = [
  { label: "Online", value: "online" },
  { label: "Offline", value: "offline" },
  { label: "Coordinator", value: "coordinator" },
  { label: "All", value: "All" },
];

const optionNames = [
  { label: "Name 1", value: "name1" },
  { label: "Name 2", value: "name2" },
  { label: "Name 3", value: "name3" },
  { label: "Name 4", value: "name4" },
  { label: "All", value: "All" },
];
const optionTeachers = [
  { label: "Teacher 1", value: "teacher1" },
  { label: "Teacher 2", value: "teacher2" },
  { label: "Teacher 3", value: "teacher3" },
  { label: "All", value: "All" },
];

export default function PointManagementCM() {
  const navigate = useNavigate();

  const handleClickEdit = (teacherID) => {
    alert(`Click Edit ID: ${teacherID}`);
    navigate(`${url}/${teacherID}`);
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

  const handleClickDownload = () => {
    alert("Click Dowload");
  };

  const handleClickSearch = () => {
    alert("Click Search");
    // navigate(
    //   `/dash-board-admin/teacher-management/class-feedback/class-report-detail/1`
    // );
    // setSearch((pre) => !pre);
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
      title: "Teacher",
      dataIndex: "teacher",
    },
    {
      title: "Class",
      dataIndex: "class",
    },
    {
      title: "Detail",
      dataIndex: "detail",
    },
    {
      title: "Point",
      dataIndex: "point",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "View",
      key: "view",
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
    <div id="PointManagementCM">
      <div className="flex justify-between items-center my-8 w-full">
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
          <span className="font-bold mr-1 ml-4">Name:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionNames}
          />
        </div>
        <div>
          <span className="font-bold mr-1 ml-4">Teacher:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionTeachers}
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
          onClick={() => handleClickDownload()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          Download
        </button>
      </div>
    </div>
  );
}
