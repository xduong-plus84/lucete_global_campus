import { Checkbox, Input, Radio, Select } from "antd";
import React from "react";

const options = [];
for (let i = 1; i < 36; i++) {
  options.push({
    label: "Student " + i,
    value: "Student " + i,
  });
}

const optionCampus = [
  {
    value: "campus1",
    label: "Campus 1",
  },
  {
    value: "campus2",
    label: "Campus 2",
  },
  {
    value: "campus3",
    label: "Campus 3",
  },
  {
    value: "campus4",
    label: "Campus 4",
  },
];

const optionStudentLevel = [
  {
    value: "sproutA",
    label: "Sprout A",
  },
  {
    value: "sproutB",
    label: "Sprout B",
  },
  {
    value: "bud",
    label: "Bud",
  },
];

export default function EnrollmentApplication() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const renderTable = () => {
    return (
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
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
            <tbody className="border-b-2 bg-gray-50 border-gray-300">
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
            <tbody className="border-b-2 bg-gray-50 border-gray-300">
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
            <tbody className="border-b-2 bg-gray-50 border-gray-300">
              <tr>
                <td className="p-6 text-center border-r border-gray-400">
                  16:05 ~ 17:15
                </td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center"></td>
              </tr>
            </tbody>
            <tbody className="border-b-2 bg-gray-50 border-gray-300">
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
        </div>
      </div>
    );
  };
  return (
    <div id="EnrollmentApplication" className="mt-4">
      <div className="">
        <table className="w-1/2 mx-auto p-6 text-base text-left whitespace-nowrap mb-4">
          <thead className="border-b-2 border-gray-200">
            <tr>
              <th className="w-2/12 p-2">Content</th>
              <th className="w-2/12 p-2">Details</th>
              <th className="w-2/12 p-2">Activate</th>
            </tr>
          </thead>
          <tbody className="border-b-2 border-gray-200">
            <tr>
              <td className="py-2">Campus</td>
              <td className="py-2">
                <Input
                  style={{
                    width: "90%",
                  }}
                />
                {/* <Select
                  style={{
                    width: "90%",
                  }}
                  onChange={handleChange}
                  options={optionStudentLevel}
                /> */}
              </td>
              <td className="py-2">
                <Radio.Group onChange={onChange}>
                  <Radio value={1}>Y</Radio>
                  <Radio value={2}>N</Radio>
                </Radio.Group>
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 border-gray-200">
            <tr className="p-2">
              <td className="py-2">Student Name</td>
              <td className="py-2">
                <Select
                  mode="tags"
                  allowClear
                  style={{
                    width: "90%",
                  }}
                  onChange={handleChange}
                  options={options}
                />
              </td>
              <td className="py-2">
                <Radio.Group onChange={onChange}>
                  <Radio value={1}>Y</Radio>
                  <Radio value={2}>N</Radio>
                </Radio.Group>
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 border-gray-200">
            <tr>
              <td className="py-2">Student Level</td>
              <td className="py-2">
                <Select
                  style={{
                    width: "90%",
                  }}
                  onChange={handleChange}
                  options={optionStudentLevel}
                />
              </td>
              <td className="py-2">
                <Radio.Group onChange={onChange}>
                  <Radio value={1}>Y</Radio>
                  <Radio value={2}>N</Radio>
                </Radio.Group>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="ml-4">
        <Checkbox onChange={onChange}>View Schedule</Checkbox>
        <button className="w-24 px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-gray-700 hover:border-transparent duration-300 mx-3">
          View
        </button>
      </div>
      {renderTable()}
      <div>
        <button className="w-24 px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-4">
          Delete
        </button>
        <button className="w-24 px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-gray-700 hover:border-transparent duration-300 mx-3">
          Preview
        </button>
        <button className="w-24 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
          Confirm
        </button>
      </div>
    </div>
  );
}
