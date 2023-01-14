import { Checkbox, InputNumber, Modal, Select } from "antd";
import React from "react";
import { useState } from "react";

const optionLevel = [
  { label: "Level 1", value: "level1" },
  { label: "Level 2", value: "level2" },
  { label: "Level 3", value: "level3" },
  { label: "All", value: "All" },
];

const optionsSort = [
  { label: "Product", value: "name1" },
  { label: "Package", value: "name2" },
  { label: "Textbook", value: "name3" },
  { label: "All", value: "All" },
];

let totalFee = 0;

export default function ManagementOrder() {
  // action_filter
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
    alert(`Handle Onchange ${value}`);
  };

  const handleClickSearch = () => {
    alert("Handle Click Search");
  };

  return (
    <div id="ManagementOrder">
      <div className="flex flex-wrap justify-around items-end my-4">
        <div className="mb-1 mr-4">
          <span className="font-bold inline-block mr-4">Sort:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionsSort}
          />
        </div>
        <div className="mb-1 mr-4">
          <span className="font-bold inline-block mr-4">Start Level:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionLevel}
          />
        </div>
        <div className="mb-1 mr-4">
          <span className="font-bold inline-block mr-4">End Level:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={optionLevel}
          />
        </div>
        <div className="mb-1 mr-4">
          <span className="font-bold inline-block mr-4">Activate:</span>
          <Select
            defaultValue="All"
            onChange={handleChange}
            style={{
              width: 160,
            }}
            options={[
              { label: "Y", value: "Y" },
              { label: "N", value: "N" },
              { label: "All", value: "All" },
            ]}
          />
        </div>
        <div className="mb-1 mr-4">
          <button
            onClick={() => handleClickSearch()}
            className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <SortComponent />
      </div>
      <div>
        <SelectStudent />
      </div>
    </div>
  );
}

function SortComponent() {
  const dataProduct = [
    {
      id: "product1",
      name: "Sprout ~ E8 Reading",
      totalTime: "55 mins",
      campusFee: 150000,
    },
    {
      id: "product2",
      name: "Sprout ~ E8 Reading",
      totalTime: "55 mins",
      campusFee: 150000,
    },
  ];

  const dataPackage = [
    {
      id: "package1",
      name: "E Level Basic",
      totalTime: "205 mins",
      campusFee: 350000,
    },
    {
      id: "package2",
      name: "E Level Basic",
      totalTime: "205 mins",
      campusFee: 350000,
    },
  ];

  const dataTextbook = [
    { id: "textbook1", name: "E8-1", total: 35000 },
    { id: "textbook2", name: "E8-1", total: 35000 },
  ];

  const handleClickCheckbox = (e, id) => {
    console.log("id: ", id);
    console.log("e: ", e.target);
    console.log("d");
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
    totalFee = 0;

    let arrProduct = [];
    let arrPackage = [];
    let arrTextbook = [];
    checkedValues.forEach((idCheckbox) => {
      // get array product
      let foundProduct = dataProduct.find(
        (eleProduct) => eleProduct.id === idCheckbox
      );
      foundProduct && arrProduct.push(foundProduct);

      // get array package
      let foundPackage = dataPackage.find(
        (elePackage) => elePackage.id === idCheckbox
      );
      foundPackage && arrPackage.push(foundPackage);

      // get array textbook
      let foundTextbook = dataTextbook.find(
        (eleTextbook) => eleTextbook.id === idCheckbox
      );
      foundTextbook && arrTextbook.push(foundTextbook);
    });

    // caculator totalFee
    arrProduct.forEach((eleProduct) => (totalFee += eleProduct.campusFee));
    arrPackage.forEach((elePackage) => (totalFee += elePackage.campusFee));
    arrTextbook.forEach((eleTextbook) => (totalFee += eleTextbook.total));
    console.log({ totalFee });
  };

  return (
    <div className="flex">
      <Checkbox.Group className="w-full" onChange={onChange}>
        <div className="w-1/3">
          {dataProduct.map((item, index) => {
            let { id, name, totalTime, campusFee } = item;
            return (
              <ul key={index} className="h-44 border p-4 rounded-lg m-8">
                <li className="mb-2 text-right">
                  <Checkbox value={id} />
                </li>
                <li className="mb-2 flex justify-around items-center">
                  <span className="w-40">Product</span>
                  <span className="border rounded-md grow py-1 text-center">
                    {name}
                  </span>
                </li>
                <li className="mb-2 flex justify-around items-center">
                  <span className="w-40">Total Time</span>
                  <span className="grow py-1 text-center">{totalTime}</span>
                </li>
                <li className="mb-2 flex justify-around items-center">
                  <span className="w-40">Campus Fee</span>
                  <span className="grow py-1 text-center">{campusFee}</span>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="w-1/3">
          {dataPackage.map((item, index) => {
            let { id, name, totalTime, campusFee } = item;
            return (
              <ul key={index} className="h-44 border p-4 rounded-lg m-8">
                <li className="mb-2 text-right">
                  <Checkbox value={id} />
                </li>
                <li className="mb-2 flex justify-around items-center">
                  <span className="w-40">Package</span>
                  <span className="border rounded-md grow py-1 text-center">
                    {name}
                  </span>
                </li>
                <li className="mb-2 flex justify-around items-center">
                  <span className="w-40">Total Time</span>
                  <span className="grow py-1 text-center">{totalTime}</span>
                </li>
                <li className="mb-2 flex justify-around items-center">
                  <span className="w-40">Campus Fee</span>
                  <span className="grow py-1 text-center">{campusFee}</span>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="w-1/3">
          {dataTextbook.map((item, index) => {
            let { id, name, total } = item;
            return (
              <ul key={index} className="h-44 border p-4 rounded-lg m-8">
                <li className="mb-2 text-right">
                  <Checkbox value={id} />
                </li>
                <li className="mb-2 flex justify-around items-center">
                  <span className="w-40">Textbook</span>
                  <span className="border rounded-md grow py-1 text-center">
                    {name}
                  </span>
                </li>
                <li className="mb-2 flex justify-around items-center">
                  <span className="w-40">Total</span>
                  <span className="grow py-1 text-center">{total}</span>
                </li>
              </ul>
            );
          })}
        </div>
      </Checkbox.Group>
    </div>
  );
}

function SelectStudent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const options = [];
  for (let i = 1; i < 36; i++) {
    options.push({
      label: `Student ${i}`,
      value: `Student ${i}`,
    });
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (value) => {
    console.log("changed", value);
    totalFee = (1 - value) * totalFee;
  };

  return (
    <>
      <button
        onClick={showModal}
        className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
      >
        Add To Student
      </button>

      <Modal
        title="Add to Student"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <button
            key={"btnCancel"}
            onClick={handleCancel}
            className="ml-3 px-3 py-1 font-semibold border rounded border-transparent text-gray-700 hover:text-gray-50 hover:bg-red-500 duration-300"
          >
            Cancel
          </button>,
          <button
            key={"btnOk"}
            onClick={handleOk}
            className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Submit
          </button>,
        ]}
      >
        <div className="mb-4">
          <Select
            mode="multiple"
            allowClear
            placeholder="Please select student"
            onChange={handleChange}
            options={options}
            className="w-full"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span>Discount</span>
          <InputNumber
            defaultValue={100}
            min={0}
            max={100}
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace("%", "")}
            onChange={onChange}
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span>Total Fee</span>
          <span className="font-bold text-2xl">
            {totalFee.toLocaleString()} won
          </span>
        </div>
      </Modal>
    </>
  );
}
