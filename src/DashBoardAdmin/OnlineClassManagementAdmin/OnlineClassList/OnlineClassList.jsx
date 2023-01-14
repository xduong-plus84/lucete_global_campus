import { Input, Select } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import OnlineClassListTable from "./OnlineClassListTable";
import OnlineClassListTableClassList from "./OnlineClassListTableClassList";
const { TextArea } = Input;

const optionSorts = [
  { label: "Product", value: "product" },
  { label: "Package", value: "package" },
  { label: "Textbook", value: "textbook" },
  { label: "New", value: "new" },
];

const optionProducts = [
  { label: "Product 1", value: "product1" },
  { label: "Product 2", value: "product2" },
  { label: "Product 3", value: "product3" },
  { label: "Product 4", value: "product4" },
  { label: "Product 5", value: "product5" },
];
const optionStandard = [
  { label: "Campus", value: "campus" },
  { label: "Fixed", value: "fixed" },
];

export default function OnlineClassList() {
  const handleSelectSort = (value) => {
    console.log(`Selected: ${value}`);
  };

  const handleSelectProduct = (value) => {
    console.log(`Selected: ${value}`);
  };

  const handleSelectStandard = (value) => {
    console.log(`Selected: ${value}`);
  };

  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div id="OnlineClassList">
      <div className="flex justify-start flex-wrap pt-4 pb-8 mb-4 border-b-2">
        <p className="font-semibold text-xl mx-8">Filter List</p>
        <ul>
          <li className="flex mb-3">
            <p className="font-bold mr-1 ml-4 w-32">Level</p>
            <Select
              size={"small"}
              onChange={handleSelectSort}
              style={{
                width: 250,
              }}
              options={optionSorts}
            />
          </li>
          <li className="flex mb-3">
            <p className="font-bold mr-1 ml-4 w-32">Time Slot</p>
            <Select
              size={"small"}
              onChange={handleSelectProduct}
              style={{
                width: 250,
              }}
              options={optionProducts}
            />
          </li>
          <li className="flex mb-3">
            <p className="font-bold mr-1 ml-4 w-32">Subject</p>
            <Select
              size={"small"}
              onChange={handleSelectStandard}
              style={{
                width: 250,
              }}
              options={optionStandard}
            />
          </li>
          <li className="flex mb-3">
            <p className="font-bold mr-1 ml-4 w-32">Textbook</p>
            <Input
              size={"small"}
              style={{
                width: 250,
              }}
              onChange={onChange}
            />
          </li>
          <li className="flex mb-3">
            <p className="font-bold mr-1 ml-4 w-32">Online Teacher</p>
            <Input
              size={"small"}
              style={{
                width: 250,
              }}
              onChange={onChange}
            />
          </li>
          <li className="flex mb-3">
            <p className="font-bold mr-1 ml-4 w-32">Available</p>
            <Select
              size={"small"}
              onChange={handleSelectStandard}
              style={{
                width: 250,
              }}
              options={optionStandard}
            />
            <button
              onClick={() => alert("Click Search")}
              className="w-20 btn ml-2 px-3 font-semibold rounded bg-green-600 text-gray-100 hover:bg-green-500 duration-500"
            >
              Search
            </button>
          </li>
        </ul>
        <OnlineClassListTable />
        <OnlineClassListTableClassList />
      </div>
    </div>
  );
}
