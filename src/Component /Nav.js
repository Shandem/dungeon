import React, { Component } from 'react';
import "Nav"
import { BrowserRouter as Router } from 'react-router-dom';

const Nav = () => {
    return (
        <Router>
        <div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </nav>
        </div>
      </Router>
    );
}

export default Nav;
