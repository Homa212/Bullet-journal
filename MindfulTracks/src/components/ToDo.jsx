import React from "react";
import { useState } from 'react'
import ReactDOM from "react-dom";


export default function ToDo() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newToDoList = [...toDoList, newTask];
    setToDoList(newToDoList);
  };
  return (
    <>
      <div className="grid grid-cols-2 w-fit font-josefin px-10 mb-10 h-fit">
        <div className="p-4 mt-4 text-center flex flex-col border-2 border-emerald-800 shadow-lg">
          <div className="rounded-lg p-2">
            <div className="container max-w-screen-md m-auto rounded-xl">
              <h1 className="text-3xl mb-4 font-black tracking-tighter">
                To-do's for this week:
              </h1>
              <hr />
              <div class="my-5 flex gap-3 justify-center">
                <input
                  type="text"
                  class="flex-auto border resize-none outline-none p-2 rounded"
                  placeholder="Do laundry"
                  onChange={handleChange}/>
                <button onClick={addTask} className="uppercase font-semibold tracking-wider px-4 py-2 rounded text-white bg-emerald-800">
                  Add to-do
                </button>
              </div>
              <ul className="flex flex-col border p-2 rounded-xl divide-y">
                {toDoList.map((task) => {
                  return <h1>{task}</h1>;
                })}
              </ul>
            </div>
          </div> 
        </div> 
      </div>
    </>
  );
};
