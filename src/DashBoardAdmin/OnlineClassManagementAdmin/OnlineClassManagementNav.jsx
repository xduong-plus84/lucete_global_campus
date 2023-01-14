import React from "react";
import { NavLink } from "react-router-dom";

export default function OnlineClassManagementNav() {
  let activeStyle = {
    background: "rgb(59, 130, 246)",
    color: "white",
  };

  const navLinkStyle =
    "flex justify-center items-center w-1/12 px-2 font-semibold rounded hover:bg-blue-500 hover:text-white duration-500";

  return (
    <div
      id="OnlineClassManagementNav"
      className="flex flex-wrap items-center sm:justify-start text-gray-800 mt-4"
    >
      <NavLink
        to={"/dash-board-admin/online-class-management/online-class-register"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Register
        </div>
      </NavLink>
      <NavLink
        to={"/dash-board-admin/online-class-management/online-class-list"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">List</div>
      </NavLink>
      <NavLink
        to={
          "/dash-board-admin/online-class-management/online-class-academic-calender"
        }
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Academic Calendar
        </div>
      </NavLink>
      <NavLink
        to={"/dash-board-admin/online-class-management/online-class-setting"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Class Settings
        </div>
      </NavLink>
    </div>
  );
}
