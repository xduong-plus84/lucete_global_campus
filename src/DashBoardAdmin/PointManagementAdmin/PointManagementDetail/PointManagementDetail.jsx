import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Select, Checkbox } from "antd";
import { useState } from "react";

const optionStudents = [];
for (let i = 1; i < 36; i++) {
  optionStudents.push({
    label: "Student " + i,
    value: "student " + i,
  });
}

const optionCampus = [];
for (let i = 1; i < 10; i++) {
  optionCampus.push({
    label: "Campus " + i,
    value: "campus " + i,
  });
}

const optionSorts = [
  { label: "Online", value: "Online" },
  { label: "Coaching", value: "Coaching" },
  { label: "LAB", value: "LAB" },
  { label: "HW", value: "HW" },
];

const optionTeachers = [];
for (let i = 1; i < 10; i++) {
  optionTeachers.push({
    label: "Teacher " + i,
    value: "teacher " + i,
  });
}

const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};

export default function PointManagementDetail() {
  const navigate = useNavigate();
  let { teacherID } = useParams();
  let [sort, setSort] = useState("");

  const handleChangeSort = (value) => {
    setSort(value);
  };

  const handleSelectStudent = (value) => {
    console.log(`selected ${value}`);
  };

  const handleSelectStandard = (value) => {
    console.log(`Selected: ${value}`);
  };

  const handleChangeSubject = (value) => {
    console.log(`Selected: ${value}`);
  };

  const handleClickConfirm = () => {
    alert("Click Confirm");
  };

  const handleClickCancel = () => {
    alert("Click Cancel");
  };
  const handleClickList = () => {
    alert("Click List");
    navigate(-1);
  };

  const renderRole = () => {
    switch (sort) {
      case "Online": {
        return (
          <>
            <Checkbox.Group
              style={{
                width: 350,
              }}
              onChange={onChange}
            >
              <Checkbox value="Class Point">Class Point</Checkbox> <br />
              <Checkbox value="Best Speaker">Best Speaker</Checkbox> <br />
              <Checkbox value="Best Helper">Best Helper</Checkbox> <br />
            </Checkbox.Group>
          </>
        );
      }
      case "Coaching": {
        return (
          <>
            <Checkbox.Group
              style={{
                width: 350,
              }}
              onChange={onChange}
            >
              <Checkbox value="All done">All done</Checkbox> <br />
              <Checkbox value="Best Performance">Best Performance</Checkbox>
              <br />
            </Checkbox.Group>
          </>
        );
      }
      case "LAB": {
        return (
          <>
            <Checkbox.Group
              style={{
                width: 350,
              }}
              onChange={onChange}
            >
              <Checkbox value="All done">All done</Checkbox> <br />
              <Checkbox value="Best Performance">Best Performance</Checkbox>
              <br />
            </Checkbox.Group>
          </>
        );
      }

      default: {
        return (
          <div style={{ width: 350 }}>
            <span className="italic text-xs">*Choose Sort</span>
          </div>
        );
      }
    }
  };

  return (
    <div id="PointManagementDetail">
      <p className="text-red-500 text-xl">teacherID: {teacherID}</p>
      <ul className="flex flex-col justify-center items-center flex-wrap pt-4 pb-8 mb-4">
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-32">Sort</p>
          <Select
            size={"small"}
            onChange={handleChangeSort}
            style={{
              width: 350,
            }}
            options={optionSorts}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-32">Campus</p>
          <Select
            size={"small"}
            style={{
              width: 350,
            }}
            onChange={handleSelectStudent}
            options={optionCampus}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-32">Teacher</p>
          <Select
            size={"small"}
            onChange={handleSelectStandard}
            style={{
              width: 350,
            }}
            options={optionTeachers}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-32">Student</p>
          <Select
            mode="multiple"
            size={"small"}
            onChange={handleChangeSubject}
            style={{
              width: 350,
            }}
            options={optionStudents}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-32">Points</p>
          <Input
            size={"small"}
            style={{
              width: 350,
            }}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-32">Details</p>
          {renderRole()}
        </li>
      </ul>
      <div className="my-4 text-center">
        <button
          onClick={() => handleClickConfirm()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          Confirm
        </button>
        <button
          onClick={() => handleClickCancel()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          Cancel
        </button>
        <button
          onClick={() => handleClickList()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          List
        </button>
      </div>
    </div>
  );
}
