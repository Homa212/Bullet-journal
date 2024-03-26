import React, { useState, useEffect } from 'react';

const Journal = () => {
    const [pages, setPages] = useState([
        { leftText: '', leftDate: '', rightText: '', rightDate: '' },
        { leftText: '', leftDate: '', rightText: '', rightDate: '' }
    ]);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [searchedDate, setSearchedDate] = useState('');
    const [searchedPageIndex, setSearchedPageIndex] = useState(-1); // -1 means not found

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            saveToDatabase();
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [pages, currentPageIndex]);

    const handlePageChange = (direction) => {
        if (direction === 'next') {
            setCurrentPageIndex(currentPageIndex + 1);
            if (currentPageIndex >= pages.length - 1) {
                setPages([...pages, { leftText: '', leftDate: '', rightText: '', rightDate: '' }]);
            }
        } else {
            setCurrentPageIndex(currentPageIndex - 1);
        }
    };

    const handleLeftInputChange = (e) => {
        const updatedPages = [...pages];
        updatedPages[currentPageIndex].leftText = e.target.value;
        setPages(updatedPages);
    };

    const handleRightInputChange = (e) => {
        const updatedPages = [...pages];
        updatedPages[currentPageIndex].rightText = e.target.value;
        setPages(updatedPages);
    };

    const handleLeftDateChange = (e) => {
        const { value } = e.target;
        setPages(prevPages => {
            const updatedPages = [...prevPages];
            updatedPages[currentPageIndex].leftDate = value;
            return updatedPages;
        });
    };

    const handleRightDateChange = (e) => {
        const { value } = e.target;
        setPages(prevPages => {
            const updatedPages = [...prevPages];
            updatedPages[currentPageIndex].rightDate = value;
            return updatedPages;
        });
    };

    const handleSearch = () => {
        const foundPageIndex = pages.findIndex(page => page.leftDate === searchedDate || page.rightDate === searchedDate);
        if (foundPageIndex !== -1) {
            setCurrentPageIndex(foundPageIndex);
            setSearchedPageIndex(foundPageIndex);
        } else {
            setSearchedPageIndex(-1);
        }
    };
    

    const saveToDatabase = async () => {
        const currentPage = pages[currentPageIndex];
        try {
            await fetch('/journal_your_days', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    journaling_date: currentPage.leftDate,
                    text: currentPage.leftText
                })
            });
        } catch (error) {
            console.error('Error saving to database:', error);
        }
    };
    
    return (
        <>
            <div className='flex mt-8 items-center -mb-8'>
                <p className='text-4xl w-1/2 ml-20'>Journal your day</p>
                <svg className='absolute w-2/5 ml-6 mb-3' version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000" stroke="#000000" stroke-width="0.00064" transform="rotate(270)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M32,14.002c-9.941,0-18,8.059-18,18s8.059,18,18,18 s18-8.059,18-18S41.941,14.002,32,14.002z M32,48.002c-8.837,0-16-7.164-16-16s7.163-16,16-16s16,7.164,16,16 S40.837,48.002,32,48.002z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M63,31H53c-0.553,0-1,0.447-1,1s0.447,1,1,1h10 c0.553,0,1-0.447,1-1S63.553,31,63,31z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M11.457,36.469l-3.863,1.035 c-0.534,0.145-0.851,0.693-0.707,1.227c0.143,0.533,0.69,0.85,1.225,0.705l3.863-1.035c0.533-0.143,0.85-0.689,0.707-1.225 C12.539,36.643,11.99,36.326,11.457,36.469z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M49.32,22c0.277,0.479,0.888,0.643,1.367,0.365l8.66-5 c0.479-0.275,0.643-0.887,0.365-1.365c-0.275-0.479-0.887-0.643-1.365-0.365l-8.66,5C49.208,20.912,49.045,21.521,49.32,22z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M17.858,46.143c-0.39-0.391-1.023-0.389-1.414,0l-2.828,2.828 c-0.391,0.391-0.39,1.025,0.001,1.414c0.39,0.391,1.022,0.391,1.413,0l2.828-2.828C18.249,47.168,18.249,46.533,17.858,46.143z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M42,14.68c0.479,0.275,1.09,0.113,1.367-0.367l5-8.66 C48.644,5.174,48.48,4.562,48,4.287c-0.478-0.277-1.088-0.113-1.365,0.365l-4.999,8.662C41.358,13.793,41.522,14.402,42,14.68z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M26.824,51.318c-0.532-0.143-1.08,0.176-1.225,0.707l-1.035,3.863 c-0.143,0.535,0.176,1.082,0.709,1.225c0.533,0.145,1.08-0.172,1.223-0.707l1.035-3.863C27.676,52.012,27.359,51.463,26.824,51.318 z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M32,12c0.554,0,1.001-0.447,1.002-1V1c0-0.553-0.447-1-1.002-1 c-0.551,0-0.998,0.447-0.999,1l0.001,10C31.002,11.553,31.449,12,32,12z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M38.402,52.025c-0.141-0.533-0.689-0.85-1.225-0.707 c-0.533,0.143-0.848,0.691-0.707,1.225l1.035,3.863c0.144,0.535,0.693,0.85,1.227,0.707s0.849-0.689,0.705-1.225L38.402,52.025z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M20.637,14.312c0.275,0.479,0.887,0.643,1.363,0.367 c0.48-0.277,0.645-0.887,0.368-1.367l-5-8.66C17.092,4.174,16.48,4.01,16,4.287c-0.477,0.275-0.641,0.887-0.365,1.365 L20.637,14.312z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M47.558,46.141c-0.388-0.389-1.022-0.389-1.414,0 c-0.391,0.391-0.388,1.025,0,1.414l2.828,2.828c0.392,0.393,1.025,0.389,1.415,0c0.391-0.391,0.391-1.021-0.001-1.414 L47.558,46.141z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M4.654,17.365l8.662,4.998c0.477,0.277,1.088,0.113,1.363-0.363 c0.277-0.48,0.115-1.09-0.364-1.367l-8.661-5C5.176,15.355,4.564,15.52,4.287,16C4.013,16.477,4.176,17.088,4.654,17.365z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M52.027,38.4l3.863,1.035c0.535,0.145,1.082-0.176,1.225-0.709 c0.144-0.533-0.172-1.08-0.707-1.223l-3.863-1.035c-0.531-0.145-1.081,0.172-1.225,0.707C51.176,37.709,51.496,38.256,52.027,38.4z "></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M12,32c0.001-0.555-0.445-1-0.998-1.002L1,31 c-0.552,0-1,0.445-1,1c0.001,0.551,0.448,1,1.001,1l10.001-0.002C11.553,32.998,12.001,32.551,12,32z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M52.545,27.529l3.863-1.035c0.535-0.143,0.85-0.693,0.706-1.227 c-0.142-0.531-0.688-0.848-1.224-0.705l-3.863,1.035c-0.533,0.141-0.85,0.691-0.707,1.225 C51.461,27.355,52.012,27.67,52.545,27.529z"></path> <circle fill-rule="evenodd" clip-rule="evenodd" fill="#fdf7dd" cx="32" cy="32" r="16"></circle> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M14.68,42c-0.275-0.48-0.886-0.645-1.365-0.369l-8.661,5.002 C4.176,46.91,4.01,47.52,4.287,48c0.277,0.477,0.889,0.641,1.367,0.365l8.66-5.002C14.791,43.088,14.957,42.479,14.68,42z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M46.144,17.855c0.389,0.393,1.022,0.389,1.414,0l2.828-2.828 c0.392-0.391,0.39-1.023-0.002-1.414c-0.388-0.391-1.021-0.391-1.412,0l-2.828,2.828C45.752,16.83,45.754,17.465,46.144,17.855z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M22,49.32c-0.479-0.277-1.088-0.113-1.365,0.363l-5,8.664 c-0.275,0.477-0.115,1.088,0.365,1.365c0.479,0.273,1.09,0.109,1.367-0.367l4.998-8.662C22.641,50.207,22.48,49.596,22,49.32z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M37.178,12.68c0.531,0.145,1.078-0.176,1.225-0.707l1.035-3.863 c0.143-0.535-0.176-1.084-0.709-1.225c-0.531-0.145-1.08,0.172-1.223,0.707l-1.035,3.863C36.324,11.986,36.645,12.535,37.178,12.68 z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M32,52c-0.553-0.002-0.998,0.445-1,0.998l0.002,10.004 C31.002,63.551,31.445,64,32,64c0.553,0,1-0.449,1.001-1l-0.003-10.002C32.998,52.447,32.555,52,32,52z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M25.6,11.973c0.139,0.533,0.691,0.85,1.225,0.707 c0.532-0.141,0.846-0.691,0.707-1.225l-1.035-3.863c-0.145-0.535-0.693-0.852-1.227-0.707c-0.531,0.143-0.85,0.689-0.705,1.225 L25.6,11.973z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M43.363,49.686C43.088,49.209,42.48,49.043,42,49.32 c-0.479,0.275-0.641,0.885-0.367,1.365l5.004,8.66c0.275,0.479,0.883,0.645,1.363,0.367c0.479-0.277,0.642-0.889,0.367-1.367 L43.363,49.686z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M16.443,17.855c0.387,0.395,1.023,0.391,1.414,0 c0.391-0.387,0.387-1.02,0-1.414l-2.828-2.828c-0.393-0.391-1.025-0.389-1.415,0.002c-0.39,0.389-0.392,1.021,0.001,1.412 L16.443,17.855z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M59.348,46.633l-8.663-4.998 c-0.478-0.275-1.087-0.115-1.363,0.367c-0.278,0.477-0.112,1.086,0.364,1.363l8.664,5c0.477,0.275,1.086,0.115,1.363-0.365 C59.988,47.52,59.824,46.91,59.348,46.633z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M11.974,25.598L8.11,24.562c-0.536-0.143-1.083,0.176-1.225,0.709 c-0.144,0.531,0.171,1.08,0.707,1.225l3.863,1.033c0.531,0.146,1.081-0.174,1.225-0.707C12.825,26.293,12.505,25.746,11.974,25.598 z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#1e201f" d="M32,20.002c-0.553,0-1,0.447-1,1s0.447,1,1,1 c5.522,0,10,4.477,10,10c0,0.553,0.447,1,1,1s1-0.447,1-1C44,25.375,38.627,20.002,32,20.002z"></path> </g> </g></svg>

                <p>Search for date</p>
                <input
                    type="date"
                    className="p-1 ml-6 border border-emerald-800 z-30 outline-none"
                    value={searchedDate}
                    onChange={(e) => setSearchedDate(e.target.value)}
                />
                <button className='z-50 p-1.5 bg-emerald-800' onClick={handleSearch}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
                </button>


            </div>
            <div className="flex items-center p-2 ml-6 w-3/4 h-screen font-josefin">
                <div className="border-2 border-emerald-800 bg-white shadow-2xl ml-10 w-7/12 h-5/6 absolute overflow-hidden">
                    <div className="absolute bottom-0 text-sm left-0 z-30 m-2 text-emerald-800">
                        Page {2 * currentPageIndex + 1} of {pages.length * 2}
                    </div>
                    <div className='flex justify-between'>
                        <input
                            type="date"
                            className="p-1 mt-2 ml-2 border border-emerald-800 z-30 outline-none"
                            value={pages[currentPageIndex].leftDate}
                            onChange={handleLeftDateChange}
                        />
                    </div>
                    <div className="absolute mt-14 inset-0 z-10" style={{ pointerEvents: 'none' }}>
                        {Array.from({ length: 18 }, (_, i) => (
                            <div key={i} className="h-7 border-b border-gray-200" />
                        ))}
                    </div>
                    <textarea
                        className="absolute outline-none inset-0 mt-14 w-1/2 h-screen pl-2 pt-1 resize-none text-lg z-0"
                        rows={19}
                        value={pages[currentPageIndex].leftText}
                        onChange={handleLeftInputChange}
                        style={{ overflowY: 'hidden' }}
                    />
        
                    <div
                        className="border-r-2 border-emerald-800 z-20 h-full absolute left-1/2 top-0 transform -translate-x-1/2">
                    </div>
        
                    <div className='flex justify-between absolute top-0 right-0 w-1/2'>
                        <input
                            type="date"
                            className="p-1 mt-2 ml-2 border border-emerald-800 z-30 outline-none"
                            value={pages[currentPageIndex].rightDate}
                            onChange={handleRightDateChange}
                        />
                        <textarea
                            className="absolute outline-none inset-0 mt-14 w-full h-screen pl-2 pt-1 resize-none text-lg z-0"
                            rows={19}
                            value={pages[currentPageIndex].rightText}
                            onChange={handleRightInputChange}
                            style={{ overflowY: 'hidden' }}
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 m-2 -mr-2 w-1/2 text-sm z-30 text-emerald-800">
                        Page {2 * currentPageIndex + 2} of {pages.length * 2}
                    </div>
                </div>

                <div className='flex justify-between w-screen'>
                    <button
                        className="z-30 p-2 mr-2 ml-2 bg-emerald-800 text-white rounded-xl"
                        onClick={() => handlePageChange('previous')}>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                        </svg>
                    </button>
            
                    <button
                        className="p-2 -mr-2 z-30 bg-emerald-800 text-white rounded-xl"
                        onClick={() => handlePageChange('next')}>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                        </svg>
                    </button>
                </div>

            </div>
        </>
    );
};
export default Journal;

// import React, { useState } from 'react';

// const Notebook = () => {
//   const [pages, setPages] = useState([{ number: 1, content: '' }]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleTextChange = (event) => {
//     const currentPageIndex = currentPage - 1;
//     const updatedPages = [...pages];
//     updatedPages[currentPageIndex].content = event.target.value;
//     setPages(updatedPages);
//   };

//   const addPage = () => {
//     const nextPageNumber = pages.length + 1;
//     setPages([...pages, { number: nextPageNumber, content: '' }]);
//     setCurrentPage(nextPageNumber);
//   };

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="notebook">
//       <div className="pages-container">
//         {pages.map((page) => (
//           <div className={`page ${currentPage === page.number ? 'active' : ''}`} key={page.number}>
//             <textarea
//               value={page.content}
//               onChange={handleTextChange}
//               rows={10} // Adjust as needed
//               cols={50} // Adjust as needed
//               style={{ resize: 'none', width: '100%', height: '100%' }}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         {pages.map((page) => (
//           <button key={page.number} onClick={() => goToPage(page.number)}>
//             Page {page.number}
//           </button>
//         ))}
//         <button onClick={addPage}>Add Page</button>
//       </div>
//     </div>
//   );
// };

// export default Notebook;






// import React, { useState, useEffect, useRef } from 'react';

// const Journal = () => {
//     const [pages, setPages] = useState([
//         { leftText: '', leftDate: '', rightText: '', rightDate: '' },
//         { leftText: '', leftDate: '', rightText: '', rightDate: '' }
//     ]);
//     const [currentPageIndex, setCurrentPageIndex] = useState(0);
//     const rightTextareaRef = useRef(null);

//     useEffect(() => {
//         const timeoutId = setTimeout(() => {
//             saveToDatabase();
//         }, 5000);

//         return () => clearTimeout(timeoutId);
//     }, [pages, currentPageIndex]);

//     const handlePageChange = (direction) => {
//         if (direction === 'next') {
//             if (currentPageIndex < pages.length - 1) {
//                 setCurrentPageIndex(currentPageIndex + 1);
//             } else {
//                 setPages([...pages, { leftText: '', leftDate: '', rightText: '', rightDate: '' }]);
//                 setCurrentPageIndex(currentPageIndex + 1);
//             }
//         } else {
//             if (currentPageIndex > 0) {
//                 setCurrentPageIndex(currentPageIndex - 1);
//             }
//         }
//     };

//     const handleLeftInputChange = (e) => {
//         const { value } = e.target;
//         const updatedPages = [...pages];

//         // Set a threshold for the maximum number of characters per page
//         const maxCharactersPerPage = 1000;

//         // Check if the length of text exceeds the threshold
//         if (value.length > maxCharactersPerPage) {
//             // If exceeded, move to the next page
//             if (currentPageIndex < pages.length - 1) {
//                 setCurrentPageIndex(currentPageIndex + 1);
//             } else {
//                 // If there is no next page, add a new page
//                 setPages([...pages, { leftText: '', leftDate: '', rightText: '', rightDate: '' }]);
//                 setCurrentPageIndex(currentPageIndex + 1);
//             }
//         } else {
//             // If not exceeded, update the current page's text
//             updatedPages[currentPageIndex].leftText = value;
//             setPages(updatedPages);
//         }
//     };

//     const handleRightInputChange = (e) => {
//         const updatedPages = [...pages];
//         updatedPages[currentPageIndex].rightText = e.target.value;
//         setPages(updatedPages);
//     };

//     const handleLeftDateChange = (e) => {
//         const updatedPages = [...pages];
//         updatedPages[currentPageIndex].leftDate = e.target.value;
//         setPages(updatedPages);
//     };

//     const handleRightDateChange = (e) => {
//         const updatedPages = [...pages];
//         updatedPages[currentPageIndex].rightDate = e.target.value;
//         setPages(updatedPages);
//     };

//     const saveToDatabase = async () => {
//         const currentPage = pages[currentPageIndex];
//         try {
//             await fetch('/journal_your_days', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     journaling_date: currentPage.leftDate,
//                     text: currentPage.leftText
//                 })
//             });
//         } catch (error) {
//             console.error('Error saving to database:', error);
//         }
//     };

//     return (
//         <div className="h-screen w-screen items-center justify-center bg-gray-500">
//             <div className='grid grid-cols-2 border-2 border-emerald-800 bg-white w-2/3 h-2/3 z-10'>
//                 <div className='absolute divide-y h-2/3 border-r-2 border-emerald-800 z-20 left-1/2 top-0 transform -translate-x-1/2'></div>

//             </div>
//             {/* <div className="border-2 border-emerald-800 bg-white shadow-2xl ml-10 w-auto h-5/6 ">
//                 <div>
//                     <input
//                         type="date"
//                         className="p-1 mt-2 ml-2 border border-emerald-800 outline-none"
//                         value={pages[currentPageIndex].leftDate}
//                         onChange={handleLeftDateChange}
//                     />
//                 </div>
//                 <div className="w-fit h-fit">
//                     <textarea
//                         className="outline-none resize-none p-2 text-lg"
//                         rows={19}
//                         value={pages[currentPageIndex].leftText}
//                         onChange={handleLeftInputChange}
//                     />
//                 </div>
//             </div>

//             <div className="border-2 border-emerald-800 bg-white shadow-2xl h-5/6 overflow-hidden">
//                 <div>
//                     <input
//                         type="date"
//                         className="p-1 mt-2 ml-2 border border-emerald-800 outline-none"
//                         value={pages[currentPageIndex].rightDate}
//                         onChange={handleRightDateChange}
//                     />
//                 </div>
//                 <div className="overflow-auto h-full">
//                     <textarea
//                         className="outline-none w-full h-full resize-none p-2 text-lg"
//                         rows={19}
//                         value={pages[currentPageIndex].rightText}
//                         onChange={handleRightInputChange}
//                     />
//                 </div>
//             </div>

//             <div className='flex justify-between col-span-2'>
//                 <button
//                     className="p-2 bg-emerald-800 text-white rounded-xl"
//                     onClick={() => handlePageChange('previous')}>
//                     Previous Page
//                 </button>
        
//                 <button
//                     className="p-2 bg-emerald-800 text-white rounded-xl"
//                     onClick={() => handlePageChange('next')}>
//                     Next Page
//                 </button>
//             </div> */}
//         </div>
//     );
// };

// export default Journal;







// import React, { useState } from 'react';

// const Textbook = () => {
//     const [pages, setPages] = useState([
//         { leftText: '', leftDate: '', rightText: '', rightDate: '' }
//     ]);
//     const [currentPageIndex, setCurrentPageIndex] = useState(0);

//     const handlePageChange = (direction) => {
//         if (direction === 'next') {
//             if (currentPageIndex < pages.length - 1) {
//                 setCurrentPageIndex(currentPageIndex + 1);
//             } else {
//                 setPages([...pages, { leftText: '', leftDate: '', rightText: '', rightDate: '' }]);
//                 setCurrentPageIndex(currentPageIndex + 1);
//             }
//         } else {
//             if (currentPageIndex > 0) {
//                 setCurrentPageIndex(currentPageIndex - 1);
//             }
//         }
//     };

//     const handleLeftInputChange = (e) => {
//         const { value } = e.target;
//         const updatedPages = [...pages];

//         // Update the current page's text
//         updatedPages[currentPageIndex].leftText = value;
//         setPages(updatedPages);
//     };

//     const handleRightInputChange = (e) => {
//         const { value } = e.target;
//         const updatedPages = [...pages];

//         // Update the current page's text
//         updatedPages[currentPageIndex].rightText = value;
//         setPages(updatedPages);
//     };

//     const handleLeftDateChange = (e) => {
//         const { value } = e.target;
//         const updatedPages = [...pages];
//         updatedPages[currentPageIndex].leftDate = value;
//         setPages(updatedPages);
//     };

//     const handleRightDateChange = (e) => {
//         const { value } = e.target;
//         const updatedPages = [...pages];
//         updatedPages[currentPageIndex].rightDate = value;
//         setPages(updatedPages);
//     };

//     return (
//         <div className="textbook">
//             <div className="left-page">
//                 <input
//                     type="date"
//                     value={pages[currentPageIndex].leftDate}
//                     onChange={handleLeftDateChange}
//                 />
//                 <textarea
//                     value={pages[currentPageIndex].leftText}
//                     onChange={handleLeftInputChange}
//                     rows={10} // Set a larger number of rows for a bigger text input
//                 />
//             </div>
//             <div className="right-page">
//                 <input
//                     type="date"
//                     value={pages[currentPageIndex].rightDate}
//                     onChange={handleRightDateChange}
//                 />
//                 <textarea
//                     value={pages[currentPageIndex].rightText}
//                     onChange={handleRightInputChange}
//                     rows={10} // Set a larger number of rows for a bigger text input
//                 />
//             </div>
//             <div className="navigation-buttons">
//                 <button onClick={() => handlePageChange('previous')}>Previous Page</button>
//                 <button onClick={() => handlePageChange('next')}>Next Page</button>
//             </div>
//             <div className="page-numbers">Page {currentPageIndex * 2 + 1} and {currentPageIndex * 2 + 2} of {pages.length * 2}</div>
//         </div>
//     );
// };

// export default Textbook;
