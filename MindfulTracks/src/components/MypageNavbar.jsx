import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function MypageNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        
        <div className="font-amatic">
            <div className="text-emerald-800 sm:px-4 flex sm:flex-col sm:justify-start sm:pt-20 w-screen sm:w-fit h-fit sm:h-screen bg-amber-50 xl:text-4xl sm:text-3xl">
                {/* laptop menu */}
                <div className="hidden sm:flex sm:flex-col xl:w-60 sm:w-48 xl:pl-0 sm:pl-2 sm:items-start gap-10">
                    <button className="xl:text-5xl sm:text-4xl font-bold">Mindful Trackers</button>
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

                {/* hamburger menu */}
                <div className="sm:hidden w-screen flex justify-between px-5">
                    <button className="my-5 text-4xl font-bold">Mindful Trackers</button>
                    <button className='group sm:hidden' onClick={toggleMenu}>
                        <svg class="w-12 relative h-12 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
                    
                        {/* menu */}
                        <ul className={`bg-amber-50 mt-20 w-fit z-10 text-4xl p-5 pt-0 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                            {/* <button className='px-10 py-8 relative ml-auto'>
                                <div className='w-6 h-1 rotate-45 absolute bg-black'></div>
                                <div className='w-6 h-1 -rotate-45 absolute bg-black'></div>
                            </button> */}
                            <div className="flex flex-col justify-between xl:w-60 sm:w-40 items-start gap-5">
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
                        </ul>
                    </button>
                </div>            
            </div>
        </div>
    );
};

export default MypageNavbar;