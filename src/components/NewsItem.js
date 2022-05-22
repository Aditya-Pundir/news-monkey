import React from "react";
import "../style/NewsItem.css";

export default function NewsItem({ title, desc, image, url, date, source }) {
  return (
    <div className="card-row">
      <div className="card my-2">
        <img src={image} className="card-img" alt="No pic available" />
        <div className="card-body">
          <span className="card-title">{title}</span>
          <p className="card-desc">{desc}</p>
          <p className="card-published">
            Published on {new Date(date).toGMTString()}
          </p>
          <div className="lastContainer">
            <button
              className="btn-read btn btn-warning"
              onClick={(e) => {
                e.preventDefault();
                window.open(url, "_blank");
              }}
            >
              Read More
            </button>
            <span className="badge">Source: {source}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
