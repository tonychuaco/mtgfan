import React from 'react';

import artwork from './../images/artwork.jpg';

const AboutCards = ({ content }) => {

  const cards = content.map(({ id, title, description, action, actionURL, actionTitle, icon }) => (
    <article className="card bg-transparent" key={id}>
      <img className="card-img-top" src={artwork} alt="##" />
      <div className="card-body card-img-overlay text-light">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <a className="card-link" href={actionURL} title={actionTitle}>{action}</a>
      </div>
    </article>
  ));

  return <>{cards}</>;
};

export default AboutCards;