import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import img from '../asset/NOT.jpg';
const NewsCard1 = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/news');
        setArticles(response.data);
      } catch (error) {
        setError('Error fetching news articles. Please try again later.');
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
    <h2 className='head'>Latest News</h2>
    <div className="container">
      {error && <p>{error}</p>}
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="post">
            <div className="header_post">
            <img src={article.urlToImage || ''} alt={article.title} onError={(e) => {
    e.target.src = img;
}} />

</div>

              <div className="body_post">
                <div className="post_content">
                  <h1>{article.title}</h1>
                  <p>{article.description}</p>
                  <div className="container_infos">
                    <div className="postedBy">
                      <span>Source:</span> {article.source.name}
                    </div>
                    <div className="container_tags">
                      <span>Published At:</span> {new Date(article.publishedAt).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => window.open(article.url, "_blank")} className="btn btn-primary read-more">Read More</button>
              <hr className="bold-long-hr" />

            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default NewsCard1;
