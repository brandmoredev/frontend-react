import React from 'react';
import './Feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className='ai__feature'>
      <div className='ai__feature-title'>
        <div></div>
        <h1>{ title }</h1>
      </div>
      <p className='ai__feature-text'>{ text }</p>
    </div>
  )
}

export default Feature;
