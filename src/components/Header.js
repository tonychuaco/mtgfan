import React from 'react';

import Navbar from './Navbar';
import Hero from './Hero';

import './Header.css';

const Header = () => (
  <header className="Header  shadow">
    <div className="Header-div vh-100" >
    <Navbar />
    <Hero />
    </div>
  </header>  
);

export default Header;
