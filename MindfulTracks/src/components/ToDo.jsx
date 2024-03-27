import React, { useState } from "react";

export default function ToDo() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newToDoList = [...toDoList, { task: newTask, completed: false }];
      setToDoList(newToDoList);
      setNewTask("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };  

  const handleButtonClick = (index) => {
    const updatedToDoList = [...toDoList];
    updatedToDoList[index].completed = !updatedToDoList[index].completed;
    setToDoList(updatedToDoList);
  };

  const removeTask = (index) => {
    const updatedToDoList = [...toDoList];
    updatedToDoList.splice(index, 1);
    setToDoList(updatedToDoList);
    // Here you would typically make a call to your backend to remove the task from the database
  };

  return (
    <div className="grid grid-cols-2 w-fit font-josefin px-10 mb-10 h-fit">
      <div className="p-4 mt-4 text-center flex flex-col border-2 border-emerald-800 shadow-lg">
        <div className="p-2">
          <div className="container max-w-screen-md m-auto">
            <p className="text-2xl mb-4 font-black tracking-tighter">
              To-do's for this week
            </p>
            <div className="my-5 flex gap-3 justify-center">
              <input
                type="text"
                value={newTask}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className="flex-auto border resize-none outline-none p-2 rounded"
                placeholder="Typing..."
              />
              <button
                onClick={addTask}
                className="uppercase font-semibold tracking-wider px-4 py-2 rounded text-white bg-emerald-800"
              >
                Add to-do
              </button>
            </div>
            <div className={toDoList.length > 10 ? "overflow-auto max-h-80 pr-4" : ""}>
              <ul className="flex flex-col divide-y">
                {toDoList.map((item, index) => (
                  <div key={index} className="-mt-1 py-1 pl-1 flex justify-between w-full">
                    <div className="flex w-full items-center">
                      <button
                        onClick={() => handleButtonClick(index)}
                        className="w-6 h-6 border-2 border-emerald-800 mt-1 bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-white checked:bg-white checked:border-2 disabled:border-steel-400 disabled:bg-steel-400"
                      >
                        {item.completed && (
                          <svg
                            className=""
                            width="20px"
                            viewBox="0 0 512.00 512.00"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                          >
                            <path
                              fill="#124926"
                              d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"
                            ></path>
                          </svg>
                        )}
                      </button>
                      <span className={item.completed ? "line-through ml-2" : "ml-2"}>{item.task}</span>
                    </div>
                    <button onClick={() => removeTask(index)} className="text-black">x</button>
                  </div>
                ))}
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
