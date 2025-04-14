import React from "react";
import "./Footer.css";
import logo from "../../assets/images/HomePageImages/cpsec_logo_2-removebg-preview.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="CPSEC Lab Logo" />
          <p>© CPSEC Lab 2025</p>
        </div>

        {/* Mailing Address Section */}
        <div className="footer-address">
          <h4>MAILING ADDRESS</h4>
          <p>CPSEC Lab, UF</p>
          <p>1015 Malachowsky Hall,</p>
          <p>1889 Museum Rd,</p>
          <p>Gainesville, FL 32606, USA</p>
        </div>

        {/* Social Links Section */}
        <div className="footer-social">
          <h4>SOCIAL</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/sara-r-1054407b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://x.com/sara_rampazzi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        {/* Credits Section */}
        <div className="footer-contact">
          <h4>CREDITS</h4>
          <p>Logo - Shikhar Panwar</p>
          <p>
            Website -{" "}
            <a
              href="https://www.linkedin.com/in/saatvik-tripathy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Saatvik Tripathy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
