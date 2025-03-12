import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "./TeamMemberInfoPage.css";

const TeamMemberInfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { member } = location.state;

  const [sectionCount, setSectionCount] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // format section numbers with leading zero
  const formatSectionNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  // Only renders a social link if the URL is provided.
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

  // Check if any social links exist
  const hasSocials =
    member.socials &&
    (member.socials.email ||
      member.socials.linkedin ||
      member.socials.github ||
      member.socials.googleScholar ||
      member.socials.website);

  // Reset section counter before rendering
  useEffect(() => {
    setSectionCount(1);
  }, [member.id]);

  return (
    <div className="tmp-container">
      <button className="tmp-back-btn" onClick={() => navigate(-1)}>
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
              <span className="tmp-section-number">
                {formatSectionNumber(1)}
              </span>
              Biography
            </h2>
            <p className="tmp-bio-text">{member.description}</p>
          </section>

          {member.researchInterests && member.researchInterests.length > 0 && (
            <section className="tmp-profile-section">
              <h2 className="tmp-section-heading">
                <span className="tmp-section-number">
                  {formatSectionNumber(2)}
                </span>
                Research Focus
              </h2>
              <div className="tmp-research-grid">
                {member.researchInterests.map((interest, index) => (
                  <div key={index} className="tmp-research-card">
                    <p className="tmp-research-text">{interest}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {hasSocials && (
            <section className="tmp-profile-section">
              <h2 className="tmp-section-heading">
                <span className="tmp-section-number">
                  {formatSectionNumber(
                    member.researchInterests &&
                      member.researchInterests.length > 0
                      ? 3
                      : 2
                  )}
                </span>
                Connect
              </h2>
              <div className="tmp-social-grid">
                {member.socials.email && (
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="tmp-social-link"
                    aria-label={`${member.name}'s Email`}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="tmp-social-icon"
                    />
                    <span className="tmp-social-text">Email</span>
                  </a>
                )}
                {renderSocialLink(
                  "LinkedIn",
                  member.socials.linkedin,
                  faLinkedin
                )}
                {renderSocialLink("GitHub", member.socials.github, faGithub)}
                {renderSocialLink(
                  "Google Scholar",
                  member.socials.googleScholar,
                  faGoogle
                )}
                {renderSocialLink("Website", member.socials.website, faGlobe)}
              </div>
            </section>
          )}
        </div>
      </article>
    </div>
  );
};

export default TeamMemberInfoPage;
