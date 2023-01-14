import { Input, Select } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const { TextArea } = Input;

const optionSorts = [
  { label: "Product", value: "product" },
  { label: "Package", value: "package" },
  { label: "Textbook", value: "textbook" },
  { label: "New", value: "new" },
];

const optionNames = [
  { label: "E Basic Reading", value: "product1" },
  { label: "E Basic Reading", value: "product2" },
  { label: "E Basic Reading", value: "product3" },
  { label: "E Basic Reading", value: "product4" },
  { label: "E Basic Reading", value: "product5" },
];
const optionStandard = [
  { label: "Campus", value: "campus" },
  { label: "Fixed", value: "fixed" },
];

export default function OrderRegisterNewProduct() {
  let { productID } = useParams();
  const navigate = useNavigate();

  const handleClickSave = () => {
    console.log("click save");
    navigate(-1);
  };
  const handleClickCancel = () => {
    console.log("click cancel");
    navigate(-1);
  };

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
    <div id="OrderRegisterNewProduct">
      {/* <p>
        OrderRegisterNewProduct
        <br /> productID: {productID}
      </p> */}
      <div className="flex justify-center flex-wrap pt-4 pb-8 mb-4 border-b-2">
        <ul>
          <li className="flex my-3">
            <p className="font-bold mr-1 ml-4 w-32">*Sort</p>
            <Select
              size={"small"}
              onChange={handleSelectSort}
              style={{
                width: 250,
              }}
              options={optionSorts}
            />
          </li>
          <li className="flex my-3">
            <p className="font-bold mr-1 ml-4 w-32">*Name</p>
            <Select
              size={"small"}
              onChange={handleSelectProduct}
              style={{
                width: 250,
              }}
              options={optionNames}
            />
          </li>
          <li className="flex my-3">
            <p className="font-bold mr-1 ml-4 w-32">*Standard</p>
            <Select
              size={"small"}
              onChange={handleSelectStandard}
              style={{
                width: 250,
              }}
              options={optionStandard}
            />
          </li>
          <li className="flex my-3">
            <p className="font-bold mr-1 ml-4 w-32">Currency</p>
            <Input
              size={"small"}
              style={{
                width: 250,
              }}
              onChange={onChange}
            />
          </li>
          <li className="flex my-3">
            <p className="font-bold mr-1 ml-4 w-32">Total Class Time</p>
            <Input
              size={"small"}
              style={{
                width: 250,
              }}
              onChange={onChange}
            />
            <i className="text-gray-500 text-sm ml-2">min</i>
          </li>
          <li className="flex my-3">
            <p className="font-bold mr-1 ml-4 w-32">Product Image</p>
            <div>
              <div className="w-40 h-40 bg-pink-200 mb-2"></div>
              <input type="file" />
            </div>
          </li>
          <li className="flex my-3">
            <p className="font-bold mr-1 ml-4 w-32">Details</p>
            <TextArea
              showCount
              maxLength={100}
              style={{
                width: 250,
              }}
              onChange={onChange}
            />
          </li>
          <li className="ml-4">
            <button
              onClick={() => handleClickSave()}
              className="w-32 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
            >
              Save
            </button>
            <button
              onClick={() => handleClickCancel()}
              className="w-32 px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3"
            >
              Cancel
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
