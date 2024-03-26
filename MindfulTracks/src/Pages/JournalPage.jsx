import React from "react";
import { Outlet } from "react-router-dom";
import Textbook from "../components/Journal"

function JournalPage() {
    return(
        <div className="font-josefin">
            <Textbook/>
            <div><Outlet/></div>
        </div>
    );
};

export default JournalPage;