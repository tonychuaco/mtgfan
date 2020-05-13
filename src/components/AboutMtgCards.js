import React from 'react';

const AboutMtgCards = ({ content, fxSwap }) => {

  const cards = content.map(({ key, id, title }) => (
    <article 
      id={id} 
      key={key} 
      className="AboutMtg-container d-flex mb-sm-3 justify-content-center align-items-center bg-transparent mb-2 jumbotron p-0"
    >
      <div className={`AboutMtg-${id} AboutMtg-article btn btn-outline-secondary rounded-circle shadow p-0`}>
        <div className="AboutMtg-hover card-body p-4 p-sm-5 rounded-circle"
          data-toggle="modal" data-target="#modalCenter" onClick={() => fxSwap(key, title)}
        >
        </div>
      </div>
    </article>
  ));

  return <>{cards}</>;
};

export default AboutMtgCards;