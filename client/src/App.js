import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return(
    <Router>
      <ul id = "Navbar">
        <li id = "title">Home</li>
        <Link to="/login"><li><a id="login" className ="active" href="#">Login</a></li></Link>
        <Link to="/registration"><li><a id="Register" className ="active" href="#">Register</a></li></Link>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="*" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
