import FilterContext from './FilterContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Article.css';
import { v4 as uuidv4 } from 'uuid';

function Article(props) {
  const [articles, setArticles] = useState([]);

  const { categoryFilter } = useContext(FilterContext);

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${categoryFilter}&apiKey=9cf582b06bc74c10a503b4a4f575cc80`)
      .then(response => setArticles(response.data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, [categoryFilter]);
  
console.log(articles)

  const save = (article) => (e) => {
    e.preventDefault();

    const newSaveNewsItem = {
      id: uuidv4(),
      publishedAt:article.publishedAt,
      author: article.author,
      title:article.title,
      url: article.url,
      urlToImage: article.urlToImage,
      description: article.description,
    };

    axios.post(`http://localhost:5002/Article`, newSaveNewsItem)
      .then(response => console.log(response.data))
      .catch(err => console.log(err.response.data));
  };

  return (
    <>
      <div className="row container article mt-5 p-5">
        {articles.map((article, index) => (
          article.urlToImage && article.url ? (
            <div key={index} className="col-md-6 col-lg-4 mb-4">

              <div className="news-block">
                {article.urlToImage && <a href={article.url}><img src={article.urlToImage} alt={article.url} className="news-image" /></a>}
                <h4 className="news-author text-secondary  small">Published at: {article.publishedAt || 'Unknown'}</h4>
                <h2 className="news-author text-info small">Author: {article.author || 'Unknown'}</h2>
                <a className='text-decoration-none' href={article.url}><h2 className="news-title text-dark">{article.title}</h2></a>
                <p className="news-description small text-secondary">{article.description}</p>
                <div className='d-flex gap-2'>
                  <i
                    style={{ cursor: 'pointer', fontSize: '25px' }}
                    className={`fas fa-save text-primary`}
                    onClick={save(article)}
                  />
                </div>
              </div>
            </div>
          ) : null
        ))}
      </div>
    </>
  );
}

export default Article;
