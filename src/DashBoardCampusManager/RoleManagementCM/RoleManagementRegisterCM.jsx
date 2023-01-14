import { DatePicker, Input, Radio, Select } from "antd";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const { TextArea } = Input;

const optionRoles = [
  { label: "Coaching Teacher", value: "Coaching Teacher" },
  { label: "LAB Teacher", value: "LAB Teacher" },
];

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

export default function RoleManagementRegisterCM() {
  const navigate = useNavigate();
  let { somethingID } = useParams();

  let [roleRegister, setRoleRegister] = useState("Coaching Teacher");
  const handleChangeRole = (value) => {
    console.log(`Selected: ${value}`);
    setRoleRegister(value);
  };

  const handleClickSave = () => {
    alert("Click Save");
    navigate(-1);
  };
  const handleClickCancel = () => {
    alert("Click Cancel");
    navigate(-1);
  };
  const handleClickCheck = () => {
    alert("Click Check ID");
  };

  const handleClickReset = () => {
    alert("Click Reset PW");
  };

  return (
    <div id="RoleManagementRegisterCM">
      <p>somethingID: {somethingID}</p>
      <div
        id="RoleManagementRegisterCM"
        className="flex flex-wrap pt-2 pb-8 mb-4 border-b-2"
      >
        <div className="ml-12">
          <div className="w-40 h-40 bg-pink-200 mb-2"></div>
          <input type="file" />
        </div>
        <div className="registerRoleTwo">
          <ul>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-28">*Role</p>
              <Select
                defaultValue={roleRegister}
                size={"small"}
                onChange={handleChangeRole}
                style={{
                  width: 250,
                }}
                options={optionRoles}
              />
            </li>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-28">*Name</p>
              <Input
                size={"small"}
                style={{
                  width: 250,
                }}
              />
            </li>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-28">*ID</p>
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
              <p className="font-bold mr-1 ml-4 w-28">*Password</p>
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
              <p className="font-bold mr-1 ml-4 w-28">E-mail</p>
              <Input
                size={"small"}
                style={{
                  width: 250,
                }}
              />
            </li>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-28">Gender</p>
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
              <p className="font-bold mr-1 ml-4 w-28">Date of birth</p>
              <DatePicker
                size={"small"}
                onChange={onChange}
                style={{
                  width: 250,
                }}
              />
            </li>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-28">Coutry</p>
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
              <p className="font-bold mr-1 ml-4 w-28">Timezone</p>
              <Input
                size={"small"}
                style={{
                  width: 250,
                }}
              />
            </li>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-28">Start Date</p>
              <DatePicker
                size={"small"}
                onChange={onChange}
                style={{
                  width: 250,
                }}
              />
            </li>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-28">Resignation</p>
              <Select
                size={"small"}
                onChange={handleChange}
                style={{
                  width: 250,
                }}
                options={[
                  { label: "Y", value: "Yes" },
                  { label: "N", value: "No" },
                ]}
              />
            </li>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-28">Memo</p>
              <TextArea
                showCount
                maxLength={100}
                style={{
                  width: 250,
                }}
                onChange={onChange}
              />
            </li>
          </ul>
        </div>
        <div className="registerRoleThree ml-12">
          <ul>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-28">Resume</p>
              <input type="file" />
            </li>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-28">Certificate</p>
              <div id="addCertificate" className="flex flex-col">
                <input type="file" />
              </div>
              <button
                onClick={() => createFileUpload()}
                className="text-xl font-bold hover:text-green-600 duration-300"
              >
                <i class="fa fa-plus"></i>
              </button>
            </li>
            <li className="flex my-2">
              <p className="font-bold mr-1 ml-4 w-28">Contract</p>
              <input type="file" />
            </li>
          </ul>
          <div className="flex">
            <p className="font-bold mr-1 ml-4 w-28">Role</p>

            <ul>
              <li className="flex my-2">
                <p className="w-40">Class timetable</p>
                <Radio.Group onChange={onChange} defaultValue={1}>
                  <Radio value={1}>Y</Radio>
                  <Radio value={0}>N</Radio>
                </Radio.Group>
              </li>
              <li className="flex my-2">
                <p className="w-40">Point management</p>
                <Radio.Group onChange={onChange} defaultValue={1}>
                  <Radio value={1}>Y</Radio>
                  <Radio value={0}>N</Radio>
                </Radio.Group>
              </li>
              <li className="flex my-2">
                <p className="w-40">Archive</p>
                <Radio.Group onChange={onChange} defaultValue={1}>
                  <Radio value={1}>Y</Radio>
                  <Radio value={0}>N</Radio>
                </Radio.Group>
              </li>
              <li className="flex my-2">
                <p className="w-40">Message</p>
                <Radio.Group onChange={onChange} defaultValue={1}>
                  <Radio value={1}>Y</Radio>
                  <Radio value={0}>N</Radio>
                </Radio.Group>
              </li>
              <li className="flex my-2">
                <p className="w-40">Study Plannder</p>
                <Radio.Group onChange={onChange} defaultValue={1}>
                  <Radio value={1}>Y</Radio>
                  <Radio value={0}>N</Radio>
                </Radio.Group>
              </li>
            </ul>
          </div>
          <div className="flex">
            <p className="font-bold mr-1 ml-4 w-28">Activate</p>
            <Radio.Group onChange={onChange} defaultValue={1} className="ml-40">
              <Radio value={1}>Y</Radio>
              <Radio value={0}>N</Radio>
            </Radio.Group>
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
      </div>
    </div>
  );
}
function createFileUpload() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "file");
  document.getElementById("addCertificate").appendChild(x);
  console.log("an function createFileUpload");
}
