import React, { useState } from 'react';
import Notes from "../components/Notes";


function SleepTracker() {

//     const[sleepTracker, setSleepTracker] = useState([]);
//     const[deleteModalOpen, setDeleteModalOpen] = useState(false);
//     const [selectedSleepeId, setSelectedSleepId] = useState(null);

//     //   Adding a course
//     const [showAddModal, setShowAddModal] = useState(false);
//     const [name, setName] = useState("");
//     const [credits, setCredits] = useState("");
//     const [startDate, setStartDate] = useState("");
//     const [endDate, setEndDate] = useState("");
//     const [description, setDescription] = useState("");

//     // Error state variables
//     const [nameError, setNameError] = useState("");

//     async function fetchCourses() {
//         try {
//         const response = await fetch("http://localhost:8000/course");
//         const data = await response.json();
//         console.log(data);
//         setCourses(data);
//         console.log("In useeffect");
//         } catch (error) {
//         console.log(error);
//         }
//     }

//     function deleteCourseFromState(courseId) {
//         const newCourses = courses.filter((course) => course.id !== courseId);
//         setCourses(newCourses);
//     }

//     async function deleteCourse(courseId) {
//         try {
//         const response = await fetch(
//             `http://localhost:8000/course/${courseId}`,
//             { method: "DELETE" }
//         );
//         // check for error response
//         if (!response.ok) {
//             // get error message from body or default to response status
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         deleteCourseFromState(courseId);
//         } catch (error) {
//         console.log(error);
//         }
//     }
//     //  FETCH ONLY ONCE!
//     useEffect(() => {
//         fetchCourses();
//     }, []);

//     function validateForm() {
//         let isValid = true;
//         // Reset error messages
//         setNameError("");

//         // Name validation
//         if (!name.trim()) {
//         setNameError("Du måste skriva ett namn på kursen");
//         isValid = false;
//         }

//         return isValid;
//     }

//     const addCourseSubmit = async (event) => {
//         event.preventDefault();
//         let isValid = validateForm();

//         if (isValid) {
//         try {
//             const response = await fetch("http://localhost:8000/v1/user/course", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 name,
//                 credits: credits ? parseInt(credits, 10) : null, // Ensure credits is an integer or null
//                 start_date: startDate || null,
//                 end_date: endDate || null,
//                 description,
//             }),
//             });

//             if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             // Handle success - you might want to close the modal and refresh the courses list
//             setShowAddModal(false);
//         } catch (error) {
//             console.error("Failed to add course:", error);
//         }
//         }
//     };

  return (

    <div className="flex">
        <div className="max-w-xl mx-auto z-10">
            <form className="bg-white h-fit px-8 pt-6 pb-8 text-lg flex gap-10 font-josefin shadow-lg">
                <div className="flex flex-col">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
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
                    <label className="block text-gray-700  font-bold mb-2" htmlFor="bedtime">
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
                    <label className="block text-gray-700  font-bold mb-2" htmlFor="waketime">
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
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="sleepquality">
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
                        className="mt-3 flex justify-center w-full px-4 py-2 font-bold text-black border font-josefin border-emerald-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-800 transition-transform  hover:scale-110"
                        type="submit"
                    >
                        Save
                    </button>
                    </div>
                </div>
                <div>
                    <p className="font-bold">Notes</p>
                    <Notes/>
                </div>
            </form>
        </div>
    </div>
  );
}

export default SleepTracker;

