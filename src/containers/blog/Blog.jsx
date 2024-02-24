import React from 'react';
import './Blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const blogs = [
  {
    date: 'Jan 01, 2024',
    title: "Beyond Code: Unveiling the Magic of GPT-3 in Creative Expression",
    imageUrl: blog02
  },
  {
    date: 'Jan 01, 2024',
    title: "Chatbots Redefined: The Power of GPT-3 in Conversational Intelligence",
    imageUrl: blog03
  },
  {
    date: 'Jan 01, 2024',
    title: "AI Education Revolution: How GPT-3 is Transforming Learning Experiences",
    imageUrl: blog04
  },
  {
    date: 'Jan 01, 2024',
    title: "Innovation Unleashed: GPT-3's Impact Across Industries and Beyond",
    imageUrl: blog05
  }
]

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
          { blogs.map((blog, index) => {
            return (
              <Article key={index} imgUrl={blog.imageUrl} date={blog.date} title={blog.title} /> 
            )
          })}
         </div>
      </div>
    </div>
  )
}

export default Blog
