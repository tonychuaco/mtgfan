import React from 'react';

import AboutCards from './AboutCards';
import AboutMtg from './AboutMtg';

import './About.css';

const About = () => {

  const content = [
    {
      "id": 1,
      "title": "Light Novels",
      "description": "Follow the series and find your next epic, galactic empire, sword and sorcery.",
      "action": "Read The Books",
      "actionURL": "https://magic.wizards.com/en/story?source=MX_Nav2020",
      "actionTitle": "Magic The Gathering Story Archive",
    }, {
      "id": 2,
      "title": "Trading Cards",
      "description": "Browse the latest sets or the classics for fans to collect, trade, and battle with.",
      "action": "Collect The Cards",
      "actionURL": "https://magic.wizards.com/en/products?source=MX_Nav2020",
      "actionTitle": "Magic The Gathering Card Sets",
    }, {
      "id": 3,
      "title": "Live Esports",
      "description": "Tune in to the competition live with millions of other fans from around the world.",
      "action": "Watch The Games",
      "actionURL": "https://www.magic.gg/?source=MX_Nav2020",
      "actionTitle": "Magic The Gathering Live Channel",
    }
    // }, {
    //   "id": 4,
    //   "title": "Video Games",
    //   "description": "Play on your device and become a part of one of the largest gaming communities.",
    //   "action": "Download The Apps",
    //   "actionURL": "https://magic.wizards.com/en",
    //   "actionTitle": "Magic The Gathering Official Website",
    // }
  ];  
  
  return (

    <section className="About jumbotron jumbotron-fluid bg-transparent"> 
      <div className="container-sm vh-100 col-xl-8 d-flex flex-column justify-content-center">
        <div className="d-flex">
          <AboutCards content={content} />
        </div>
      </div>
      <div className="container-sm vh-100 col-xl-8 d-flex flex-column justify-content-end">
        <AboutMtg />
      </div>
    </section>
  );

}

export default About;