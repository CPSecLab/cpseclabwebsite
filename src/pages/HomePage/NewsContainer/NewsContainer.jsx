import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NewsContainer.css";
import newsItems from "../../../data/NewsItemsData";

const NewsContainer = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const carouselRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerView(2); // Show 2 items on mobile
      } else if (window.innerWidth <= 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    // Run once on mount
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerView < newsItems.length) {
      setStartIndex((prev) => prev + itemsPerView); 
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => Math.max(0, prev - itemsPerView)); 
    }
  };

  return (
    <section className="news-section">
      <div className="news-container">
        <div className="news-viewport" ref={carouselRef}>
          <div
            className="news-carousel"
            style={{
              transform: `translateX(-${startIndex * (100 / itemsPerView)}%)`,
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {newsItems.map((item, index) => (
              <div key={index} className="news-card-wrapper">
                <div className="news-card">
                  <div className="card-image-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="news-image"
                    />
                  </div>
                  <div className="card-content">
                    <p className="news-title-text">{item.excerpt}</p>
                  </div>
                  <button
                    className="read-more-button"
                    onClick={() => navigate("/news-awards")}
                  >
                    Read More <i className="fas fa-external-link-alt"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Always display navigation controls*/}
      <div className="navigation-controls">
        <button
          className={`nav-arrow ${startIndex === 0 ? "disabled" : ""}`}
          onClick={handlePrev}
          disabled={startIndex === 0}
          aria-label="Previous news items"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className={`nav-arrow ${
            startIndex + itemsPerView >= newsItems.length ? "disabled" : ""
          }`}
          onClick={handleNext}
          disabled={startIndex + itemsPerView >= newsItems.length}
          aria-label="Next news items"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default NewsContainer;
