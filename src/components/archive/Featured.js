import React from 'react';

import './Featured.css';

const Featured = () => {
  
  const content = [
    {
      "key": 1,
      "id": "magic-card-creature",
      "title": "Summon Creatures",
    }, {
      "key": 2,
      "id": "magic-card-sorcery",
      "title": "Spells & Sorceries",
    }, {
      "key": 3,
      "id": "magic-card-artifact",
      "title": "Ancient Artifacts",
    }
  ];

  const artworks = content.map((item) => {
    
    const { key, id, title } = item;

    const index = content.indexOf(item);

    return (
      <div key={key} className={`carousel-item ${(index === 0) ? "active" : ""}`}>
        {/* <img className="d-block w-100" src={source} alt={title} /> */}
        <div className={`Featured-${id} vh-100`}>
          <h3 className="carousel-caption">{title}</h3>
        </div>
      </div>
    )
  });

  return (
    <section className="Featured">
      <div id="artwork-gallery" className="carousel slide carousel-fade" data-ride="false" data-interval="false">
        <div className="carousel-inner">
          {artworks}
        </div>
        <ol className="carousel-indicators">
          <li data-target="#artwork-gallery" data-slide-to="0" className="active"></li>
          <li data-target="#artwork-gallery" data-slide-to="1"></li>
          <li data-target="#artwork-gallery" data-slide-to="2"></li>
        </ol>
      </div>  
    </section>
  );  
  
};

export default Featured;