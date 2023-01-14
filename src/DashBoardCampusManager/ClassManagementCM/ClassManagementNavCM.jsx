import React from "react";
import { NavLink } from "react-router-dom";

export default function ClassManagementNavCM() {
  let activeStyle = {
    background: "rgb(59, 130, 246)",
    color: "white",
  };
  return (
    <div
      id="ClassManagementNavCM"
      className="flex flex-wrap items-center sm:justify-start text-gray-800 mt-4"
    >
      <NavLink
        to={"/campus-manager/class-management/register"}
        className="flex justify-center items-center w-1/12 font-semibold rounded hover:bg-blue-500 hover:text-white duration-500"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Register
        </div>
      </NavLink>

      <NavLink
        to={"/campus-manager/class-management/setting"}
        className="flex justify-center items-center w-1/12 font-semibold rounded hover:bg-blue-500 hover:text-white duration-500"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Setting
        </div>
      </NavLink>
    </div>
  );
}
