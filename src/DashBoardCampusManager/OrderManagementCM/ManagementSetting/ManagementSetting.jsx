import React from "react";
import { InputNumber } from "antd";

export default function ManagementSetting() {
  const onChange = (value) => {
    console.log("changed", value);
  };

  const handleClickConfirm = () => {
    alert("Handle Click Confirm");
  };

  const handleClickCancel = () => {
    alert("Handle Click Cancel");
  };

  const handleClickList = () => {
    alert("Handle Click List");
  };

  return (
    <div id="ManagementSetting">
      <div className="mt-20 flex justify-center items-center">
        <span>Campus Fee </span>
        <InputNumber
          min={1}
          max={10}
          defaultValue={100}
          onChange={onChange}
          className="mx-4"
        />
        <span>Won per min</span>
      </div>
      <div className="mt-20 text-center">
        <button
          onClick={handleClickConfirm}
          className="w-32 px-3 py-1 mr-4 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300"
        >
          Confirm
        </button>
        <button
          onClick={handleClickCancel}
          className="w-32 px-3 py-1 mr-4 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300"
        >
          Cancel
        </button>
        <button
          onClick={handleClickList}
          className="w-32 px-3 py-1 mr-4 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300"
        >
          List
        </button>
      </div>
    </div>
  );
}
