import LogInBox from "./components/LogIn";
import { useState, useEffect } from "react";

function App() {

  return (
    <>
      <header class="h-fit w-screen bg-green-900">
        <div class="text-white text-xl font-semibold py-6 flex flex-row justify-around items-center">
          <p>Mindful Tracking</p>
          <div class="flex gap-10 justify-evenly">
            <button>About</button>
            <button>Contact us</button>
            <button onClick={LogInBox}>Log in / Sign in</button>
          </div>
        </div>
      </header>
      
    </>
  );
};

export default App;