import React from "react";

export default function PlannerStudentInfo(props) {
  let { somethingID } = props;

  return (
    <div className="flex justify-center mt-4">
      <ul className="mx-auto">
        <li className="flex">
          <p className="font-bold mr-2 w-32">Student name:</p>
          <p>{somethingID}</p>
        </li>
        <li className="flex">
          <p className="font-bold mr-2 w-32">Level:</p>
          <p>E8</p>
        </li>
        <li className="flex">
          <p className="font-bold mr-2 w-32">Campus:</p>
          <p>Nohyung</p>
        </li>
      </ul>
      <div className="w-1/2 mx-auto text-gray-800">
        <table className="w-full p-6">
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
            <tr className="divide-x-2">
              <td className="py-4 text-center">Time slot 1</td>
              <td className="py-4 text-center bg-yellow-300">E8-MW1A</td>
              <td className="py-4 text-center"></td>
              <td className="py-4 text-center bg-yellow-300">Coaching</td>
              <td className="py-4 text-center"></td>
              <td className="py-4 text-center"></td>
              <td className="py-4 text-center"></td>
            </tr>
            <tr className="divide-x-2">
              <td className="py-4 text-center">Time slot 2</td>
              <td className="py-4 text-center bg-yellow-300">LAB</td>
              <td className="py-4 text-center"></td>
              <td className="py-4 text-center"></td>
              <td className="py-4 text-center"></td>
              <td className="py-4 text-center"></td>
              <td className="py-4 text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
