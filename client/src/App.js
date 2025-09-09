import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import TripPlan from "./pages/TripPlan";
import ListBusiness from "./pages/ListBusiness";
import Profile from "./pages/Profile";
import Hotels from "./pages/Hotels";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/tripplan" element={<TripPlan/>} />
        <Route path="/listbusiness" element={<ListBusiness/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
