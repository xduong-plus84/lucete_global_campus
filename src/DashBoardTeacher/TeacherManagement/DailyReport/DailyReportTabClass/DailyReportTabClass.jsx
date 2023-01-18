import React from "react";
import DailyReportTabClassStudent from "./DailyReportTabClassStudent";

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },

//   {
//     title: "Level",
//     dataIndex: "level",
//     key: "level",
//   },
//   {
//     title: "Attendance",
//     key: "attendance",
//     dataIndex: "attendance",
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? "geekblue" : "green";
//           if (tag === "Checked in") {
//             color = "green";
//           }
//           if (tag === "Checked out") {
//             color = "geekblue";
//           }
//           if (tag === "absent") {
//             color = "volcano";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "Review",
//     key: "review",
//     render: (_, record) => (
//       <div className="flex items-end">
//         <div className="flex flex-col justify-end min-w-fit h-20">
//           <div className="flex items-end">
//             <span className="inline-block w-20">Preparation</span>
//             <Rate defaultValue={5} tooltips={desc} className="min-w-fit mx-2" />
//           </div>
//           <div className="flex items-end">
//             <span className="inline-block w-20">Attitude</span>
//             <Rate defaultValue={5} tooltips={desc} className="min-w-fit mx-2" />
//           </div>
//           <div className="flex items-end">
//             <span className="inline-block w-20">Participation</span>
//             <Rate defaultValue={5} tooltips={desc} className="min-w-fit mx-2" />
//           </div>
//         </div>
//         <TextArea onChange={onChange} style={{ height: "6rem" }} />
//         <button className="px-3 py-1 ml-2 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
//           Submit
//         </button>
//       </div>
//     ),
//   },
// ];
const data = [
  {
    key: "1",
    id: "1a",
    name: "John Brown",
    className: "E5-Tiger eye",
    statusTag: ["Checked in", "Checked out"],
  },
  {
    key: "2",
    id: "2a",
    name: "Jim Green",
    className: "E5-Tiger eye",
    statusTag: ["absent"],
  },
  {
    key: "3",
    id: "3a",
    name: "Joe Black",
    className: "E5-Tiger eye",
    statusTag: ["Checked in", "Checked out"],
  },
];
export default function DailyReportTabClass() {
  return (
    <div>
      {/* <Table columns={columns} dataSource={data} /> */}
      <div className="container mx-auto text-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-300 divide-x-2">
                <th className="p-3 text-center">Name</th>
                <th className="p-3 text-center">Attendance</th>
                <th className="p-3 text-center">Review</th>
              </tr>
            </thead>
            <tbody className="border-b-2 bg-gray-50 border-gray-300 divide-y-2">
              {data.map((student, index) => {
                return (
                  <DailyReportTabClassStudent key={index} student={student} />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
