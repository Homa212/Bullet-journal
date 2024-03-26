import React, { useState, useEffect, useRef } from 'react';

const Journal = () => {
    const [pages, setPages] = useState([
        { leftText: '', leftDate: '', rightText: '', rightDate: '' },
        { leftText: '', leftDate: '', rightText: '', rightDate: '' }
    ]);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const rightTextareaRef = useRef(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            saveToDatabase();
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [pages, currentPageIndex]);

    const handlePageChange = (direction) => {
        if (direction === 'next') {
            if (currentPageIndex < pages.length - 1) {
                setCurrentPageIndex(currentPageIndex + 1);
            } else {
                setPages([...pages, { leftText: '', leftDate: '', rightText: '', rightDate: '' }]);
                setCurrentPageIndex(currentPageIndex + 1);
            }
        } else {
            if (currentPageIndex > 0) {
                setCurrentPageIndex(currentPageIndex - 1);
            }
        }
    };
    const handleLeftInputChange = (e) => {
        const { value } = e.target;
        const updatedPages = [...pages];
    
        // Check if the textarea is filled beyond its visible height
        const isFilled = e.target.scrollHeight > e.target.clientHeight;
    
        if (isFilled) {
            // If filled, update the current page's text and focus on the right textarea
            updatedPages[currentPageIndex].leftText = value;
            updatedPages[currentPageIndex].rightText = value;
            setPages(updatedPages);
            rightTextareaRef.current.focus(); // Focus on the right textarea
        } else {
            // Otherwise, update the current page's text
            updatedPages[currentPageIndex].leftText = value;
            setPages(updatedPages);
        }
    };

    const handleRightInputChange = (e) => {
        const updatedPages = [...pages];
        updatedPages[currentPageIndex].rightText = e.target.value;
        setPages(updatedPages);
    };

    const handleLeftDateChange = (e) => {
        const updatedPages = [...pages];
        updatedPages[currentPageIndex].leftDate = e.target.value;
        setPages(updatedPages);
    };

    const handleRightDateChange = (e) => {
        const updatedPages = [...pages];
        updatedPages[currentPageIndex].rightDate = e.target.value;
        setPages(updatedPages);
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
        <div className="flex items-center p-2 w-screen h-screen bg-gray-50 font-josefin">
            <div className="border-2 border-emerald-800 bg-white shadow-2xl ml-10 w-7/12 h-5/6 absolute overflow-hidden">
                <div className='flex justify-between'>
                    <input
                        type="date"
                        className="p-1 mt-2 ml-2 border border-emerald-800 z-30 outline-none"
                        value={pages[currentPageIndex].leftDate}
                        onChange={handleLeftDateChange}
                    />
                </div>
                <div className="absolute mt-14 inset-0 z-10" style={{ pointerEvents: 'none' }}>
                    {Array.from({ length: 19 }, (_, i) => (
                        <div key={i} className="h-7 border-b border-gray-200" />
                    ))}
                </div>
                <textarea
                    className="absolute outline-none inset-0 mt-14 w-1/2 h-screen pl-2 pt-1 resize-none text-lg z-0"
                    value={pages[currentPageIndex].leftText}
                    onChange={handleLeftInputChange}
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
                        value={pages[currentPageIndex].rightText}
                        onChange={handleRightInputChange}
                    />
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
                    className="p-2 z-30 mr-2 ml-2 bg-emerald-800 text-white rounded-xl"
                    onClick={() => handlePageChange('next')}>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                </button>
            </div>

        </div>
    );
};
export default Journal;    