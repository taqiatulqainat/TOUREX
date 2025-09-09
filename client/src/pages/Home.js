import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ItineraryF from "../components/ItineraryF";
import HotelsF from "../components/HotelsF";
import DiningF from "../components/DiningF";
import Footer from "../components/Footer";
// import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <section id="features" style={{ padding: "80px 20px", background: "#f9f9f9" }}>
      </section>
      <ItineraryF/>
      <HotelsF/>
      <DiningF/>

      <Footer/>

    </div>
  );
};
export default Home;
