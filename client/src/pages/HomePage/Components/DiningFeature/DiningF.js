

import React from "react";
import "./DiningF.css";

import Beef from "../../../../assets/beef.jpg";
import Pasta from "../../../../assets/pasta.jpg";
import Biryani from "../../../../assets/biryani.jpg";

const DiningF = () => {
  return (
    <section className="dining" id="dining">
      <div className="dining-left">
        <h2>
          Delicious Dining, <br /> <span>Delivered to You.</span>
        </h2>
        <p>
          From local favorites to fine dining, find a place that suits your taste. 
          View menus, ratings, and reviews to make sure your dining experience is 
          as enjoyable as the food itself.
        </p>
        <a href="/hotels" className="dining-btn">
          Find Your Meal
        </a>
      </div>

      <div className="dining-right">
        <div className="dining-card top">
          <div className="imgd1">
          <img src={Biryani} alt="Food 1" />
          </div>
          <span className="badge1">1/1</span>
          <p className="caption top">Here’s a dump of all the food that made my taste buds dance.</p>
        </div>

        <div className="dining-card middle">
          <div className="imgd2">
          <img src={Pasta} alt="Food 2" />
          </div>
          <span className="badge2">1/2</span>
          <p className="caption center">Too pretty to eat… but I did.</p>
        </div>

        <div className="dining-card bottom">
          <div className="imgd3">
          <img src={Beef} alt="Food 3" />
          </div>
          <span className="badge3">1/3</span>
          <p className="caption bottom">One bite closer to happiness!</p>
        </div>
      </div>
    </section>
  );
};

export default DiningF;
