import React from "react";
import { Outlet } from "react-router-dom";
import OrderManagementNavCM from "./OrderManagementNavCM";

export default function OrderManagementCM() {
  return (
    <div id="OrderManagementCM">
      <OrderManagementNavCM />
      <Outlet />
    </div>
  );
}
