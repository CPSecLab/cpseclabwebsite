import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResearchAreaContainer.css";
import areaMappings from "../../../data/ResearchAreaMappings";

const ResearchAreaContainer = ({ title, imageSrc, summary, data }) => {
  const [activeTab, setActiveTab] = useState("publications");
  const navigate = useNavigate();

  const handleNavigation = () => {
    const mappedArea =
      areaMappings[title.toLowerCase()] ||
      encodeURIComponent(title.toLowerCase());
    navigate(`/research-areas/${mappedArea}`);
  };

  return (
    <div className="research-area-container">
      <div className="left-section">
        {/* Title Redirecting to Research Area */}
        <h2
          className="research-title research-title-link"
          onClick={handleNavigation}
        >
          {title}
        </h2>

        <img src={imageSrc} alt={title} className="research-image" />

        {/* Summary */}
        <p className="research-summary">{summary}</p>
      </div>

      <div className="right-section">
        {/* Tabs for Publications, Projects */}
        <div className="tabs">
          <button
            className={`tab-button ${
              activeTab === "publications" ? "active" : ""
            }`}
            onClick={() => setActiveTab("publications")}
          >
            Publications
          </button>
          <button
            className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Project Links
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "publications" && (
            <div>
              {data.publications.length > 0 ? (
                data.publications.slice(0, 3).map((pub, index) => (
                  <p key={index}>
                    <a
                      href={pub.paperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.title}
                    </a>
                  </p>
                ))
              ) : (
                <p className="no-content">No publications available.</p>
              )}
            </div>
          )}
          {activeTab === "projects" && (
            <div>
              {data.projects.length > 0 ? (
                data.projects.slice(0, 3).map((proj, index) => (
                  <p key={index}>
                    <a
                      href={proj.projectWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {proj.title}
                    </a>
                  </p>
                ))
              ) : (
                <p className="no-content">No projects available.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchAreaContainer;
