import React from "react";
import { useParams } from "react-router-dom";

const dataStudentList = [
  {
    name: "김나연",
    engName: "Nayeon",
    talkSamID: "smg220103",
    campus: "Ujeong",
    classJoinDate: "2022.01.10",
  },
  {
    name: "김나연",
    engName: "Hayoung",
    talkSamID: "smg220405",
    campus: "Geapo",
    classJoinDate: "2022.05.01",
  },
  {
    name: "김나연",
    engName: "Nayeon",
    talkSamID: "smg220507",
    campus: "Mmagok",
    classJoinDate: "2022.04.15",
  },
];

const dataClassHistory = [
  {
    date: "2022.05.01",
    content: "Finished Sprout A-2, new textbook Sprout B-1",
  },
  {
    date: "2022.04.01",
    content: "Ji Won dropped out",
  },
  {
    date: "2022.03.30",
    content: "Ji Won joined class",
  },
  {
    date: "2022.03.01",
    content: "Class Start",
  },
];

export default function OnlineClassListTableClassListDetail() {
  const { somethingID } = useParams();

  const renderTableStudentList = () => {
    return (
      <div
        id="OnlineClassListTableClassListDetail"
        className="container p-2 mx-auto sm:p-4 text-gray-800"
      >
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-300 divide-x-2">
                <th className="p-3 text-center">No.</th>
                <th className="p-3 text-center">Name</th>
                <th className="p-3 text-center">Eng Name</th>
                <th className="p-3 text-center">Talksam ID</th>
                <th className="p-3 text-center">Campus</th>
                <th className="p-3 text-center">Class Join Date</th>
              </tr>
            </thead>
            <tbody className="border-b-2 bg-gray-50 border-gray-300 divide-y-2">
              {dataStudentList.map((item, index) => {
                return (
                  <tr key={index} className="divide-x-2">
                    <td className="p-6 text-center">{index + 1}</td>
                    <td className="p-6 text-center">{item.name}</td>
                    <td className="p-6 text-center">{item.engName}</td>
                    <td className="p-6 text-center">{item.talkSamID}</td>
                    <td className="p-6 text-center">{item.campus}</td>
                    <td className="p-6 text-center">{item.classJoinDate}</td>
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
    <div>
      <p className="py-2">somethingID: {somethingID}</p>
      <p className="font-bold">Subject 1</p>
      <ul>
        <li className="py-2">
          <span className="w-40 inline-block">Subject:</span>
          <span>Sprout B Writing</span>
        </li>
        <li className="py-2">
          <span className="w-40 inline-block">Class Time:</span>
          <span>14:50~1600</span>
        </li>
        <li className="py-2">
          <span className="w-40 inline-block">Online Teacher:</span>
          <span>Simon</span>
        </li>
        <li className="py-2">
          <span className="w-40 inline-block">Class Start Date:</span>
          <span>2022.01.10</span>
        </li>
        <li className="py-2">
          <span className="w-40 inline-block">Next Unit:</span>
          <span>Sprout B-1 Unit 7</span>
          <span> ~ </span>
          <span>2022.11.20</span>
        </li>
        <br /> <hr /> <br />
        <li className="py-2">
          <span className="w-40 inline-block">Class issue:</span>
          <span>
            Student will move to the next level starting next semester
          </span>
        </li>
      </ul>
      <br />
      <div>
        <span>Student List</span>
        {renderTableStudentList()}
      </div>
      <div>
        <span>Class History</span>
        <ul className="list-disc pl-4">
          {dataClassHistory.map((item, index) => {
            return (
              <li key={index} className="py-2">
                <span className="w-28 inline-block">{item.date}</span>
                <span>{item.content}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
