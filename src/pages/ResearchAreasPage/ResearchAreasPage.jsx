import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import researchAreasData from "../../data/researchAreasData";
import "./ResearchAreasPage.css";

// const SHEET_URL = process.env.REACT_APP_SPREADSHEET_URL;
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQH3NbRdgO0YGlWcf1kxF_kwE5qKel5P7jXbk1En4mepLXlwvLJswPQzP8aOgEdSIAyHIeRMofmOxYn/pub?output=csv";

const areaMappings = {
  "healthcare security & privacy": "healthcare-security-privacy",
  "oversensing & side channels": "oversensing-side-channels",
  "autonomous systems security": "autonomous-systems-security",
  "iot security & privacy": "iot-security-privacy",
  "critical infrastructure security": "critical-infrastructure-security",
};

const ResearchAreaPage = () => {
  const { area } = useParams();
  const [researchProjects, setResearchProjects] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${SHEET_URL}&timestamp=${Date.now()}`);
        const csvData = await response.text();

        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const allPapers = results.data;

            const normalizedArea = Object.keys(areaMappings).find(
              (key) => areaMappings[key] === area.toLowerCase()
            );

            if (!normalizedArea) {
              console.error("Invalid Research Area:", area);
              setLoading(false);
              return;
            }

            const filteredPapers = allPapers.filter((paper) => {
              return (
                (paper["Research Area"] || "").trim().toLowerCase() ===
                normalizedArea
              );
            });

            const projectsByTitle = {};
            filteredPapers.forEach((paper) => {
              const projectTitle = (
                paper["Project Title"] || "Miscellaneous"
              ).trim();
              if (!projectsByTitle[projectTitle]) {
                projectsByTitle[projectTitle] = [];
              }
              projectsByTitle[projectTitle].push(paper);
            });

            setResearchProjects(projectsByTitle);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Error fetching spreadsheet data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [area]);

  const researchInfo = researchAreasData[area] || {};

  const handlePaperClick = (projectWebsite, paperLink) => {
    const linkToOpen = projectWebsite || paperLink;
    if (linkToOpen) {
      window.open(linkToOpen, "_blank");
    }
  };

  return (
    <div className="research-area-page">
      <header className="research-header">
        <h1>{researchInfo.name || "Research Area"}</h1>
      </header>
      <div className="research-content-wrapper">
        <div className="research-content">
          <p>{researchInfo.description}</p>
        </div>
        <div className="research-images">
          {researchInfo.images?.slice(0, 2).map((img, index) => (
            <img key={index} src={img} alt={researchInfo.name} />
          ))}
        </div>
      </div>

      <div className="projects-section">
        <h2>Projects in {researchInfo.name}</h2>

        {loading ? (
          <p>Loading projects...</p>
        ) : Object.keys(researchProjects).length > 0 ? (
          Object.keys(researchProjects).map((projectTitle, index) => {
            const project = researchProjects[projectTitle];

            return (
              <div key={index} className="project-card">
                <h3>{projectTitle}</h3>

                <div className="project-images">
                  {project.slice(0, 2).map((paper, idx) => (
                    <img
                      key={idx}
                      src={paper["Image"]}
                      alt={paper["Title"]}
                      onClick={() =>
                        handlePaperClick(
                          paper["Project Website"],
                          paper["Paper Link"]
                        )
                      }
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </div>

                <div className="papers-list">
                  {project.map((paper, idx) => (
                    <div
                      key={idx}
                      className="publication-card"
                      onClick={() =>
                        handlePaperClick(
                          paper["Project Website"],
                          paper["Paper Link"]
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <h4>{paper.Title}</h4>
                      {paper.Award && (
                        <div className="award-badge">
                          <i className="fas fa-medal"></i> {paper.Award}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <p>No projects currently for this research area.</p>
        )}
      </div>
    </div>
  );
};

export default ResearchAreaPage;
