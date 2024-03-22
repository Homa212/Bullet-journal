// import React, { useState } from 'react';

// const WeeklyPlanner = () => {
//   const [weekStartDate, setWeekStartDate] = useState(new Date());

//   const startOfWeek = (date) => {
//     const day = date.getDay() || 7;
//     if (day !== 1) date.setHours(-24 * (day - 1));
//     return date;
//   };

//   const changeWeek = (increment) => {
//     const newDate = new Date(weekStartDate);
//     newDate.setDate(newDate.getDate() + (7 * increment));

//     setWeekStartDate(newDate);
//   };

//   const getISOWeek = (date) => {
//     const d = new Date(date);
//     d.setHours(0, 0, 0, 0);
//     d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
//     const yearStart = new Date(d.getFullYear(), 0, 1);
//     return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
//   };

//   const days = [];
//   const currentDate = new Date(weekStartDate);
//   for (let i = 0; i < 7; i++) {
//     days.push(new Date(currentDate));
//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return (
//     <div>
//       <div className="flex flex-col sm:px-5 md:px-10 py-10 xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-josefin">
//         <div className="flex justify-between items-center mb-4 font-semibold">
          
//           <button onClick={() => changeWeek(-1)} className="relative flex gap-3 items-center cursor-pointer transition-all duration-500 before:content-['']
//           before:absolute before:-bottom-1 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0
//           before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600
//           before:to-green-50 hover:before:w-full hover:before:opacity-100 px-1">
//           <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
//           height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
//           </svg>Previous Week</button>
          
//           <h2>Week {getISOWeek(weekStartDate)}</h2>

//           <button onClick={() => changeWeek(1)} className="relative flex gap-3 items-center cursor-pointer transition-all duration-500 before:content-['']
//           before:absolute before:-bottom-1 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0
//           before:transistion-all before:duration-500 before:bg-gradient-to-l before:from-emerald-700 before:via-emerald-600
//           before:to-green-50 hover:before:w-full hover:before:opacity-100 px-1 ">
//           Next Week<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
//           height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
//           </svg></button>
//         </div>

//         <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full gap-3 h-fit">
//           {days.map((day, index) => (
//             <div key={index} className="p-4 mt-4 text-center flex flex-col border-2 border-emerald-800 shadow-lg">
//               <div className="rounded-lg p-2">
//                 <h3 className="font-bold">{day.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
//                 <p className="text-lg mb-2">{day.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
//               </div>
//               <hr />
//               <textarea
//                 className="p-1 border-none resize-none rounded-lg outline-none my-4"
//                 rows={4}
//                 maxLength={150}
//                 placeholder="What's happening today?"
//               ></textarea>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeeklyPlanner;


import React, { useState, useEffect } from 'react';

const WeeklyPlanner = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [inputs, setInputs] = useState({}); // Step 1: State for storing inputs

  // Step 2: Debounce function
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    // Initialize inputs state with empty strings for each day of the week
    const initialInputs = {};
    const currentDate = new Date(weekStartDate);
    for (let i = 0; i < 7; i++) {
      initialInputs[currentDate.toISOString().split('T')[0]] = '';
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setInputs(initialInputs);
  }, [weekStartDate]);

  // Step 3: Save function (placeholder)
  const saveToDatabase = (day, value) => {
    console.log(`Saving '${value}' for ${day} to the database`);
    // Implement actual save logic here
  };

  const handleInputChange = (day, value) => {
    setInputs((prev) => ({ ...prev, [day]: value }));
    debounceSave(day, value);
  };

  // Debounced save operation
  const debounceSave = debounce(saveToDatabase, 5000);

  const days = [];
  const currentDate = new Date(weekStartDate);
  for (let i = 0; i < 7; i++) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return (
    <div>
      {/* UI Code (unchanged) */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full gap-3 h-fit">
        {days.map((day, index) => (
          <div key={index} className="p-4 mt-4 text-center flex flex-col border-2 border-emerald-800 shadow-lg">
            <div className="rounded-lg p-2">
              <h3 className="font-bold">{day.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
              <p className="text-lg mb-2">{day.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
            </div>
            <hr />
            <textarea
              className="p-1 border-none resize-none rounded-lg outline-none my-4"
              rows={4}
              maxLength={150}
              placeholder="What's happening today?"
              value={inputs[day.toISOString().split('T')[0]] || ''}
              onChange={(e) => handleInputChange(day.toISOString().split('T')[0], e.target.value)}
            ></textarea>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyPlanner;