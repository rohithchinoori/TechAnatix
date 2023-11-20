// Footer.js
import "./index.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#destinations" className="footer-links-text">
            Destinations
          </a>
          <a href="#flightBooking" className="footer-links-text">
            Flight Booking
          </a>
          <a href="#hotels" className="footer-links-text">
            Hotels
          </a>
          <a href="#contactUs" className="footer-links-text">
            Contact Us
          </a>
        </div>
        <div className="icon-cont">
          <div className="social-icons">
            <FaFacebook size={30} />
          </div>
          <div className="social-icons">
            <FaTwitter size={30} />
          </div>
          <div className="social-icons">
            <FaInstagram size={30} />
          </div>
          <div className="social-icons">
            <FaLinkedin size={30} />
          </div>
        </div>
        <p className="copy">&copy; 2023 Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
