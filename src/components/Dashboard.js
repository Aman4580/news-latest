import React, { useState, useEffect } from 'react';
import axios from 'axios';// CSS file import

function Dashboard() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-02-29&sortBy=publishedAt&apiKey=077571bb6d144e468cb28570390220d5');
        setNews(response.data.articles);
        console.log(response)
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container dashboard-container"> {/* Add news-container and dashboard-container classes */}
      {news.map((article, index) => (
        <div className="news-card" key={index}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <h3>{article.title}</h3>
          </a>
          <p>{article.description}</p>
          <img src={article.urlToImage} alt={article.title} />
          <p>Published At: {article.publishedAt}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
