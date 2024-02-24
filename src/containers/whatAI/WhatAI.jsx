import React from 'react';
import './WhatAI.css';
import '../../components/feature/Feature.css'
import Feature from '../../components/feature/Feature';

const WhatAI = () => {
  return (
    <div className='ai__whatAI section__margin' id='whatAI'>
      <div className="ai__whatAI-feature">
        <Feature
          title='What is GPT3'
          text='GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art language processing AI model developed by OpenAI. It belongs to the transformer-based models and is the third iteration in the GPT series. GPT-3 is known for its impressive scale, consisting of 175 billion parameters, making it one of the largest language models to date.'
        />
      </div>
      <div className="ai__whatAI-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="ai__whatAI-features__container">
        <Feature
          title='Chatbots'
          text='GPT-3 powers advanced chatbots, enabling dynamic and human-like conversations. With its natural language understanding, it responds contextually, making it ideal for applications like customer support and virtual assistants.'
        />
        <Feature
          title='Knowledgebase'
          text='Unlock a wealth of knowledge with our dedicated Knowledge Base, featuring a curated collection of articles and guides that delve into the intricacies of AI concepts, applications, and best practices. Dive in to enhance your understanding of artificial intelligence.'
        />
        <Feature
          title='Education'
          text='Immerse yourself in our comprehensive educational section, designed to empower learners at every level. From beginner primers to advanced tutorials, explore the world of AI education with curated resources, courses, and insights to foster your knowledge and skills in artificial intelligence.'
        />
      </div>
    </div>
  )
}

export default WhatAI;
