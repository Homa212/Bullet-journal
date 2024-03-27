import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return(
        <div className="flex justify-between w-screen h-fit bg-green-800 font-amatic text-white text-2xl py-8 px-40">
            <Link to="/LandingPage" className="text-4xl">Mindful Trackers</Link>
            <div className="text-3xl">
                <div className="flex justify-around gap-10">
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-white before:via-amber-50 before:to-green-800 hover:before:w-full hover:before:opacity-100 px-1">
                        About</button>
                    <button className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-white before:via-amber-50 before:to-green-800 hover:before:w-full hover:before:opacity-100 px-1">
                        Contact us</button>
                    <div className="flex justify-between gap-3">
                        <Link to="LoginPage" className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-white before:via-amber-50 before:to-green-800 hover:before:w-full hover:before:opacity-100 px-1">
                            Log in</Link>
                        <p>/</p>
                        <Link to="RegisterPage" className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-white before:via-amber-50 before:to-green-800 hover:before:w-full hover:before:opacity-100 px-1">
                            Sign up</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;