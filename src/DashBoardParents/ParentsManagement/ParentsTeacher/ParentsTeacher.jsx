import { Rate } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { dataParentTeacher } from "./dataParentTeacher";

export default function ParentsTeacher() {
  return (
    <div className="flex flex-wrap">
      {dataParentTeacher.map((item, index) => {
        return (
          <div
            key={index}
            className="max-w-lg w-1/2 p-6 m-6 space-y-12 bg-gray-100 text-gray-900 rounded-lg"
          >
            <div className="border-gray-300">
              <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  className="self-center flex-shrink-0 w-32 h-32 border rounded-full md:justify-self-start bg-gray-500 shadow-md"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p>
                    <span className="font-semibold">Class: </span>
                    {item.class}
                  </p>
                  <Rate disabled defaultValue={item.star} />
                  <NavLink
                    to={`/dash-board-teacher/${item.ma}`}
                    className="inline-flex items-center py-2 space-x-2 text-sm font-bold text-red-600 hover:text-blue-500"
                  >
                    <span>Click to see profile</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
