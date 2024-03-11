import React from "react";

function Navbar() {
    return(
        <div className="flex justify-between w-screen h-fit bg-green-800 text-white text-2xl py-8 px-40">
            <button className="text-4xl">Mindful Trackers</button>
            <div className="flex justify-around gap-10">
                <button>About</button>
                <button>Contact us</button>
                <div className="flex justify-between gap-3">
                    <button>Log in</button>
                    <button>Sign up</button>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;