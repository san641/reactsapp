import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe'; 
import hobbies from './components/hobbies';
import classNameontact from './components/contact';

function App() {
  /*const [name, setName] = useState('Sanskruti'); */

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Portfolio</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">About Me</Link></li> 
              <li><Link to="/hobbies">Hobbies</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<AboutMe name={sanskruti} />} />
            <Route path="/hobbies" element={<hobbies />} /> 
            <Route path="/contact" element={<contact />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
