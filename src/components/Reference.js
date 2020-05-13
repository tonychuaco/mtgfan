import React from 'react';
import { faBookOpen, faTv, faGamepad, faHatWizard } from '@fortawesome/free-solid-svg-icons';

import Cards from './Cards';

const Reference = () => {
  
  const content = [
    {
      "id": 1,
      "title": "Light Novels",
      "description": "Follow the series and find your next epic, galactic empire, sword and sorcery.",
      "action": "Read The Books",
      "actionURL": "https://magic.wizards.com/en/story?source=MX_Nav2020",
      "actionTitle": "Magic The Gathering Story Archive",
      "icon": faBookOpen
    }, {
      "id": 2,
      "title": "Trading Cards",
      "description": "Browse the latest sets or the classics for fans to collect, trade, and battle with.",
      "action": "Collect The Cards",
      "actionURL": "https://magic.wizards.com/en/products?source=MX_Nav2020",
      "actionTitle": "Magic The Gathering Card Sets",
      "icon": faHatWizard
    }, {
      "id": 3,
      "title": "Live Esports",
      "description": "Tune in to the competition with millions of other fans from around the world.",
      "action": "Watch The Games",
      "actionURL": "https://www.magic.gg/?source=MX_Nav2020",
      "actionTitle": "Magic The Gathering Live Channel",
      "icon": faTv
    }, {
      "id": 4,
      "title": "Video Games",
      "description": "Play on your device and become a part of one of the largest gaming communities.",
      "action": "Get The Apps",
      "actionURL": "https://magic.wizards.com/en",
      "actionTitle": "Magic The Gathering Official Website",
      "icon": faGamepad
    }
  ];

  return (
    <section id="reference" className="container min-vh-75 mb-4 d-flex flex-column justify-content-around">
      <div className="d-flex flex-column align-items-center mb-4">
        <h2 className="display-4 text-muted">Links to <span className="text-light">MTG Universe</span></h2>
        <p className="lead">Get started and learn more about the fascinating stories behind them.</p>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4">
        <Cards content={content} />
      </div>
    </section>
  );

}

export default Reference;