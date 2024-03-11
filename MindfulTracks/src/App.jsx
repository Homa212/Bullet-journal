import CreateAccount from "./components/CreateAccount";
import LogIn from "./components/LogIn";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Pages/Layout";

// import LandingPage from "./Pages/LandingPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/LogIn' element={<LogIn/>}></Route>
          <Route path='/CreateAccount' element={<CreateAccount/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;