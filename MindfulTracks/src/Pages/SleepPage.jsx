import React from "react";
import { Outlet } from "react-router-dom";
import SleepTracker from "../components/SleepTracker";
import SleepTrackerGraph from "../components/SleepTrackerGraph";
import Notes from "../components/Notes";

function SleepPage() {
    return(
        <div className="overflow-y-auto flex flex-col w-screen">
            <div className="flex">
                <SleepTracker/>
                <Notes/>
            </div>
            <SleepTrackerGraph/>
            <div>
            <Outlet/>
            </div>
        </div>
    );
};

export default SleepPage;