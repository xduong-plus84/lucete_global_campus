import React from "react";
import { Popover } from "antd";

const dataDemo = [
  { time: "14:00~14:50", classList: ["Applied", "", "Applied", "", ""] },
  {
    time: "15:00~15:50",
    classList: ["", "E4-Coaching", "", "E4-Coaching", ""],
  },
  { time: "16:00~16:50", classList: ["", "E4-LAB", "", "E4-LAB", ""] },
];

const dataDemo2 = [
  {
    day: "Monday",
    classTime: "14:50~16:00",
    class: "E Level Reading",
    teacher: "Robyn",
    classStartDate: "2023.01.09",
  },
  {
    day: "Tuesday",
    classTime: "16:05~17:15",
    class: "E4 Coaching",
    teacher: "Robyn",
    classStartDate: "2023.01.09",
  },
  {
    day: "Tuesday",
    classTime: "17:20~18:00",
    class: "LAB 1",
    teacher: "Simon",
    classStartDate: "2023.01.09",
  },
  {
    day: "Wednesday",
    classTime: "14:50~16:00",
    class: "E Level Writing",
    teacher: "Linda",
    classStartDate: "2023.01.09",
  },
  {
    day: "Thursday",
    classTime: "17:20~18:00",
    class: "E4 Coaching",
    teacher: "Linda",
    classStartDate: "2023.01.09",
  },
  {
    day: "Thursday",
    classTime: "17:20~18:00",
    class: "LAB 2",
    teacher: "Julie",
    classStartDate: "2023.01.09",
  },
];

export default function StudentManagementRegisterTableCM() {
  const contentPopover = (classID) => {
    return <TablePopover classID={classID} />;
  };

  return (
    <div className="container mx-auto text-gray-800">
      <table className="w-full p-6 text-xs">
        <thead>
          <tr className="divide-x-2 bg-gray-300">
            <th className="p-3 w-2/12 text-center "></th>
            <th className="p-3 w-2/12 text-center ">MON</th>
            <th className="p-3 w-2/12 text-center">TUE</th>
            <th className="p-3 w-2/12 text-center">WED</th>
            <th className="p-3 w-2/12 text-center">THUR</th>
            <th className="p-3 w-2/12 text-center">FRI</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 bg-gray-50">
          {dataDemo.map((row, indexRow) => {
            return (
              <tr key={indexRow} className="divide-x-2">
                <td className="py-4 text-center">{row.time}</td>
                {row.classList.map((itemClass, indexClass) => {
                  if (itemClass !== "") {
                    return (
                      <Popover content={contentPopover(itemClass)}>
                        <td
                          key={indexClass}
                          className="py-4 text-center bg-yellow-300 cursor-pointer"
                        >
                          {itemClass}
                        </td>
                      </Popover>
                    );
                  } else {
                    return (
                      <td key={indexClass} className="py-4">
                        {itemClass}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br /> <hr /> <br />
      <table className="w-full p-6 text-xs">
        <thead>
          <tr className="divide-x-2 bg-gray-300">
            <th className="p-3 text-center ">Day</th>
            <th className="p-3 text-center ">Class Time</th>
            <th className="p-3 text-center">Class</th>
            <th className="p-3 text-center">Teacher</th>
            <th className="p-3 text-center">Class Start Date</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 bg-gray-50">
          {dataDemo2.map((item, index) => {
            return (
              <tr key={index} className="divide-x-2">
                <td className="py-4 text-center">{item.day}</td>
                <td className="py-4 text-center">{item.classTime}</td>
                <td className="py-4 text-center">{item.class}</td>
                <td className="py-4 text-center">{item.teacher}</td>
                <td className="py-4 text-center">{item.classStartDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TablePopover(props) {
  const { classID } = props;

  return (
    <div className="p-4">
      <p className="font-bold text-red-500">Content of {classID}</p>

      <ul class="list-disc">
        <li className="my-1">
          <span className="font-semibold">Subject:</span> E Level Reading
        </li>
        <li className="my-1">
          <span className="font-semibold">Online Teacher:</span> Stephen
        </li>
        <li className="my-1">
          <span className="font-semibold">Class Time:</span> Mon 14:50 ~ 16:00
        </li>
        <li className="my-1">
          <span className="font-semibold">Class Start Date: </span>
          2022.12.20
        </li>
        <li className="my-1">
          <span className="font-semibold">Current Status:</span> E4-1 Unit 1
        </li>
      </ul>
    </div>
  );
}
