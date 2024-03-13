import React from "react";
import MypageNavbar from "../components/MypageNavbar";
import { Outlet } from "react-router-dom";

function MyPageLayout() {
    return (
      <div>
        <MypageNavbar/>
        <Outlet/>
      </div>
  
    );
  };
  
  export default MyPageLayout;