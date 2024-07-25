import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Login from './components/Login';  
import Signup from './components/Signup';
import Livingroom from './components/Livingroom';
import Bedroom from './components/Bedroom';
import Kitchen from './components/Kitchen';
import "./App.css"
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/login" element={<Login />} />     
        <Route path="/signup" element={<Signup />} />    {/* Signup route */}
         <Route path="/livingroom" element={<Livingroom/>}/> 
         <Route path="/kitchen" element={<Kitchen/>}/> 
         <Route path="/bedroom" element={<Bedroom/>}/> 
      </Routes>


    </Router>
  );
};

export default App;
