import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import AdminNav from "./AdminNav";

export default function AdminLayout(props) {
  return (
    <div className="h-screen">
      <Header />
      <AdminNav />
      <div className="p-8">
        <Outlet />
      </div>
    </div>
  );
}
