import React from "react";
import "./HotelsF.css";

import HotelRoom from "../assets/hotelroom.jpg";
import ImgH1 from "../assets/imgh1.jpg";
import ImgH2 from "../assets/imgh2.jpg";
import ImgH3 from "../assets/imgh3.jpg";
import ImgH4 from "../assets/imgh4.jpg";

const HotelsF = () => {
  return (
    <div className="hotel-container">
      {/* Left Section (Images) */}
      <div className="hotel-images">
        <div className="main-image">
          <img
            src={HotelRoom}
            alt="Hotel Room"
          />
        </div>
        <div className="small-img imgh1">
          <img src={ImgH1} alt="Resort" />
        </div>
        <div className="small-img imgh2">
          <img src={ImgH2} alt="Island" />
        </div>
        <div className="small-img imgh3">
          <img src={ImgH3} alt="Temple" />
        </div>
        <div className="small-img imgh4">
          <img src={ImgH4} alt="Landmark" />
        </div>
      </div>

      {/* Right Section (Content) */}
      <div className="hotel-text">
        <h2>
          Exclusive Hotel <br /> <span>Booking.</span>
        </h2>
        <p>
          Search and book your favorite hotels with ease. Browse stunning
          images, read authentic reviews, and compare options to make the most
          informed decision.
        </p>
        <a href="/hotels" className="hotel-btn">
          Explore Hotels
        </a>
      </div>
    </div>
  );
};

export default HotelsF;
