import { DatePicker, Rate } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TeacherClassFeedbackAdDetail() {
  const navigate = useNavigate();
  const { feedbackID } = useParams();

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleClickSearch = () => {
    console.log("click search");
  };

  const handleClickPrint = () => {
    console.log("click print");
  };

  const handleClickDownload = () => {
    console.log("click download");
  };
  const handleClickList = () => {
    console.log("click list");
    navigate(-1);
  };

  const renderOverall = () => {
    return (
      <ul className="text-right">
        <li>
          <i className="underline">2022.11.01-2022.11.30</i>
        </li>
        <li className="flex items-baseline justify-between my-2">
          <span className="mr-4">Average</span>
          <Rate disabled defaultValue={3} />
        </li>
        <li className="flex justify-between my-2">
          <span className="mr-4">Percentage</span>
          <span>96</span>
        </li>
      </ul>
    );
  };

  const renderReport = () => {
    return (
      <div className="flex items-start justify-evenly border rounded-xl my-4 py-4">
        <div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Date:</p>
            <p>2022.11.01</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Student:</p>
            <p>Ji In Kim</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Satisfaction:</p>
            <Rate disabled defaultValue={3} />
          </div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-32">Unit:</p>
            <p>E8-1 Unit5</p>
          </div>
        </div>
        <div>
          <div className="flex my-2">
            <p className="font-bold mr-2 w-36">Comment:</p>
            <p className="w-56">Teacher unit 5 was hard</p>
          </div>
          <div className="flex flex-wrap my-2 w-96">
            <p className="mr-1 mb-1 py-1 px-3 border rounded-full text-center">
              Hard to understand
            </p>
            <p className="mr-1 mb-1 py-1 px-3 border rounded-full text-center">
              Low Participation
            </p>
            <p className="mr-1 mb-1 py-1 px-3 border rounded-full text-center">
              Speaking Portion Low
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div id="TeacherClassFeedbackAdDetail">
      <p>feedbackID:{feedbackID}</p>
      <div className="flex justify-around">
        <div>
          <span className="w-32 font-bold mr-1">Teacher:</span>
          <span>Simone</span>
        </div>
        <div>
          <span className="w-32 font-bold mr-1">Class:</span>
          <span>E8-MW1A</span>
        </div>
        <div>
          <span className="w-32 font-bold mr-1">Student:</span>
          <span>Ji In</span>
        </div>
        <div>
          <span className="font-bold mr-1">Date:</span>
          <DatePicker
            onChange={onChangeDate}
            style={{
              width: 120,
            }}
            className="mx-2"
          />
          <span>~</span>
          <DatePicker
            onChange={onChangeDate}
            style={{
              width: 120,
            }}
            className="mx-2"
          />
        </div>
        <div>
          <button
            onClick={() => handleClickSearch()}
            className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-fit ml-auto my-4">{renderOverall()}</div>
      <div className="my-4 w-fit ml-auto">
        <button
          onClick={() => handleClickPrint()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          Print
        </button>
        <button
          onClick={() => handleClickDownload()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          Download
        </button>
        <button
          onClick={() => handleClickList()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          List
        </button>
      </div>
      <div className="w-2/3 mx-auto">{renderReport()}</div>
      <div className="w-2/3 mx-auto">{renderReport()}</div>
    </div>
  );
}
