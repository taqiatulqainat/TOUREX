import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Signup from "./pages/SignupPage/Signup"
import Login from "./pages/LoginPage/Login";
import Home from "./pages/HomePage/Home";
import Services from "./pages/ServicesPage/Services";
import About from "./pages/AboutPage/About";
import TripPlan from "./pages/ItineraryPage/Itinerary";
import Profile from "./pages/UserProfilePage/UserProfile";
import Hotels from "./pages/HotelsPage/Hotels";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/tripplan" element={<TripPlan/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
