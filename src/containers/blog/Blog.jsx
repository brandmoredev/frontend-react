import React from 'react';
import './Blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='ai__blog section__margin' id='blog'>
      <div className="ai__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="ai__blog-container">
        <div className="ai__blog-container_groupA">
          <Article imgUrl={blog01} date='Jan 01, 2024' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className="ai__blog-container_groupB">
          <Article imgUrl={blog02} date='Jan 01, 2024' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={blog03} date='Jan 01, 2024' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={blog04} date='Jan 01, 2024' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={blog05} date='Jan 01, 2024' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
      </div>
    </div>
  )
}

export default Blog
