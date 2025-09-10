import React from "react";
import "./Footer.css";
import Logo from "../../../../assets/TourexLogo1.png";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
// import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Social Links */}
        <div className="footer-section logo-social">
          <img src={Logo} alt="Tourex Logo" className="footer-logo" />
          {/* <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div> */}
          <p className="copyright">© 2025 Tourex, All rights reserved</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Travel Blog</a></li>
            <li><a href="#">Customer Review</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Flight Booking</a></li>
            <li><a href="#">Hotel Reservations</a></li>
            <li><a href="#">Car Rental</a></li>
            <li><a href="#">Tour Packages</a></li>
            <li><a href="#">Travel Insurance</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          {/* <ul className="contact-info">
            <li><FiPhone /> +92-304-5678934</li>
            <li><FiMail /> example@gmail.com</li>
            <li><FiMapPin /> 123 Travel Sreat Islamabad</li>
          </ul> */}
          <ul className="contact-info">
            <li> +92-304-5678934</li>
            <li> example@gmail.com</li>
            <li> 123 Travel Sreat Islamabad</li>
          </ul>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="footer-bottom">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Copy Rights</a>
      </div>
    </footer>
  );
};

export default Footer;
