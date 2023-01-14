import React from "react";
import { Outlet } from "react-router-dom";
import OrderManagementNav from "./OrderManagementNav";

export default function OrderManagementAdmin() {
  return (
    <div id="OrderManagementAdmin">
      <OrderManagementNav />
      <Outlet />
    </div>
  );
}
