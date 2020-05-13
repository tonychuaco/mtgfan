import React from 'react';

import './Carousel.css';

const Carousel = () => {

  const data = [
    {
      "id": 1,
      "title": "Magic The Gathering Video 1",
      "source": "https://www.youtube.com/embed/Ex4ClzZ3oBM?start=6&controls=0",
    }, {
      "id": 2,
      "title": "Magic The Gathering Video 2",
      "source": "https://www.youtube.com/embed/hhj7mx1wfGM?controls=0",
    }, {
      "id": 3,
      "title": "Magic The Gathering Video 3",
      "source": "https://www.youtube.com/embed/OOzNb5Bqzwg?controls=0",
    }
  ];

  const videos = data.map((item) => {
    
    const { id, title, source } = item;

    const index = data.indexOf(item);

    return (
      <div key={id} className={`carousel-item ${(index === 0) ? "active" : ""}`}>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title={title} src={source}></iframe>
        </div>
      </div>
    )
  });

  return (
    <section className="Carousel">
      <div id="video-gallery" className="carousel slide" data-ride="false" data-interval="false">
        <div className="carousel-inner">
          {videos}
        </div>
        <a className="carousel-control-prev" href="#video-gallery" role="button" data-slide="prev">
          <i className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#video-gallery" role="button" data-slide="next">
          <i className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>  
    </section>
  );
}

export default Carousel;