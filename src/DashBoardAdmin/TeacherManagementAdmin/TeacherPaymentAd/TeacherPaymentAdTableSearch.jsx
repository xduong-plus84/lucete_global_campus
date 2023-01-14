import { Table } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const dataTable = [
  { time: "14:50 ~ 16:10", mon: 0, tue: 0, wed: 3, thur: 0, fri: 2, total: 53 },
  { time: "16:15 ~ 17:35", mon: 0, tue: 0, wed: 4, thur: 0, fri: 4, total: 56 },
  { time: "17:40 ~ 19:00", mon: 0, tue: 2, wed: 6, thur: 6, fri: 0, total: 95 },
  { time: "19:05 ~ 20:25", mon: 0, tue: 2, wed: 0, thur: 5, fri: 0, total: 61 },
];

const data = [];
for (let i = 1; i < 5; i++) {
  data.push({
    key: i,
    id: i,
    no: `${i}`,
    sort: `${i % 2 ? "Class" : "Incentive"}`,
    class: `${i % 2 ? "E8-MW1A" : "M14-T1B"}`,
    detail: `${i % 2 ? "Regular Class" : "Class Feedback"}`,
    attended: `${i % 2 ? 4 : "-"}`,
    price: `${i % 2 ? 50 + i : 30 + i}`,
    date: `${i % 2 ? "2022.12.06" : "2022.12.01"}`,
  });
}

data.push({
  key: "total",
  detail: <p className="font-bold">Total</p>,
  price: <span className="font-bold">265</span>,
});

export default function TeacherPaymentAdTableSearch() {
  const navigate = useNavigate();
  let { teacherID } = useParams();
  console.log("teacherID: ", teacherID);

  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      width: "5%",
    },
    {
      title: "Sort",
      dataIndex: "sort",
    },
    {
      title: "Class",
      dataIndex: "class",
    },
    {
      title: "Detail",
      dataIndex: "detail",
    },
    {
      title: "Attended",
      dataIndex: "attended",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
  ];

  const handleClickPrint = () => {
    console.log("click print");
  };

  const handleClickDownload = () => {
    console.log("click download");
  };
  const handleClickList = () => {
    console.log("click list");
    navigate(-1);
  };

  const renderTable = () => {
    return (
      <table className="w-full p-6 text-left whitespace-nowrap">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-3 w-4/12 text-center"></th>
            <th className="p-3 w-1/12 text-center border-l border-gray-400">
              MON
            </th>
            <th className="p-3 w-1/12 text-center border-l border-gray-400">
              TUE
            </th>
            <th className="p-3 w-1/12 text-center border-l border-gray-400">
              WED
            </th>
            <th className="p-3 w-1/12 text-center border-l border-gray-400">
              THUR
            </th>
            <th className="p-3 w-1/12 text-center border-l border-gray-400">
              FRI
            </th>
            <th className="p-3 w-3/12 text-center border-l border-gray-400">
              Total
            </th>
          </tr>
        </thead>

        {dataTable.map((item, index) => {
          return (
            <tbody
              key={index}
              className="border-b-2 bg-gray-50 border-gray-300 font-semibold"
            >
              <tr>
                <td className="p-1 text-center border-r border-gray-400">
                  {item.time}
                </td>
                <td
                  className={`p-1 text-center border-r border-gray-400 ${
                    item.mon !== 0 && "bg-yellow-300"
                  }`}
                >
                  {item.mon}
                </td>
                <td
                  className={`p-1 text-center border-r border-gray-400 ${
                    item.tue !== 0 && "bg-yellow-300"
                  }`}
                >
                  {item.tue}
                </td>
                <td
                  className={`p-1 text-center border-r border-gray-400 ${
                    item.wed !== 0 && "bg-yellow-300"
                  }`}
                >
                  {item.wed}
                </td>
                <td
                  className={`p-1 text-center border-r border-gray-400 ${
                    item.thur !== 0 && "bg-yellow-300"
                  }`}
                >
                  {item.thur}
                </td>
                <td
                  className={`p-1 text-center border-r border-gray-400 ${
                    item.fri !== 0 && "bg-yellow-300"
                  }`}
                >
                  {item.fri}
                </td>
                <td className="p-1 text-center">{item.total}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );
  };
  const renderBill = () => {
    return (
      <ul className="text-right">
        <li>
          <i className="underline">2022.11.01-2022.11.30</i>
        </li>
        <li className="flex justify-between my-2">
          <span>Class Fee</span>
          <span>$1590</span>
        </li>
        <li className="flex justify-between my-2">
          <span>Incentive</span>
          <span>$30</span>
        </li>
        <li className="flex justify-between my-2 items-baseline font-bold">
          <span>Total Payment</span>
          <span className="text-xl text-red-500 ml-8">$1620</span>
        </li>
      </ul>
    );
  };

  return (
    <div id="TeacherPaymentAdTableSearch" className="my-4">
      <p className="font-bold mb-4">
        Nov 1st Week
        <span className="text-red-500"> of teacher {teacherID}</span>
      </p>
      <div className="flex justify-between">
        <div className="w-1/2">{renderTable()}</div>
        <div>{renderBill()}</div>
      </div>
      <p className="font-bold my-4">Detail </p>
      <Table columns={columns} dataSource={data} pagination={false} />
      <div className="my-4">
        <button
          onClick={() => handleClickPrint()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          Print
        </button>
        <button
          onClick={() => handleClickDownload()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          Download
        </button>
        <button
          onClick={() => handleClickList()}
          className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
        >
          List
        </button>
      </div>
    </div>
  );
}
