import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Cards = ({ content }) => {

  const cards = content.map(({ id, title, description, action, actionURL, actionTitle, icon }) => (
    <article key={id} className="col p-0">
      <div className="card bg-transparent col-12" >
        <div className="card-header">
          <div className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon className="text-muted" icon={icon} size="3x" />
          </div>
        </div>
        <div className="card-body">
          <h3 className="card-title font-weight-light text-center">{title}</h3>
          <p className="card-text font-weight-light">{description}</p>
        <div className="card-footer p-0 d-flex justify-content-center">
          <a className="card-link btn btn-outline-secondary rounded-0 text-uppercase font-weight-light" href={actionURL} title={actionTitle}>{action} <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
        </div>
      </div>
    </div>
    </article>
  ));

  return <>{cards}</>;
};

export default Cards;