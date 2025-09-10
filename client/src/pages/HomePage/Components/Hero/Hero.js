import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import bg1 from "../../../../assets/bg1.jpg";
import bg2 from "../../../../assets/bg2.jpg";
import bg3 from "../../../../assets/bg3.jpg";

const Hero = () => {

    const images = [bg1, bg2, bg3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  // When we reach the duplicate slide, reset instantly
  useEffect(() => {
    if (currentIndex === images.length) {
      // Delay reset just after transition finishes
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // disable transition
        setCurrentIndex(0); // reset to first image
      }, 500); // matches CSS transition duration
      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true); // keep transition active
    }
  }, [currentIndex, images.length]);


  // Smooth scroll function
  const scrollToFeatures = () => {
    const section = document.getElementById("features");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
    //   style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
        {/* <div
        className="hero-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            className="hero-slide"
            key={index}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div> */}


      <div
        ref={sliderRef}
        className="hero-slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {images.map((img, index) => (
          <div
            className="hero-slide"
            key={index}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Duplicate of first image for smooth loop */}
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${images[0]})` }}
        />
      </div>

      <div className="hero-overlay">
        <h1>
          Your All-in-One <span className="highlight">Travel</span> Companion.
        </h1>
        <p>
          Effortlessly browse, book, and organize your entire travel experience
          in one place.
        </p>
        <div className="hero-buttons">
          <Link to="/tripplan" className="btn-primary">
            ✦ Create My Itinerary
          </Link>
          <button className="btn-dark" onClick={scrollToFeatures}>
            Explore all Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
