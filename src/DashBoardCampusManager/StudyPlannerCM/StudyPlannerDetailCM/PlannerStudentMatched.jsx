import React from "react";

export default function PlannerStudentMatched(props) {
  let { somethingID } = props;
  return (
    <div className="mt-8 py-8 border-t-2">
      <h2 className="text-center font-semibold">
        Matched Study Planner{" "}
        <span className="text-red-500">of {somethingID}</span>
      </h2>
      <div className="flex justify-center mt-8">
        <div className="monday flex flex-col item-center mx-4">
          <p className="text-center mb-1 underline">Monday</p>
          <div className="border rounded-2xl p-4">
            <div className="bg-blue-500 py-2 w-full text-center text-white text-xl rounded-xl relative">
              Online
              <span className="text-black italic text-xs absolute bottom-3 right-4">
                55 mins
              </span>
            </div>
            <ul className="flex flex-col items-center px-4 mt-1">
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Background Disscussion</span>
                <span className="italic text-gray-400 text-xs">10 mins</span>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Background Disscussion</span>
                <span className="italic text-gray-400 text-xs">10 mins</span>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Comprehenstion Check</span>
                <span className="italic text-gray-400 text-xs">10 mins</span>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Open Discusstion</span>
                <span className="italic text-gray-400 text-xs">20 mins</span>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Grammar Point</span>
                <span className="italic text-gray-400 text-xs">15 mins</span>
              </li>
            </ul>
            <div className="bg-blue-500 py-2 w-full text-center text-white text-xl rounded-xl relative mt-4">
              LAB
              <span className="text-black italic text-xs absolute bottom-3 right-4">
                35 mins
              </span>
            </div>
            <ul className="flex flex-col items-center px-4 mt-1">
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Transilation Test</span>
                <span className="italic text-gray-400 text-xs">15 mins</span>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Test Clinic</span>
                <span className="italic text-gray-400 text-xs">20 mins</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="wednesday flex flex-col item-center mx-4">
          <p className="text-center mb-1 underline">Wednesday</p>
          <div className="border rounded-2xl p-4">
            <div className="bg-blue-500 py-2 w-full text-center text-white text-xl rounded-xl relative">
              Coaching
              <span className="text-black italic text-xs absolute bottom-3 right-4">
                70 mins
              </span>
            </div>
            <ul className="flex flex-col items-center px-4 mt-1">
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Reading Shadowing</span>
                <span className="italic text-gray-400 text-xs">5 mins</span>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Comprehension</span>
                <span className="italic text-gray-400 text-xs">5 mins</span>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">R/C Mark</span>
                <span className="italic text-gray-400 text-xs">5 mins</span>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Reading Video</span>
                <span className="italic text-gray-400 text-xs">15 mins</span>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Grammar Point</span>
                <span className="italic text-gray-400 text-xs">10 mins</span>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Translation</span>
                <span className="italic text-gray-400 text-xs">10 mins</span>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Reading Presentation</span>
                <span className="italic text-gray-400 text-xs">25 mins</span>
              </li>
              <li className="my-1 p-2 border rounded-xl w-full flex justify-between items-center">
                <span className="mr-2">Textbook</span>
                <span className="italic text-gray-400 text-xs">5 mins</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
