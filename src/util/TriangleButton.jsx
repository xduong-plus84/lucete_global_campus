import React from "react";
import { useNavigate } from "react-router-dom";

export default function TriangleButton() {
  const navigate = useNavigate();
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
  return (
    <div className="my-4 text-center">
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
  );
}
