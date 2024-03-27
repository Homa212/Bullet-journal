import React from 'react';

const SleepTrackerModal = ({ tracker, onClose, onDelete, fetchSleepTrackers }) => {

    const mapIntegerToSleepQuality = (qualityId) => {
        const qualityMapping = {
          1: 'Poor',
          2: 'Fair',
          3: 'Good',
          4: 'Excellent',
        };
        // Ensure qualityId is an integer
        const id = parseInt(qualityId, 10);
        return qualityMapping[id];
      };
      
      
    return (
        <div className="fixed z-20 inset-0 bg-gray-800 bg-opacity-30 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg p-6 shadow-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h3 className="text-xl font-bold mb-4">Sleep Tracker Details</h3>
                <p><strong>Bed time:</strong> {new Date(tracker.start_time).toLocaleString()}</p>
                <p><strong>Wake time:</strong> {new Date(tracker.end_time).toLocaleString()}</p>
                <p><strong>Sleep quality:</strong>{mapIntegerToSleepQuality(tracker.sleep_quality)}</p>
                <p><strong>Hours Slept:</strong> {tracker.sleeping_hours}</p>
                <p><strong>Minutes Slept:</strong> {tracker.sleeping_min}</p>
                <p><strong>Notes:</strong> {tracker.notes}</p>
                <div className="flex justify-center gap-2 space-x-2 mt-4">
                    <button
                        className="px-4 py-2 bg-emerald-800 text-md text-white rounded font-medium hover:bg-emerald-700 border-2 border-emerald-800 hover:text-white hover:border-2 hover:border-emerald-700"
                        // Implement update logic or remove if not necessary
                        >
                        Update
                    </button>
                    <button
                    className="px-4 py-2 bg-gray-700 text-md text-white rounded font-medium border-2 border-gray-700 hover:bg-gray-500 hover:text-white hover:border-2 hover:border-gray-500"
                    onClick={() => { // Confirm the ID is logged correctly here
                        onDelete(tracker.id);
                        fetchSleepTrackers();
                        
                    }}
                
                    // onClick={() => onDelete(tracker.id)} 
                    >
                    Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SleepTrackerModal;
