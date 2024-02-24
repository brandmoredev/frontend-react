import React from 'react';
import './Article.css'


const Article = ( { imgUrl, date, title }) => {
  return (
    <div className='ai__blog-container_article'>
      <div className="ai__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="ai__blog-container_article-content">
        <div>
          <p className="ai__blog-container_article-content-date">{date}</p>
          <h3>{title}</h3>
        </div>
        <p className="ai__blog-container_article-content-link">Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
