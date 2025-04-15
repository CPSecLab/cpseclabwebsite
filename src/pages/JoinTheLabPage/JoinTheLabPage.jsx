import React from "react";
import { Link } from "react-router-dom";
import "./JoinTheLabPage.css";
import labLogo from "../../assets/images/HomePageImages/cpsec_logo_2-removebg-preview.png";

const JoinTheLabPage = () => {
  return (
    <div className="join-the-lab">
      {/* Introduction Section */}
      <section className="intro-section section-container">
        <div className="intro-text">
          <h1>
            Are you interested in Autonomous, Hardware, IoT, Healthcare Systems
            security?
          </h1>
          <h2>Become the newest member of the CPSEC Lab!</h2>
          <p>
            We are a fun, enthusiastic group that values collaboration,
            creativity, and kindness. We believe in sharing our passion for
            cybersecurity inside and outside the lab. If you love exploring
            Infrastructure & Hardware Security, Autonomous Systems Security, or
            IoT Security & Privacy, please join our team! We celebrate diversity
            of people and ideas - all backgrounds welcome!
          </p>
        </div>
        <img src={labLogo} alt="CPSEC Lab Logo" className="lab-logo" />
      </section>

      {/* Positions Section */}
      <section className="positions-section">
        <div className="section-container">
          <h3>LEARN MORE ABOUT THE POSITIONS IN OUR LAB</h3>
          <hr className="positions-line" />
          <div className="positions-grid">
            <div className="position-card">
              <h4>Prospective PhD Students</h4>
              <p>Pursue advanced research in cyber-physical system security.</p>
              <Link to={`/application-form?degree=PhD`}>
                <button className="apply-form-btn">APPLY TODAY</button>
              </Link>
            </div>
            <div className="position-card">
              <h4>Masters Students</h4>
              <p>
                Enhance your cybersecurity skills through hands-on semester-based projects. Gain advanced expertise.
              </p>
              <Link to={`/application-form?degree=Masters`}>
                <button className="apply-form-btn">APPLY TODAY</button>
              </Link>
            </div>
            <div className="position-card">
              <h4>Undergraduate Students</h4>
              <p>
                Build a strong foundation in cybersecurity and systems
                engineering. Start your journey.
              </p>
              <Link to={`/application-form?degree=Undergraduate`}>
                <button className="apply-form-btn">APPLY TODAY</button>
              </Link>
            </div>
          </div>
          <hr className="positions-line" />
        </div>
      </section>
    </div>
  );
};

export default JoinTheLabPage;
