import React from "react";
import { Outlet } from "react-router-dom";
import Journal from "../components/Journal"

function JournalPage() {
    return(
        <div className="font-josefin w-screen">
            <Journal/>
            <div><Outlet/></div>
        </div>
    );
};

export default JournalPage;