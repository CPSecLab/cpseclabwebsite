import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/cpsec_logo_2-removebg-preview.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Map the main route (or path prefix) to a label
  const pathToItem = {
    "/news-awards": "News & Awards",
    "/research-areas": "Research Areas",
    "/team": "Team",
    "/profile": "Team",
    "/join-lab": "Join the Lab",
    "/application-form": "Join the Lab",
    "/publications": "Publications",
    "/": "Home",
  };

  const activePath =
    Object.keys(pathToItem).find((path) =>
      location.pathname.startsWith(path)
    ) || "/";

  const selectedItem = pathToItem[activePath];

  // Helper for navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        {/* Logo Section */}
        <div className="navbar-logo" onClick={() => handleNavigation("/")}>
          <img src={logo} alt="CPSEC Lab Logo" />
        </div>
        <ul className="navbar-list">
          <li
            className={`navbar-item ${
              selectedItem === "Home" ? "selected" : ""
            }`}
            onClick={() => handleNavigation("/")}
          >
            HOME
          </li>
          <li
            className="navbar-item dropdown-container"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            RESEARCH AREAS<i class="fa-solid fa-angle-down"></i>
            <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
              <ul className="dropdown-list">
                <li
                  onClick={() =>
                    handleNavigation(
                      "/research-areas/healthcare-security-privacy"
                    )
                  }
                >
                  Healthcare Security & Privacy
                </li>
                <li
                  onClick={() =>
                    handleNavigation(
                      "/research-areas/oversensing-side-channels"
                    )
                  }
                >
                  Oversensing & Side Channels
                </li>
                <li
                  onClick={() =>
                    handleNavigation(
                      "/research-areas/autonomous-systems-security"
                    )
                  }
                >
                  Autonomous Systems Security
                </li>
                <li
                  onClick={() =>
                    handleNavigation("/research-areas/iot-security-privacy")
                  }
                >
                  IoT Security & Privacy
                </li>
                <li
                  onClick={() =>
                    handleNavigation(
                      "/research-areas/critical-infrastructure-security"
                    )
                  }
                >
                  Critical Infrastructure Security
                </li>
              </ul>
            </div>
          </li>

          <li
            className={`navbar-item ${
              selectedItem === "Publications" ? "selected" : ""
            }`}
            onClick={() => handleNavigation("/publications")}
          >
            PUBLICATIONS
          </li>
          <li
            className={`navbar-item ${
              selectedItem === "News & Awards" ? "selected" : ""
            }`}
            onClick={() => handleNavigation("/news-awards")}
          >
            NEWS & AWARDS
          </li>
          <li
            className={`navbar-item ${
              selectedItem === "Team" ? "selected" : ""
            }`}
            onClick={() => handleNavigation("/team")}
          >
            TEAM
          </li>
          <li>
            <button
              className={`join-lab-btn ${
                selectedItem === "Join the Lab" ? "selected" : ""
              }`}
              onClick={() => handleNavigation("/join-lab")}
            >
              JOIN THE LAB
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
