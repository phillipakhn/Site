/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Register from './components/Register';
import Jobs from './components/Jobs';
import Apply from './components/Apply';
import { jobs } from './components/JobPosting';

// Now you can use the `jobs` array in your `App.js` file

function App() {
  /*
  //MAYBE REMOVE THIS LATER
  const jobs = [
    {
      title: 'Example title 1',
      description: 'Example desc 1.',
      applicationLink: 'https://google.com'
    },
    {
      title: 'Example title 2',
      description: 'Example desc 2.',
      applicationLink: 'https://google.com'
    },
    // Add more job postings as needed
  ];
   //MAYBE REMOVE THIS LATER
   */

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<Jobs jobs={jobs} />} />
          <Route path="/apply" element={<Apply />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
