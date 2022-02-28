import React from "react";
import "../style/NewsItem.css";

export default function NewsItem({ title, desc, image, url, date, source }) {
  return (
    <div>
      <div className="card my-2">
        <span className="badge position-absolute top-0 translate-middle badge rounded-pill bg-warning">
          {source}
        </span>

        <img src={image} className="card-img-top" alt="No pic available" />
        <div className="card-body">
          <span className="card-title">{title}</span>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            Published on {new Date(date).toGMTString()}
          </p>
          <button
            className="btn btn-warning"
            onClick={(e) => {
              e.preventDefault();
              window.open(url, "_blank");
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
