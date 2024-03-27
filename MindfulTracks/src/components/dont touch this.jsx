// return (
//     <div className="flex items-center p-2 w-screen h-screen bg-gray-50 font-josefin">
//         <div className="border-2 border-emerald-800 bg-white shadow-2xl ml-10 w-7/12 h-5/6 absolute overflow-hidden">
//             <div className='flex justify-between'>
//                 <input
//                     type="date"
//                     className="p-1 mt-2 ml-2 border border-emerald-800 z-30 outline-none"
//                     value={pages[currentPageIndex].leftDate}
//                     onChange={handleLeftDateChange}
//                 />
//             </div>
//             <div className="absolute mt-14 inset-0 z-10" style={{ pointerEvents: 'none' }}>
//                 {Array.from({ length: 19 }, (_, i) => (
//                     <div key={i} className="h-7 border-b border-gray-200" />
//                 ))}
//             </div>
//             <textarea
//                 className="absolute outline-none inset-0 mt-14 w-1/2 h-screen pl-2 pt-1 resize-none text-lg z-0"
//                 value={pages[currentPageIndex].leftText}
//                 onChange={handleLeftInputChange}
//             />

//             <div
//                 className="border-r-2 border-emerald-800 z-20 h-full absolute left-1/2 top-0 transform -translate-x-1/2">
//             </div>

//             <div className='flex justify-between absolute top-0 right-0 w-1/2'>
//                 <input
//                     type="date"
//                     className="p-1 mt-2 ml-2 border border-emerald-800 z-30 outline-none"
//                     value={pages[currentPageIndex].rightDate}
//                     onChange={handleRightDateChange}
//                 />
//                 <textarea
//                     className="absolute outline-none inset-0 mt-14 w-full h-screen pl-2 pt-1 resize-none text-lg z-0"
//                     value={pages[currentPageIndex].rightText}
//                     onChange={handleRightInputChange}
//                 />
//             </div>
//         </div>

//         <div className='flex justify-between w-screen'>
//             <button
//                 className="z-30 p-2 mr-2 ml-2 bg-emerald-800 text-white rounded-xl"
//                 onClick={() => handlePageChange('previous')}>
//                 <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
//                 width="24" height="24" fill="none" viewBox="0 0 24 24">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
//                 </svg>
//             </button>
    
//             <button
//                 className="p-2 z-30 mr-2 ml-2 bg-emerald-800 text-white rounded-xl"
//                 onClick={() => handlePageChange('next')}>
//                 <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
//                 width="24" height="24" fill="none" viewBox="0 0 24 24">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
//                 </svg>
//             </button>
//         </div>

//     </div>
// );
// };
// export default Journal;    


  // const saveToDatabase = async (e) => {
    //     e.preventDefault();

    //     const currentPage = pages[currentPageIndex]
    //     const response = await fetch('http://localhost:8000/journal_your_days', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${localStorage.getItem("token")}`
    //         },
    //         body: JSON.stringify({
    //             journaling_date: currentPage.leftDate,
    //             text: currentPage.leftText
    //         })
    //     });

    //     if (!response.ok) {
    //         // Handle response errors here
    //         console.error('Failed to save sleep tracker data');
    //         } else {
    //         const data = await response.json();
    //         console.log('Sleep tracker saved:', data);
    //         // Handle successful form submission here (e.g., clear the form, show a success message)
    //     }
    // };