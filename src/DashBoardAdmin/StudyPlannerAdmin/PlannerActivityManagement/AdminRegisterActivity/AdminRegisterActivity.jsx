import { Input, Radio, Select } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const optionClasses = [
  { label: "Coaching", value: "Level 1" },
  { label: "LAB", value: "Level 2" },
  { label: "Level 3", value: "Level 3" },
  { label: "Level 4", value: "Level 4" },
];

const optionProducts = [];
for (let i = 0; i < 15; i++) {
  optionProducts.push({ label: `Product ${i}`, value: `Product ${i}` });
}

const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default function AdminRegisterActivity() {
  const navigate = useNavigate();
  let { activityID } = useParams();
  console.log("activityID: ", activityID);

  const handleClickSave = () => {
    navigate(-1);
  };
  const handleClickCancel = () => {
    navigate(-1);
  };

  return (
    <div
      id="AdminRegisterActivity"
      className="flex flex-col items-center pt-2 pb-8 mb-4 border-b-2"
    >
      <ul>
        <li className="flex my-2">
          <p className="font-bold mr-1 ml-4 w-28">*Activity Name</p>
          <Input
            style={{
              width: 250,
            }}
          />
        </li>
        <li className="flex my-2">
          <p className="font-bold mr-1 ml-4 w-28">
            *Time <span className="font-normal">(min)</span>
          </p>
          <Input
            style={{
              width: 250,
            }}
          />
        </li>
        <li className="flex my-2 items-center">
          <p className="font-bold mr-1 ml-4 w-28">*Class</p>
          <Select
            onChange={handleChange}
            options={optionClasses}
            style={{
              width: 250,
            }}
          />
        </li>
        <li className="flex my-2 items-center">
          <p className="font-bold mr-1 ml-4 w-28">Product</p>
          <Select
            onChange={handleChange}
            options={optionProducts}
            style={{
              width: 250,
            }}
          />
        </li>
        <li className="flex">
          <p className="font-bold mr-1 ml-4 w-28">Activate</p>
          <Radio.Group onChange={onChange}>
            <Radio value={1}>Y</Radio>
            <Radio value={2}>N</Radio>
          </Radio.Group>
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
        <span className="text-2xl text-red-500">activityID: {activityID}</span>
      </ul>
    </div>
  );
}
