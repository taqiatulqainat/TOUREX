// import React from "react";
// import "./TripPlan.css";

// // Import your images (update with your actual file paths)
// import Islamabad from "../../../../assets/faisalmosque.jpg";
// import Mountains from "../../../../assets/mountain.jpg";
// import Lake from "../../../../assets/lake.jpg";


// const TripPlan = () => {
//   return (
//     <div className="trip-section">
//       {/* Left side collage */}
//       <div className="trip-images">
//         <div className="trip-img trip-img1">
//           <img src={Islamabad} alt="Islamabad" />
//         </div>
//         <div className="trip-img trip-img2">
//           <img src={Mountains} alt="Mountains" />
//         </div>
//         <div className="trip-img trip-img3">
//           <img src={Lake} alt="Lake" />
//         </div>
//       </div>

//       {/* Right side text */}
//       <div className="trip-text">
//         <h2>
//           Trip Planning at <br /> Your Fingertips.
//         </h2>
//         <p>
//           With Tourex, you can connect with expert trip organizers to curate
//           your ideal itinerary. Whether it’s a relaxing vacation or an
//           action-packed journey, we’ve got the perfect plan just for you.
//         </p>
//         <button className="trip-btn">Plan Your Trip</button>
//       </div>
//     </div>
//   );
// };

// export default TripPlan;

import React from "react";
import "./TripPlan.css";
import { Link } from "react-router-dom";

// Update these imports with your actual image paths
import Islamabad from "../../../../assets/faisalmosque.jpg";
import Mountains from "../../../../assets/mountain.jpg";
import Lake from "../../../../assets/lake.jpg";



const TripPlan = () => {
  return (
    <div className="trip-section">
      {/* Left side collage */}
      <div className="trip-images">
        <img src={Islamabad} alt="Islamabad" className="img img1" />
        <img src={Mountains} alt="Mountains" className="img img2" />
        <img src={Lake} alt="Lake" className="img img3" />
      </div>

      {/* Right side text */}
      <div className="trip-text">
        <h2>
          Trip Planning at <br /> Your Fingertips.
        </h2>
        <p>
          With Tourex, you can connect with expert trip organizers to curate
          your ideal itinerary. Whether it’s a relaxing vacation or an
          action-packed journey, we’ve got the perfect plan just for you.
        </p>
        <button className="trip-btn">
            <Link to="/tripplan" className="btn-link">
            Plan Your Trip
  </Link></button>
      </div>
    </div>
  );
};

export default TripPlan;
