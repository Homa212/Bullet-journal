import React from "react";
import { Outlet } from "react-router-dom";
import SleepTracker from "../components/SleepTracker";
import SleepTrackerGraph from "../components/SleepTrackerGraph";
import SleepDashboard from "../components/SleepDashboard";

function SleepPage() {
    return(
        <div className="overflow-y-auto w-screen">
            <div className="font-josefin flex flex-col items-start gap-5 mt-10 ml-10">
                <div className="flex justify-start items-end">
                    <div className="text-4xl text-center font-semibold mb-4 font-josefin">Sleep Tracker</div>
                    <svg fill="#21543a" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="81px" height="81px" viewBox="-7.58 -7.58 123.39 123.39" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#21543a" stroke-width="1.515164"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M27.024,108.226c12.138,0,22.542-5.286,31.218-15.856c8.675-10.574,13.011-23.326,13.011-38.256 c0-14.891-4.336-27.629-13.012-38.226C49.566,5.297,39.163,0,27.024,0c14.89,0,27.642,5.297,38.255,15.889 c10.614,10.596,15.922,23.335,15.922,38.225c0,14.93-5.308,27.682-15.922,38.254C54.667,102.939,41.915,108.226,27.024,108.226z"></path> </g> </g></svg>
                </div>  
                <SleepTracker/>
                <SleepDashboard/>
            </div>
            <SleepTrackerGraph/>
            <div>
            <Outlet/>
            </div>
        </div>
    );
};

export default SleepPage;