import React from 'react';
import './Brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className='ai__brand section__padding'>
      <div className="ai__brand-item">
        <img src={google} alt="google" />
      </div>
      <div className="ai__brand-item">
        <img src={slack} alt="slack" />
      </div>
      <div className="ai__brand-item">
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className="ai__brand-item">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className="ai__brand-item">
        <img src={shopify} alt="shopify"/>
      </div>
    </div>
  )
}

export default Brand;
