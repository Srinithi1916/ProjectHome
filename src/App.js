import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
// import LivingRoom from './components/LivingRoom';
import Bedroom from './components/Bedroom';
import Kitchen from './components/Kitchen';
import Bathroom from './components/Bathroom';
import Poojaroom from './components/Poojaroom';
import Balcony from './components/Balcony';
import Diningroom from './components/Diningroom';
import Wardrobe from './components/Wardrobe';
import Flooring from './components/Flooring';
import Office from './components/Office';
import Crockery from './components/Crockery';
import Google from './components/Google';
import Model from './components/Model';
import Cottage from './components/Cottage';
import Brickfacade from './components/Brickfacade';
import Beachhouse from './components/Beachhouse';
import Traditional from './components/Traditional';
import Simple from './components/Simple';
import Farmhouse from './components/Farmhouse';
import Trend from './components/Trend';
import Chettinad from './components/Chettinad';
import Craftsman from './components/Craftsman';
import Granites from './components/Granites';
import Marble from './components/Marble';
import Ceramics from './components/Ceramics';
import Wooden from './components/Wooden';
import Pvcdoor from './components/Pvcdoor';
import Glassdoor from './components/Glassdoor';
import Slidingdoor from './components/Slidingdoor';
import Aluminiumdoor from './components/Aluminiumdoor';
import Steeldoor from './components/Steeldoor';
import Rolling from './components/Rolling';
import Pendant from './components/Pendant';
import Ambient from './components/Ambient';
import Cieling from './components/Cieling';
import Quote from './components/Quote';
import Playwood from './components/Playwood';
import Fixedlight from './components/Fixedlight';
import './App.css';

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
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/livingroom" element={<LivingRoom />} /> */}
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/bathroom" element={<Bathroom />} />
        <Route path="/poojaroom" element={<Poojaroom />} />
        <Route path="/balcony" element={<Balcony />} />
        <Route path="/diningroom" element={<Diningroom />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/flooring" element={<Flooring />} />
        <Route path="/office" element={<Office />} />
        <Route path="/crockery" element={<Crockery />} />
        <Route path="/google" element={<Google />} />
        <Route path="/model" element={<Model />} />
        <Route path="/cottage" element={<Cottage />} />
        <Route path="/brickfacade" element={<Brickfacade />} />
        <Route path="/beachhouse" element={<Beachhouse />} />
        <Route path="/traditional" element={<Traditional />} />
        <Route path="/simple" element={<Simple />} />
        <Route path="/farmhouse" element={<Farmhouse />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/chettinad" element={<Chettinad />} />
        <Route path="/craftsman" element={<Craftsman />} />
        <Route path="/granites" element={<Granites />} />
        <Route path="/marble" element={<Marble />} />
        <Route path="/ceramics" element={<Ceramics />} />
        <Route path="/wooden" element={<Wooden />} />
        <Route path="/pvcdoor" element={<Pvcdoor />} />
        <Route path="/glassdoor" element={<Glassdoor />} />
        <Route path="/slidingdoor" element={<Slidingdoor />} />
        <Route path="/aluminiumdoor" element={<Aluminiumdoor />} />
        <Route path="/steeldoor" element={<Steeldoor />} />
        <Route path="/rolling" element={<Rolling />} />
        <Route path="/pendant" element={<Pendant />} />
        <Route path="/ambient" element={<Ambient />} />
        <Route path="/cieling" element={<Cieling />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/playwood" element={<Playwood />} />
        <Route path="/fixedlight" element={<Fixedlight />} />
      </Routes>
    </Router>
  );
};

export default App;