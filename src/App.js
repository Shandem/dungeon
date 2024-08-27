// App.js
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Nav from '../src/Component /Nav'

const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
