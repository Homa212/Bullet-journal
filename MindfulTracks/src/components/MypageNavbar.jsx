import React from "react";
import { Link } from "react-router-dom";

function MypageNavbar() {
    return(
        <div className="flex text-emerald-800 flex-col justify-start font-display items-center w-fit h-screen bg-amber-50 text-2xl py-8 px-16">
            <button className="text-4xl my-20">Mindful Trackers</button>
            <div>
                <div className="flex flex-col justify-between items-start gap-10">
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-3 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600 before:to-green-50 hover:before:w-full hover:before:opacity-100 px-4">
                        <Link to="/MyProfilePage">My profile</Link>
                    </button>
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-3 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600 before:to-green-50 hover:before:w-full hover:before:opacity-100 px-4">
                        <Link to="/WeeklyPlanPage">Weekly plans</Link>
                    </button>
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-3 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600 before:to-green-50 hover:before:w-full hover:before:opacity-100 px-4">
                        <Link to="/SleepPage">Sleep tracker</Link>
                    </button>
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-3 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600 before:to-green-50 hover:before:w-full hover:before:opacity-100 px-4">
                        <Link to="/WorkoutPage">Workout tracker</Link>
                    </button>
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-3 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600 before:to-green-50 hover:before:w-full hover:before:opacity-100 px-4">
                        <Link to="/MoodPage">Mood tracker</Link>
                    </button>
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-3 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600 before:to-green-50 hover:before:w-full hover:before:opacity-100 px-4">
                        <Link to="/JournalPage">Journal your day</Link>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default MypageNavbar;