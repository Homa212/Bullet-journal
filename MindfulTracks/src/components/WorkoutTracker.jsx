import React, { useState } from 'react';

const WorkoutTracker = () => {
  const [workout, setWorkout] = useState({
    workout_date: '',
    workout_description: '',
    start_time: '',
    end_time: '',
    workout_duration_hours: 0,
    workout_duration_min: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = '/api/workout-trackers'; // Replace with your actual API endpoint
    const authToken = 'YOUR_AUTH_TOKEN'; // Replace with how you actually get the auth token

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(workout)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      // Handle the success (e.g., showing a message to the user)
    } catch (error) {
      console.error('There was a problem saving the workout tracker:', error);
      // Handle the error (e.g., showing an error message to the user)
    }
  };

  return (
    <div className="flex">
        <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="border-2 border-emerald-800 h-fit w-full px-8 pt-6 pb-8 text-xl bg-white flex gap-10 font-josefin shadow-lg">
            <div className="flex flex-col">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="workout_date">
                        Workout Date
                    </label>
                    <input
                        type="date"
                        name="workout_date"
                        value={workout.workout_date}
                        onChange={handleChange}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_time">
                        Start Time
                    </label>
                    <input
                        type="time"
                        name="start_time"
                        value={workout.start_time}
                        onChange={handleChange}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_time">
                        End Time
                    </label>
                    <input
                        type="time"
                        name="end_time"
                        value={workout.end_time}
                        onChange={handleChange}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="workout_description">
                        Workout Description
                    </label>
                    <textarea
                        name="workout_description"
                        value={workout.workout_description}
                        onChange={handleChange}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        rows="3"
                        placeholder="Start typing your workout description..."
                    />
                </div>
                <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="mt-3 flex justify-center w-full px-4 py-2 font-bold text-black border font-josefin border-emerald-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-800 transition-transform  hover:scale-110"
                >
                    Save
                </button>
                </div>
            </div>
          </form>
        </div>
    </div>
  );
};

export default WorkoutTracker;


