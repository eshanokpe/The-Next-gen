import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import About from './pages/About';
import Faq from './pages/Faq';

function App() {
  return (
    <Router>
      <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
        </Routes>
    
      <Footer />
    </Router>
  );
}

const Contact = () => <h1>Contact Us</h1>;
const Join = () => <h1>Join Us</h1>;

export default App;
