import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import researchAreasData from "../../data/researchAreasData";
import publicationsCsv from "../../data/CPSec-lab-publications.csv";
import "./ResearchAreasPage.css";
import areaMappings from "../../data/ResearchAreaMappings";

const ResearchAreaPage = () => {
  const { area } = useParams();
  const [researchProjects, setResearchProjects] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(publicationsCsv);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const csvData = await response.text();

        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const allPapers = results.data;

            // Finding the matching research area using area mappings.
            const normalizedArea = Object.keys(areaMappings).find(
              (key) => areaMappings[key] === area.toLowerCase()
            );

            if (!normalizedArea) {
              console.error("Invalid Research Area:", area);
              setLoading(false);
              return;
            }

            // Filtering papers that match the normalized research area.
            const filteredPapers = allPapers.filter((paper) => {
              return (
                (paper["Research Area"] || "").trim().toLowerCase() ===
                normalizedArea
              );
            });

            // Group the filtered papers by project title.
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

            // Sorting Papers by Year (Descending Order)
            Object.keys(projectsByTitle).forEach((title) => {
              projectsByTitle[title].sort((a, b) => {
                const yearA = parseInt(a["Year"] || "0", 10);
                const yearB = parseInt(b["Year"] || "0", 10);
                return yearB - yearA;
              });
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
        {loading ? (
          <p>Loading projects...</p>
        ) : Object.keys(researchProjects).length > 0 ? (
          Object.keys(researchProjects).map((projectTitle, index) => {
            const project = researchProjects[projectTitle];

            return (
              <div key={index} className="project-card">
                <h3>Project : {projectTitle}</h3>
                <div className="project-images">
                  {(() => {
                    const getImageSource = (imgName) => {
                      try {
                        return require(`../../assets/images/ResearchAreaProjectImages/${imgName}`);
                      } catch (err) {
                        console.error("Image not found:", imgName);
                        return "";
                      }
                    };

                    // Mapping  each image name from the CSV to its corresponding module.
                    const imageUrls = Array.from(
                      new Set(
                        project.flatMap((paper) =>
                          paper["Image"] && paper["Image"].trim() !== ""
                            ? paper["Image"]
                                .split(",")
                                .map((imgName) =>
                                  getImageSource(imgName.trim())
                                )
                            : []
                        )
                      )
                    );

                    return imageUrls.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`${idx + 1} for ${projectTitle}`}
                      />
                    ));
                  })()}
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
                      <h4>
                        {paper.Title} ({paper.Year})
                      </h4>
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
