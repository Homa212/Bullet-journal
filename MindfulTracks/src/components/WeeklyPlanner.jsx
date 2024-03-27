import React, { useState, useEffect } from 'react';

const startOfWeek = (date) => {
  const day = date.getDay() || 7;
  if (day !== 1) date.setHours(-24 * (day - 1));
  return date;
};

const getISOWeek = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
  const yearStart = new Date(d.getFullYear(), 0, 1);
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
};

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

const WeeklyPlanner = () => {
  const [weekStartDate, setWeekStartDate] = useState(startOfWeek(new Date())); // Initialize with the start of the current week
  const [inputs, setInputs] = useState({});

  const isUpdate = async (day) => {
    const formattedDate = day.toISOString().split('T')[0];
    const url = `/weekly_plans/${formattedDate}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const weeklyPlanData = await response.json();
      return !!weeklyPlanData;
    } catch (error) {
      console.error('Error checking for existing entry:', error);
      return false;
    }
  };


  useEffect(() => {
    const initialInputs = {};
    const todayDate = startOfWeek(new Date(weekStartDate)); // Renamed currentDate to todayDate
    for (let i = 0; i < 7; i++) {
      initialInputs[todayDate.toISOString().split('T')[0]] = '';
      todayDate.setDate(todayDate.getDate() + 1);
    }
    setInputs(initialInputs);
  }, [weekStartDate]);

  const saveToDatabase = async (day, value) => {
    const formattedDate = day.toISOString().split('T')[0];
    const url = isUpdate(day) ? `/weekly_plans/${formattedDate}` : '/weekly_plans';
    const method = isUpdate(day) ? 'PUT' : 'POST';
    const data = {
      weekday: formattedDate,
      daily_text: value
    };

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log(`Saving '${value}' for ${formattedDate} to the database`, responseData);
    } catch (error) {
      console.error('Error saving to database:', error);
    }
  };

  const handleInputChange = (day, value) => {
    setInputs((prev) => ({ ...prev, [day]: value }));
    debounceSave(day, value); // Corrected function call
  };

  const debounceSave = debounce(saveToDatabase, 5000);

  const changeWeek = (increment) => {
    const newDate = new Date(weekStartDate);
    newDate.setDate(newDate.getDate() + (increment * 7)); // Change by one week
    setWeekStartDate(newDate);
  };

  const days = [];
  const todayDate = startOfWeek(new Date(weekStartDate));
  for (let i = 0; i < 7; i++) {
    days.push(new Date(todayDate));
    todayDate.setDate(todayDate.getDate() + 1);
  }

  return (
    <div>
      <div className="flex flex-col sm:px-5 md:px-10 py-10 xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-josefin">
        <div className="flex justify-between items-center mb-4 font-semibold">
          <button onClick={() => changeWeek(-1)} className="relative flex gap-3 items-center cursor-pointer transition-all duration-500 before:content-['']
          before:absolute before:-bottom-1 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0
          before:transistion-all before:duration-500 before:bg-gradient-to-r before:from-emerald-700 before:via-emerald-600
          before:to-green-50 hover:before:w-full hover:before:opacity-100 px-1">
          <svg class="w-6 h-6 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
          </svg>Previous Week</button>
          
          <h2>Week {getISOWeek(weekStartDate)}</h2>

          <button onClick={() => changeWeek(1)} className="relative flex gap-3 items-center cursor-pointer transition-all duration-500 before:content-['']
          before:absolute before:-bottom-1 before:-left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0
          before:transistion-all before:duration-500 before:bg-gradient-to-l before:from-emerald-700 before:via-emerald-600
          before:to-green-50 hover:before:w-full hover:before:opacity-100 px-1 ">
          Next Week<svg class="w-6 h-6 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
          </svg></button>
        </div>

        <div className="grid resize-none xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full gap-3 h-fit">
          {days.map((day, index) => (
            <div key={index} className={`p-4 mt-4 text-center flex flex-col border-2 border-emerald-800 shadow-lg ${new Date().toDateString() === day.toDateString() ? 'bg-amber-50 border-[3px] border-emerald-800' : ''}`}>
              <div className="rounded-lg p-2">
                <h3 className="font-bold">{day.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
                <p className="text-lg mb-2">{day.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
              </div>
              <hr />
              <textarea
                value={inputs[day.toISOString().split('T')[0]] || ''}
                onChange={(e) => handleInputChange(day.toISOString().split('T')[0], e.target.value)}
                className="p-1 border-none text-xl resize-none rounded-lg outline-none my-4 bg-transparent"
                rows={4}
                maxLength={150}
                placeholder="What's happening today?"
              ></textarea>
              {index === 7 && (
                <img src="" alt="" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyPlanner;