import React, { useState, useEffect } from 'react';
import SleepTrackerModal from './SleepTrackerModal';

const SleepDashboard = () => {
    const [sleepTrackers, setSleepTrackers] = useState([]);
    const [selectedTracker, setSelectedTracker] = useState(null);

    useEffect(() => {
        const fetchSleepTrackers = async () => {
            try {
                const response = await fetch("http://localhost:8000/sleep_trackers", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                const data = await response.json();
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                setSleepTrackers(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSleepTrackers();
    }, []);

    const handleSelectTracker = (tracker) => {
        console.log('Selected tracker ID:', tracker.id);
        setSelectedTracker(tracker);
    };

    const handleDeleteTracker = async (sleepId) => {
        console.log('Deleting in Dashboard, ID:', sleepId); // This should not be undefined
        if (!sleepId) {
            console.error('Sleep ID is undefined.');
            return;
        }
    
        try {
            const response = await fetch(`http://localhost:8000/sleep_trackers/${sleepId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // If successful, filter out the deleted tracker
            setSleepTrackers(currentTrackers => currentTrackers.filter(tracker => tracker.id !== sleepId));
        } catch (error) {
            console.error('Failed to delete tracker:', error);
        }
    };
    

    // const handleDeleteTracker = async (sleepId) => {
    //     console.log('Deleting in Dashboard, ID:', sleepId);
       
    //     // Implement delete functionality here, then remove the tracker from state
    //     try {
    //         const response = await fetch(`http://localhost:8000/sleep_trackers/${sleepId}`, {
    //             method: "DELETE",
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             },
    //         });

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         // Remove deleted tracker from state
    //         setSleepTrackers(sleepTrackers.filter((tracker) => tracker.id !== sleepId));
            
    //     } catch (error) {
    //         console.error(error);
            
    //     }
    // };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Your Sleep History</h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sleepTrackers.map((tracker, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelectTracker(tracker)}
          >
            <h2 className="font-semibold">Sleep Tracker {index + 1}</h2>
            <p>Start Time: {new Date(tracker.start_time).toLocaleString()}</p>
            <p>End Time: {new Date(tracker.end_time).toLocaleString()}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>

      {selectedTracker && (
        <SleepTrackerModal
            tracker={selectedTracker}
            onClose={() => setSelectedTracker(null)}
            onDelete={handleDeleteTracker}
        />
      )}
    </div>
  );
};

export default SleepDashboard;
