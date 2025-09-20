import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import ItineraryF from "./Components/ItineraryFeature/ItineraryF";
import HotelsF from "./Components/HotelsFeature/HotelsF";
import DiningF from "./Components/DiningFeature/DiningF";
import Footer from "./Components/Footer/Footer";
import TripPlan from "./Components/TripPlan/TripPlan";
// import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <section id="features">
      </section>
      <ItineraryF/>
      <HotelsF/>
      <DiningF/>
      <TripPlan/>

      <Footer/>

    </div>
  );
};
export default Home;
