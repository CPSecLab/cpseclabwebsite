import React, { useEffect, useRef } from "react";
import newsItems from "../HomePage/NewsContainer/NewsItemsData";
import "./NewsAwardsPage.css";

const NewsAwardsPage = () => {
  const timelineRef = useRef(null);

  const sortedNewsItems = [...newsItems].sort((a, b) => {
    const dateA = a.date.split("/");
    const dateB = b.date.split("/");

    const dateObjA = new Date(dateA[2], dateA[0] - 1, dateA[1]);
    const dateObjB = new Date(dateB[2], dateB[0] - 1, dateB[1]);

    return dateObjB - dateObjA;
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const timelineItems = timelineRef.current.querySelectorAll(
      ".timeline-item"
    );
    timelineItems.forEach((item) => {
      item.classList.add("fade-in");
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const formatDate = (dateString) => {
    const [month, day, year] = dateString.split("/");
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="news-awards-container">
      <header className="news-header">
        <h1>Lab Chronicle</h1>
      </header>

      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-line"></div>

        {sortedNewsItems.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <time className="timeline-date">{formatDate(item.date)}</time>
            </div>

            <article className="news-award-card">
              <div className="card-media">
                {item.videoLink ? (
                  <iframe
                    src={item.videoLink}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="embedded-video"
                  ></iframe>
                ) : (
                  <img
                    src={item.image || "https://via.placeholder.com/240"}
                    alt={item.title || "News Image"}
                    loading="lazy"
                  />
                )}
              </div>

              <div className="news-card-content">
                <h2 className="news-title">{item.title}</h2>

                <div className="card-actions">
                  <button
                    className="read-more"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    Read More <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAwardsPage;
