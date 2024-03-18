import React from "react";
import MypageNavbar from "../components/MypageNavbar";
import { Outlet } from "react-router-dom";

function MyPageLayout() {
    return (
      <div className="relative flex h-screen">
        <MypageNavbar/>
        <div className="">
          <Outlet/>
        </div>
      </div>
  
    );
  };
  
  export default MyPageLayout;