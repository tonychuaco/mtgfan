import React from 'react';

import AboutMtgCards from './AboutMtgCards';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AboutMtg.css';

const AboutMtg = ({ fxSwap }) => {

  const content = [
    {
      "title": "Guilds of Ravnica",
    }, {
      "title": "Core Set 2019",
    }, {
      "title": "Dominaria",
    }, {
      "title": "Rivals of Ixalan",
    }, {
      "title": "Ixalan",
    }, {
      "title": "Hour of Devastation",
    }, {
      "title": "Amonkhet",
    }, {
      "title": "Aether Revolt",
    }, {
      "title": "Kaladesh",
    }, {
      "title": "Eldritch Moon",
    }, {
      "title": "Shadows over Innistrad",
    }, {
      "title": "Oath of the Gatewatch",
    }, {
      "title": "Battle For Zendikar",
    }, {
      "title": "Magic Origins",
    }, {
      "title": "Fate Reforged",
    }, {
      "title": "Khans of Tarkir",
    }, {
      "title": "Magic 2015 Core Set",
    }, {
      "title": "Journey into Nyx",
    }, {
      "title": "Born of the Gods",
    }, {
      "title": "Theros",
    }
  ];  

  for (const i in content) {
    content[i].key = i;
    content[i].id = `magic-set-${content[i].title.replace(/\s+/g, '-').toLowerCase()}`;
  }
  
  return (

    <section id="collection" className="AboutMtg container-fluid d-flex flex-column align-items-center mb-sm-5">
      <div className="row px-sm-5 px-lg-0 col-lg-10 col-xl-7 px-0 jumbotron bg-transparent d-flex flex-column pb-0 pb-sm-auto mb-0 mb-sm-auto align-items-center">
        <h2 className="display-4 mb-sm-5 text-capitalize" data-aos="fade-down" data-aos-easing data-aos-duration="1000"  data-aos-once="true">Browse  <span className="text-muted">The Collection </span></h2>
        <p className="lead mb-sm-5" data-aos="fade-down" data-aos-easing data-aos-duration="1000"  data-aos-once="true">Grouped into five different colors, each color signifies an ideological faction, whose culture defines the flavor and gameplay of its cards, and its relations with the other colors. Blue color embodies the concepts of logic and knowledge, while red symbolizes impulse and chaos. Green manifests the principles of instinct and interdependence, while black represents parasitism and amorality. White epitomizes morality and order. Each sets feature a thematic story and unique game skills.</p>
      </div>
      <div className="container  px-md-5 col-12 col-sm-10 px-lg-0 d-flex row col-lg-5 row-cols-4 mb-5" data-aos="fade-down" data-aos-easing data-aos-duration="1000"  data-aos-once="true">
        <AboutMtgCards content={content} fxSwap={fxSwap} />
      </div>
      <a href="https://magic.wizards.com/en/products?source=MX_Nav2020" className="btn btn-outline-secondary text-uppercase btn-block col-8 col-sm-6 col-xl-4 rounded-0 font-weight-light" data-aos="fade-down" data-aos-easing data-aos-duration="1000"  data-aos-once="true">Learn More <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
    </section>
  );

}

export default AboutMtg;