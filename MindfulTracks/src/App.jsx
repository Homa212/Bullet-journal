import CreateAccount from "./components/CreateAccount";
import LogIn from "./components/LogIn";
// import LandingPage from "./components/LandingPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/LogIn' element={<LogIn/>}></Route>
        <Route path='/CreateAccount' element={<CreateAccount/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;