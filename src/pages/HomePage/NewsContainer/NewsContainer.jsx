import React, { useState, useRef } from "react";
import "./NewsContainer.css";
import newsItems from "./NewsItemsData";

const NewsContainer = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 3;
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (startIndex + itemsPerView < newsItems.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
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
                    <p className="news-title-text">{item.title}</p>
                  </div>
                  <button
                    className="read-more-button"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    Read More <i className="fas fa-external-link-alt"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {newsItems.length > itemsPerView && (
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
      )}
    </section>
  );
};

export default NewsContainer;
