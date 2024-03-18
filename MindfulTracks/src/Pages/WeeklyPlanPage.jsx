import React from "react";
import { Outlet } from "react-router-dom";
// import ToDo from "../components/ToDo";
import WeeklyPlanner from "../components/WeeklyPlanner";

function WeeklyPlanPage() {
    return(
        <div className="relative">
        {/* <ToDo/> */}
        <WeeklyPlanner/>
        <div className="">
          <Outlet/>
        </div>
      </div>

    );
};

export default WeeklyPlanPage;