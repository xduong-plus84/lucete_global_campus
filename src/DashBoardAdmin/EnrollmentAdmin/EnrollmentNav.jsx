import React from "react";
import { NavLink } from "react-router-dom";

export default function EnrollmentNav() {
  let activeStyle = {
    background: "rgb(59, 130, 246)",
    color: "white",
  };

  const navLinkStyle =
    "flex justify-center items-center w-1/12 font-semibold rounded hover:bg-blue-500 hover:text-white duration-500";

  return (
    <div
      id="EnrollmentNav"
      className="flex flex-wrap items-center justify-center text-gray-800 mt-4 divide-x-2 mb-8"
    >
      <NavLink
        to={"/dash-board-admin/enrollment/application-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Application Management
        </div>
      </NavLink>
      <NavLink
        to={"/dash-board-admin/enrollment/history"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          History
        </div>
      </NavLink>
    </div>
  );
}
