import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "./PublicationsPage.css";
import publicationsCsv from "../../data/CPSec-lab-publications.csv";
import areaMappings from "../../data/ResearchAreaMappings";

const PublicationsPage = () => {
  const [publications, setPublications] = useState([]);
  const [activeBibtex, setActiveBibtex] = useState(null);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const fetchPublications = async () => {
    try {
      const response = await fetch(publicationsCsv);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const csvText = await response.text();

      const workbook = XLSX.read(csvText, { type: "string" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
      console.log("Parsed Data:", data);
      setPublications(data);
    } catch (error) {
      console.error("Error loading CSV file:", error);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  const handleCopy = (bibtex) => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const closePopup = () => setActiveBibtex(null);

  return (
    <div className="publications-page">
      {/* Page Header */}
      <header className="publications-header">
        <h1>RELEVANT PUBLICATIONS</h1>
      </header>

      {/* Publications List */}
      <div className="publications-list">
        {[
          ...new Set(
            publications
              .filter((paper) => paper.Year)
              .map((paper) => paper.Year)
          ),
        ]
          .sort((a, b) => b - a)
          .map((year) => (
            <div key={year} className="year-section">
              {/* Year Header */}
              <h2 className="year-header">{year}</h2>
              {publications
                .filter((paper) => paper.Year === year)
                .map((paper, index) => (
                  <div className="publication-card" key={index}>
                    {paper.Award && (
                      <div className="award-container">
                        <div className="award-sticker">
                          <i className="fas fa-medal"></i>
                        </div>
                        <span className="award-details">{paper.Award}</span>
                      </div>
                    )}

                    <h3 className="publication-title">{paper.Title}</h3>

                    <p className="publication-authors">
                      {paper.Authors.split(", ").map(
                        (author, i, allAuthors) => (
                          <span key={i}>
                            {author.includes("Sara Rampazzi") ? (
                              <strong>{author}</strong>
                            ) : (
                              author
                            )}
                            {i < allAuthors.length - 1 && ", "}
                          </span>
                        )
                      )}
                    </p>

                    <p className="publication-conference">{paper.Conference}</p>

                    {paper["Research Area"] && (
                      <span
                        className="research-area-tag"
                        onClick={() => {
                          const researchAreaLower = paper["Research Area"]
                            .trim()
                            .toLowerCase();
                          const mappedArea =
                            areaMappings[researchAreaLower] ||
                            encodeURIComponent(researchAreaLower);
                          navigate(`/research-areas/${mappedArea}`);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {paper["Research Area"]}
                      </span>
                    )}

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
                        onClick={() => setActiveBibtex(paper.BibTeX)}
                      >
                        View BibTeX
                      </button>
                      {paper["Project Website"] &&
                        paper["Project Website"].trim() !== "" && (
                          <a
                            href={paper["Project Website"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn"
                          >
                            View Project Website
                          </a>
                        )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>

      {/* BibTeX Popup */}
      {activeBibtex && (
        <div className="bibtex-popup">
          <div className="bibtex-content">
            <pre>{activeBibtex}</pre>
            <button
              className="copy-btn"
              onClick={() => handleCopy(activeBibtex)}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicationsPage;
