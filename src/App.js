// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Route Controller/Routes';
import './App.scss'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className='navLinks'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </nav>
        <Routes />
      </div>
    </Router>
  );
}

export default App;