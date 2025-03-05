// TeamMemberInfoPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./TeamMemberInfoPage.css";

const TeamMemberInfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { member } = location.state;

  const handleBackClick = () => {
    navigate(-1);
  };

  const renderSocialLink = (platform, url, icon) => {
    if (!url) return null;

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="tmp-social-link"
        aria-label={`${member.name}'s ${platform}`}
      >
        <FontAwesomeIcon icon={icon} className="tmp-social-icon" />
        <span className="tmp-social-text">{platform}</span>
      </a>
    );
  };

  return (
    <div className="tmp-container">
      <button className="tmp-back-btn" onClick={handleBackClick}>
        <FontAwesomeIcon icon={faArrowLeft} className="tmp-back-icon" />
        Back to Team
      </button>

      <article className="tmp-profile-card">
        <div className="tmp-image-container">
          <img
            src={member.image}
            alt={member.name}
            className="tmp-profile-image"
            loading="lazy"
          />
        </div>

        <div className="tmp-content-wrapper">
          <header className="tmp-profile-header">
            <h1 className="tmp-profile-name">{member.name}</h1>
            <p className="tmp-profile-title">{member.designation}</p>
            <div className="tmp-accent-line"></div>
          </header>

          <section className="tmp-profile-section">
            <h2 className="tmp-section-heading">
              <span className="tmp-section-number">01</span>
              Biography
            </h2>
            <p className="tmp-bio-text">{member.description}</p>
          </section>

          {member.researchInterests && (
            <section className="tmp-profile-section">
              <h2 className="tmp-section-heading">
                <span className="tmp-section-number">02</span>
                Research Focus
              </h2>
              <div className="tmp-research-grid">
                {member.researchInterests.map((interest, index) => (
                  <div key={index} className="tmp-research-card">
                    <div className="tmp-research-icon-wrapper">
                      <div className="tmp-research-dot"></div>
                    </div>
                    <p className="tmp-research-text">{interest}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="tmp-profile-section">
            <h2 className="tmp-section-heading">
              <span className="tmp-section-number">03</span>
              Connect
            </h2>
            <div className="tmp-social-grid">
              {member.email && (
                <a href={`mailto:${member.email}`} className="tmp-social-link">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="tmp-social-icon"
                  />
                  <span className="tmp-social-text">Email</span>
                </a>
              )}
              {renderSocialLink("LinkedIn", member.linkedin, faLinkedin)}
              {renderSocialLink("GitHub", member.github, faGithub)}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default TeamMemberInfoPage;
