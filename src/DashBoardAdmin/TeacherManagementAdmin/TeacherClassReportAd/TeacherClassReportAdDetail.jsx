import { DatePicker, Rate } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TeacherClassReportAdDetail() {
  const navigate = useNavigate();
  const { reportID } = useParams();

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleClickSearch = () => {
    console.log("click search");
    // setSearch((pre) => !pre);
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

  const renderReport = () => {
    return (
      <div
        id="TeacherClassReportAdDetail"
        className="flex items-start justify-evenly py-12 border-b-2"
      >
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
  };

  return (
    <div id="TeacherClassReportAdDetail">
      <p>reportID: {reportID}</p>
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
      {renderReport()}
      {renderReport()}
      <div className="my-4">
        <button
          onClick={() => handleClickList()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          List
        </button>
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
      </div>
    </div>
  );
}
