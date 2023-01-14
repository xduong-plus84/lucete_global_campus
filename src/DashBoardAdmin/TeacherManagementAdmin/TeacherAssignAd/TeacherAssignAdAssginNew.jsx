import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DatePicker, Input, Select } from "antd";

const optionStudent = [];
for (let i = 10; i < 36; i++) {
  optionStudent.push({
    label: "Student " + i,
    value: "student " + i,
  });
}

const optionCampus = [];
for (let i = 10; i < 36; i++) {
  optionCampus.push({
    label: "Campus " + i,
    value: "campus " + i,
  });
}

const optionLevel = [
  { label: "Level 1", value: "level1" },
  { label: "Level 2", value: "level2" },
];

const optionSubject = [
  { label: "Reading", value: "reading" },
  { label: "Speaking", value: "speaking" },
  { label: "Writing", value: "writing" },
  { label: "Listening", value: "listening" },
];

export default function TeacherAssignAdAssginNew() {
  const navigate = useNavigate();
  let { assignID } = useParams();
  console.log("assignID: ", assignID);

  const handleSelectCampus = (value) => {
    console.log(`Selected: ${value}`);
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

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleClickView = () => {
    console.log("click view");
  };

  const handleClickSelect = () => {
    console.log("click view");
  };

  const handleClickConfirm = () => {
    console.log("click confirm");
    navigate(-1);
  };

  const handleClickCancel = () => {
    console.log("click cancel");
    navigate(-1);
  };

  const renderTable = () => {
    return (
      <table className="w-full p-6 text-left whitespace-nowrap">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-3 w-2/12 text-center"></th>
            <th className="p-3 w-2/12 text-center border-l border-gray-400">
              MON
            </th>
            <th className="p-3 w-2/12 text-center border-l border-gray-400">
              TUE
            </th>
            <th className="p-3 w-2/12 text-center border-l border-gray-400">
              WED
            </th>
            <th className="p-3 w-2/12 text-center border-l border-gray-400">
              THUR
            </th>
            <th className="p-3 w-2/12 text-center border-l border-gray-400">
              FRI
            </th>
          </tr>
        </thead>
        <tbody className="border-b-2 bg-gray-50 border-gray-300 font-semibold">
          <tr>
            <td className="p-6 text-center border-r border-gray-400">
              14:50 ~ 16:00
            </td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
              Simone
            </td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center"></td>
          </tr>
        </tbody>
        <tbody className="border-b-2 bg-gray-50 border-gray-300 font-semibold">
          <tr>
            <td className="p-6 text-center border-r border-gray-400">
              16:05 ~ 17:15
            </td>
            <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
              Lerato
            </td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
              Robyn
            </td>
            <td className="p-6 text-center"></td>
          </tr>
        </tbody>
        <tbody className="border-b-2 bg-gray-50 border-gray-300 font-semibold">
          <tr>
            <td className="p-6 text-center border-r border-gray-400">
              17:40 ~ 19:00
            </td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center"></td>
          </tr>
        </tbody>
        <tbody className="border-b-2 bg-gray-50 border-gray-300 font-semibold">
          <tr>
            <td className="p-6 text-center border-r border-gray-400">
              19:05 ~ 20:25
            </td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center border-r border-gray-400"></td>
            <td className="p-6 text-center"></td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div id="TeacherAssignAdAssginNew">
      <p>assignID: {assignID}</p>
      <ul className="flex flex-col justify-center items-center flex-wrap pt-4 pb-8 mb-4">
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-32">Campus</p>
          <Select
            mode="multiple"
            size={"small"}
            onChange={handleSelectCampus}
            style={{
              width: 350,
            }}
            options={optionCampus}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-32">Select Student</p>
          <Select
            mode="multiple"
            size={"small"}
            style={{
              width: 350,
            }}
            onChange={handleSelectStudent}
            options={optionStudent}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-32">Level</p>
          <Select
            size={"small"}
            onChange={handleSelectStandard}
            style={{
              width: 350,
            }}
            options={optionLevel}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-32">Subject</p>
          <Select
            size={"small"}
            onChange={handleChangeSubject}
            style={{
              width: 350,
            }}
            options={optionSubject}
          />
        </li>
        <li className="flex my-3">
          <p className="font-bold mr-1 ml-4 w-32">Class Start</p>
          <DatePicker
            onChange={onChangeDate}
            style={{
              width: 350,
            }}
          />
        </li>
        <li className="w-2/3"></li>
      </ul>
      <ul className="list-disc w-2/3 mx-auto">
        <li>
          View Schedule
          <button
            onClick={() => handleClickView()}
            className="w-32 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
          >
            View
          </button>
        </li>
        {renderTable()}
        <div className="text-right">
          <button
            onClick={() => handleClickSelect()}
            className="w-32 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-blue-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Select
          </button>
        </div>
      </ul>

      <ul className="w-2/3 mx-auto">
        <li className="my-2">
          <span className="inline-block w-32 font-semibold">Class Name</span>
          <span>E8-W1A Reading</span>
        </li>
        <li className="my-2">
          <span className="inline-block w-32 font-semibold">
            Online Teacher
          </span>
          <span>Simone</span>
        </li>
        <li className="my-2">
          <span className="inline-block w-32 font-semibold">
            Online Class Time
          </span>
          <span>Wed 14:50 ~ 16:00</span>
        </li>
        <li className="my-2">
          <span className="inline-block w-32 font-semibold">Student List</span>
          <span>Brian - </span>
          <span>Min gyu</span>
        </li>
        <li className="my-2">
          <span className="inline-block w-32 font-semibold">Class issue</span>
          <span>Students need detail feedback</span>
        </li>
      </ul>
      <div className="text-center border-b-2">
        <button
          onClick={() => handleClickConfirm()}
          className="w-32 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
        >
          Confirm
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
