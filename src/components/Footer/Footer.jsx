import React from "react";
import "./Footer.css";
import logo from "../../assets/images/cpsec_logo_2-removebg-preview.png";
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

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>CONTACT</h4>
          <p>info@cpseclab.com</p>
        </div>

        {/* Social Links Section */}
        <div className="footer-social">
          <h4>SOCIAL</h4>
          <div className="social-icons">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:info@cpseclab.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
