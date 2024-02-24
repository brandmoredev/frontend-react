import React from 'react';
import './Features.css';
import { Feature } from '../../components';

const Features = () => {
  return (
    <div className='ai__features section__padding' id='features'>
      <div className="ai__features-header">
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="ai__features__container">
        <Feature
          title="Creative Project Catalyst"
          text="Unleash boundless creativity with GPT-3 as your project companion. Explore innovative ideas and witness your imagination come to life."
        />
        <Feature
          title="Conversational Intelligence"
          text="Transform interactions with intelligent chatbots powered by GPT-3. Elevate conversations to new heights, making them natural, dynamic, and engaging."
        />
        <Feature
          title="Knowledge Amplification in Education"
          text="Revolutionize learning with GPT-3's educational prowess. From beginner primers to advanced insights, amplify your knowledge and skills in artificial intelligence."
        />
        <Feature
          title="Multifaceted Problem-Solving"
          text="Experience GPT-3's diverse applications across industries. From creative brainstorming to innovative problem-solving, witness its impact in pushing boundaries."
        />
      </div>
    </div>
  )
}

export default Features;
