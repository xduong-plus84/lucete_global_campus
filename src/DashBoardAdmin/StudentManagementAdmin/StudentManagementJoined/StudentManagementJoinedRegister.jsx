import { DatePicker, Input, Select } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const { TextArea } = Input;

const optionCountries = [
  { label: "Vietnam", value: "Vietnam" },
  { label: "Korea", value: "Korea" },
  { label: "Japan", value: "Japan" },
  { label: "Canada", value: "Canada" },
  { label: "Philippines", value: "Philippines" },
];

const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default function StudentManagementJoinedRegister() {
  const navigate = useNavigate();
  let { roleID } = useParams();
  console.log("roleID: ", roleID);

  const handleClickCheck = () => {
    alert("Hanlde Click Check");
  };

  const handleClickReset = () => {
    alert("Hanlde Click Reset");
  };

  const handleClickSave = () => {
    alert("Hanlde Click Save");
    navigate(-1);
  };
  const handleClickCancel = () => {
    alert("Hanlde Click Cancel");
    navigate(-1);
  };

  return (
    <div
      id="StudentManagementJoinedRegister"
      className="flex justify-center flex-wrap pt-4 pb-8 mb-4 border-b-2"
    >
      <div className="ml-12">
        <div className="w-40 h-40 bg-pink-200 mb-2"></div>
        <input type="file" />
      </div>
      <div className="registerRoleTwo">
        <ul>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-32">*Name</p>
            <Input
              size={"small"}
              style={{
                width: 250,
              }}
            />
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-32">*ID</p>
            <Input
              size={"small"}
              style={{
                width: 250,
              }}
            />
            <button
              onClick={() => handleClickCheck()}
              className="w-20 btn ml-2 px-3 font-semibold rounded bg-yellow-800 text-gray-100 hover:bg-green-500 duration-500"
            >
              Check
            </button>
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-32">*Password</p>
            <Input
              size={"small"}
              style={{
                width: 250,
              }}
            />
            <button
              onClick={() => handleClickReset()}
              className="w-20 btn ml-2 px-3 font-semibold rounded bg-gray-800 text-gray-100 hover:bg-green-500 duration-500"
            >
              Reset
            </button>
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-32">E-mail</p>
            <Input
              size={"small"}
              style={{
                width: 250,
              }}
            />
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-32">Gender</p>
            <Select
              size={"small"}
              onChange={handleChange}
              style={{
                width: 250,
              }}
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
                { label: "Other", value: "Other" },
              ]}
            />
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-32">Date of birth</p>
            <DatePicker
              size={"small"}
              onChange={onChange}
              style={{
                width: 250,
              }}
            />
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-32">Coutry</p>
            <Select
              size={"small"}
              onChange={handleChange}
              style={{
                width: 250,
              }}
              options={optionCountries}
            />
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-32">Timezone</p>
            <Input
              size={"small"}
              style={{
                width: 250,
              }}
            />
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-32">Joined Date</p>
            <DatePicker
              size={"small"}
              onChange={onChange}
              style={{
                width: 250,
              }}
            />
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-32">Withdrawal</p>
            <DatePicker
              size={"small"}
              onChange={onChange}
              style={{
                width: 250,
              }}
            />
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-32">Introduction</p>
            <TextArea
              showCount
              maxLength={100}
              style={{
                width: 250,
              }}
              onChange={onChange}
            />
          </li>
          <li className="ml-4">
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
          </li>
        </ul>
      </div>
    </div>
  );
}
