import { DatePicker, Input, Radio, Select } from "antd";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const optionProducts = [];
for (let i = 0; i < 15; i++) {
  optionProducts.push({ label: `Product ${i}`, value: `Product ${i}` });
}

const optionDays = [
  { label: "MON", value: "MON" },
  { label: "TUE", value: "TUE" },
  { label: "WED", value: "WED" },
  { label: "THUR", value: "THUR" },
  { label: "FRI", value: "FRI" },
];

const optionTimeSlots = [
  { label: "E Time 1", value: "E Time 1" },
  { label: "E Time 2", value: "E Time 2" },
  { label: "E Time 3", value: "E Time 3" },
  { label: "M Time 1", value: "M Time 1" },
  { label: "M Time 2", value: "M Time 2" },
];

const optionLevels = [];
for (let i = 0; i < 15; i++) {
  optionLevels.push({ label: `Level ${i}`, value: `Level ${i}` });
}

export default function ClassRegisterDetail() {
  const { somethingID } = useParams();
  const navigate = useNavigate();
  const [valueActivate, setValueActivate] = useState(1);
  const [dataMatchedStudent, setDataMatchedStudent] = useState([
    "Eun Ho smg220401",
    "Eun Ho1 smg220401",
  ]);

  return (
    <div id="ClassRegisterDetail">
      <p>somethingID: {somethingID}</p>
      <p>ClassRegisterDetail</p>
      <div className="flex flex-col items-center pt-2 pb-8 mb-4 border-b-2">
        <ul>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-40">*Online Class Name</p>
            <Input
              style={{
                width: 250,
              }}
            />
            <button className="w-20 btn ml-2 px-3 font-semibold rounded bg-yellow-800 text-gray-100 hover:bg-green-500 duration-500">
              Check
            </button>
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-40">Number of student</p>
            <Input
              style={{
                width: 250,
              }}
            />
          </li>
          <br /> <hr /> <br />
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-40">*Subject</p>
            <Input
              onChange={(e) => console.log("Input:", e.target.value)}
              style={{
                width: 250,
              }}
            />
          </li>
          <li className="flex my-2 items-center">
            <p className="font-bold mr-1 ml-4 w-40">*Online Teacher</p>
            <Input
              style={{
                width: 250,
              }}
            />
          </li>
          <li className="flex my-2 items-center">
            <p className="font-bold mr-1 ml-4 w-40">*Class Time</p>
            <div
              className="flex justify-between"
              style={{
                width: 250,
              }}
            >
              <div className="w-5/12">
                <p>Day</p>
                <Select
                  size={"small"}
                  onChange={(value) => console.log("Selected:", value)}
                  options={optionDays}
                  className="w-full"
                />
              </div>
              <div className="w-5/12">
                <p>Class Timeslot</p>
                <Select
                  size={"small"}
                  onChange={(value) => console.log("Selected:", value)}
                  options={optionTimeSlots}
                  className="w-full"
                />
              </div>
            </div>
          </li>
          <li className="flex">
            <p className="font-bold mr-1 ml-4 w-40">*Class Start Date</p>
            <DatePicker
              onChange={(date, dateString) => console.log(date, dateString)}
              style={{
                width: 250,
              }}
            />
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-40">*Initial Textbook</p>
            <Input
              onChange={(e) => console.log("Input:", e.target.value)}
              style={{
                width: 250,
              }}
            />
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-40">Current Status</p>
            <Input
              onChange={(e) => console.log("Input:", e.target.value)}
              style={{
                width: 250,
              }}
            />
          </li>
          <li className="flex my-2">
            <p className="font-bold mr-1 ml-4 w-40">Matched Students</p>
            <div>
              {dataMatchedStudent.map((item, index) => (
                <p
                  key={index}
                  className="px-4 py-1 mr-1 mb-1 border rounded-md"
                >
                  {item}
                </p>
              ))}
            </div>
          </li>
          <li className="text-center mt-2">
            <button
              onClick={() => alert("Click Save")}
              className="w-24 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
            >
              Save
            </button>
            <button
              onClick={() => navigate(-1)}
              className="w-24 px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3"
            >
              Cancel
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
