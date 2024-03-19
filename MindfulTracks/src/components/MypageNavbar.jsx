import React from "react";
import { Link } from "react-router-dom";

function MypageNavbar() {
    return(
        <div className="flex text-emerald-800 sm:flex-col lg:flex-col xl:flex-col justify-start items-center xl:w-80 sm:w-64 h-screen bg-amber-50 xl:text-4xl lg:text-3xl sm:text-3xl px-16 font-amatic">
            <button className="w-80 my-20 xl:text-5xl sm:text-4xl font-bold">Mindful Trackers</button>
            <div>
                <div className="flex flex-col justify-between xl:w-60 sm:w-40 items-start gap-10">
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-3 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600 before:to-green-50 hover:before:w-full hover:before:opacity-100 px-1">
                        <Link to="/MyProfilePage">My profile</Link>
                    </button>
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-3 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600 before:to-green-50 hover:before:w-full hover:before:opacity-100 px-1">
                        <Link to="/WeeklyPlanPage">Weekly plans</Link>
                    </button>
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-3 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600 before:to-green-50 hover:before:w-full hover:before:opacity-100 px-1">
                        <Link to="/SleepPage">Sleep tracker</Link>
                    </button>
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-3 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600 before:to-green-50 hover:before:w-full hover:before:opacity-100 px-1">
                        <Link to="/WorkoutPage">Workout tracker</Link>
                    </button>
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-3 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600 before:to-green-50 hover:before:w-full hover:before:opacity-100 px-1">
                        <Link to="/MoodPage">Mood tracker</Link>
                    </button>
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-3 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600 before:to-green-50 hover:before:w-full hover:before:opacity-100 px-1">
                        <Link to="/JournalPage">Journal your day</Link>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default MypageNavbar;