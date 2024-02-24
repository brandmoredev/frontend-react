import React from 'react';
import './Header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='ai__header section__padding' id='home'>
      <div className='ai__header-content'>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Explore the endless possibilities of GPT-3 from OpenAI in our main section. From fostering creativity to empowering education and revolutionizing problem-solving, discover how GPT-3 can build something amazing.</p>

        <div className="ai__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button' className='ai__button-cta'>Get Started</button>
        </div>

        <div className="ai__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="ai__header-image">
        <img src={ai} alt="ai mask" />
      </div>
    </div>
  )
}

export default Header;
