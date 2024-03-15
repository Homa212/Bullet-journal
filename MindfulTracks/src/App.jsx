import Layout from "./Pages/Layout";
// import LandingPage from "./Pages/LandingPage";
// import CreateAccount from "./components/CreateAccount";
// import LogIn from "./components/LogIn";

import Dashboard from "./Pages/Dashboard";
import MyPageLayout from "./Pages/MyPageLayout";
import MyProfilePage from "./Pages/MyProfilePage";
import WeeklyPlanPage from "./Pages/WeeklyPlanPage";
import MoodPage from "./Pages/MoodPage";
import SleepPage from "./Pages/SleepPage";
import WorkoutPage from "./Pages/WorkoutPage";
import JournalPage from "./Pages/JournalPage";


import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout/>}>
          <Route path='/LogIn' element={<LogIn/>}></Route>
          <Route path='/CreateAccount' element={<CreateAccount/>}></Route>
        </Route> */}
        <Route path="/" element={<MyPageLayout/>}>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/MyProfilePage' element={<MyProfilePage/>}></Route>
          <Route path='/WeeklyPlanPage' element={<WeeklyPlanPage/>}></Route>
          <Route path='/SleepPage' element={<SleepPage/>}></Route>
          <Route path='/WorkoutPage' element={<WorkoutPage/>}></Route>
          <Route path='/MoodPage' element={<MoodPage/>}></Route>
          <Route path='/JournalPage' element={<JournalPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;