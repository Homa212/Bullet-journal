import React, { useState } from 'react';

export default function Checkbox() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return(
        <div className="-mt-1 py-1 pl-1 flex justify-between w-full">
           <button className="w-6 h-6 border-2 border-emerald-800 mt-1 bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-white
               checked:bg-white checked:border-2 disabled:border-steel-400 disabled:bg-steel-400">
               <svg className="hidden" onClick={toggleMenu} width="20px" height="" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g
               id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g
               id="SVGRepo_iconCarrier"><path fill="#124926" d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"></path></g></svg></button>
           </div>
    );
};
