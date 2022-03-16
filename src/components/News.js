import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import "../style/News.css";
import loader from "../images/Loader.gif";

export default function News({ category, country }) {
  const [news, setNews] = useState();
  const APIkey = process.env.REACT_APP_API_KEY;
  const url = `https://gnews.io/api/v4/top-headlines?country=${country}&lang=en&max=100&topic=${category}&token=${APIkey}`;

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(url);
      let result = await response.json();
      setNews(result.articles);
      document.title = `News-Monkey | ${category.toUpperCase()}`;
    };
    fetchData();
  }, [category, url]);
  return news ? (
    <div className="container my-3">
      <h3 className="text-center">Top Headlines - {category.toUpperCase()}</h3>
      <div className="row">
        {news.map((element) => {
          let descDot = false;
          let desc = "";
          if (element.description !== null) {
            if (element.description.length >= 70) {
              desc = element.description.slice(0, 70);
              descDot = true;
            } else {
              desc = element.description;
            }
          }

          return descDot ? (
            <div key={element.url} className="col-md-4 newsItem">
              <NewsItem
                title={element.title}
                desc={desc + "..."}
                image={element.image}
                url={element.url}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ) : (
            <div key={element.url} className="col-md-4 newsItem">
              <NewsItem
                title={element.title}
                desc={element.description}
                image={element.image}
                url={element.url}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div id="loader">
      <img src={loader} alt="Loading..." />
    </div>
  );
}
