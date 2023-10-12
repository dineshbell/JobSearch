import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Signin from "./Components/Signin";
import Login from "./Components/Login";
import LandingPage from "./Components/LandingPage";
import JobDetails from "./Components/JobDetails";
import Apply from "./Components/Apply";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/landingpage" element={<LandingPage />} />
          <Route exact path="/jobdetails" element={<JobDetails />} />
          <Route exact path = '/apply' element={<Apply/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
