import { DatePicker, Select } from "antd";
import { useFormik } from "formik";
import moment from "moment/moment";
import React from "react";
import { useState } from "react";

const optionValue = [
  {
    value: "Sunday",
    label: "Sunday",
  },
  {
    value: "National Holiday",
    label: "National Holiday",
  },
];

const dataListDayOff = [];

export default function OnlineClassAcademicCalendar() {
  let [listDayOff, setListDayOff] = useState(dataListDayOff);

  const formik = useFormik({
    initialValues: {
      date: "",
      value: "",
    },
    onSubmit: (data) => {
      console.log("data: ", data);
      data.date != "" && data.value != "" && listDayOff.push(data);

      setListDayOff([...listDayOff]);
    },
  });

  const handleChangeDate = (date) => {
    formik.setFieldValue("date", date);
  };
  const handleChangeValue = (value) => {
    formik.setFieldValue("value", value);
  };

  const hanldeClickDelete = (date) => {
    console.log("date: ", date);
    const index = listDayOff.findIndex((item) => item.date === date);
    listDayOff.splice(index, 1);

    setListDayOff([...listDayOff]);
  };

  const renderListDayOff = () => {
    return (
      <div className="container mt-2 mx-auto text-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full py-2 px-6 text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-300 divide-x-2">
                <th className="p-3 text-center w-40">Date</th>
                <th className="p-3 text-center w-48">Value</th>
                <th className="p-3 text-center w-40">Class off</th>
              </tr>
            </thead>
            <tbody className="border-b-2 bg-gray-50 border-gray-300 divide-y-2">
              {listDayOff.map((item, index) => {
                console.log("item: ", item);
                return (
                  <tr key={index} className="divide-x-2">
                    <td className="py-2 px-6 text-center">{item.date}</td>
                    <td className="py-2 px-6 text-center">{item.value}</td>
                    <td className="py-2 px-6 text-center">
                      <button
                        onClick={() => hanldeClickDelete(item.date)}
                        className="hover:text-red-500 duration-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div id="OnlineClassAcademicCalendar" className="flex my-4">
      <div className="w-1/2">
        <h1 className="font-bold">Day off</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-2">
            <span className="inline-block w-28 mr-2">Choose a date: </span>
            <DatePicker
              onChange={(date, dateString) => handleChangeDate(dateString)}
              style={{ width: 150 }}
            />
          </div>
          <div className="mb-2">
            <span className="inline-block w-28 mr-2">Value:</span>
            <Select
              onChange={(value) => handleChangeValue(value)}
              options={optionValue}
              style={{ width: 150 }}
            />
          </div>
          <button className="mt-2 px-3 py-2 font-semibold rounded bg-green-600 text-gray-100 hover:bg-green-500 duration-500">
            Add day off
          </button>
        </form>
      </div>
      <div>
        <h1 className="font-bold">List day off</h1>
        {renderListDayOff()}
      </div>
    </div>
  );
}
