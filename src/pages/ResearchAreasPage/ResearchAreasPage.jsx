import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import researchAreasData from "../../data/researchAreasData";
import "./ResearchAreasPage.css";

const SHEET_URL = process.env.REACT_APP_SPREADSHEET_URL;

//  Map Sheet Research Areas to Expected URL Slugs
const areaMappings = {
  "Healthcare Systems & Safety": "healthcare-systems-security",
  "Hardware & Infrastructure Security": "hardware-infrastructure-security",
  "Autonomous Systems Security": "autonomous-systems-security",
  "IoT Security & Privacy": "iot-security-privacy",
  "Critical Infrastructure Privacy": "critical-infrastructure-privacy",
};

const ResearchAreaPage = () => {
  const { area } = useParams();
  const [projects, setProjects] = useState({});
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

            //  Debugging: Log the full dataset from the sheet
            console.log("Full Dataset from Google Sheets:", allPapers);

            //  Normalize the research area from URL
            const normalizedArea =
              areaMappings[
                Object.keys(areaMappings).find(
                  (key) => areaMappings[key] === area
                )
              ] || "";

            console.log("Normalized Research Area:", normalizedArea);

            //  Extract Research Areas from Sheet
            const sheetResearchAreas = [
              ...new Set(
                allPapers.map((paper) => (paper["Research Area"] || "").trim())
              ),
            ];
            console.log("Research Areas from Sheet:", sheetResearchAreas);

            //  Filter Papers Matching the Research Area
            const filteredPapers = allPapers.filter((paper) => {
              const paperArea = (paper["Research Area"] || "").trim();
              return paperArea === normalizedArea;
            });

            console.log("Filtered Papers:", filteredPapers);

            //  Group Papers by Project Title
            const projectMap = {};
            filteredPapers.forEach((paper) => {
              const projectTitle = (
                paper["Project Title"] || "Miscellaneous"
              ).trim();
              if (!projectMap[projectTitle]) {
                projectMap[projectTitle] = [];
              }
              projectMap[projectTitle].push(paper);
            });

            console.log("Project Map:", projectMap);

            setProjects(projectMap);
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

  // Get Research Area Info 
  const researchInfo = researchAreasData[area] || {};

  return (
    <div className="research-area-page">
      {/* Header */}
      <header className="research-header">
        <h1>{researchInfo.name || "Research Area"}</h1>
        <p>{researchInfo.description}</p>
      </header>

      {/* Research Area Images */}
      <div className="research-images">
        {researchInfo.images &&
          researchInfo.images.map((img, index) => (
            <img key={index} src={img} alt={researchInfo.name} />
          ))}
      </div>

      {/* Projects Section */}
      <div className="projects-section">
        <h2>Projects in {researchInfo.name}</h2>

        {loading ? (
          <p>Loading projects...</p>
        ) : Object.keys(projects).length > 0 ? (
          Object.keys(projects).map((projectTitle, index) => (
            <div key={index} className="project-card">
              <h3>{projectTitle}</h3>

              {/* If project has a website, display button */}
              {projects[projectTitle][0]["Project Website"] && (
                <a
                  href={projects[projectTitle][0]["Project Website"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              )}

              {/* Papers related to this project */}
              <div className="papers-list">
                {projects[projectTitle].map((paper, idx) => (
                  <div key={idx} className="publication-card">
                    {/* Award Badge */}
                    {paper.Award && (
                      <div className="award-container">
                        <div className="award-sticker">
                          <i className="fas fa-medal"></i>
                        </div>
                        <span className="award-details">{paper.Award}</span>
                      </div>
                    )}

                    {/* Paper Title */}
                    <h4>{paper.Title}</h4>

                    {/* Authors */}
                    <p className="publication-authors">
                      {paper.Authors.split(", ").map((author, i) => (
                        <span key={i}>
                          {author.includes("Sara Rampazzi") ? (
                            <strong>{author}</strong>
                          ) : (
                            author
                          )}
                          {i < paper.Authors.split(", ").length - 1 && ", "}
                        </span>
                      ))}
                    </p>

                    {/* Conference */}
                    <p>{paper.Conference}</p>

                    {/* Action Buttons */}
                    <div className="publication-actions">
                      <a
                        href={paper.Paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-paper-btn"
                      >
                        View Paper
                      </a>
                      <button
                        className="bibtex-btn"
                        onClick={() => alert(paper.BibTeX)}
                      >
                        View BibTeX
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No projects found for this research area.</p>
        )}
      </div>
    </div>
  );
};

export default ResearchAreaPage;
