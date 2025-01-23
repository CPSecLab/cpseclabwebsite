import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/cpsec_logo_2-removebg-preview.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Map the main route (or path prefix) to a label
  const pathToItem = {
    "/news-awards": "News & Awards",
    "/research-areas": "Research Areas",
    "/team": "Team",
    "/join-lab": "Join the Lab",
    "/application-form": "Join the Lab",
    "/publications": "Publications",
    "/": "Home",
  };

  // Find which path prefix matches location.pathname
  const activePath =
    Object.keys(pathToItem).find((path) =>
      location.pathname.startsWith(path)
    ) || "/";

  // Use the path to get the label, e.g. "Research Areas"
  const selectedItem = pathToItem[activePath];

  // Helper for navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  // console.log("pathname:", location.pathname);
  // console.log("activePath:", activePath);
  // console.log("selectedItem:", selectedItem);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo" onClick={() => handleNavigation("/")}>
        <img src={logo} alt="CPSEC Lab Logo" />
      </div>
      <ul className="navbar-list">
        <li
          className={`navbar-item ${selectedItem === "Home" ? "selected" : ""}`}
          onClick={() => handleNavigation("/")}
        >
          HOME
        </li>
        <li
          className={`navbar-item ${
            selectedItem === "Research Areas" ? "selected" : ""
          }`}
        >
          RESEARCH AREAS
          <div className="dropdown">
            <ul className="dropdown-list">
              <li
                onClick={() =>
                  handleNavigation(
                    "/research-areas/healthcare-systems-security"
                  )
                }
              >
                Healthcare Systems Security & Safety
              </li>
              <li
                onClick={() =>
                  handleNavigation(
                    "/research-areas/hardware-infrastructure-security"
                  )
                }
              >
                Hardware & Infrastructure Security
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
          className={`navbar-item ${selectedItem === "Team" ? "selected" : ""}`}
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
    </nav>
  );
};

export default Navbar;
