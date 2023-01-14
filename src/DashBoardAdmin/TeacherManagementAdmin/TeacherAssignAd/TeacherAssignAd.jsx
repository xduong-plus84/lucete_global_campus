import React, { useState } from "react";
import { Input, Select, Table } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import TeacherAssignTable from "./TeacherAssignTable";

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    no: `${i}`,
    sort: "Online",
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

export default function TeacherAssignAd() {
  const navigate = useNavigate();

  const handleClickView = (teacherID) => {
    console.log("Click View");
    navigate(
      `/dash-board-admin/teacher-management/management/management-detail/${teacherID}`
    );
  };

  const handleClickSearch = () => {
    console.log("Click Search");
  };
  const handleClickAssignNew = () => {
    console.log("Click Assgin New");
    navigate(`/dash-board-admin/teacher-management/assign/assign-detail/0`);
  };
  const handleClicInactivate = () => {
    console.log("Click Inactivate");
  };

  return (
    <div id="TeacherAssignAd">
      <div className="flex flex-wrap justify-between items-center my-4">
        <div>
          <span className="font-bold mr-1 ml-4">Level:</span>
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
          <span className="font-bold mr-1 ml-4">Campus:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionContries}
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
            options={optionCampus}
          />
        </div>
        <div>
          <span className="font-bold mr-1 ml-4">Search:</span>
          <Input
            style={{
              width: 200,
            }}
          />
        </div>
        <div>
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
        </div>

        <button
          onClick={() => handleClickSearch()}
          className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
        >
          Search
        </button>
      </div>
      <div className="action">
        <button
          onClick={() => handleClickAssignNew()}
          className="px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
        >
          Assign New
        </button>
        <button
          onClick={() => handleClicInactivate()}
          className="px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3"
        >
          Inactivate
        </button>
      </div>
      <TeacherAssignTable />
    </div>
  );
}
