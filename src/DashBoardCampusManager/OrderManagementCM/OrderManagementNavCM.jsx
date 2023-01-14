import React from "react";
import { NavLink } from "react-router-dom";

const url = "/campus-manager/order-management";

export default function OrderManagementNavCM() {
  const navLinkStyle =
    "flex justify-center items-center w-1/12 font-semibold rounded hover:bg-blue-500 hover:text-white duration-500";

  let activeStyle = {
    background: "rgb(59, 130, 246)",
    color: "white",
  };
  return (
    <div
      id="OrderManagementNavCM"
      className="flex flex-wrap items-center justify-center text-gray-800 mt-4 divide-x-2"
    >
      <NavLink
        to={`${url}/order`}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">Order</div>
      </NavLink>
      <NavLink
        to={`${url}/history`}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          History
        </div>
      </NavLink>
      <NavLink
        to={`${url}/setting`}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Setting
        </div>
      </NavLink>
    </div>
  );
}
