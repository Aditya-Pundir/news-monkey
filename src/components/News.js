import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import "../style/News.css";
import loader from "../images/Loader.gif";

export default function News({ category, country }) {
  const [news, setNews] = useState();
  // const APIkey = process.env.REACT_APP_API_KEY;
  // const APIkey = "a4ea8ffcd4c7f19e313dc04ef9881811";
  // const url = `https://gnews.io/api/v4/top-headlines?country=${country}&lang=en&max=100&topic=${category}&token=${APIkey}`;

  const url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;
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
    <div className="container">
      <h3 className="heading">Top Headlines - {category.toUpperCase()}</h3>
      <div className="grid">
        {news.map((element) => {
          return (
            <NewsItem
              title={element.title}
              desc={element.description}
              image={element.urlToImage}
              url={element.url}
              date={element.publishedAt}
              source={element.source.name}
            />
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
