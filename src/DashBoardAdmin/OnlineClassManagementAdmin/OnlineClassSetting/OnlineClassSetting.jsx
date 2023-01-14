import React from "react";

const dataTimeSlot = [
  {
    slot: "Time Slot 1",
    name: "E Time 1",
    classStart: "14:50",
    classEnd: "16:00",
  },
  {
    slot: "Time Slot 2",
    name: "E Time 2",
    classStart: "16:05",
    classEnd: "17:15",
  },
  {
    slot: "Time Slot 3",
    name: "E Time 1",
    classStart: "17:40",
    classEnd: "18:50",
  },
  {
    slot: "Time Slot 4",
    name: "M Time 1",
    classStart: "17:40",
    classEnd: "19:00",
  },
  {
    slot: "Time Slot 5",
    name: "M Time 2",
    classStart: "19:05",
    classEnd: "20:25",
  },
];

const dataLessonProgress = [
  {
    value: "Value 1",
    level: "E Kong",
    subject: "Reading",
    unit: "1",
  },
  {
    value: "Value 2",
    level: "E Kong",
    subject: "Writing",
    unit: "0.5",
  },
  {
    value: "Value 3",
    level: "E Level",
    subject: "Reading",
    unit: "1",
  },
  {
    value: "Value 4",
    level: "E Level",
    subject: "Writing",
    unit: "0.5",
  },
];

export default function OnlineClassSetting() {
  const renderTableStudentList = () => {
    return (
      <div className="container mx-auto text-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-300 divide-x-2">
                <th className="p-3 text-center"></th>
                <th className="p-3 text-center">Name</th>
                <th className="p-3 text-center">Clas Start</th>
                <th className="p-3 text-center">Class End</th>
              </tr>
            </thead>
            <tbody className="border-b-2 bg-gray-50 border-gray-300 divide-y-2">
              {dataTimeSlot.map((item, index) => {
                return (
                  <tr key={index} className="divide-x-2">
                    <td className="p-6 w-40 text-center">{item.slot}</td>
                    <td className="p-6 w-40 text-center">{item.name}</td>
                    <td className="p-6 w-40 text-center">{item.classStart}</td>
                    <td className="p-6 w-40 text-center">{item.classEnd}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  const renderLessonProgress = () => {
    return (
      <div className="container mx-auto text-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-300 divide-x-2">
                <th className="p-3 text-center"></th>
                <th className="p-3 text-center">Level</th>
                <th className="p-3 text-center">Subject</th>
                <th className="p-3 text-center">Unit per week</th>
              </tr>
            </thead>
            <tbody className="border-b-2 bg-gray-50 border-gray-300 divide-y-2">
              {dataLessonProgress.map((item, index) => {
                return (
                  <tr key={index} className="divide-x-2">
                    <td className="p-6 w-40 text-center">{item.value}</td>
                    <td className="p-6 w-40 text-center">{item.level}</td>
                    <td className="p-6 w-40 text-center">{item.subject}</td>
                    <td className="p-6 w-40 text-center">{item.unit}</td>
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
    <div id="OnlineClassSetting" className="flex justify-between">
      <div>
        <h1 className="font-bold mb-4">Class Timeslot</h1>
        {renderTableStudentList()}
      </div>
      <div>
        <h1 className="font-bold mb-4">Lesson Progress</h1>
        {renderLessonProgress()}
      </div>
    </div>
  );
}
