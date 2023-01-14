import { Input, Select } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const optionLevels = [
  { label: "Ekong", value: "Level 1" },
  { label: "E Level", value: "Level 2" },
  { label: "M11", value: "M11" },
  { label: "M12", value: "M12" },
  { label: "M13", value: "M13" },
  { label: "M14", value: "M14" },
  { label: "M15", value: "M15" },
];

const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};

export default function AdminRegisterCourse() {
  const navigate = useNavigate();
  let { courseID } = useParams();
  console.log("courseID: ", courseID);

  const handleClickSave = () => {
    navigate(-1);
  };
  const handleClickCancel = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center pt-2 pb-8 mb-4 border-b-2">
      <ul>
        <li className="flex my-2">
          <p className="font-bold mr-1 ml-4 w-28">*Level</p>
          <Select
            defaultValue=""
            onChange={handleChange}
            style={{
              width: 200,
            }}
            options={optionLevels}
          />
        </li>
        <li className="flex my-2">
          <p className="font-bold mr-1 ml-4 w-28">*Course</p>
          <Input
            style={{
              width: 200,
            }}
          />
        </li>
        <li className="flex">
          <p className="font-bold mr-1 ml-4 w-28">*Unit</p>
          <Input
            style={{
              width: 200,
            }}
          />
        </li>
        <li className="text-right mt-2">
          <button
            onClick={() => handleClickSave()}
            className="w-24 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Save
          </button>
          <button
            onClick={() => handleClickCancel()}
            className="w-24 px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3"
          >
            Cancel
          </button>
        </li>
        <span className="text-2xl text-red-500">courseID: {courseID}</span>
      </ul>
    </div>
  );
}
