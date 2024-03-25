// const WeeklyPlanner = () => {
//   const [weekStartDate, setWeekStartDate] = useState(new Date());
//   const [dayPlan, setDayPlan] = useState([]);

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

  // async function saveWeeklyPlanner() {
  //   try {
  //     const response = await fetch("http://localhost:8000/weekly_plans");
  //     const data = await response.json();
  //     console.log(data);
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     setDayPlan(data);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }
  //   useEffect(() => {
  //     saveWeeklyPlanner();
  //   }, []);

  
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
//                 value={dayPlan}
//                 onChange={(e) => setDayPlan(e.target.value)}
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




// return (

//   <div className="flex">
//       <div className="max-w-xl mx-auto z-10">
//           <form className="bg-white h-fit px-8 pt-6 pb-8 text-lg flex gap-10 font-josefin shadow-lg">
//               <div className="flex flex-col">
//                   <div className="mb-4">
//                       <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
//                           Date
//                       </label>
//                       <input
//                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                           id="date"
//                           type="date"
//                           placeholder="Select date"
//                       />
//                   </div>
//                   <div className="mb-4">
//                   <label className="block text-gray-700  font-bold mb-2" htmlFor="bedtime">
//                       Bed Time
//                   </label>
//                   <input
//                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       id="bedtime"
//                       type="time"
//                       placeholder="Bed Time"
//                   /> 
//                   </div> 
//                   <div className="mb-4">
//                   <label className="block text-gray-700  font-bold mb-2" htmlFor="waketime">
//                       Wake Time
//                   </label>
//                   <input
//                       className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       id="waketime"
//                       type="time"
//                       placeholder="Wake Time"
//                   />
//                   </div>
//                   <div className="mb-4">
//                   <label className="block text-gray-700 font-bold mb-2" htmlFor="sleepquality">
//                       Sleep Quality
//                   </label>
//                   <select
//                       className="shadow font-josefin border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       id="sleepquality"
//                   >
//                       <option value="Excellent">Excellent</option>
//                       <option value="Good">Good</option>
//                       <option value="Fair">Fair</option>
//                       <option value="Poor">Poor</option>
//                   </select>
//                   </div>
//                   <div className="flex items-center justify-between">
//                   <button
//                       className="mt-3 flex justify-center w-full px-4 py-2 font-bold text-black border font-josefin border-emerald-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-800 transition-transform  hover:scale-110"
//                       type="submit"
//                   >
//                       Save
//                   </button>
//                   </div>
//               </div>
//               <div>
//                   <p className="font-bold">Notes</p>
//                   <Notes/>
//               </div>
//           </form>
//       </div>
//   </div>
// );
// }

// export default SleepTracker;





















  // function SleepTracker() {


    // const[sleepTracker, setSleepTracker] = useState([]);
    // const[deleteModalOpen, setDeleteModalOpen] = useState(false);
    // const [selectedSleepId, setSelectedSleepId] = useState(null);

    // //   Adding a sleep tracker
    // const [showAddModal, setShowAddModal] = useState(false);
    // const [sleepQuality, setSleepQuality] = useState("");
    // const [startTime, setStartTime] = useState("");
    // const [endTime, setEndTime] = useState("");
    // const [notes, setNotes] = useState("");

    // function calculateSleepingTime(startTime, endTime) {
    //     // Convert start time and end time to Date objects
    //     const startDate = new Date(${startTime});
    //     const endDate = new Date(${endTime});
    
    //     // Calculate the time difference in milliseconds
    //     let timeDiff = endDate - startDate;
    
    //     // Convert milliseconds to hours and minutes
    //     let hours = Math.floor(timeDiff / (1000 * 60 * 60));
    //     let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    
    //     // Return the calculated hours and minutes
    //     return { hours, minutes };
    
    // // // Error state variables
    // // const [nameError, setNameError] = useState("");


    // async function fetchCourses() {
    //     try {
    //     const response = await fetch("http://localhost:8000/course");
    //     const data = await response.json();
    //     console.log(data);
    //     setCourses(data);
    //     console.log("In useeffect");
    //     } catch (error) {
    //     console.log(error);
    //     }
    // }

    // function deleteCourseFromState(courseId) {
    //     const newCourses = courses.filter((course) => course.id !== courseId);
    //     setCourses(newCourses);
    // }

    // async function deleteCourse(courseId) {
    //     try {
    //     const response = await fetch(
    //         `http://localhost:8000/course/${courseId}`,
    //         { method: "DELETE" }
    //     );
    //     // check for error response
    //     if (!response.ok) {
    //         // get error message from body or default to response status
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     deleteCourseFromState(courseId);
    //     } catch (error) {
    //     console.log(error);
    //     }
    // }
    // //  FETCH ONLY ONCE!
    // useEffect(() => {
    //     fetchCourses();
    // }, []);

    // function validateForm() {
    //     let isValid = true;
    //     // Reset error messages
    //     setNameError("");

    //     // Name validation
    //     if (!name.trim()) {
    //     setNameError("Du måste skriva ett namn på kursen");
    //     isValid = false;
    //     }

    //     return isValid;
    // }

    // const addCourseSubmit = async (event) => {
    //     event.preventDefault();
    //     let isValid = validateForm();

    //     if (isValid) {
    //     try {
    //         const response = await fetch("http://localhost:8000/v1/user/course", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             name,
    //             credits: credits ? parseInt(credits, 10) : null, // Ensure credits is an integer or null
    //             start_date: startDate || null,
    //             end_date: endDate || null,
    //             description,
    //         }),
    //         });

    //         if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //         }

    //         // Handle success - you might want to close the modal and refresh the courses list
    //         setShowAddModal(false);
    //     } catch (error) {
    //         console.error("Failed to add course:", error);
    //     }
    //     }
    // };