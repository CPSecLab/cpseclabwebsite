import React, { useState, useEffect } from "react";
import "./PublicationsPage.css";

const publications = [
  {
    year: 2024,
    title: "Advanced Neural Models for Autonomous Navigation",
    authors: "Jane Doe, John Doe, Sara Rampazzi",
    conference: "In Proceedings of the AI Symposium, 2024",
    paperLink: "https://example.com/autonomous-navigation",
    bibtex: `@inproceedings{autonav2024,
      title={Advanced Neural Models for Autonomous Navigation},
      author={Doe, Jane and Smith, John and Rampazzi, Sara},
      booktitle={AI Symposium},
      year={2024}
    }`,
  },
  {
    year: 2024,
    title: "Enhancing AI Safety in IoT Systems",
    authors: "Alice Green, Sara Rampazzi",
    conference: "In IEEE Transactions on IoT Systems, 2024",
    paperLink: "https://example.com/ai-safety",
    bibtex: `@article{aiiot2024,
      title={Enhancing AI Safety in IoT Systems},
      author={Green, Alice and Rampazzi, Sara},
      journal={IEEE Transactions on IoT Systems},
      year={2024}
    }`,
    award: "Best IoT Research Award",
  },
  {
    year: 2024,
    title: "Enhancing AI Safety in IoT Systems",
    authors: "Alice Green, Sara Rampazzi",
    conference: "In IEEE Transactions on IoT Systems, 2024",
    paperLink: "https://example.com/ai-safety",
    bibtex: `@article{aiiot2024,
      title={Enhancing AI Safety in IoT Systems},
      author={Green, Alice and Rampazzi, Sara},
      journal={IEEE Transactions on IoT Systems},
      year={2024}
    }`,
  },
  {
    year: 2024,
    title: "Enhancing AI Safety in IoT Systems",
    authors: "Alice Green, Sara Rampazzi",
    conference: "In IEEE Transactions on IoT Systems, 2024",
    paperLink: "https://example.com/ai-safety",
    bibtex: `@article{aiiot2024,
      title={Enhancing AI Safety in IoT Systems},
      author={Green, Alice and Rampazzi, Sara},
      journal={IEEE Transactions on IoT Systems},
      year={2024}
    }`,
  },
  // Adding more papers for 2024, 2023, and 2022
  {
    year: 2023,
    title:
      "Deep Note: Can Acoustic Interference Damage the Availability of Hard Disk Storage?",
    authors: "Jennifer Sheldon, Sara Rampazzi",
    conference: "In Proceedings of ACM Storage Systems, 2023",
    paperLink: "https://example.com/deepnote-paper",
    bibtex: `@inproceedings{deepnote2023,
      title={Deep Note: Acoustic Interference Damage},
      author={Sheldon, Jennifer and Rampazzi, Sara},
      booktitle={ACM Storage Systems},
      year={2023}
    }`,
  },
  {
    year: 2023,
    title:
      "Deep Note: Can Acoustic Interference Damage the Availability of Hard Disk Storage?",
    authors: "Jennifer Sheldon, Sara Rampazzi",
    conference: "In Proceedings of ACM Storage Systems, 2023",
    paperLink: "https://example.com/deepnote-paper",
    bibtex: `@inproceedings{deepnote2023,
      title={Deep Note: Acoustic Interference Damage},
      author={Sheldon, Jennifer and Rampazzi, Sara},
      booktitle={ACM Storage Systems},
      year={2023}
    }`,
  },
  {
    year: 2023,
    title:
      "Deep Note: Can Acoustic Interference Damage the Availability of Hard Disk Storage?",
    authors: "Jennifer Sheldon, Sara Rampazzi",
    conference: "In Proceedings of ACM Storage Systems, 2023",
    paperLink: "https://example.com/deepnote-paper",
    bibtex: `@inproceedings{deepnote2023,
      title={Deep Note: Acoustic Interference Damage},
      author={Sheldon, Jennifer and Rampazzi, Sara},
      booktitle={ACM Storage Systems},
      year={2023}
    }`,
  },
  {
    year: 2022,
    title: "Shimware: Toward Practical Security Retrofitting",
    authors: "Eric Gustafson, Sara Rampazzi, Kevin Fu",
    conference: "In Research in Attacks, Intrusions, and Defenses, 2022",
    paperLink: "https://example.com/shimware",
    bibtex: `@inproceedings{shimware2022,
      title={Shimware: Toward Practical Security Retrofitting},
      author={Gustafson, Eric and Rampazzi, Sara and Fu, Kevin},
      booktitle={Research in Attacks, Intrusions, and Defenses},
      year={2022}
    }`,
  },
  {
    year: 2022,
    title: "Shimware: Toward Practical Security Retrofitting",
    authors: "Eric Gustafson, Sara Rampazzi, Kevin Fu",
    conference: "In Research in Attacks, Intrusions, and Defenses, 2022",
    paperLink: "https://example.com/shimware",
    bibtex: `@inproceedings{shimware2022,
      title={Shimware: Toward Practical Security Retrofitting},
      author={Gustafson, Eric and Rampazzi, Sara and Fu, Kevin},
      booktitle={Research in Attacks, Intrusions, and Defenses},
      year={2022}
    }`,
  },
];

const PublicationsPage = () => {
  const [activeBibtex, setActiveBibtex] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (bibtex) => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "copied" message after 2 seconds
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
        {[...new Set(publications.map((paper) => paper.year))]
          .sort((a, b) => b - a)
          .map((year) => (
            <div key={year} className="year-section">
              {/* Year Header */}
              <h2 className="year-header">{year}</h2>
              {publications
                .filter((paper) => paper.year === year)
                .map((paper, index) => (
                  <div className="publication-card" key={index}>
                    {paper.award && (
                      <div className="award-sticker">
                        <i className="fas fa-medal"></i>
                        <span className="award-details">{paper.award}</span>
                      </div>
                    )}
                    <h3 className="publication-title">{paper.title}</h3>
                    <p className="publication-authors">
                      {paper.authors.split(", ").map((author, i) => (
                        <span key={i}>
                          {author.includes("Sara Rampazzi") ? (
                            <strong>{author}</strong>
                          ) : (
                            author
                          )}
                          {i < paper.authors.split(", ").length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                    <p className="publication-conference">{paper.conference}</p>
                    <div className="publication-actions">
                      <a
                        href={paper.paperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-paper-btn"
                      >
                        View Paper
                      </a>
                      <button
                        className="bibtex-btn"
                        onClick={() => setActiveBibtex(paper.bibtex)}
                      >
                        View Bibtex
                      </button>
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
