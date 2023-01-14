import { Input, Radio, Select } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import RegisterPackageMatchedActivities from "./RegisterPackageMatchedActivities/RegisterPackageMatchedActivities";
const { TextArea } = Input;

const optionLevels = [
  { label: "Level 1", value: "Level 1" },
  { label: "Level 2", value: "Level 2" },
  { label: "Level 3", value: "Level 3" },
  { label: "Level 4", value: "Level 4" },
];

const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default function AdminRegisterPackage() {
  const navigate = useNavigate();
  let { packageID } = useParams();
  console.log("packageID: ", packageID);

  const handleClickSave = () => {
    navigate(-1);
  };
  const handleClickCancel = () => {
    navigate(-1);
  };

  return (
    <div id="AdminRegisterPackage" className="pt-2 pb-8 mb-4 border-b-2">
      <div className="flex">
        <div className="registerProduct__col1">
          <ul>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-32">*Package Name</p>
              <Input
                size={"small"}
                style={{
                  width: 250,
                }}
              />
            </li>
            <li className="flex my-2 items-center">
              <p className="font-bold mr-1 ml-4 w-32">*Level</p>
              <div
                className="flex justify-between"
                style={{
                  width: 250,
                }}
              >
                <div className="w-5/12">
                  <p>Start Level</p>
                  <Select
                    size={"small"}
                    onChange={handleChange}
                    options={optionLevels}
                    className="w-full"
                  />
                </div>
                <div className="w-5/12">
                  <p>End Level</p>
                  <Select
                    size={"small"}
                    onChange={handleChange}
                    options={optionLevels}
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-32">Details</p>
              <TextArea
                showCount
                maxLength={100}
                style={{
                  width: 250,
                }}
                onChange={onChange}
              />
            </li>

            <li className="flex">
              <p className="font-bold mr-1 ml-4 w-32">Activate</p>
              <Radio.Group onChange={onChange}>
                <Radio value={1}>Y</Radio>
                <Radio value={2}>N</Radio>
              </Radio.Group>
            </li>
            <span className="text-2xl text-red-500">
              packageID: {packageID}
            </span>
          </ul>
        </div>
        <div className="registerProduct__col2 ml-8 grow">
          <RegisterPackageMatchedActivities />
        </div>
      </div>
      <div className="text-center mt-2">
        <button
          onClick={() => handleClickSave()}
          className="w-32 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
        >
          Save
        </button>
        <button
          onClick={() => handleClickCancel()}
          className="w-32 px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
