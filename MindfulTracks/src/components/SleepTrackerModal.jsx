import React from 'react';

const SleepTrackerModal = ({ tracker, onClose, onDelete }) => {

    console.log('Modal tracker ID:', tracker.id);
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg p-6 shadow-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h3 className="text-xl font-bold mb-4">Sleep Tracker Details</h3>
                <p><strong>Start Time:</strong> {new Date(tracker.start_time).toLocaleString()}</p>
                <p><strong>End Time:</strong> {new Date(tracker.end_time).toLocaleString()}</p>
                <p><strong>Quality:</strong> {tracker.sleep_quality}</p>
                <p><strong>Hours Slept:</strong> {tracker.sleeping_hours}</p>
                <p><strong>Minutes Slept:</strong> {tracker.sleeping_min}</p>
                <p><strong>Notes:</strong> {tracker.notes}</p>
                <div className="flex justify-end space-x-2 mt-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        // Implement update logic or remove if not necessary
                    >
                        Update
                    </button>
                    <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => {
                        console.log('Deleting tracker ID:', tracker.id); // Confirm the ID is logged correctly here
                        onDelete(tracker.id);
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
