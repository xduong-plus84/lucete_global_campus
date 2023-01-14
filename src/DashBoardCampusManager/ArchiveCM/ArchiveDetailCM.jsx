import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Select, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
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
  { label: "Class Board", value: "Clas Board" },
  { label: "Announcement", value: "Announcement" },
];

const optionClasses = [];
for (let i = 1; i < 10; i++) {
  optionClasses.push({
    label: "Class " + i,
    value: "Class " + i,
  });
}

const optionTeachers = [];
for (let i = 1; i < 10; i++) {
  optionTeachers.push({
    label: "Teacher " + i,
    value: "teacher " + i,
  });
}

export default function ArchiveDetailCM() {
  const { somethingID } = useParams();
  const [value, setValue] = useState(1);

  const navigate = useNavigate();
  const handleSelectStudent = (value) => {
    console.log(`selected ${value}`);
  };

  const handleSelectStandard = (value) => {
    console.log(`Selected: ${value}`);
  };

  const onChange = (e) => {
    setValue(e.target.value);
    console.log("e.target.value:", e.target.value);
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

  return (
    <div id="ArchiveDetailCM">
      <p>somethingID: {somethingID}</p>
      <ul className="flex flex-col justify-center items-center flex-wrap pt-4 pb-8 mb-4">
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-36">Writer</p>
          <Input
            style={{
              width: 350,
            }}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-36">Sort</p>
          <Select
            size={"small"}
            style={{
              width: 350,
            }}
            onChange={handleSelectStudent}
            options={optionSorts}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-36">Class</p>
          <Select
            size={"small"}
            onChange={handleSelectStandard}
            style={{
              width: 350,
            }}
            options={optionClasses}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-36">Title</p>
          <Input
            style={{
              width: 350,
            }}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-36">Active Comment</p>
          <Radio.Group onChange={onChange} style={{ width: 350 }} value={value}>
            <Radio value={1}>Y</Radio>
            <Radio value={0}>N</Radio>
          </Radio.Group>
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-36">Content</p>
          <TextArea
            style={{
              width: 350,
            }}
            onChange={onChange}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-36">Attachment</p>
          <input type="file" style={{ width: 350 }} />
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
