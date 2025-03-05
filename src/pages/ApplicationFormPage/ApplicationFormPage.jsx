import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ApplicationFormPage.css";
import labLogo from "../../assets/images/cpsec_logo_2-removebg-preview.png";

const ApplicationForm = () => {
  const location = useLocation();
  const [degree, setDegree] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const degreeFromURL = queryParams.get("degree");
    setDegree(degreeFromURL || ""); // Default to empty if no degree is passed
  }, [location]);

  /* Add questions that are particular to a specific degree */
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
              <label htmlFor="skills">
                Technical Skills or Areas of Expertise
              </label>
              <select id="skills">
                <option value="">Select Options</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="iot">IoT</option>
                <option value="hardware-security">Hardware Security</option>
              </select>
            </div>
          </>
        );
      case "Masters":
        return (
          <>
            <div className="form-group">
              <label htmlFor="projects">
                Share details about any academic or industry projects.
              </label>
              <textarea
                id="projects"
                placeholder="Describe your projects and roles."
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="skills">
                Technical Skills or Areas of Expertise
              </label>
              <select id="skills">
                <option value="">Select Options</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="iot">IoT</option>
                <option value="hardware-security">Hardware Security</option>
              </select>
            </div>
          </>
        );
      case "Undergraduate":
        return (
          <div className="form-group">
            <label htmlFor="interests">
              Why are you interested in starting out in cybersecurity?
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
      <div className="form-logo">
        <img src={labLogo} alt="CPSEC Lab Logo" />
      </div>

      {/* Header Section */}
      <div className="application-header-container">
        <div className="header-row">
          <a href="/join-lab" className="back-button">
            <i className="fa-solid fa-arrow-left"></i> BACK TO JOIN THE LAB
          </a>
        </div>
        <h1 className="application-form-header">APPLICATION FORM</h1>
        <p className="application-header-description">
          Thank you for your interest in joining the Cyber-Physical System
          Security Lab! Please fill out the following form and attach your CV
          and cover letter.
        </p>
      </div>

      {/* Application Form - Add questions that are common to all */}
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
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" placeholder="Enter phone number" />
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn</label>
          <input type="url" id="linkedin" placeholder="Enter LinkedIn" />
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

        {/* Conditional Questions - degree specific questions will render here */}
        {renderAdditionalQuestions()}

        <div className="form-group file-upload">
          <label htmlFor="resume">Upload Resume & Cover Letter</label>
          <div className="upload-box">
            <input type="file" id="resume" className="upload-input" />
            <div className="upload-content">
              <i className="fa-solid fa-arrow-up-from-bracket upload-icon"></i>
              <span className="upload-text">Upload Resume & Cover Letter</span>
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
