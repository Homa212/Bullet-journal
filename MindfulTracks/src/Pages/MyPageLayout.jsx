import React from "react";
import MypageNavbar from "../components/MypageNavbar";
import { Outlet } from "react-router-dom";

function MyPageLayout() {
    return (
      <div className="flex flex-col sm:flex-row fixed overflow-y-auto h-screen">
        <MypageNavbar/>
        <div className="overflow-y-auto">
          <Outlet/>
        </div>
      </div>
  
    );
  };
  
  export default MyPageLayout;