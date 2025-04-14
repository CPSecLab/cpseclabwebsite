import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/HomePageImages/cpsec_logo_2-removebg-preview.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window size
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Path mapping
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

  // Toggle mobile dropdown for Research Areas
  const toggleResearchDropdown = (e) => {
    if (windowWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      setDropdownOpen(!isDropdownOpen);
    }
  };

  // Helper for navigation
  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        {/* Logo Section */}
        <div className="navbar-logo" onClick={() => handleNavigation("/")}>
          <img src={logo} alt="CPSEC Lab Logo" />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>

        {/* Navigation Items */}
        <ul className={`navbar-list ${mobileMenuOpen ? "mobile-active" : ""}`}>
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
            onMouseEnter={() => windowWidth > 768 && setDropdownOpen(true)}
            onMouseLeave={() => windowWidth > 768 && setDropdownOpen(false)}
            onClick={toggleResearchDropdown}
            data-expanded={isDropdownOpen ? "true" : "false"}
          >
            RESEARCH AREAS
            <i className="fa-solid fa-angle-down"></i>
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
          <li className="join-lab-container">
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
