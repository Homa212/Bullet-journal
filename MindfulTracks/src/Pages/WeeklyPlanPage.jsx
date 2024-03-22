import React from "react";
import { Outlet } from "react-router-dom";
import ToDo from "../components/ToDo";
import WeeklyPlanner from "../components/WeeklyPlanner";

function WeeklyPlanPage() {
    return(
        <div className="overflow-y-auto">
        <WeeklyPlanner/>
        <ToDo/>
        <div>
          <Outlet/>
        </div>
      </div>

    );
};

export default WeeklyPlanPage;