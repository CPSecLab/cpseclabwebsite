import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./ApplicationFormPage.css";
import labLogo from "../../assets/images/cpsec_logo_2-removebg-preview.png";

const ApplicationForm = () => {
  const location = useLocation();
  const [degree, setDegree] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const degreeFromURL = queryParams.get("degree");
    setDegree(degreeFromURL || ""); // default to empty if no degree is passed
  }, [location]);

  /* add questions that are particular to a specific degree */
  const renderAdditionalQuestions = () => {
    switch (degree) {
      case "PhD":
        return (
          <>
            <div className="form-group">
              <label htmlFor="researchExperience">
                Describe your previous research experience.
              </label>
              <textarea
                id="researchExperience"
                placeholder="Provide details about your research experience."
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="researchExperience">
                why do you want to pursue the PHD program in the CPSEC lab?
                Please summarize one of your past projects related to the CPSEC
                Lab topics which you feel are relevant.
              </label>
              <textarea
                id="researchExperience"
                placeholder="Provide details about your research experience."
              ></textarea>
            </div>
          </>
        );
      case "Masters":
        return (
          <>
            <div className="form-group">
              <label htmlFor="projects">
                Which topic of the lab are of your interests and why?
              </label>
              <textarea
                id="projects"
                placeholder="Describe your projects and roles."
              ></textarea>
            </div>
          </>
        );
      case "Undergraduate":
        return (
          <div className="form-group">
            <label htmlFor="interests">
              Which topic of the lab are of your interests and why?
            </label>
            <textarea
              id="interests"
              placeholder="Share your interests and goals."
            ></textarea>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="application-form-page">
      {/* Logo Section */}
      <div className="lab-logo-container">
        <img src={labLogo} alt="CPSEC Lab Logo" className="homepage-lab-logo" />
      </div>

      {/* Header Section */}
      <div className="application-header-container">
        <div className="header-row">
          <Link to="/join-lab" className="back-button">
            <i className="fa-solid fa-arrow-left"></i> BACK
          </Link>
        </div>
        <h1 className="application-form-header">APPLICATION FORM</h1>
        <p className="application-header-description">
          Thank you for your interest in joining the Cyber-Physical System
          Security Lab! Please fill out the following form and attach your CV
          and cover letter.
        </p>
      </div>

      {/* application Form - add questions that are common to all */}
      <form className="application-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            value={degree}
            readOnly
            placeholder="Selected degree"
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Technical Skills or Areas of Expertise</label>
          <select id="skills">
            <option value="">Select Options</option>
            <option value="IOT security">IOT security</option>
            <option value="Autonomous vehicles security">
              Autonomous vehicles security
            </option>
            <option value="Medical device/ healthcare device security">
              Medical/ Healthcare device security
            </option>
            <option value="Critical infrastructure security">
              Critical infrastructure security
            </option>
            <option value="Side channels">Side channels</option>
          </select>
        </div>

        {/* conditional Questions - degree specific questions will render here */}
        {renderAdditionalQuestions()}

        <div className="form-group file-upload">
          <label htmlFor="resume">Upload Resume</label>
          <div className="upload-box">
            <input type="file" id="resume" className="upload-input" />
            <div className="upload-content">
              <i className="fa-solid fa-arrow-up-from-bracket upload-icon"></i>
              <span className="upload-text">Upload Resume</span>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
