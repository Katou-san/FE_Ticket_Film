import React from "react";
import "./PageMain.css";
import { Outlet } from "react-router-dom";
export default function PageMain() {
  return (
    <div className="Main_Layout">
      <Outlet />
    </div>
  );
}
