import React from 'react';
import './Possibility.css';
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='ai__possibility section__padding'>
      <div className="ai__possibility__image-container">
        <img src={possibility} alt="" />
      </div>
      <div className="ai__possibility-content">
        <p className='ai__possibility-cta-first'>Request Early Access to Get Started</p>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p className='ai__possibility-content__text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p className='ai__possibility-cta-last'>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility;
