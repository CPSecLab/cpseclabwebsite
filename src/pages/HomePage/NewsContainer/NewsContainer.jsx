import React from "react";
import "./NewsContainer.css";
import newsItems from "./NewsItemsData";

const NewsContainer = () => {
  return (
    <div className="news-container">
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="news-card"
            onClick={() => window.open(item.link, "_blank")}
          >
            <img src={item.image} alt={item.title} className="news-image" />
            <p className="news-title-text">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsContainer;
