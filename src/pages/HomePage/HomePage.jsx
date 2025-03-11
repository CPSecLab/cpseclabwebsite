import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import ResearchAreaContainer from "./ResearchAreaContainer/ResearchAreaContainer";
import "./HomePage.css";
import imagesData from "./ImagesData";
import researchAreasData from "../../data/researchAreasData";
import NewsContainer from "./NewsContainer/NewsContainer";
import labLogo from "../../assets/images/cpsec_logo_2-removebg-preview.png";
import aboutImage from "../../assets/images/PXL_20250117_155239501 (1).jpg";

const GOOGLE_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQH3NbRdgO0YGlWcf1kxF_kwE5qKel5P7jXbk1En4mepLXlwvLJswPQzP8aOgEdSIAyHIeRMofmOxYn/pub?output=csv";

const HomePage = () => {
  const [researchAreas, setResearchAreas] = useState([]);

  useEffect(() => {
    const fetchResearchData = async () => {
      try {
        // Fetch CSV data
        const response = await fetch(
          `${GOOGLE_SHEET_URL}&timestamp=${Date.now()}`
        );
        const csvText = await response.text();

        // Parse CSV data
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            console.log("Raw CSV Data:", results.data);

            const researchDataMap = {};

            results.data.forEach((entry) => {
              const researchArea = entry["Research Area"]?.trim();
              const title = entry["Title"]?.trim();
              const paperLink = entry["Paper"]?.trim();
              const projectTitle = entry["Project Title"]?.trim();
              const projectWebsite = entry["Project Website"]?.trim();

              if (!researchArea) return; // Skip rows without a research area

              // Normalize research area key
              const normalizedKey = researchArea
                .trim() // Remove leading/trailing spaces
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
                .replace(/[-\s]+/g, "-"); // Replace spaces and hyphens with a single hyphen

              // Initialize data structure for this research area
              if (!researchDataMap[normalizedKey]) {
                researchDataMap[normalizedKey] = {
                  publications: [],
                  projects: [],
                };
              }

              // Add publication if title and paper link exist
              if (title && paperLink) {
                researchDataMap[normalizedKey].publications.push({
                  title,
                  paperLink,
                });
              }

              // Add project if project title and website exist
              if (projectTitle && projectWebsite) {
                researchDataMap[normalizedKey].projects.push({
                  title: projectTitle,
                  projectWebsite,
                });
              }
            });

            console.log("Processed Research Data Map:", researchDataMap); // Log processed map

            // Map parsed data to research areas
            const mappedResearchAreas = Object.keys(researchAreasData).map(
              (key) => {
                const normalizedKey = key.toLowerCase().replace(/[-\s]+/g, "-");
                console.log(key);
                return {
                  title: researchAreasData[key].name,
                  imageSrc: researchAreasData[key].images?.[0] || "",
                  summary:
                    researchAreasData[key].description ||
                    "Description coming soon.",
                  data: researchDataMap[normalizedKey] || {
                    publications: [],
                    projects: [],
                  },
                };
              }
            );

            console.log("Mapped Research Areas:", mappedResearchAreas); // Log final mapped areas

            setResearchAreas(mappedResearchAreas);
          },
        });
      } catch (error) {
        console.error("Error fetching or parsing Google Sheet data:", error);
      }
    };

    fetchResearchData();
  }, []);

  return (
    <div className="homepage-container">
      {/* Lab Logo */}
      <div className="lab-logo-container">
        <img src={labLogo} alt="CPSEC Lab Logo" className="homepage-lab-logo" />
      </div>

      {/* Carousel Section */}
      <div className="carousel-container">
        <ImageCarousel images={imagesData} />
      </div>

      <section className="homepage-section-container">
        <h2 className="section-heading">About CPSec Lab</h2>
        <div className="about-section">
          <div className="about-text">
            <p>
              The <span className="highlight">Cyber-Physical Security Lab</span>{" "}
              investigates the intricate world of{" "}
              <span className="highlight">
                cyber-physical systems security & privacy
              </span>
              , where the digital and physical realms intersect. We focus on
              safeguarding critical systems and infrastructures, ensuring their
              reliability, trustworthiness, and resiliency against malicious
              threats from the physical world.
            </p>
          </div>
          <div className="about-image-container">
            <img src={aboutImage} alt="CPSEC Lab" className="about-image" />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="homepage-section-container">
        <h2 className="section-heading">Latest News and Updates</h2>
        <NewsContainer />
      </section>

      {/* Research Areas Section */}
      <section className="homepage-section-container">
        <h2 className="section-heading">Research Areas</h2>
        {researchAreas.map((area, index) => (
          <ResearchAreaContainer
            key={index}
            title={area.title}
            imageSrc={area.imageSrc}
            summary={area.summary}
            data={area.data}
          />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
