import React from "react";
import { useParams } from "react-router-dom";

const data = [];
for (let i = 1; i < 5; i++) {
  data.push({
    key: i,
    id: i,
    no: `${i}`,
    orderNo: `${i % 2 ? "256798" : "256790"}`,
    orderDate: `${i % 2 ? "2022.12.05" : "2022.11.30"}`,
    sort: `${i % 2 ? "Product" : "Textbook"}`,
    standard: `${i % 2 ? "Campus" : "Fixed"}`,
    campus: `${i % 2 ? "-" : "Yonho"}`,
    product: `${i % 2 ? "E Level Basic" : "E8-1 Reading"}`,
    amount: `${i % 2 ? "1" : "2"}`,
    price: `${i % 2 ? "396,000" : "17,000"}`,
    method: `${i % 2 ? "Card" : "Transfer"}`,
    paidDate: `${i % 2 ? "2022.12.06" : "2022.12.01"}`,
    status: `${i % 2 ? "Complete" : "Processing"}`,
  });
}

export default function ManagementHistoryDetail() {
  let { somethingID } = useParams();
  console.log("somethingID: ", somethingID);

  return (
    <div id="ManagementHistoryDetail" className="p-4">
      <p className="font-bold py-2">
        Order No.<span>{somethingID}</span>
      </p>
      <table className="w-full p-6 text-left whitespace-nowrap">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-3 text-center">Order Date</th>
            <th className="p-3 text-center">Product</th>
            <th className="p-3 text-center">Amount</th>
            <th className="p-3 text-center">Price (won)</th>
            <th className="p-3 text-center">Method</th>
            <th className="p-3 text-center">Paid Date</th>
            <th className="p-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody className="bg-gray-50 border-gray-300">
          <tr>
            <td className="p-6 text-center">2022.12.05</td>
            <td className="p-6 text-center">E Level</td>
            <td className="p-6 text-center">1</td>
            <td className="p-6 text-center">396,000</td>
            <td className="p-6 text-center">Card</td>
            <td className="p-6 text-center">2022.12.06</td>
            <td className="p-6 text-center">Complete</td>
          </tr>
        </tbody>
      </table>
      <p className="font-bold mt-16 mb-2">Product</p>
      <table className="w-full p-6 text-left whitespace-nowrap">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-3 text-center">Sort</th>
            <th className="p-3 text-center">Standard</th>
            <th className="p-3 text-center">Campus</th>
            <th className="p-3 text-center">Product</th>
            <th className="p-3 text-center">Amount</th>
            <th className="p-3 text-center">Price (won)</th>
            <th className="p-3 text-center">Discount</th>
            <th className="p-3 text-center">Status</th>
            <th className="p-3 text-center">Delivery</th>
          </tr>
        </thead>
        <tbody className="bg-gray-50 border-gray-300">
          <tr>
            <td className="p-6 text-center">Product</td>
            <td className="p-6 text-center">Campus</td>
            <td className="p-6 text-center">Yonho</td>
            <td className="p-6 text-center">E Level Basic</td>
            <td className="p-6 text-center">1</td>
            <td className="p-6 text-center">350,000</td>
            <td className="p-6 text-center">0</td>
            <td className="p-6 text-center">Complete</td>
            <td className="p-6 text-center">Free</td>
          </tr>
        </tbody>
        <tbody className="bg-gray-50 border-gray-300">
          <tr>
            <td className="p-6 text-center">Product</td>
            <td className="p-6 text-center">Fixed</td>
            <td className="p-6 text-center">-</td>
            <td className="p-6 text-center">LAB</td>
            <td className="p-6 text-center">1</td>
            <td className="p-6 text-center">350,000</td>
            <td className="p-6 text-center">0</td>
            <td className="p-6 text-center"></td>
            <td className="p-6 text-center">Free</td>
          </tr>
        </tbody>
        <tbody className="bg-gray-50 border-gray-300">
          <tr>
            <td className="p-6 text-center">Product</td>
            <td className="p-6 text-center">Fixed</td>
            <td className="p-6 text-center">-</td>
            <td className="p-6 text-center">SUDA</td>
            <td className="p-6 text-center">1</td>
            <td className="p-6 text-center">11,000</td>
            <td className="p-6 text-center">0</td>
            <td className="p-6 text-center"></td>
            <td className="p-6 text-center">Free</td>
          </tr>
        </tbody>
        <tbody className="border-t-2 font-bold bg-gray-50 border-gray-300">
          <tr>
            <td colspan="4" className="p-6 text-right">
              Product
            </td>
            <td className="p-6 text-center">3</td>
            <td className="p-6 text-center">396,000</td>
            <td className="p-6 text-center">0</td>
            <td colSpan="2" className="p-6 text-center"></td>
          </tr>
        </tbody>
      </table>
      <div className="flex">
        <div className="p-8 mx-auto">
          <p className="font-bold mt-16 mb-2">Product</p>
          <ul>
            <li className="my-2">
              <span className="inline-block w-20 font-semibold">Name</span>
              <span>Ji In Kim</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-20 font-semibold">Campus</span>
              <span>Yongho</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-20 font-semibold">ID</span>
              <span>sgp2203012</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-20 font-semibold">Recipient</span>
              <span>Ji In Kim</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-20 font-semibold">Address</span>
              <span>Seoul Gangnam Gu Seounreung-ro 701004</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-20 font-semibold">Mobile</span>
              <span>010-1234-5678</span>
            </li>
          </ul>
        </div>
        <div className="p-8 mx-auto">
          <p className="font-bold mt-16 mb-2">Payment Infomation</p>
          <ul>
            <li className="my-2">
              <span className="inline-block w-20 font-semibold">Method</span>
              <span>Card</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-20 font-semibold">PG</span>
              <span>inicis(2022-12-6 20:53:02)</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-20 font-semibold">
                Payment No.
              </span>
              <span>02346508050</span>
            </li>
            <li className="my-2">
              <span className="inline-block w-20 font-semibold">Card Co.</span>
              <span>Samsung</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
