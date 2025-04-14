import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./ApplicationFormPage.css";
import labLogo from "../../assets/images/HomePageImages/cpsec_logo_2-removebg-preview.png";

const ApplicationForm = () => {
  const location = useLocation();
  const [degree, setDegree] = useState("");
  const [fullName, setFullName] = useState("");

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
                name="Research Experience"
                placeholder="Provide details about your research experience."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="whyPhD">
                Why do you want to pursue the PhD program in the CPSEC lab?
              </label>
              <textarea
                id="whyPhD"
                name="Why PhD"
                placeholder="Explain your interest."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="pastProjects">
                Please summarize one of your past projects related to the CPSEC
                Lab topics which you feel are relevant.
              </label>
              <textarea
                id="pastProjects"
                name="Past Projects"
                placeholder="Provide details about your previous projects."
                required
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
                name="Projects"
                placeholder="Describe your projects and roles."
                required
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
              name="Interests"
              placeholder="Share your interests and goals."
              required
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
          Security Lab! Please fill out the following form and attach your CV.
        </p>
      </div>

      {/* Application Form */}
      <form
        action="https://formsubmit.co/saatvik.tripathy22@gmail.com"
        method="POST"
        encType="multipart/form-data"
        className="application-form"
      >
        {/* Common Questions */}

        <input
          type="hidden"
          name="_subject"
          value={`[${degree}] Application Form CPSec Lab - ${fullName}`}
        />
        <input type="hidden" name="_captcha" value="false" />

        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="Full Name"
            placeholder="Enter name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="_replyto"
            placeholder="Enter email"
            required
          />
        </div>

        {/* Degree-Specific Questions */}
        {renderAdditionalQuestions()}

        {/* File Upload Section */}
        <div className={`form-group file-upload`}>
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="_attachment"
            accept=".pdf,.png,.jpg,.docx"
            required
          />
        </div>

        {/* Submit Button */}
        <button type={`submit`} className={`submit-btn`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
