import React, { useState } from 'react';
import Notes from "../components/Notes";

const SleepTracker = () => {
    const [form, setForm] = useState({
      bedtime: '',
      waketime: '',
      sleepQuality: '', // Assuming this should be an integer based on your backend schema
      notes: '',
    });
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setForm(prevForm => ({
        ...prevForm,
        [id]: e.target.type === 'select-one' ? value : value, // This is a placeholder, adjust as needed
      }));
    };
  
    // Assuming sleep quality needs to be an integer according to your backend schema
    // Adjust the mapping according to your actual requirements
    const mapSleepQualityToInteger = (quality) => {
        const qualityMapping = {
          'Excellent': 4,
          'Good': 3,
          'Fair': 2,
          'Poor': 1,
        };
        return qualityMapping[quality] || 0;
      };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Calculate the duration in hours and minutes
      const bedtime = new Date(form.bedtime);
      const waketime = new Date(form.waketime);
      const diff = waketime - bedtime; // difference in milliseconds
      const hours = diff / (1000 * 60 * 60);
      const totalHours = Math.floor(hours);
      const totalMinutes = Math.round((hours - totalHours) * 60);
  
      // Here, adjust the URL to your actual FastAPI backend endpoint
      const response = await fetch('http://localhost:8000/sleep_trackers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include any other headers your API requires
        },
        body: JSON.stringify({
          ...form,
          sleep_quality: mapSleepQualityToInteger(form.sleepQuality) || null,
          start_time: form.bedtime ? bedtime.toISOString() : null,
          end_time: form.waketime ? waketime.toISOString() : null,
          sleeping_hours: totalHours,
          sleeping_min: totalMinutes,
          notes: form.notes || null
        }),
      });
  
      if (!response.ok) {
        // Handle response errors here
        console.error('Failed to save sleep tracker data');
      } else {
        const data = await response.json();
        console.log('Sleep tracker saved:', data);
        // Handle successful form submission here (e.g., clear the form, show a success message)
      }
    };
  
   
    return (

        <div className="flex">
            <div className="max-w-xl mx-auto z-10">
                <form onSubmit={handleSubmit} className="bg-white h-fit px-8 pt-6 pb-8 text-lg flex gap-10 font-josefin shadow-lg">
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <label className="block text-gray-700  font-bold mb-2" htmlFor="bedtime">
                                Bed Time
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="bedtime"
                                type="datetime-local"
                                value={form.bedtime}
                                onChange={handleChange}
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
                                type="datetime-local"
                                value={form.waketime}
                                onChange={handleChange}
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