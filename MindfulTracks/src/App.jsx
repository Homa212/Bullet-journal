import Layout from "./Pages/Layout";
import LandingPage from "./Pages/LandingPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import PasswordResetPage from "./Pages/PasswordResetPage";
import ResetConfirmationPage from "./Pages/ResetConfirmationPage";

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
        <Route path="/" element={<Layout/>}>
          <Route path='/LandingPage' element={<LandingPage/>}></Route>
          <Route path='/LoginPage' element={<LoginPage/>}></Route>
          <Route path='/RegisterPage' element={<RegisterPage/>}></Route>
          <Route path='/PasswordResetPage' element={<PasswordResetPage/>}></Route>
          <Route path='/ResetConfirmationPage' element={<ResetConfirmationPage/>}></Route>
        </Route>
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