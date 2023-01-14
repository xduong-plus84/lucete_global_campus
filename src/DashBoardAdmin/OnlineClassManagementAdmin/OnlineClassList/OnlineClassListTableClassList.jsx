import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const theadTable = [
  { title: "No." },
  { title: "Level" },
  { title: "Class" },
  { title: "Campus" },
  { title: "Name" },
  { title: "TalksamID" },
  { title: "Teacher 1" },
  { title: "Teacher 2" },
  { title: "Current Level" },
  { title: "Activate/Inactivate" },
  { title: "View" },
];

export default function OnlineClassListTableClassList() {
  let [activate1, setActivate1] = useState(false);
  let [activate2, setActivate2] = useState(true);
  let [activate3, setActivate3] = useState(true);
  let [activate4, setActivate4] = useState(true);
  let [activate5, setActivate5] = useState(true);
  let [activate6, setActivate6] = useState(true);

  const navigate = useNavigate();

  const hanldeClickView = () => {
    navigate(
      "/dash-board-admin/online-class-management/online-class-list/detail/1"
    );
  };

  const renderTheadTable = () => {
    return (
      <thead>
        <tr className="bg-gray-300">
          {theadTable.map((item, index) => {
            return (
              <th
                key={index}
                className="p-3 text-center border-l border-gray-400"
              >
                {item.title}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  };
  return (
    <table className="w-full p-6 text-left whitespace-nowrap">
      {renderTheadTable()}
      <tbody className="bg-gray-50 font-normal">
        {/* row 1 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">1</td>
          <td rowspan="17" className="p-1 text-center border-r border-gray-400">
            Ekong
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            Sprout A-TT2A
          </td>
          <td className="p-1 text-center border-r border-gray-400">Gaepo</td>
          <td className="p-1 text-center border-r border-gray-400">
            Yesol Yang
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            T: Stephen
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            Th: Simone
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            SproutA-1
          </td>
          <td
            onClick={() => setActivate1((pre) => !pre)}
            className="p-1 text-center border-r border-gray-400 cursor-pointer hover:opacity-50 duration-300"
          >
            {activate1 ? "Y" : "N"}
          </td>
          <td className="p-1 text-center border-gray-400">
            <button onClick={() => hanldeClickView()}>
              <i class="fa fa-cog"></i>
            </button>
          </td>
        </tr>
        {/* row 2 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">2</td>
          <td rowSpan={3} className="p-1 text-center border-r border-gray-400">
            Sprout B-MW1A
          </td>
          <td className="p-1 text-center border-r border-gray-400">Gaepo</td>
          <td className="p-1 text-center border-r border-gray-400">Jia</td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp220512
          </td>
          <td rowSpan={3} className="p-1 text-center border-r border-gray-400">
            M: Robyn
          </td>
          <td rowSpan={3} className="p-1 text-center border-r border-gray-400">
            W: Stephen
          </td>
          <td rowSpan={3} className="p-1 text-center border-r border-gray-400">
            Sprout A-2
          </td>
          <td
            onClick={() => setActivate2((pre) => !pre)}
            rowSpan={3}
            className="p-1 text-center border-r border-gray-400 cursor-pointer hover:opacity-50 duration-300"
          >
            {activate2 ? "Y" : "N"}
          </td>
          <td rowSpan={3} className="p-1 text-center border-gray-400">
            <button onClick={() => hanldeClickView()}>
              <i class="fa fa-cog"></i>
            </button>
          </td>
        </tr>
        {/* row 3 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">3</td>
          <td className="p-1 text-center border-r border-gray-400">Gaepo</td>
          <td className="p-1 text-center border-r border-gray-400">Yu Hwan</td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
        </tr>
        {/* row 4 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">4</td>

          <td className="p-1 text-center border-r border-gray-400">Gaepo</td>
          <td className="p-1 text-center border-r border-gray-400">Rahyun</td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
        </tr>
        {/* row 5 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">5</td>
          <td className="p-1 text-center border-r border-gray-400">
            Sprout B-M1B
          </td>
          <td className="p-1 text-center border-r border-gray-400">Beomse</td>
          <td className="p-1 text-center border-r border-gray-400">Jiwook</td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
          <td rowSpan={3} className="p-1 text-center border-r border-gray-400">
            M: Simon
          </td>
          <td rowSpan={3} className="p-1 text-center border-r border-gray-400">
            -
          </td>
          <td rowSpan={3} className="p-1 text-center border-r border-gray-400">
            Sprout B
          </td>
          <td
            onClick={() => setActivate3((pre) => !pre)}
            rowSpan={3}
            className="p-1 text-center border-r border-gray-400 cursor-pointer hover:opacity-50 duration-300"
          >
            {activate3 ? "Y" : "N"}
          </td>
          <td rowSpan={3} className="p-1 text-center border-gray-400">
            <button onClick={() => hanldeClickView()}>
              <i class="fa fa-cog"></i>
            </button>
          </td>
        </tr>
        {/* row 6 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">6</td>
          <td className="p-1 text-center border-r border-gray-400">
            Sprout B-M1B
          </td>
          <td className="p-1 text-center border-r border-gray-400">Beomse</td>
          <td className="p-1 text-center border-r border-gray-400">
            Yesol Yang
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
        </tr>
        {/* row 7 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">7</td>
          <td className="p-1 text-center border-r border-gray-400">
            Sprout B-M1B
          </td>
          <td className="p-1 text-center border-r border-gray-400">Beomse</td>
          <td className="p-1 text-center border-r border-gray-400">Jiwook</td>
          <td className="p-1 text-center border-r border-gray-400">b2110002</td>
        </tr>
        {/* row 8 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">8</td>
          <td className="p-1 text-center border-r border-gray-400">
            Sprout B-MW2A
          </td>
          <td className="p-1 text-center border-r border-gray-400">Magok</td>
          <td className="p-1 text-center border-r border-gray-400">
            Jin Yu Kim
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
          <td rowSpan={3} className="p-1 text-center border-r border-gray-400">
            M: Simone
          </td>
          <td rowSpan={3} className="p-1 text-center border-r border-gray-400">
            W: Simon
          </td>
          <td rowSpan={3} className="p-1 text-center border-r border-gray-400">
            Sprout, B-1
          </td>
          <td
            onClick={() => setActivate4((pre) => !pre)}
            rowSpan={3}
            className="p-1 text-center border-r border-gray-400 cursor-pointer hover:opacity-50 duration-300"
          >
            {activate4 ? "Y" : "N"}
          </td>
          <td rowSpan={3} className="p-1 text-center border-gray-400">
            <button onClick={() => hanldeClickView()}>
              <i class="fa fa-cog"></i>
            </button>
          </td>
        </tr>
        {/* row 9 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">9</td>
          <td className="p-1 text-center border-r border-gray-400">
            Sprout B-MW2A
          </td>
          <td className="p-1 text-center border-r border-gray-400">Magok</td>
          <td className="p-1 text-center border-r border-gray-400">
            Yesol Yang
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
        </tr>
        {/* row 10 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">10</td>
          <td className="p-1 text-center border-r border-gray-400">
            Sprout B-MW2A
          </td>
          <td className="p-1 text-center border-r border-gray-400">Magok</td>
          <td className="p-1 text-center border-r border-gray-400">
            Yesol Yang
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
        </tr>
        {/* row 11 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">11</td>
          <td rowSpan={5} className="p-1 text-center border-r border-gray-400">
            Bud-TT1A
          </td>
          <td className="p-1 text-center border-r border-gray-400">Magok</td>
          <td className="p-1 text-center border-r border-gray-400">
            Jae Hyo Lee
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
          <td rowSpan={5} className="p-1 text-center border-r border-gray-400">
            T: Robyn
          </td>
          <td rowSpan={5} className="p-1 text-center border-r border-gray-400">
            Th: Simone
          </td>
          <td rowSpan={5} className="p-1 text-center border-r border-gray-400">
            SproutA-2
          </td>
          <td
            onClick={() => setActivate5((pre) => !pre)}
            rowSpan={5}
            className="p-1 text-center border-r border-gray-400 cursor-pointer hover:opacity-50 duration-300"
          >
            {activate5 ? "Y" : "N"}
          </td>
          <td rowSpan={5} className="p-1 text-center border-gray-400">
            <button onClick={() => hanldeClickView()}>
              <i class="fa fa-cog"></i>
            </button>
          </td>
        </tr>
        {/* row 12 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">12</td>
          <td className="p-1 text-center border-r border-gray-400">Magok</td>
          <td className="p-1 text-center border-r border-gray-400">
            Jae ha Lee
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
        </tr>
        {/* row 13 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">13</td>
          <td className="p-1 text-center border-r border-gray-400">Magok</td>
          <td className="p-1 text-center border-r border-gray-400">
            Daniel Choi
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
        </tr>
        {/* row 14 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">14</td>
          <td className="p-1 text-center border-r border-gray-400">Gaepo</td>
          <td className="p-1 text-center border-r border-gray-400">
            Min Seong Park
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
        </tr>
        {/* row 15 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">15</td>
          <td className="p-1 text-center border-r border-gray-400">Yongho</td>
          <td className="p-1 text-center border-r border-gray-400">
            So Yul Lee
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
        </tr>
        {/* row 16 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">16</td>
          <td rowSpan={2} className="p-1 text-center border-r border-gray-400">
            Bud B E3-MW1A
          </td>
          <td rowSpan={2} className="p-1 text-center border-r border-gray-400">
            Magok
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            San Hee Lee
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
          <td rowSpan={2} className="p-1 text-center border-r border-gray-400">
            M: Simore
          </td>
          <td rowSpan={2} className="p-1 text-center border-r border-gray-400">
            W:Simon
          </td>
          <td rowSpan={2} className="p-1 text-center border-r border-gray-400">
            Bud B E3-1
          </td>
          <td
            onClick={() => setActivate6((pre) => !pre)}
            rowSpan={2}
            className="p-1 text-center border-r border-gray-400 cursor-pointer hover:opacity-50 duration-300"
          >
            {activate6 ? "Y" : "N"}
          </td>
          <td rowSpan={2} className="p-1 text-center border-gray-400">
            <button onClick={() => hanldeClickView()}>
              <i class="fa fa-cog"></i>
            </button>
          </td>
        </tr>
        {/* row 17 */}
        <tr className="border-b-2 border-gray-300">
          <td className="p-1 text-center border-r border-gray-400">17</td>
          <td className="p-1 text-center border-r border-gray-400">
            So Jung Lim
          </td>
          <td className="p-1 text-center border-r border-gray-400">
            sgp221106
          </td>
        </tr>
      </tbody>
    </table>
  );
}
