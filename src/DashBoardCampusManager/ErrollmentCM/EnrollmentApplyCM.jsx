import React from "react";
import { useParams } from "react-router-dom";
import { Checkbox, DatePicker, Select } from "antd";

const optionStudent = [];
for (let i = 1; i < 36; i++) {
  optionStudent.push({
    value: "Student " + i,
    label: "Student " + i,
  });
}

const optionLevel = [];
for (let i = 1; i < 36; i++) {
  optionLevel.push({
    value: "Level " + i,
    label: "Level " + i,
  });
}

const optionSubject = [];
for (let i = 1; i < 36; i++) {
  optionSubject.push({
    value: "Subject " + i,
    label: "Subject " + i,
  });
}

const handleChange = (value) => {
  console.log(`${value}`);
};
const handleChangeDate = (date, dateString) => {
  console.log(dateString);
};

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
  alert(`Checkbox = ${e.target.checked} `);
};

const handleClickView = () => {
  alert("Handle Click View");
};

const handleSubmit = () => {
  alert("Handle Click Submit");
};

export default function ErrollmentApplyCM() {
  let { somethingID } = useParams();

  return (
    <div id="ErrollmentApplyCM" className="mb-4">
      <p className="mb-4">somethingID: {somethingID}</p>
      <div className="flex items-start mb-4">
        <span className="w-28 mr-2">Student List:</span>
        <Select
          mode="tags"
          className="w-80"
          placeholder="Student 1"
          onChange={handleChange}
          options={optionStudent}
        />
      </div>
      <div className="flex items-start mb-4">
        <span className="w-28 mr-2">Level:</span>
        <Select
          className="w-80"
          placeholder="Level 1"
          onChange={handleChange}
          options={optionLevel}
        />
      </div>
      <div className="flex items-start mb-4">
        <span className="w-28 mr-2">Subject:</span>
        <Select
          mode="tags"
          className="w-80"
          placeholder="Subject 1"
          onChange={handleChange}
          options={optionSubject}
        />
      </div>
      <div className="flex items-start mb-4">
        <span className="w-28 mr-2">Class Start:</span>
        <DatePicker className="w-80" onChange={handleChangeDate} />
      </div>
      <br /> <hr /> <br />
      <div>
        <EnrollmentApplyTable1CM />
      </div>
      <div>
        <EnrollmentApplyTable2CM />
      </div>
      <div>
        <StudentList />
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

// component table avaible class
const dataTimeSlot = [
  {
    name: "14:50 ~ 16:00",
    mon: "",
    tue: "",
    wed: "Simone",
    thur: "",
    fri: "",
  },
  {
    name: "16:05 ~ 17:15",
    mon: "Lerato",
    tue: "",
    wed: "",
    thur: "Robyn",
    fri: "",
  },
  {
    name: "17:40 ~ 18:50",
    mon: "",
    tue: "",
    wed: "",
    thur: "",
    fri: "",
  },
  {
    name: "17:40 ~ 19:00",
    mon: "",
    tue: "",
    wed: "",
    thur: "",
    fri: "",
  },
  {
    name: "19:05 ~ 20:25",
    mon: "",
    tue: "",
    wed: "",
    thur: "",
    fri: "",
  },
];

function EnrollmentApplyTable1CM() {
  const renderTableStudentList = () => {
    return (
      <div className="container mx-auto text-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-300 divide-x-2">
                <th className="p-3 text-center"></th>
                <th className="p-3 text-center">MON</th>
                <th className="p-3 text-center">TUE</th>
                <th className="p-3 text-center">WED</th>
                <th className="p-3 text-center">THUR</th>
                <th className="p-3 text-center">FRI</th>
              </tr>
            </thead>
            <tbody className="border-b-2 bg-gray-50 border-gray-300 divide-y-2">
              {dataTimeSlot.map((item, index) => {
                return (
                  <tr key={index} className="divide-x-2">
                    <td className="p-6 w-40 text-center">{item.name}</td>
                    <td
                      className={`p-6 w-40 text-center ${
                        item.mon !== "" ? "bg-blue-400" : undefined
                      }`}
                    >
                      {item.mon}
                    </td>
                    <td
                      className={`p-6 w-40 text-center ${
                        item.tue !== "" ? "bg-blue-400" : undefined
                      }`}
                    >
                      {item.tue}
                    </td>
                    <td
                      className={`p-6 w-40 text-center ${
                        item.wed !== "" ? "bg-blue-400" : undefined
                      }`}
                    >
                      {item.wed}
                    </td>
                    <td
                      className={`p-6 w-40 text-center ${
                        item.thur !== "" ? "bg-blue-400" : undefined
                      }`}
                    >
                      {item.thur}
                    </td>
                    <td
                      className={`p-6 w-40 text-center ${
                        item.fri !== "" ? "bg-blue-400" : undefined
                      }`}
                    >
                      {item.fri}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <p className="font-bold">Available Class</p>
        <div>
          <Checkbox onChange={onChange}>Join current class</Checkbox>
          <button
            onClick={() => handleClickView()}
            className="ml-3 px-3 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            View
          </button>
        </div>
      </div>
      {renderTableStudentList()}
    </div>
  );
}

// component table select
const dataSelectClass = [
  {
    day: "Thursday",
    classTime: "16:05~17:15",
    teacher: "Robyn",
    subject: "E Level Reading",
    classStartDate: "2023-01-09",
  },
];
function EnrollmentApplyTable2CM() {
  return (
    <div className="my-4">
      <p className="font-bold my-4">Select</p>
      <div className="container mx-auto text-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-300 divide-x-2">
                <th className="p-3 text-center">Day</th>
                <th className="p-3 text-center">Class Time</th>
                <th className="p-3 text-center">Teacher</th>
                <th className="p-3 text-center">Subject</th>
                <th className="p-3 text-center">Class Start Date</th>
              </tr>
            </thead>
            <tbody className="border-b-2 bg-gray-50 border-gray-300 divide-y-2">
              {dataSelectClass.map((item, index) => {
                return (
                  <tr key={index} className="divide-x-2">
                    <td className="p-6 w-40 text-center">{item.day}</td>
                    <td className="p-6 w-40 text-center">{item.classTime}</td>
                    <td className="p-6 w-40 text-center">{item.teacher}</td>
                    <td className="p-6 w-40 text-center">{item.subject}</td>
                    <td className="p-6 w-40 text-center">
                      {item.classStartDate}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// component student List
const dataStudent = [
  "Eun Hoa smg220401",
  "Eun Hob smg220401",
  "Eun Hoc smg220401",
  "Eun Hod smg220401",
  "Eun Hoe smg220401",
];
function StudentList() {
  return (
    <div className="my-4">
      <p className="font-bold my-4">Student List</p>
      {dataStudent.map((item, index) => {
        return (
          <span key={index} className="border rounded m-1 px-4 py-2">
            {item}
          </span>
        );
      })}
    </div>
  );
}
