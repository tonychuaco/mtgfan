import React from 'react';

import './ExploreCards.css';

// import placeholder from './../images/placeholder.png';

const ExploreCards = (props) => {

  const cards = props.cards;

  return (
    cards.map((item) => {

      const { id, name, type, flavor, artist, imageUrl } = item;

      const index = cards.indexOf(item);

      const fxHide = (val) => {if (val === undefined) return "d-none"};

      return (
        <div key={id} className={`ExploreCards-item-content text-light rounded-lg carousel-item ${(index === 0) ? "active" : ""}`}>
          <div className="ExploreCards-div jumbotron mb-0 row  d-flex align-items-around justify-content-center">
            <div className={`ExploreCards-div-image col-12 col-md-4 d-flex justify-content-center mb-4`}>
              <img className="ExploreCards-image rounded-lg img-fluid" src={(imageUrl) ? imageUrl : ""} alt={name} />
            </div>
            <div className={`w-sm-50 lead col-12 col-md-8`}>
              <h3 className={fxHide(name)}>{name}</h3>
              <dl className="d-flex flex-column align-items-between">
                <dt className={fxHide(type)}>Type:</dt><dd>{type}</dd>
                <dt className={fxHide(flavor)}>From the Book:</dt><dd>{flavor}</dd>
                <dt className={fxHide(artist)}>Artist:</dt><dd>{artist}</dd>
              </dl>
            </div>
          </div>
        </div>
      )
    })
  );

};

export default ExploreCards;