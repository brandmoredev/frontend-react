import React from 'react';
import './Possibility.css';
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='ai__possibility section__padding' id='possibility'>
      <div className="ai__possibility__image-container">
        <img src={possibility} alt="" />
      </div>
      <div className="ai__possibility-content">
        <p className='ai__possibility-cta-first'>Request Early Access to Get Started</p>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p className='ai__possibility-content__text'>Step into a realm where the capabilities of GPT-3 transcend imagination. Explore the limitless possibilities as AI takes center stage, reshaping the boundaries of what's achievable.</p>
        <p className='ai__possibility-cta-last'>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility;
