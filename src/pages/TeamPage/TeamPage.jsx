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

  // Filter active members and alumni by hierarchy
  const activeMembers = teamData.filter((member) => member.hierarchy <= 2);
  const mastersAlumni = teamData.filter((member) => member.hierarchy === 3);
  const undergradAlumni = teamData.filter((member) => member.hierarchy === 4);
  const visitingStudents = teamData.filter((member) => member.hierarchy === 5);

  // Function to navigate to social links
  const handleSocialLink = (url) => {
    if (url) window.open(url, "_blank", "noopener noreferrer");
  };

  // Grouping active team members by designation
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

      {/* Alumni Section Container */}
      <section className="alumni-container">
        {/* Masters Alumni */}
        {mastersAlumni.length > 0 && (
          <div className="alumni-section">
            <h2 className="designation-title">ALUMNI (MASTER'S)</h2>
            <div className="alumni-row">
              {mastersAlumni.map((alumnus) => (
                <div key={alumnus.id} className="alumni-card">
                  <div className="alumni-info">
                    <h3 className="alumni-name">{alumnus.name}</h3>
                    <p className="alumni-designation">Master's Graduate</p>
                  </div>
                  <div className="alumni-social-icons">
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
              ))}
            </div>
          </div>
        )}

        {/* Undergraduate Alumni */}
        {undergradAlumni.length > 0 && (
          <div className="alumni-section">
            <h2 className="designation-title">ALUMNI (UNDERGRADUATE)</h2>
            <div className="alumni-row">
              {undergradAlumni.map((alumnus) => (
                <div key={alumnus.id} className="alumni-card">
                  <div className="alumni-info">
                    <h3 className="alumni-name">{alumnus.name}</h3>
                    <p className="alumni-designation">
                      Undergraduate Researcher
                    </p>
                  </div>
                  <div className="alumni-social-icons">
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
              ))}
            </div>
          </div>
        )}

        {/* Visiting Students */}
        {visitingStudents.length > 0 && (
          <div className="alumni-section">
            <h2 className="designation-title">VISITING STUDENTS</h2>
            <div className="alumni-row">
              {visitingStudents.map((student) => (
                <div key={student.id} className="alumni-card">
                  <div className="alumni-info">
                    <h3 className="alumni-name">{student.name}</h3>
                    <p className="alumni-designation">Visiting Student</p>
                  </div>
                  <div className="alumni-social-icons">
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
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default TeamPage;
