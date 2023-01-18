import { DatePicker, Select, Table } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const url =
  "/dash-board-admin/teacher-management/class-report/class-report-detail";

const data = [];
for (let i = 1; i < 5; i++) {
  data.push({
    key: i,
    id: i,
    no: `${i}`,
    teacher: `${i % 2 ? "Simone" : "Robyn"}`,
    class: `${i % 2 ? "E8-MW1A" : "M14-T1B"}`,
    student: `${i % 2 ? "Ji in" : "Na Yeon"}`,
    campus: `${i % 2 ? "Jeju" : "Yongho"}`,
    status: `${i % 2 ? "Done" : "Undone"}`,
    date: `${i % 2 ? "2022.12.06" : "2022.12.01"}`,
  });
}

const optionTeachers = [
  { label: "Teacher 1", value: "teacher1" },
  { label: "Teacher 2", value: "teacher2" },
  { label: "Teacher 3", value: "teacher3" },
  { label: "All", value: "All" },
];

const optionClasses = [
  { label: "Class 1", value: "class1" },
  { label: "Class 2", value: "class2" },
  { label: "Class 3", value: "class3" },
];

const optionCampus = [
  { label: "Campus 1", value: "campus1" },
  { label: "Campus 2", value: "campus2" },
  { label: "Campus 3", value: "campus3" },
  { label: "Campus 4", value: "campus4" },
  { label: "All", value: "All" },
];

export default function TeacherClassReportAd() {
  const navigate = useNavigate();

  const handleClickEdit = (teacherID) => {
    console.log("bam edit");
    navigate(`${url}/${teacherID}`);
  };

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleClickPrint = () => {
    console.log("click print");
  };

  const handleClickDownload = () => {
    console.log("click download");
  };

  const handleClickSearch = () => {
    console.log("click search");
    navigate(`${url}/0`);
    // setSearch((pre) => !pre);
  };
  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      width: "5%",
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
      title: "Student",
      dataIndex: "student",
    },
    {
      title: "Campus",
      dataIndex: "campus",
    },
    {
      title: "Status",
      dataIndex: "status",
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
    <div id="TeacherClassReportAd">
      <div className="flex justify-between items-center my-8 w-full">
        <div>
          <span className="font-bold mr-1">Teacher:</span>
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
          <span className="font-bold mr-1 ml-4">Class:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionClasses}
          />
        </div>
        <div>
          <span className="font-bold mr-1 ml-4">Campus:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionCampus}
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
        <div>
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
    </div>
  );
}
