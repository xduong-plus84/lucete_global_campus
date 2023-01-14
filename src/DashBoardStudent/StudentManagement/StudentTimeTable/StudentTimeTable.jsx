import React from "react";
// import "./studentTimeTable.css";

export default function StudentTimeTable() {
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-3 w-2/12 text-center"></th>
              <th className="p-3 w-2/12 text-center border-l border-gray-400">
                MON
              </th>
              <th className="p-3 w-2/12 text-center border-l border-gray-400">
                TUE
              </th>
              <th className="p-3 w-2/12 text-center border-l border-gray-400">
                WED
              </th>
              <th className="p-3 w-2/12 text-center border-l border-gray-400">
                THUR
              </th>
              <th className="p-3 w-2/12 text-center border-l border-gray-400">
                FRI
              </th>
            </tr>
          </thead>
          <tbody className="border-b-2 bg-gray-50 border-gray-300">
            <tr>
              <td className="p-6 text-center border-r border-gray-400">
                14:50-16:00
              </td>
              <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
                E4-MW1A
              </td>
              <td className="p-6 text-center border-r border-gray-400"></td>
              <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
                E4-MW1A
              </td>
              <td className="p-6 text-center border-r border-gray-400"></td>
              <td className="p-6 text-center"></td>
            </tr>
          </tbody>
          <tbody className="border-b-2 bg-gray-50 border-gray-300">
            <tr>
              <td className="p-6 text-center border-r border-gray-400">
                16:05-17:15
              </td>
              <td className="p-6 text-center border-r border-gray-400"></td>
              <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
                E4-Coaching
              </td>
              <td className="p-6 text-center border-r border-gray-400"></td>
              <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
                E4-Coaching
              </td>
              <td className="p-6 text-center"></td>
            </tr>
          </tbody>
          <tbody className="border-b-2 bg-gray-50 border-gray-300">
            <tr>
              <td className="p-6 text-center border-r border-gray-400">
                16:05-17:15
              </td>
              <td className="p-6 text-center border-r border-gray-400"></td>
              <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
                E4-LAB
              </td>
              <td className="p-6 text-center border-r border-gray-400"></td>
              <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
                E4-LAB
              </td>
              <td className="p-6 text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
