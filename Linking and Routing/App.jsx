import React from 'react';
import AboutMe from './AboutMe';
import HomePage from './HomePage';
import {Routes, Route, Link} from 'react-router-dom';

export function App(props) {
  return (
    <div className='App'>
    <nav>
      <Link to="/" className="nav-item">HomePage</Link>
      <Link to="/about-me" className="nav-item">About me</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about-me" element={<AboutMe />}/>
      </Routes>
    </div>
  );
}

// Log to console
console.log('Hello console')
