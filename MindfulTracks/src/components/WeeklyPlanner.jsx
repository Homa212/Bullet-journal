import React, { useState } from 'react';

const WeeklyPlanner = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const startOfWeek = (date) => {
    const day = date.getDay() || 7;
    if (day !== 1) date.setHours(-24 * (day - 1));
    return date;
  };

  const changeWeek = (increment) => {
    const newDate = new Date(weekStartDate);
    newDate.setDate(newDate.getDate() + (7 * increment));
    setWeekStartDate(newDate);
  };

  const getISOWeek = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
    const yearStart = new Date(d.getFullYear(), 0, 1);
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  };

  const days = [];
  const currentDate = new Date(weekStartDate);
  for (let i = 0; i < 7; i++) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return (
    <div>
      <div className="flex flex-col px-10 py-10 text-2xl font-josefin">
        <div className="flex justify-between items-center mb-4 font-medium">
          <button onClick={() => changeWeek(-1)}>Previous Week</button>
          <h2>Week {getISOWeek(weekStartDate)}</h2>
          <button onClick={() => changeWeek(1)}>Next Week</button>
        </div>
        <div className="grid grid-cols-4 gap-3 h-fit">
          {days.map((day, index) => (
            <div key={index} className="p-4 mt-4 text-center rounded-lg bg-gradient-to-b from--900 via-white to-white flex flex-col border shadow-md">
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
              ></textarea>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyPlanner;


// import React, { useState } from 'react';

// // Define the LinedPaper component separately
// const LinedPaper = () => {
//   const [content, setContent] = useState('');

//   const handleInput = (e) => {
//     const inputValue = e.target.innerText;
//     if (inputValue.length <= 100) {
//       setContent(inputValue);
//     }
//   };

//   return (
//     <div className="lined-paper h-48">
//       <div className="lines">
//         {/* Lines */}
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </div>
//       {/* Contenteditable div for user input */}
//       <div
//         className="user-input"
//         contentEditable="true"
//         placeholder="Start typing..."
//         onInput={handleInput}
//       >{content}</div>
//     </div>
//   );
// };

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
//       <div className="flex flex-col border px-10 py-10 text-2xl font-josefin">
//         <div className="flex justify-between items-center mb-4">
//           <button onClick={() => changeWeek(-1)}>Previous Week</button>
//           <h2>Week {getISOWeek(weekStartDate)}</h2>
//           <button onClick={() => changeWeek(1)}>Next Week</button>
//         </div>
//         <div className="grid grid-cols-4 h-fit">
//           {days.map((day, index) => (
//             <div key={index} className="p-4 text-center flex flex-col ">
//               <h3 className="font-bold">{day.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
//               <p className="text-lg mb-2">{day.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
//               <hr />
//               {/* <input className="border my-4 h-52" type="text" maxLength={100} /> */}
//               <LinedPaper />
//             </div>
//           ))}
//           {/* Include the LinedPaper component */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeeklyPlanner;
