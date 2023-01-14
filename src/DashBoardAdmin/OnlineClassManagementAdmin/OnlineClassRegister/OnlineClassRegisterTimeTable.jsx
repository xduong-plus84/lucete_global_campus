import React from "react";
import { Popover } from "antd";
import OnlineClassListTablePopover from "../OnlineClassList/OnlineClassListTablePopover";

export default function OnlineClassRegisterTimeTable() {
  const contentPopover = (classID) => {
    return <OnlineClassListTablePopover classID={classID} />;
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-3 w-2/12 text-center border-gray-400">MON</th>
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
              <Popover content={contentPopover("E4 - M1A")}>
                <td className="py-4 text-center border-r border-gray-400 bg-yellow-300 cursor-pointer">
                  E4-M1A
                </td>
              </Popover>
              <td className="py-4 text-center border-r border-gray-400"></td>
              <td className="py-4 text-center border-r border-gray-400"></td>
              <td className="py-4 text-center border-r border-gray-400"></td>
              <td className="py-4 text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
