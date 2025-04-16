import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import "./ApplicationFormPage.css";
import labLogo from "../../assets/images/HomePageImages/cpsec_logo_2-removebg-preview.png";

const ApplicationForm = () => {
  const location = useLocation();
  const [fullName, setFullName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [degree, setDegree] = useState("");

  const formRef = useRef(null);
  const fullNameInputRef = useRef(null);

  const isGitHubPages = window.location.hostname === "cpseclab.github.io";
  const redirectURL = isGitHubPages ? "/cpseclabwebsite/#/" : "/";

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const degreeFromURL = queryParams.get("degree") || "";
    setDegree(degreeFromURL);
    // console.log("Fetched degree from URL:", degreeFromURL);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const latestFullName = fullNameInputRef.current.value;
    const computedSubject = `[${degree}] Application Form CPSec Lab - ${latestFullName}`;

    // Remove any previous _subject input if it exists
    const oldInput = formRef.current.querySelector('input[name="_subject"]');
    if (oldInput) {
      oldInput.remove();
    }

    // Create a new hidden input with the correct value
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "_subject";
    input.value = computedSubject;
    formRef.current.appendChild(input);

    setIsSubmitting(true);
    formRef.current.submit();
  };

  const handleIframeLoad = () => {
    if (isSubmitting) {
      alert("Application submitted successfully!");
      window.location.href = redirectURL;
    }
  };

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
      <iframe
        title="hidden_iframe"
        name="hidden_iframe"
        style={{ display: "none" }}
        onLoad={handleIframeLoad}
      ></iframe>
      <div className="lab-logo-container">
        <img src={labLogo} alt="CPSEC Lab Logo" className="homepage-lab-logo" />
      </div>

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

      <form
        ref={formRef}
        action="https://formsubmit.co/saatvik.tripathy22@gmail.com"
        method="POST"
        encType="multipart/form-data"
        className="application-form"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <input type="hidden" name="_captcha" value="false" />

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="Full Name"
            placeholder="Enter name"
            value={fullName}
            onChange={(e) => {
              console.log("Updated fullName:", e.target.value);
              setFullName(e.target.value);
            }}
            ref={fullNameInputRef}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="_replyto"
            placeholder="Enter email"
            value={applicantEmail}
            onChange={(e) => {
              console.log("Updated applicantEmail:", e.target.value);
              setApplicantEmail(e.target.value);
            }}
            required
          />
        </div>

        <input type="hidden" name="Email" value={applicantEmail} />

        <div className="form-group">
          <label htmlFor="skills">Technical Skills or Areas of Expertise</label>
          <select id="skills" name="Technical Skills" required>
            <option value="">Select Options</option>
            <option value="iot-security">IOT security</option>
            <option value="autonomous-vehicles-security">
              Autonomous Vehicles Security
            </option>
            <option value="Medical/Healthcare-device-security">
              Medical/Healthcare Device Security
            </option>
            <option value="critical-infrastructure-security">
              Critical Infrastructure Security
            </option>
            <option value="side-channels">Side Channels</option>
          </select>
        </div>

        {renderAdditionalQuestions()}

        <div className="form-group file-upload">
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="_attachment"
            accept=".pdf,.png,.jpg,.docx"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
