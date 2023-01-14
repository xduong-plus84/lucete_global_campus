import React from "react";
import { Outlet } from "react-router-dom";
import ProductManagementNav from "./ProductManagementNav";

export default function ProductManagementAdmin() {
  return (
    <div id="ProductManagementAdmin">
      <ProductManagementNav />
      <Outlet />
    </div>
  );
}
