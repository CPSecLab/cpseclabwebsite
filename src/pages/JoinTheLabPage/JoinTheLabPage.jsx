import React from "react";
import "./JoinTheLab.css";
import labLogo from "../../assets/images/CPSEC-logo.png";

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
            of people and ideas — all backgrounds welcome!
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
              <h4>PhD Students</h4>
              <p>
                Pursue advanced, semester-based research in cyber-physical
                system security. Shape the future—apply for the next intake!
              </p>
              <a
                href={`/application-form?degree=PhD`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="apply-form-btn">APPLY TODAY</button>
              </a>
            </div>
            <div className="position-card">
              <h4>Masters Students</h4>
              <p>
                Enhance your cybersecurity skills through hands-on projects.
                Gain advanced expertise—apply today!
              </p>
              <a
                href={`/application-form?degree=Masters`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="apply-form-btn">APPLY TODAY</button>
              </a>
            </div>
            <div className="position-card">
              <h4>Undergraduate Students</h4>
              <p>
                Build a strong foundation in cybersecurity and systems
                engineering. Start your journey—apply today!
              </p>
              <a
                href={`/application-form?degree=Undergraduate`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="apply-form-btn">APPLY TODAY</button>
              </a>
            </div>
          </div>
          <hr className="positions-line" />
        </div>
      </section>
    </div>
  );
};

export default JoinTheLabPage;
