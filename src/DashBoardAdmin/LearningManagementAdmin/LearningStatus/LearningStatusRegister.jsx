import { DatePicker, Rate, Select } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

// import LearningStatusClassLAB from "./LearningStatusClass/LearningStatusClassLAB";

// action_filter
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
const onChangeDate = (date, dateString) => {
  console.log(date, dateString);
};

const optionClass = [
  { label: "Online", value: "online" },
  { label: "Coaching", value: "coaching" },
  { label: "LAB", value: "lab" },
  { label: "All", value: "All" },
];

const optionViews = [
  { label: "Grade", value: "Comment" },
  { label: "Comment", value: "commnet" },
  { label: "All", value: "All" },
];

export default function LearningStatusRegister() {
  let { id } = useParams();

  const renderTable = () => {
    return (
      <div
        id="LearningStatusRegister"
        className="container ml-12 py-12 text-gray-800 w-1/2"
      >
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-300">
                <th className="p-3 w-2/12 text-center">MON</th>
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
                <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
                  E4 M1A <br />
                  Reading
                </td>
                <td className="p-6 text-center border-r border-gray-400">
                  Coaching 1
                </td>
                <td className="p-6 text-center border-r border-gray-400">
                  E4 M1A <br />
                  Writing
                </td>
                <td className="p-6 text-center border-r border-gray-400">
                  Coaching
                </td>
                <td className="p-6 text-center"></td>
              </tr>
            </tbody>
            <tbody className="border-b-2 bg-gray-50 border-gray-300">
              <tr>
                <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
                  LAB
                </td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400">
                  LAB
                </td>
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
    <div>
      <p>Nãy vừa bấm vào id: {id}</p>
      <p>
        Learning Status
        <span className="px-4 border-2 rounded-md mx-2">Ji Inh Kim </span>
      </p>
      <div className="flex flex-wrap justify-around items-center mt-8">
        <span className="font-bold mr-1 ml-4">Campus:</span>
        <Select
          defaultValue="All"
          onChange={handleChange}
          style={{
            width: 200,
          }}
          options={optionClass}
        />
        <span className="font-bold mr-1 ml-4">Level:</span>
        <Select
          defaultValue="All"
          onChange={handleChange}
          style={{
            width: 160,
          }}
          options={optionViews}
        />
        <span className="font-bold mr-1 ml-4">Date:</span>
        <DatePicker
          onChange={onChangeDate}
          style={{
            width: 120,
          }}
        />
        <span className="mx-4">~</span>
        <DatePicker
          onChange={onChangeDate}
          style={{
            width: 120,
          }}
        />
        <span className="font-bold mr-1 ml-4">Activate:</span>
        <Select
          defaultValue="All"
          onChange={handleChange}
          style={{
            width: 70,
          }}
          options={[
            { label: "Y", value: "Yes" },
            { label: "N", value: "No" },
            { label: "All", value: "All" },
          ]}
        />
        <button
          type="button"
          className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
        >
          Search
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <div className="my-auto p-4 border-2 rounded-lg">
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Student name:</p>
            <p>{id}</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Campus:</p>
            <p>Nohyung</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Assigned:</p>
            <ul className="list-disc ml-4">
              <li>E4-MW1A Online</li>
              <li>E4 Package</li>
            </ul>
          </div>
        </div>
        {renderTable()}
      </div>
      <hr />
      <LearningStatusClassOnline />
      <hr />
      <LearningStatusClassCoaching />
      <hr />
      <LearningStatusClassLAB />
    </div>
  );
}

function LearningStatusClassOnline() {
  return (
    <div className="flex items-start justify-evenly my-8">
      <p className="mr-8 mt-4">Online</p>
      <div className="p-4 border-2 rounded-lg">
        <div className="flex my-2">
          <p className="font-bold mr-2 w-32">Date:</p>
          <p>2022.11.01</p>
        </div>
        <div className="flex my-2">
          <p className="font-bold mr-2 w-32">Subject:</p>
          <p>Reading</p>
        </div>
        <div className="flex my-2">
          <p className="font-bold mr-2 w-32">Teacher:</p>
          <p>Stephen</p>
        </div>
        <div className="flex my-2">
          <p className="font-bold mr-2 w-32">Status:</p>
          <p>E8-1 Unit 2</p>
        </div>
      </div>
      <div className="p-4 border-2 rounded-lg">
        <div className="flex my-2">
          <p className="font-bold mr-2 w-36">Preparation:</p>
          <Rate disabled defaultValue={3} />
        </div>
        <div className="flex my-2">
          <p className="font-bold mr-2 w-36">Attitude:</p>
          <Rate disabled defaultValue={2} />
        </div>
        <div className="flex my-2">
          <p className="font-bold mr-2 w-36">Participation:</p>
          <Rate disabled defaultValue={4} />
        </div>
        <div className="flex my-2">
          <p className="font-bold mr-2 w-36">Comment:</p>
          <p className="w-56">
            Ji In participated wonderful today. She had interesting opinion
            about open discussion~~
          </p>
        </div>
      </div>
    </div>
  );
}

function LearningStatusClassCoaching() {
  const renderLayoutCoaching1 = () => {
    return (
      <div className="flex items-start justify-evenly my-8">
        <p className="mr-8 mt-4">Coaching</p>
        <div className="p-4 border-2 rounded-lg">
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Date:</p>
            <p>2022.11.01</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Subject:</p>
            <p>Coaching 1</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Teacher:</p>
            <p>Erika</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Status:</p>
            <p>E8-1 Unit 2</p>
          </div>
        </div>
        <div className="p-4 border-2 rounded-lg">
          <div className="flex my-2">
            <p className="font-bold mr-2 w-36 mt-3">Undone Activity:</p>
            <ul className="flex flex-col items-center">
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">R/C Mark</span>
                <i className="w-12 text-gray-400 text-xs">10 mins</i>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">Textbook</span>
                <i className="w-12 text-gray-400 text-xs">10 mins</i>
              </li>
            </ul>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-36 mt-3">Test Score:</p>
            <ul className="flex flex-col items-center">
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">Writing Test</span>
                <i className="w-12 text-gray-400 text-xs">85</i>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">Translate Test</span>
                <i className="w-12 text-gray-400 text-xs">80</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const renderLayoutCoaching2 = () => {
    return (
      <div className="flex items-start justify-evenly my-8">
        <p className="mr-8 mt-4">Coaching</p>
        <div className="p-4 border-2 rounded-lg">
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Date:</p>
            <p>2022.11.01</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Subject:</p>
            <p>Coaching 1</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Teacher:</p>
            <p>Erika</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Status:</p>
            <p>E8-1 Unit 2</p>
          </div>
        </div>
        <div className="p-4 border-2 rounded-lg">
          <div className="flex my-2">
            <p className="font-bold mr-2 w-36 mt-3">Undone Activity:</p>
            <ul className="flex flex-col items-center">
              <li className="my-1 p-2 rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">All done</span>
                <i className="w-12 text-gray-400 text-xs"></i>
              </li>
            </ul>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-36 mt-3">Test Score:</p>
            <ul className="flex flex-col items-center">
              <li className="my-1 p-2 rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">None</span>
                <i className="w-12 text-gray-400 text-xs"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {renderLayoutCoaching1()}
      <hr />
      {renderLayoutCoaching2()}
    </div>
  );
}

function LearningStatusClassLAB() {
  const renderLayoutLAB1 = () => {
    return (
      <div className="flex items-start justify-evenly my-8">
        <p className="mr-8 mt-4">LAB</p>
        <div className="p-4 border-2 rounded-lg">
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Date:</p>
            <p>2022.11.01</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Subject:</p>
            <p>LAB 1</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Teacher:</p>
            <p>Linda</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Status:</p>
            <p>E8-1 Unit 2</p>
          </div>
        </div>
        <div className="p-4 border-2 rounded-lg">
          <div className="flex my-2">
            <p className="font-bold mr-2 w-36 mt-3">Undone Activity:</p>
            <ul className="flex flex-col items-center">
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">Voca Test</span>
                <i className="w-12 text-gray-400 text-xs">5 mins</i>
              </li>
            </ul>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-36 mt-3">Test Score:</p>
            <ul className="flex flex-col items-center">
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">
                  Voca <br />
                  E8 Test 13
                </span>
                <i className="w-12 text-gray-400 text-xs">80</i>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">
                  Wing <br />
                  E8 Unit 13
                </span>
                <i className="w-12 text-gray-400 text-xs">Submitted</i>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">
                  SUDA <br />
                  E8 5-1
                </span>
                <i className="w-12 text-gray-400 text-xs">Done</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const renderLayoutLAB2 = () => {
    return (
      <div className="flex items-start justify-evenly my-8">
        <p className="mr-8 mt-4">LAB</p>
        <div className="p-4 border-2 rounded-lg">
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Date:</p>
            <p>2022.11.01</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Subject:</p>
            <p>LAB 2</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Teacher:</p>
            <p>Linda</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Status:</p>
            <p>E8-1 Unit 2</p>
          </div>
        </div>
        <div className="p-4 border-2 rounded-lg">
          <div className="flex my-2">
            <p className="font-bold mr-2 w-36 mt-3">Undone Activity:</p>
            <ul className="flex flex-col items-center">
              <li className="my-1 p-2 rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">All Done</span>
                <i className="w-12 text-gray-400 text-xs"></i>
              </li>
            </ul>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-36 mt-3">Test Score:</p>
            <ul className="flex flex-col items-center">
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">
                  LAT <br />
                  E8 Test 12
                </span>
                <i className="w-12 text-gray-400 text-xs">90</i>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">
                  Grammar <br />
                  Inter Chap 5 unit 13
                </span>
                <i className="w-12 text-gray-400 text-xs">75</i>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2 w-40">
                  Grammar <br />
                  Inter Chap 5 unit 3 Unit Test
                </span>
                <i className="w-12 text-gray-400 text-xs">90</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {renderLayoutLAB1()}
      <hr />
      {renderLayoutLAB2()}
    </div>
  );
}
