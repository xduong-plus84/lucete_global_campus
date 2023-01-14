import { Input, Radio } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default function CampusManagementRegister() {
  const navigate = useNavigate();

  let { someThingID } = useParams();
  console.log("someThingID: ", someThingID);

  const handleClickSave = () => {
    navigate(-1);
  };
  const handleClickCancel = () => {
    navigate(-1);
  };
  return (
    <div
      id="CampusManagementRegister"
      className="flex justify-center pt-2 pb-8 mb-4 border-b-2"
    >
      <ul>
        <li className="flex my-2">
          <p className="font-bold mr-1 ml-4 w-32">*Campus Name</p>
          <Input
            style={{
              width: 250,
            }}
          />
          <button className="w-20 ml-2 px-3 font-semibold rounded bg-yellow-800 text-gray-100 hover:bg-green-500 duration-500">
            Check
          </button>
        </li>
        <li className="flex my-2">
          <p className="font-bold mr-1 ml-4 w-32">*Indicated</p>
          <Input
            style={{
              width: 250,
            }}
          />
        </li>
        <li className="flex my-2">
          <p className="font-bold mr-1 ml-4 w-32">Contact</p>
          <Input
            style={{
              width: 250,
            }}
          />
        </li>
        <li className="flex my-2">
          <p className="font-bold mr-1 ml-4 w-32">Activate</p>
          <Radio.Group onChange={onChange}>
            <Radio value={1}>Y</Radio>
            <Radio value={2}>N</Radio>
          </Radio.Group>
        </li>
        <li className="flex my-2">
          <button
            onClick={() => handleClickSave()}
            className="ml-4 w-32 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Save
          </button>
          <button
            onClick={() => handleClickCancel()}
            className="w-32 px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3"
          >
            Cancel
          </button>
        </li>
      </ul>
    </div>
  );
}
