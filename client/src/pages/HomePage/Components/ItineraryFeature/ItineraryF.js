// import React from "react";

// const ItineraryF = () => {
//     return(
//         <h1>
//             ItineraryF feature
//         </h1>
//     );
// };

// export default ItineraryF;


import React from "react";
import "./ItineraryF.css";
import { Link } from "react-router-dom";
// import { FaWandMagicSparkles } from "react-icons/fa6";

import profile from "../../../../assets/profile2.jpg";
import Resort from "../../../../assets/resorts.jpg";
import Beach from "../../../../assets/beach.jpg";
import WildLife from "../../../../assets/wildlife.jpg";
import FineDining from "../../../../assets/finedining.jpg";
import WaterSpots from "../../../../assets/waterspots.jpg";
import HistoricalTours from "../../../../assets/historicaltours.jpg";



const ItineraryF = () => {
  return (
    <div className="itinerary-container">
      {/* Left Section */}
      <div className="itinerary-left">
        <h2>
          Start chatting <br /> <span>with us.</span>
        </h2>
        <p>
          Ask us for suggestions for any destination or ask us for an entire
          itinerary. Be as specific as you can about the types of experiences
          that you like.
        </p>
        {/* <button className="generate-btn">
         ✦ Generate itinerary
        </button> */}
        <button className="generate-btn">
  <Link to="/tripplan" className="btn-link">
    ✦ Generate itinerary
  </Link>
</button>
      </div>

      {/* Right Section */}
      <div className="itinerary-right">
        <div className="image-collage">
          {/* Images scattered */}
          <div className="img-box imgi1">
            <img src={Resort} alt="Hunza" />
            <span className="label">Resort</span>
          </div>
          <div className="img-box imgi2">
            <img src={Beach} alt="Beach" />
            <span className="label">Beach</span>
          </div>
          <div className="img-box imgi3">
            <img src={WildLife} alt="Wildlife" />
            <span className="label">Wild Life</span>
          </div>
          <div className="img-box imgi4">
            <img src={FineDining} alt="Dining" />
            <span className="label">Fine Dining</span>
          </div>
          <div className="img-box imgi5">
            <img src={HistoricalTours} alt="Town" />
            <span className="label">Historical Tours</span>
          </div>
          <div className="img-box imgi6">
            <img src={WaterSpots} alt="River" />
            <span className="label">Water Spots</span>
          </div>
          <div className="img-box imgi7 profile">
            <img src={profile} alt="profile" />
          </div>
        </div>

        {/* Chat input */}
        <div className="chat-box">
          <input type="text" placeholder="Ask us anything..." />
          <button className="send-btn">
            <Link to="/tripplan" className="btn-link">➤</Link>
  </button>
        </div>
      </div>
    </div>
  );
};

export default ItineraryF;
