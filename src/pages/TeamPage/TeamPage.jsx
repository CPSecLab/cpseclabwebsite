import React from "react";
import { useNavigate } from "react-router-dom";
import teamData from "./TeamInfo/TeamData";
import "./TeamPage.css";
import labLogo from "../../assets/images/cpsec_logo_2-removebg-preview.png";

const TeamPage = () => {
  const navigate = useNavigate();

  // Group team members by designation
  const groupedTeamData = teamData.reduce((groups, member) => {
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
      {/* Page Header */}
      <div className="team-header">
        <h1>Our Team</h1>
      </div>

      {/* Group Sections by Designation */}
      {Object.keys(groupedTeamData).map((designation, idx) => (
        <div key={idx} className="designation-group">
          {/* Heading for the group */}
          <h2 className="designation-title">{designation.toUpperCase()}</h2>
          {/* Team member cards */}
          <div className="team-cards-row">
            {groupedTeamData[designation].map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-image-container">
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-card-image"
                    />
                  )}
                  <button
                    className="arrow-button"
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
        </div>
      ))}
    </div>
  );
};

export default TeamPage;
