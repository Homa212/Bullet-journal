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
                const sortedData = data.sort((a, b) => b.id - a.id);
                setSleepTrackers(sortedData);
                // setSleepTrackers(data);
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
    

    const handleDeleteTracker = async (id) => {
        console.log('Deleting in Dashboard, ID:', id);
       
        // Implement delete functionality here, then remove the tracker from state
        try {
            const response = await fetch(`http://localhost:8000/sleep_trackers/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Remove deleted tracker from state
            else setSleepTrackers(sleepTrackers.filter((tracker) => tracker.id !== id));
            
        } catch (error) {
            console.error(error);
            
        }
    };

  return (
    <div className="p-4 flex w-[370px] h-[402px] flex-col border-2 relative border-emerald-800 bg-white text-xl gap-10 font-josefin shadow-lg overflow-auto">
      <div>
        <p className="text-xl font-bold text-center mb-4">Your Sleep History</p>
        <div className="grid grid-cols-1 gap-4 absolute pb-5">
          {sleepTrackers.slice().reverse().map((tracker, index) => (
            <div
              key={index}
              className="bg-white py-3 px-10 rounded-lg shadow border-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectTracker(tracker)}
            >
              <h2 className="font-semibold text-lg">Sleep Tracker {sleepTrackers.length - index}</h2>
              <p className="text-base">Bed time: {new Date(tracker.start_time).toLocaleString()}</p>
              <p className="text-base">Wake time: {new Date(tracker.end_time).toLocaleString()}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
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
