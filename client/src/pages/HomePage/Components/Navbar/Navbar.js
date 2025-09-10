import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../../../../assets/TourexLogo1.png";
import profile from "../../../../assets/profile.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side - Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Tourex Logo" />
      </div>

      {/* Center - Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
       {/* <nav className="nav-center" aria-label="Primary">
          <NavLink to="/" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
          <NavLink to="/services" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Services</NavLink>
          <NavLink to="/about" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>About Us</NavLink>
        </nav> */}


      {/* Right Side - Buttons & Profile */}
      <div className="navbar-actions">
        <Link to="/tripplan" className="btn-dark">Plan Your Trip</Link>
        <Link to="/listbusiness" className="btn-outline">List your Business</Link>
         <Link to="/profile" className="profile-link">
          <img src={profile} alt="Profile" className="profile-img" />
         </Link>

      </div>

      {/* <div className="nav-right">
          <Link to="/plan" className="btn btn-dark">Plan Your&nbsp;Trip</Link>
          <Link to="/list-business" className="btn btn-outline">List your Business</Link>

          <Link to="/profile" className="avatar-link" aria-label="Profile">

            <img src="/images/avatar.jpg" alt="User avatar" className="avatar" />
          </Link>
        </div> */}
    </nav>
  );
};

export default Navbar;
