import React from "react";
import ReactDOM from "react-dom";

export default function ToDo() {
  return (
    <div className="py-10">
      <div className="container max-w-screen-md m-auto p-8 bg-white rounded-xl">
        <h1 className="text-6xl font-black tracking-tighter lowercase">
          To-Do List
        </h1>
        <div class="my-4 flex space-x-4">
          <input
            type="text"
            class="flex-auto border p-2 rounded"
            placeholder="Do laundry"
          />
          <button className="uppercase font-semibold tracking-wider px-4 py-2 rounded text-white bg-blue-600">
            Add to-do
          </button>
        </div>
        <ul className="flex flex-col border rounded-xl divide-y">
          <li className="p-4 hover:bg-blue-100">To-do 1</li>
          <li className="p-4 hover:bg-blue-100">To-do 2</li>
          <li className="p-4 hover:bg-blue-100">To-do 3</li>
        </ul>
      </div>
    </div>
  );
};
