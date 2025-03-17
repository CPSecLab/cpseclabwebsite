import React from "react";
import { useNavigate } from "react-router-dom";
import teamData from "./TeamInfo/TeamData";
import "./TeamPage.css";
import labLogo from "../../assets/images/cpsec_logo_2-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TeamPage = () => {
  const navigate = useNavigate();

  // Active members (hierarchy 1 and 2)
  const activeMembers = teamData.filter((member) => member.hierarchy <= 2);

  // Combine alumni (masters: hierarchy 3 & undergraduate: hierarchy 4)
  const alumni = teamData.filter(
    (member) => member.hierarchy === 3 || member.hierarchy === 4
  );

  // Visiting students (hierarchy 5)
  const visitingStudents = teamData.filter((member) => member.hierarchy === 5);

  const handleSocialLink = (url) => {
    if (url) window.open(url, "_blank", "noopener noreferrer");
  };

  // Group active members by designation
  const groupedActiveMembers = activeMembers.reduce((groups, member) => {
    const designation = member.designation;
    if (!groups[designation]) {
      groups[designation] = [];
    }
    groups[designation].push(member);
    return groups;
  }, {});

  return (
    <div className="team-page">
      {/* Lab Logo Section */}
      <div className="lab-logo-container">
        <img src={labLogo} alt="CPSEC Lab Logo" className="homepage-lab-logo" />
      </div>
      {/* Active Members Section */}
      {Object.keys(groupedActiveMembers).map((designation, idx) => (
        <section key={idx} className="designation-group">
          <h2 className="designation-title">{designation.toUpperCase()}</h2>
          <div className="team-cards-row">
            {groupedActiveMembers[designation].map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-image-container">
                  {member.image && (
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.designation}`}
                      className="team-card-image"
                      loading="lazy"
                    />
                  )}
                  <button
                    className="arrow-button"
                    aria-label={`View ${member.name}'s profile`}
                    onClick={() =>
                      navigate(`/profile/${member.id}`, { state: { member } })
                    }
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
                <div className="team-card-info">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="designation">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Alumni Section */}
      {alumni.length > 0 && (
        <section className="alumni-container">
          <div className="alumni-section">
            <h2 className="designation-title">ALUMNI</h2>
            <div className="alumni-row">
              {alumni.map((alumnus) => (
                <div key={alumnus.id} className="alumni-card">
                  <div className="alumni-header">
                    <div className="alumni-info">
                      <h3 className="alumni-name">{alumnus.name}</h3>
                      <p className="alumni-degree">
                        {alumnus.hierarchy === 3
                          ? "Master's Graduate"
                          : "Undergraduate Graduate"}
                      </p>
                    </div>
                    <div className="alumni-social-icons-stack">
                      {alumnus.socials.email && (
                        <span
                          className="social-icon-wrapper"
                          onClick={() =>
                            handleSocialLink(`mailto:${alumnus.socials.email}`)
                          }
                          aria-label={`Email ${alumnus.name}`}
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                      )}
                      {alumnus.socials.website && (
                        <span
                          className="social-icon-wrapper"
                          onClick={() =>
                            handleSocialLink(alumnus.socials.website)
                          }
                          aria-label={`${alumnus.name}'s website`}
                        >
                          <FontAwesomeIcon icon={faGlobe} />
                        </span>
                      )}
                      {alumnus.socials.linkedin && (
                        <span
                          className="social-icon-wrapper"
                          onClick={() =>
                            handleSocialLink(alumnus.socials.linkedin)
                          }
                          aria-label={`${alumnus.name}'s LinkedIn profile`}
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Visiting Students Section */}
      {visitingStudents.length > 0 && (
        <section className="alumni-container">
          <div className="alumni-section">
            <h2 className="designation-title">VISITING STUDENTS</h2>
            <div className="alumni-row">
              {visitingStudents.map((student) => (
                <div key={student.id} className="alumni-card">
                  <div className="alumni-header">
                    <div className="alumni-info">
                      <h3 className="alumni-name">{student.name}</h3>
                      {student.university && (
                        <p className="alumni-degree">{student.university}</p>
                      )}
                    </div>
                    <div className="alumni-social-icons-stack">
                      {student.socials.email && (
                        <span
                          className="social-icon-wrapper"
                          onClick={() =>
                            handleSocialLink(`mailto:${student.socials.email}`)
                          }
                          aria-label={`Email ${student.name}`}
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                      )}
                      {student.socials.website && (
                        <span
                          className="social-icon-wrapper"
                          onClick={() =>
                            handleSocialLink(student.socials.website)
                          }
                          aria-label={`${student.name}'s website`}
                        >
                          <FontAwesomeIcon icon={faGlobe} />
                        </span>
                      )}
                      {student.socials.linkedin && (
                        <span
                          className="social-icon-wrapper"
                          onClick={() =>
                            handleSocialLink(student.socials.linkedin)
                          }
                          aria-label={`${student.name}'s LinkedIn profile`}
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TeamPage;
