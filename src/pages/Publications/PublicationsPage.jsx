import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./PublicationsPage.css";

// const SHEET_URL = process.env.REACT_APP_SPREADSHEET_URL;
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQH3NbRdgO0YGlWcf1kxF_kwE5qKel5P7jXbk1En4mepLXlwvLJswPQzP8aOgEdSIAyHIeRMofmOxYn/pub?output=csv";

const PublicationsPage = () => {
  const [publications, setPublications] = useState([]);
  const [activeBibtex, setActiveBibtex] = useState(null);
  const [copied, setCopied] = useState(false);

  const fetchPublications = async () => {
    try {
      const cacheBustingURL = `${SHEET_URL}&timestamp=${Date.now()}`;
      const response = await fetch(cacheBustingURL);
      const csvData = await response.text();

      // console.log(response);
      // console.log("Response :" + csvData);
      // Parse the CSV data
      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          console.log("Parsed Data:", results.data);
          setPublications(results.data); // Update state with new data
        },
      });
    } catch (error) {
      console.error("Error fetching spreadsheet data:", error);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchPublications();

    const intervalId = setInterval(fetchPublications, 10000); // 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handleCopy = (bibtex) => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const closePopup = () => setActiveBibtex(null);

  return (
    <div className="publications-page">
      {/* Page Header */}
      <header className="publications-header">
        <h1>RELEVANT PUBLICATIONS</h1>
        <p>
          The complete list is available in my{" "}
          <a
            href="https://sararampazzi.com/CV/CV_Sara_Rampazzi.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            latest updated CV
          </a>{" "}
          or{" "}
          <a
            href="https://scholar.google.com/citations?hl=it&user=I9d0CrAAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
          .
        </p>
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
                    {/* Award Badge */}
                    {paper.Award && (
                      <div class="award-container">
                        <div class="award-sticker">
                          <i class="fas fa-medal"></i>
                        </div>
                        <span class="award-details">{paper.Award}</span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="publication-title">{paper.Title}</h3>

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
                    <p className="publication-conference">{paper.Conference}</p>

                    {/* Research Area Tag */}
                    {paper["Research Area"] && (
                      <div className="research-area-tag">
                        {paper["Research Area"]}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="publication-actions">
                      {/* View Paper Button */}
                      <a
                        href={paper.Paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-paper-btn"
                      >
                        View Paper
                      </a>

                      {/* BibTeX Button */}
                      <button
                        className="bibtex-btn"
                        onClick={() => setActiveBibtex(paper.BibTeX)}
                      >
                        View BibTeX
                      </button>

                      {/* Project Button */}
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
