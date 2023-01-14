import React from "react";
import { NavLink } from "react-router-dom";

export default function TeacherManagementNav() {
  let activeStyle = {
    background: "rgb(59, 130, 246)",
    color: "white",
  };

  const navLinkStyle =
    "flex justify-center items-center w-1/12 font-semibold rounded hover:bg-blue-500 hover:text-white duration-500";

  return (
    <div
      id="TeacherManagementNav"
      className="flex flex-wrap items-center justify-center text-gray-800 mt-4 divide-x-2 mb-8"
    >
      <NavLink
        to={"/dash-board-admin/teacher-management/management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Management
        </div>
      </NavLink>
      <NavLink
        to={"/dash-board-admin/teacher-management/assign"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">Assign</div>
      </NavLink>
      <NavLink
        to={"/dash-board-admin/teacher-management/payment"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Payment
        </div>
      </NavLink>
      <NavLink
        to={"/dash-board-admin/teacher-management/class-report"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Class Report
        </div>
      </NavLink>
      <NavLink
        to={"/dash-board-admin/teacher-management/class-feedback"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Class Feedback
        </div>
      </NavLink>
    </div>
  );
}
