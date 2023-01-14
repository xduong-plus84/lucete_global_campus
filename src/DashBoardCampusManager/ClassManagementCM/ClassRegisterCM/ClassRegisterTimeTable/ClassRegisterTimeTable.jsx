import { Popover, Select } from "antd";
import React, { useState } from "react";
import ClassRegisterTimeTablePopover from "./ClassRegisterTimeTablePopover";
import { getClassList } from "./dataClassDay";

const optionDays = [
  {
    value: "MON",
    label: "MON",
  },
  {
    value: "TUE",
    label: "TUE",
  },
  {
    value: "WED",
    label: "WED",
  },
  {
    value: "THUR",
    label: "THUR",
  },
  {
    value: "FRI",
    label: "FRI",
  },
];

export default function ClassRegisterTimeTable() {
  let [day, setDay] = useState("");
  let [dataClass, setDataClass] = useState([]);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setDay(value);

    setDataClass(getClassList(value));
  };

  const contentPopover = (classID) => {
    return <ClassRegisterTimeTablePopover classID={classID} />;
  };

  const renderTable = () => {
    return (
      <div className="container mx-auto p-4">
        <div className="flex text-center justify-center py-4">
          <div className="border-r-2">
            <table>
              <tbody className="divide-y">
                <tr className="divide-x h-16">
                  <td className="p-4"></td>
                </tr>
                <tr className="divide-x h-16">
                  <td className="p-4 font-semibold">Class</td>
                </tr>
                <tr className="divide-x h-16">
                  <td className="p-4 font-semibold">14:00~15:00</td>
                </tr>
                <tr className="divide-x h-16">
                  <td className="p-4 font-semibold">14:00~15:00</td>
                </tr>
                <tr className="divide-x h-16">
                  <td className="p-4 font-semibold">14:00~15:00</td>
                </tr>
                <tr className="divide-x h-16">
                  <td className="p-4 font-semibold">14:00~15:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-r-2">
            <div className="grow border-b-2 h-16 flex justify-center items-center">
              <span>{day}</span>
            </div>
            <table className="flex divide-x-2">
              {dataClass.map((item, index) => {
                return (
                  <tbody className="divide-y-2" key={index}>
                    <tr className="divide-x h-16">
                      <td className="w-20">{item.class}</td>
                    </tr>
                    <tr className="divide-x h-16 ">
                      {item.time1 !== "" ? (
                        <Popover content={contentPopover(item.class)}>
                          <td className="w-20 bg-blue-400">{item.time1}</td>
                        </Popover>
                      ) : undefined}
                    </tr>
                    <tr className="divide-x h-16 ">
                      {item.time2 !== "" ? (
                        <Popover content={contentPopover(item.class)}>
                          <td className="w-20 bg-blue-400">{item.time2}</td>
                        </Popover>
                      ) : undefined}
                    </tr>
                    <tr className="divide-x h-16 ">
                      {item.time3 !== "" ? (
                        <Popover content={contentPopover(item.class)}>
                          <td className="w-20 bg-blue-400">{item.time3}</td>
                        </Popover>
                      ) : undefined}
                    </tr>
                    <tr className="divide-x h-16 ">
                      {item.time4 !== "" ? (
                        <Popover content={contentPopover(item.class)}>
                          <td className="w-20 bg-blue-400">{item.time4}</td>
                        </Popover>
                      ) : undefined}
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="ClassRegisterTimeTable">
      <p className="font-bold my-4">Time Table</p>
      <span className="mr-4">Filter</span>
      <Select
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={optionDays}
      />

      {day != "" && renderTable()}
    </div>
  );
}
