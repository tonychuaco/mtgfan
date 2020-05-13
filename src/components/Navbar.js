import React from 'react';

const Navbar = () => (
  <nav className="Navbar navbar navbar-expand-sm navbar-dark bg-dark text-light fixed-top shadow border-bottom border-danger">
    <div className="container">
      <button 
        className="navbar-toggler"
        type="button" 
        data-toggle="collapse"
        data-target="#main-menu"
        aria-controls="main-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="main-menu">
        <div className="navbar-nav ml-auto font-weight-light text-uppercase">
          <small><a href="#home" title="Home" className="nav-item nav-link">Home</a></small>
          <small><a href="#about" title="About" className="nav-item nav-link">About</a></small>
          <small><a href="#collection" title="Collection" className="nav-item nav-link">Collection</a></small>
          <small><a href="#gallery" title="Gallery" className="nav-item nav-link">Gallery</a></small>
          <small><a href="#reference" title="Links" className="nav-item nav-link">Links</a></small>
        </div>
      </div>      
    </div>
  </nav>
);

export default Navbar;