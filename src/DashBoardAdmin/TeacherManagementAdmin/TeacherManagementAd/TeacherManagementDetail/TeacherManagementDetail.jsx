import React from "react";
import { Link, useParams } from "react-router-dom";

export default function TeacherManagementDetail() {
  let { teacherID } = useParams();
  console.log("teacherID: ", teacherID);
  const renderTable = () => {
    return (
      <div className="container mx-auto text-gray-800">
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
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
                  Bud-TT1A
                </td>
                <td className="p-6 text-center"></td>
              </tr>
            </tbody>
            <tbody className="border-b-2 bg-gray-50 border-gray-300 font-semibold">
              <tr>
                <td className="p-6 text-center border-r border-gray-400">
                  16:05 ~ 17:15
                </td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400 bg-yellow-300">
                  E8-TT2A
                </td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center border-r border-gray-400"></td>
                <td className="p-6 text-center"></td>
              </tr>
            </tbody>
            <tbody className="border-b-2 bg-gray-50 border-gray-300 font-semibold">
              <tr>
                <td className="p-6 text-center border-r border-gray-400">
                  17:15 ~ 19:00
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
    <div id="TeacherManagementDetail">
      <p>Vừa mới chọn teacher có ID: {teacherID}</p>
      <div className="flex justify-center flex-wrap pt-2 pb-8 mb-4 border-b-2">
        <div className="mx-12">
          <div className="w-40 h-40 bg-pink-200 mb-2"></div>
        </div>
        <div className="registerRoleTwo">
          <ul>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">*Sort</span>
              <span>Online</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">*Name</span>
              <span>Robyn</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">*ID</span>
              <span>gcteacher</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">*PW</span>
              <span>****</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">E-mail</span>
              <span>test@gmail.com</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">Gender</span>
              <span>Female</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">
                Date of birth
              </span>
              <span>1990.03.10</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">Status</span>
              <span>Tranning Complete</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">Activate</span>
              <span>Y</span>
            </li>
          </ul>
        </div>
        <div className="registerRoleThree ml-12">
          <ul>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">Country</span>
              <span>South Africa</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">Timezone</span>
              <span>GMT 19:00</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">
                Start Date
              </span>
              <span>2022.03.01</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">
                Resignation
              </span>
              <span>-</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">Resume</span>
              <span className="mr-2">Sample file.pdf</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">
                Certificate
              </span>
              <Link className="mr-2">Sample file.pdf</Link>
              <Link className="mr-2">Sample file.pdf</Link>
            </li>
            <li className="my-2">
              <span className="inline-block w-32 font-semibold">Contract</span>
              <Link className="mr-2">Sample file.pdf</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-start justify-center py-4">
        <span className="pt-4 inline-block w-32 font-semibold">*Sort</span>
        <div className="w-96 h-40 p-4 border rounded-xl">fdsfdsaf</div>
        <div className="pt-4 ml-8">
          <p>Personality</p>
          <Link className="mr-2">#active</Link>
          <Link className="mr-2">#creative</Link>
          <Link className="mr-2">#friendly</Link>
          <Link className="mr-2">#detailed feebackd</Link>
        </div>
      </div>
      <hr />
      <div className="mt-8">
        <p className="font-semibold">Class Availability</p>
        <div className="my-8">
          <span className="font-semibold w-32 inline-block">Subject</span>
          <span className="px-4 py-2 border rounded-lg mr-4">
            Ekong ~ M Level Reading
          </span>
          <span className="px-4 py-2 border rounded-lg">
            Ekong ~ E8 Level Writing
          </span>
        </div>
        <div className="flex">
          <span className="mr-4 font-semibold w-32">Available Time</span>
          {renderTable()}
        </div>
        <div className="text-center">
          <button className="w-32 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-red-500 duration-300 ml-4">
            Cancel
          </button>
          <button className="w-32 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300 ml-4">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
