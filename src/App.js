import React from 'react';
import './App.css';

import { Blog, Header, Footer, Features, WhatAI, Possibility } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatAI />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
