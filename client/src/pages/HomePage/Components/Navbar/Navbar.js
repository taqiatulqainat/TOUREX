// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { useAuth } from "../../../../context/AuthContext";

// import logo from "../../../../assets/TourexLogo1.png";
// import profile from "../../../../assets/profile.png";

// const Navbar = () => {

//   const { user, logout } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       {/* Left Side - Logo */}
//       <div className="navbar-logo">
//         <img src={logo} alt="Tourex Logo" />
//       </div>

//       {/* Center - Links */}
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/about">About Us</Link></li>
//       </ul>

//       {/* Right Side - Buttons & Profile */}


//        <div className="navbar-actions">
//         <Link to="/tripplan" className="btn-dark">Plan Your Trip</Link>

//         {user ? (
//           <Link to="/profile">
//             <img
//               src={profile}
//               alt="profile"
//               className="profile-pic"
//             />
//           </Link>
//         ) : (
//           <div className="auth-buttons">
//             <Link to="/login" className="btn">Log In</Link>
//             <Link to="/signup" className="btn btn-primary">Sign Up</Link>
//           </div>
//         )}
//       </div>

//       {/* <div className="nav-right">
//           {!user ? (
//             <>
//               <Link to="/login" className="nav-btn outline">Log In</Link>
//               <Link to="/signup" className="nav-btn primary">Sign Up</Link>
//             </>
//           ) : (
//             <div className="profile-wrapper">
//               <button
//                 className="avatar-btn"
//                 onClick={() => setMenuOpen((s) => !s)}
//                 aria-label="Open profile menu"
//               >
//                 <img
//                   src={user.avatar || "/images/avatar.jpg"}
//                   alt={user.name || "profile"}
//                   className="avatar"
//                 />
//               </button>

//               {menuOpen && (
//                 <div className="profile-menu">
//                   <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
//                   <button onClick={() => { logout(); setMenuOpen(false); }}>Logout</button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div> */}


//       {/* <div className="navbar-actions">
//         <Link to="/tripplan" className="btn-dark">Plan Your Trip</Link>
//          <Link to="/profile" className="profile-link">
//           <img src={profile} alt="Profile" className="profile-img" />
//          </Link>
//       </div> */}

//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../../../context/AuthContext";

import logo from "../../../../assets/TourexLogo1.png";
import profile from "../../../../assets/profile.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clear user session
    setMenuOpen(false);
    navigate("/"); // back to homepage where Sign In / Sign Up show
  };

  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Tourex Logo" />
      </div>

      {/* Center - Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      {/* Right - Actions */}
      <div className="navbar-actions">
        <Link to="/tripplan" className="btn-dark">Plan Your Trip</Link>

        {user ? (
          <div className="profile-wrapper">
            <button 
              className="avatar-btn" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <img
                src={profile}
                alt="profile"
                className="avatar"
              />
            </button>

            {menuOpen && (
              <div className="profile-menu">
                <Link to="/profile" onClick={() => setMenuOpen(false)}> Settings</Link>
                <button onClick={handleLogout}> Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="btn">Log In</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
