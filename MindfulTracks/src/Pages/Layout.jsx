import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <div className="relative h-screen">
      <Navbar/>
      <Outlet/>
    </div>

  );
};

export default Layout;
