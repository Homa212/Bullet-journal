import React, { useState } from 'react';

function SleepTracker() {
  // State for form fields (assuming useState hooks will be added)

  return (

    <div className="flex">
        <div className="max-w-xl mx-auto z-10">
          <div className="flex mt-10 items-center">
              <div className="text-4xl text-center font-semibold mb-4 font-josefin">Sleep Tracker</div>
              <svg fill="#21543a" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="81px" height="81px" viewBox="-7.58 -7.58 123.39 123.39" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#21543a" stroke-width="1.515164"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M27.024,108.226c12.138,0,22.542-5.286,31.218-15.856c8.675-10.574,13.011-23.326,13.011-38.256 c0-14.891-4.336-27.629-13.012-38.226C49.566,5.297,39.163,0,27.024,0c14.89,0,27.642,5.297,38.255,15.889 c10.614,10.596,15.922,23.335,15.922,38.225c0,14.93-5.308,27.682-15.922,38.254C54.667,102.939,41.915,108.226,27.024,108.226z"></path> </g> </g></svg>
          </div>
          <form className="bg-white px-8 pt-6 pb-8 mb-4 font-josefin border-2 border-emerald-800 shadow-lg">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                    Date
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="date"
                    type="date"
                    placeholder="Select date"
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bedtime">
                    Bed Time
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="bedtime"
                    type="time"
                    placeholder="Bed Time"
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="waketime">
                    Wake Time
                </label>
                <input
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="waketime"
                    type="time"
                    placeholder="Wake Time"
                />
                </div>
            
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sleepquality">
                    Sleep Quality
                </label>
                <select
                    className="shadow font-josefin border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="sleepquality"
                >
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                </select>
                </div>
            
                <div className="flex items-center justify-between">
                <button
                    className="mt-3 flex justify-center w-full px-4 py-2 text-sm font-bold text-black border font-josefin border-emerald-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-800 transition-transform  hover:scale-110"
                    type="submit"
                >
                    Save
                </button>
                </div>
          </form>
        </div>
    </div>
  );
}

export default SleepTracker;

