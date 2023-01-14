import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductManagementNav() {
  let activeStyle = {
    background: "rgb(59, 130, 246)",
    color: "white",
  };

  const navLinkStyle =
    "flex justify-center items-center w-1/12 font-semibold rounded hover:bg-blue-500 hover:text-white duration-500";

  return (
    <div
      id="ProductManagementNav"
      className="flex flex-wrap items-center sm:justify-start text-gray-800 mt-4"
    >
      <NavLink
        to={"/dash-board-admin/product-management/product"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Product
        </div>
      </NavLink>
      <NavLink
        to={"/dash-board-admin/product-management/package"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Package
        </div>
      </NavLink>
      <NavLink
        to={"/dash-board-admin/product-management/course"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">Course</div>
      </NavLink>
    </div>
  );
}
