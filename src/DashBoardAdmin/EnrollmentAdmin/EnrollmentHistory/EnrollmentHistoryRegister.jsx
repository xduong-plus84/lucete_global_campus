import React from "react";
import { useParams } from "react-router-dom";

export default function EnrollmentHistoryRegister() {
  let { no } = useParams();
  const renderTable = () => {
    return (
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-left whitespace-nowrap">
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
            <tbody className="border-b-2 bg-gray-50 border-gray-300 font-semibold">
              <tr>
                <td className="p-6 text-center border-r border-gray-400">
                  14:50 ~ 16:00
                </td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
                  Simone
                </td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center"></td>
              </tr>
            </tbody>
            <tbody className="border-b-2 bg-gray-50 border-gray-300 font-semibold">
              <tr>
                <td className="p-6 text-center border-r border-gray-400">
                  16:05 ~ 17:15
                </td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center"></td>
              </tr>
            </tbody>
            <tbody className="border-b-2 bg-gray-50 border-gray-300 font-semibold">
              <tr>
                <td className="p-6 text-center border-r border-gray-400">
                  16:05 ~ 17:15
                </td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center"></td>
              </tr>
            </tbody>
            <tbody className="border-b-2 bg-gray-50 border-gray-300 font-semibold">
              <tr>
                <td className="p-6 text-center border-r border-gray-400">
                  19:05 ~ 20:25
                </td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  return (
    <div id="EnrollmentHistoryRegister">
      <div className="w-5/12 mx-auto my-8">
        <div className="flex justify-between">
          <div>
            <span className="font-bold">Register No. </span>
            {no}
          </div>
          <div>
            <span className="font-bold">Submitted: </span>
            <span className="px-4 border-2 rounded-md">2002-11-1</span>
          </div>
        </div>
        <ul className="text-center w-2/3 mx-auto mt-4">
          <li className="flex mt-2">
            <p className="w-16 text-left">*Campus</p>
            <p className="ml-4 grow px-4 border-2 rounded-md">Magok</p>
          </li>
          <li className="flex mt-2">
            <p className="w-16 text-left">*Name</p>
            <p className="ml-4 grow px-4 border-2 rounded-md">Woo Hyuck</p>
          </li>
          <li className="flex mt-2">
            <p className="w-16 text-left">*ID</p>
            <p className="ml-4 grow px-4 border-2 rounded-md">smg220401</p>
          </li>
          <li className="flex mt-2">
            <p className="w-16 text-left">*Level</p>
            <p className="ml-4 grow px-4 border-2 rounded-md">E8</p>
          </li>
          <li className="flex mt-2">
            <p className="w-16">*Subject</p>
            <p className="ml-4 grow px-4 border-2 rounded-md">Reading</p>
          </li>
        </ul>
      </div>
      <hr />
      <p className="ml-4 font-bold pt-8">Request</p>
      {renderTable()}
      <div>
        <button className="w-32 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4">
          Class Assign
        </button>
        <button className="w-32 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-red-500 duration-300 ml-4">
          Cancel
        </button>
        <button className="w-32 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300 ml-4">
          List
        </button>
      </div>
    </div>
  );
}
