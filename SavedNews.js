// SavedNews.js
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '././SavedNews/SavedNews.css';

function SavedNews() {
  const [myNews,setMyNews] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5002/Article`)
      .then(response => setMyNews(response.data))
      .catch(error => console.error('Error fetching news:', error));
      console.log(myNews)
  }, [myNews]);

const supprimer = (article)=>(e)=>{
  e.preventDefault();
  
  axios.delete(`http://localhost:5002/Article/${article.id}`)
  .then(response =>{
    setMyNews(prevMyNews => prevMyNews.filter(item => item.id !== article.id));

  } )
  .catch(error => console.error("Error deleting news: ",error))
}
  return (
    <>
      <div className="row container saved-articles mt-5 p-5">
        {myNews.map((article, index) => (
          article.urlToImage !== "" && article.url && (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="saved-news-block">
                <a href={article.url}><img src={article.urlToImage} alt={article.url} className="news-image mb-3" /></a>
                <h4 className="news-author text-secondary  small">Published at: {article.publishedAt || 'Unknown'}</h4>
                <h2 className="news-author text-info small">Author: {article.author || 'Unknown'}</h2>
                <a className='text-decoration-none' href={article.url}><h2 className="news-title text-dark">{article.title}</h2></a>
                <p className="news-description small text-secondary">{article.description}</p>
                <div className='d-flex gap-2'>
                 
                  <i
                    style={{ cursor: 'pointer', fontSize: '25px' }}
                    className={`fas fa-close text-danger`}
                    onClick={supprimer(article)}
                  />
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </>
  );
}

export default SavedNews;
