import React from 'react';

import ExploreCards from './ExploreCards';

import './Explore.css';

const Explore = ({ cards }) => (

  <section id="gallery" className="Explore jumbotron jumbotron-fluid bg-transparent pb-0" data-aos="fade-left" data-aos-easing data-aos-duration="1000"  data-aos-once="true">
    <div className="d-flex justify-content-center">
      <div className="Explore-left-frame  rounded-right d-none d-lg-block col-lg-2 shadow"></div>
      <div id="slideshow-gallery" className="carousel slide col-12 col-lg-8 " data-ride="false" data-interval="false">
        <div className="carousel-inner mb-xl-0 shadow">
          <ExploreCards cards={cards} />
        </div>
        <a className="carousel-control-prev" href="#slideshow-gallery" role="button" data-slide="prev">
          <i className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#slideshow-gallery" role="button" data-slide="next">
          <i className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="Explore-right-frame rounded-left d-none d-lg-block col-lg-2 shadow"></div>
    </div>
  </section>

);

export default Explore;